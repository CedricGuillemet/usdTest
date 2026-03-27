import { TransformNode, Scene, Texture } from '@babylonjs/core';
import { HydraMesh } from './HydraMesh';
import { HydraMaterial } from './HydraMaterial';

export interface HdWebSyncDriverLike {
  getFile: (path: string, cb: (data: ArrayBufferLike) => void) => void;
}

/**
 * Caches loaded textures by resource path to avoid duplicate loads.
 * Loads image data from the WASM virtual filesystem via the driver's getFile().
 */
export class TextureRegistry {
  private _cache: Record<string, Promise<Texture>> = {};
  private _scene: Scene;
  private _driverAccessor: () => HdWebSyncDriverLike | null;

  constructor(scene: Scene, driverAccessor: () => HdWebSyncDriverLike | null) {
    this._scene = scene;
    this._driverAccessor = driverAccessor;
  }

  private static getMimeType(path: string): string {
    const ext = path.split('.').pop()?.toLowerCase() ?? '';
    const map: Record<string, string> = {
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'bmp': 'image/bmp',
      'webp': 'image/webp',
      'gif': 'image/gif',
      'tga': 'image/tga',
      'exr': 'image/x-exr',
      'hdr': 'image/vnd.radiance',
    };
    return map[ext] || 'image/png';
  }

  getTexture(resourcePath: string): Promise<Texture> {
    if (resourcePath in this._cache) {
      return this._cache[resourcePath];
    }

    const promise = new Promise<Texture>((resolve, reject) => {
      if (!resourcePath) {
        reject(new Error('Empty resource path'));
        return;
      }

      const driver = this._driverAccessor();
      if (!driver) {
        reject(new Error('No driver available for texture loading'));
        return;
      }

      driver.getFile(resourcePath, (loadedFile: ArrayBufferLike) => {
        if (!loadedFile) {
          reject(new Error(`File not found in WASM FS: ${resourcePath}`));
          return;
        }

        try {
          const mime = TextureRegistry.getMimeType(resourcePath);
          const blob = new Blob([new Uint8Array(loadedFile as ArrayBuffer)], { type: mime });
          const url = URL.createObjectURL(blob);
          const tex = new Texture(url, this._scene, undefined, undefined, undefined, () => {
            resolve(tex);
          }, (msg, ex) => {
            reject(ex || new Error(`Failed to load texture: ${msg}`));
          });
          tex.name = resourcePath;
        } catch (e) {
          reject(e);
        }
      });
    });

    this._cache[resourcePath] = promise;
    return promise;
  }

  dispose(): void {
    // Revoke all blob URLs
    for (const key in this._cache) {
      this._cache[key].then(tex => {
        if (tex.url?.startsWith('blob:')) URL.revokeObjectURL(tex.url);
        tex.dispose();
      }).catch(() => {});
    }
    this._cache = {};
  }
}

export class BabylonRenderDelegate {
  readonly scene: Scene;
  readonly usdRoot: TransformNode;
  readonly materials: Record<string, HydraMaterial> = {};
  readonly meshes: Record<string, HydraMesh> = {};
  readonly textureRegistry: TextureRegistry;

  private _driverAccessor: (() => HdWebSyncDriverLike) | null = null;

  constructor(scene: Scene, usdRoot: TransformNode) {
    this.scene = scene;
    this.usdRoot = usdRoot;
    this.textureRegistry = new TextureRegistry(scene, () => this.getDriver());
  }

  setDriverAccessor(accessor: () => HdWebSyncDriverLike) {
    this._driverAccessor = accessor;
  }

  getDriver(): HdWebSyncDriverLike | null {
    return this._driverAccessor?.() ?? null;
  }

  createRPrim(_typeId: string, id: string, _instancerId?: string): HydraMesh {
    const mesh = new HydraMesh(id, this);
    this.meshes[id] = mesh;
    return mesh;
  }

  createSPrim(typeId: string, id: string): HydraMaterial | undefined {
    if (typeId === 'material') {
      const material = new HydraMaterial(id, this);
      this.materials[id] = material;
      return material;
    }
    return undefined;
  }

  createBPrim(_typeId: string, _id: string): void {
    // Buffer primitives — not yet needed
  }

  CommitResources(): void {
    for (const id in this.meshes) {
      this.meshes[id].commit();
    }
  }

  dispose(): void {
    for (const id in this.meshes) {
      this.meshes[id].mesh.dispose();
    }
    for (const id in this.materials) {
      this.materials[id].material.dispose();
    }
    this.textureRegistry.dispose();
    this.usdRoot.dispose();
  }
}
