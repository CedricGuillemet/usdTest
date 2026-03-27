import {
  PBRMaterial, Color3, Texture, Scene, Constants,
} from '@babylonjs/core';
import type { BabylonRenderDelegate } from './BabylonRenderDelegate';

// USD wrap modes → Babylon.js texture addressing modes
const WRAP_MAP: Record<string, number> = {
  'repeat': Constants.TEXTURE_WRAP_ADDRESSMODE,
  'clamp': Constants.TEXTURE_CLAMP_ADDRESSMODE,
  'mirror': Constants.TEXTURE_MIRROR_ADDRESSMODE,
};

/**
 * Maps USD Preview Surface texture slots to Babylon PBR properties.
 * Each entry: [babylonProperty, needsLinearColorSpace, defaultChannelSource]
 */
const TEXTURE_SLOT_MAP: Record<string, {
  bjsProp: string;
  linear: boolean;
}> = {
  'diffuseColor': { bjsProp: 'albedoTexture', linear: false },
  'emissiveColor': { bjsProp: 'emissiveTexture', linear: false },
  'roughness': { bjsProp: 'microSurfaceTexture', linear: true },
  'metallic': { bjsProp: 'metallicTexture', linear: true },
  'normal': { bjsProp: 'bumpTexture', linear: true },
  'occlusion': { bjsProp: 'ambientTexture', linear: true },
  'opacity': { bjsProp: 'opacityTexture', linear: false },
  'clearcoat': { bjsProp: 'clearCoat.texture', linear: true },
  'clearcoatRoughness': { bjsProp: 'clearCoat.textureRoughness', linear: true },
};

/** USD Preview Surface scalar/color properties → Babylon PBR properties */
const PROPERTY_MAP: Record<string, string> = {
  'diffuseColor': 'albedoColor',
  'emissiveColor': 'emissiveColor',
  'roughness': 'roughness',
  'metallic': 'metallic',
  'opacity': 'alpha',
  'ior': 'indexOfRefraction',
  'opacityThreshold': 'alphaCutOff',
};

/**
 * Swizzle image pixel data so that a source channel ends up in the expected
 * target channel for Babylon's PBR material.
 *
 * For example, if USD says "use the R channel for roughness" but Babylon
 * expects roughness in the G channel of a micro-surface texture, we remap.
 */
function swizzleImageData(
  imageData: ImageData,
  sourceChannel: string,
  targetChannel: string,
): void {
  if (sourceChannel === targetChannel) return;

  const chIdx: Record<string, number> = { r: 0, g: 1, b: 2, a: 3 };
  const src = chIdx[sourceChannel] ?? 0;
  const tgt = chIdx[targetChannel] ?? 0;
  if (src === tgt) return;

  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i + tgt] = data[i + src];
  }
}

export class HydraMaterial {
  private _id: string;
  private _delegate: BabylonRenderDelegate;
  private _scene: Scene;
  private _nodes: Record<string, any> = {};

  material: PBRMaterial;

  constructor(id: string, delegate: BabylonRenderDelegate) {
    this._id = id;
    this._delegate = delegate;
    this._scene = delegate.scene;

    let name = id;
    const lastSlash = name.lastIndexOf('/');
    if (lastSlash >= 0) name = name.substring(lastSlash + 1);

    this.material = new PBRMaterial(name, this._scene);
    this.material.backFaceCulling = false;
    this.material.albedoColor = new Color3(0.7, 0.7, 0.7);
    this.material.metallic = 0;
    this.material.roughness = 0.5;
  }

  // ── Hydra callbacks ──────────────────────────────────────────────

  updateNode(_networkId: string, path: string, parameters: any) {
    this._nodes[path] = parameters;
  }

  async updateFinished(_type: string, relationships: any[]) {
    // Wire up the material-node graph edges
    for (const rel of relationships) {
      rel.nodeIn = this._nodes[rel.inputId];
      rel.nodeOut = this._nodes[rel.outputId];
      if (rel.nodeIn) rel.nodeIn[rel.inputName] = rel;
      if (rel.nodeOut) rel.nodeOut[rel.outputName] = rel;
    }

    // Find the main UsdPreviewSurface node (the one with diffuseColor)
    let mainNode: any = undefined;
    for (const node of Object.values(this._nodes)) {
      if (node.diffuseColor !== undefined) {
        mainNode = node;
        break;
      }
    }
    if (!mainNode) return;

    // Recreate the material (Hydra always calls setMaterial on meshes afterwards)
    let name = this._id;
    const lastSlash = name.lastIndexOf('/');
    if (lastSlash >= 0) name = name.substring(lastSlash + 1);

    this.material.dispose();
    this.material = new PBRMaterial(name, this._scene);
    this.material.backFaceCulling = false;

    // ── Assign textures (all in parallel) ────────────────────────
    const texturePromises: Promise<void>[] = [];
    for (const usdSlot of Object.keys(TEXTURE_SLOT_MAP)) {
      texturePromises.push(this.assignTexture(mainNode, usdSlot));
    }
    await Promise.all(texturePromises);

    // ── Post-process: share metallic / roughness maps ────────────
    this.shareMetallicRoughnessMap(mainNode);

    // ── Opacity-from-diffuse-alpha detection ─────────────────────
    this.handleOpacityFromDiffuseAlpha(mainNode);

    // ── Assign scalar / color properties ─────────────────────────
    for (const usdProp of Object.keys(PROPERTY_MAP)) {
      this.assignProperty(mainNode, usdProp);
    }

    // ── Clearcoat scalar properties ──────────────────────────────
    if (mainNode.clearcoat !== undefined && !mainNode.clearcoat?.nodeIn) {
      this.material.clearCoat.isEnabled = true;
      this.material.clearCoat.intensity = mainNode.clearcoat;
    }
    if (mainNode.clearcoatRoughness !== undefined && !mainNode.clearcoatRoughness?.nodeIn) {
      this.material.clearCoat.isEnabled = true;
      this.material.clearCoat.roughness = mainNode.clearcoatRoughness;
    }
  }

  // ── Property assignment ────────────────────────────────────────

  private assignProperty(mainNode: any, usdName: string) {
    const bjsProp = PROPERTY_MAP[usdName];
    if (!bjsProp) return;

    const value = mainNode[usdName];
    if (value === undefined || value?.nodeIn) return; // driven by texture

    if (Array.isArray(value)) {
      (this.material as any)[bjsProp] = Color3.FromArray(value);
    } else {
      (this.material as any)[bjsProp] = value;

      if (usdName === 'opacity' && value < 1.0) {
        this.material.transparencyMode = PBRMaterial.PBRMATERIAL_ALPHABLEND;
        this.material.alpha = value;
      }

      if (usdName === 'opacityThreshold' && value > 0.0) {
        this.material.transparencyMode = PBRMaterial.PBRMATERIAL_ALPHATEST;
        this.material.alphaCutOff = value;
      }
    }
  }

  // ── Texture assignment ─────────────────────────────────────────

  private async assignTexture(mainNode: any, usdSlot: string): Promise<void> {
    const slotInfo = TEXTURE_SLOT_MAP[usdSlot];
    if (!slotInfo) return;

    const slot = mainNode[usdSlot];
    if (!slot || !slot.nodeIn) return;

    const nodeIn = slot.nodeIn;
    if (!nodeIn.resolvedPath) return;

    const filePath = nodeIn.resolvedPath.replace('./', '');
    const channel: string = slot.inputName || 'rgba'; // e.g. 'r', 'g', 'b', 'a', 'rgb', 'rgba'

    try {
      const baseTex = await this._delegate.textureRegistry.getTexture(filePath);
      // Clone so each material slot gets independent settings
      const tex = baseTex.clone();
      tex.name = `${filePath}[${usdSlot}]`;

      // ── Wrap modes ───────────────────────────────────────────
      tex.wrapU = WRAP_MAP[nodeIn.wrapS] ?? Constants.TEXTURE_WRAP_ADDRESSMODE;
      tex.wrapV = WRAP_MAP[nodeIn.wrapT] ?? Constants.TEXTURE_WRAP_ADDRESSMODE;

      // ── UV transforms from st node ───────────────────────────
      if (nodeIn.st?.nodeIn) {
        const uvData = nodeIn.st.nodeIn;
        if (uvData.scale) {
          tex.uScale = uvData.scale[0];
          tex.vScale = uvData.scale[1];
        }
        if (uvData.translation) {
          tex.uOffset = uvData.translation[0];
          tex.vOffset = uvData.translation[1];
        }
        if (uvData.rotation) {
          tex.wAng = -(uvData.rotation / 180) * Math.PI;
        }
      }

      // ── Apply to the correct material property ───────────────
      this.setMaterialTexture(usdSlot, slotInfo.bjsProp, tex, channel);

    } catch (err) {
      console.warn(`[HydraMaterial] Failed to load texture '${filePath}' for '${usdSlot}':`, err);
    }
  }

  /**
   * Assign a loaded texture to the right PBR property, handling channel
   * remapping and engine-specific quirks.
   */
  private setMaterialTexture(
    usdSlot: string,
    bjsProp: string,
    tex: Texture,
    channel: string,
  ): void {
    const mat = this.material;

    // ── Opacity ─────────────────────────────────────────────────
    if (usdSlot === 'opacity') {
      mat.opacityTexture = tex;
      if (mat.alphaCutOff > 0) {
        mat.transparencyMode = PBRMaterial.PBRMATERIAL_ALPHATEST;
      } else {
        mat.transparencyMode = PBRMaterial.PBRMATERIAL_ALPHABLEND;
      }
      return;
    }

    // ── Metallic ────────────────────────────────────────────────
    if (usdSlot === 'metallic') {
      mat.metallicTexture = tex;
      mat.metallic = 1.0;
      // Babylon PBR reads metallic from B channel by default
      mat.useMetallnessFromMetallicTextureBlue = true;
      return;
    }

    // ── Roughness ───────────────────────────────────────────────
    if (usdSlot === 'roughness') {
      // Babylon's microSurfaceTexture is 1-roughness in the alpha channel.
      // Instead, set as metallicTexture and read roughness from G.
      // If metallic texture is already set, we skip (they might share a texture).
      if (!mat.metallicTexture) {
        mat.metallicTexture = tex;
      }
      mat.roughness = 1.0;
      mat.useRoughnessFromMetallicTextureGreen = true;
      mat.useRoughnessFromMetallicTextureAlpha = false;
      return;
    }

    // ── Normal ──────────────────────────────────────────────────
    if (usdSlot === 'normal') {
      mat.bumpTexture = tex;
      mat.invertNormalMapX = false;
      mat.invertNormalMapY = false;
      return;
    }

    // ── Occlusion / AO ──────────────────────────────────────────
    if (usdSlot === 'occlusion') {
      mat.ambientTexture = tex;
      mat.useAmbientOcclusionFromMetallicTextureRed = false;
      mat.ambientTextureStrength = 1.0;
      return;
    }

    // ── Emissive ────────────────────────────────────────────────
    if (usdSlot === 'emissiveColor') {
      mat.emissiveTexture = tex;
      mat.emissiveColor = new Color3(1, 1, 1);
      return;
    }

    // ── Clearcoat ───────────────────────────────────────────────
    if (usdSlot === 'clearcoat') {
      mat.clearCoat.isEnabled = true;
      mat.clearCoat.texture = tex;
      return;
    }
    if (usdSlot === 'clearcoatRoughness') {
      mat.clearCoat.isEnabled = true;
      mat.clearCoat.textureRoughness = tex;
      return;
    }

    // ── Default / diffuseColor ──────────────────────────────────
    if (bjsProp.includes('.')) {
      // Nested property like clearCoat.texture
      const parts = bjsProp.split('.');
      let target: any = mat;
      for (let i = 0; i < parts.length - 1; i++) target = target[parts[i]];
      target[parts[parts.length - 1]] = tex;
    } else {
      (mat as any)[bjsProp] = tex;
    }
  }

  // ── Post-processing helpers ────────────────────────────────────

  /**
   * If only one of metallic/roughness has a texture map, share it for the other.
   * Babylon.js PBR reads both from metallicTexture (B=metallic, G=roughness).
   */
  private shareMetallicRoughnessMap(mainNode: any) {
    const hasRoughnessMap = !!(mainNode.roughness?.nodeIn);
    const hasMetallicMap = !!(mainNode.metallic?.nodeIn);

    if (hasRoughnessMap && !hasMetallicMap && this.material.metallicTexture) {
      // roughness map was set as metallicTexture; metallic is just scalar
      this.material.metallic = mainNode.metallic ?? 0;
      this.material.useMetallnessFromMetallicTextureBlue = false;
    }

    if (hasMetallicMap && !hasRoughnessMap && this.material.metallicTexture) {
      // metallic map was set; roughness is just scalar
      this.material.roughness = mainNode.roughness ?? 0.5;
      this.material.useRoughnessFromMetallicTextureGreen = false;
    }

    if (hasMetallicMap && hasRoughnessMap) {
      // Both have textures — check if they reference the same file
      const metalPath = mainNode.metallic?.nodeIn?.resolvedPath;
      const roughPath = mainNode.roughness?.nodeIn?.resolvedPath;
      if (metalPath && roughPath && metalPath === roughPath) {
        // Same texture: Babylon reads B=metallic, G=roughness from metallicTexture
        this.material.useMetallnessFromMetallicTextureBlue = true;
        this.material.useRoughnessFromMetallicTextureGreen = true;
        this.material.useRoughnessFromMetallicTextureAlpha = false;
        this.material.metallic = 1.0;
        this.material.roughness = 1.0;
      }
    }
  }

  /**
   * If the opacity slot references the same texture file as diffuseColor and
   * uses the 'a' channel, enable hasAlpha on the albedo texture instead of
   * creating a separate opacity texture.
   */
  private handleOpacityFromDiffuseAlpha(mainNode: any) {
    const opacitySlot = mainNode.opacity;
    const diffuseSlot = mainNode.diffuseColor;
    if (!opacitySlot?.nodeIn || !diffuseSlot?.nodeIn) return;

    const opacityFile = opacitySlot.nodeIn.resolvedPath || opacitySlot.nodeIn.file;
    const diffuseFile = diffuseSlot.nodeIn.resolvedPath || diffuseSlot.nodeIn.file;
    const opacityChannel = opacitySlot.inputName;

    if (opacityFile && diffuseFile && opacityFile === diffuseFile && opacityChannel === 'a') {
      // Alpha comes from the diffuse texture's alpha channel
      if (this.material.albedoTexture) {
        this.material.albedoTexture.hasAlpha = true;
        if (this.material.alphaCutOff > 0) {
          this.material.transparencyMode = PBRMaterial.PBRMATERIAL_ALPHATEST;
        } else {
          this.material.transparencyMode = PBRMaterial.PBRMATERIAL_ALPHABLEND;
        }
        // Remove the separate opacity texture if one was set
        if (this.material.opacityTexture) {
          this.material.opacityTexture = null;
        }
      }
    }
  }
}
