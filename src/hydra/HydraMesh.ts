import {
  Mesh, VertexData, Matrix, Scene, PBRMaterial, Color3, SubMesh, MultiMaterial
} from '@babylonjs/core';
import type { BabylonRenderDelegate } from './BabylonRenderDelegate';

let defaultMaterial: PBRMaterial | null = null;

function getDefaultMaterial(scene: Scene): PBRMaterial {
  if (!defaultMaterial || defaultMaterial.getScene() !== scene) {
    defaultMaterial = new PBRMaterial('__hydra_default__', scene);
    defaultMaterial.albedoColor = new Color3(0.7, 0.7, 0.7);
    defaultMaterial.metallic = 0;
    defaultMaterial.roughness = 0.5;
    defaultMaterial.backFaceCulling = false;
  }
  return defaultMaterial;
}

export class HydraMesh {
  private _mesh: Mesh;
  private _scene: Scene;
  private _id: string;
  private _delegate: BabylonRenderDelegate;
  private _points: Float32Array | null = null;
  private _normals: Float32Array | null = null;
  private _colors: Float32Array | null = null;
  private _uvs: Float32Array | null = null;
  private _indices: number[] | null = null;
  private _vertexData: VertexData;
  private _dirty = false;
  // Track facevarying data set directly (bypasses reorder)
  private _facevaryingNormals: number[] | null = null;
  private _facevaryingUvs: number[] | null = null;

  constructor(id: string, delegate: BabylonRenderDelegate) {
    this._id = id;
    this._delegate = delegate;
    this._scene = delegate.scene;
    this._vertexData = new VertexData();

    let name = id;
    const lastSlash = name.lastIndexOf('/');
    if (lastSlash >= 0) name = name.substring(lastSlash + 1);

    this._mesh = new Mesh(name, this._scene);
    this._mesh.material = getDefaultMaterial(this._scene);

    // Add to USD root
    this._mesh.parent = delegate.usdRoot;
  }

  get mesh() { return this._mesh; }

  // ── Index-based reordering (expand per-vertex to per-face-vertex) ──

  private reorderByIndices(attribute: Float32Array, dimension: number): Float32Array {
    if (!attribute || !this._indices) return attribute;
    const out = new Float32Array(this._indices.length * dimension);
    for (let i = 0; i < this._indices.length; i++) {
      const idx = this._indices[i];
      for (let j = 0; j < dimension; j++) {
        out[i * dimension + j] = attribute[idx * dimension + j];
      }
    }
    return out;
  }

  private applyReorderedAttribute(source: Float32Array | null, dimension: number): Float32Array | null {
    if (!source || !this._indices) return source;
    return this.reorderByIndices(source, dimension);
  }

  // ── Hydra RPrim callbacks ─────────────────────────────────────

  updatePoints(points: Float32Array) {
    this._points = new Float32Array(points);
    this._dirty = true;
  }

  updateIndices(indices: Int32Array | Uint32Array | number[]) {
    this._indices = Array.from(indices);
    this._dirty = true;
  }

  /**
   * Called with auto-generated normals. Only apply if no authored normals exist.
   */
  updateNormals(normals: Float32Array) {
    if (this._normals || this._facevaryingNormals) return;
    this._normals = new Float32Array(normals);
    this._dirty = true;
  }

  setNormals(data: Float32Array, interpolation: string) {
    if (interpolation === 'facevarying') {
      // Already expanded per-face-vertex by C++ side
      this._facevaryingNormals = Array.from(data);
      this._dirty = true;
    } else if (interpolation === 'vertex') {
      this._normals = new Float32Array(data);
      this._dirty = true;
    }
  }

  setTransform(matrix: ArrayLike<number>) {
    // USD sends row-major 4×4; Babylon uses column-major. Transpose.
    const m = Matrix.FromArray(Array.from(matrix));
    const transposed = m.transpose();
    this._mesh.freezeWorldMatrix(transposed);
  }

  setMaterial(materialId: string) {
    const hydraMat = this._delegate.materials[materialId];
    if (hydraMat) {
      this._mesh.material = hydraMat.material;
    }
  }

  /**
   * Multi-material: Hydra tells us which index ranges use which material.
   */
  setGeomSubsetMaterial(sections: Array<{ materialId: string; start: number; length: number }>) {
    const validSections = sections.filter(s => this._delegate.materials[s.materialId]);
    if (validSections.length === 0) return;

    if (validSections.length === 1) {
      this._mesh.material = this._delegate.materials[validSections[0].materialId].material;
      return;
    }

    // Build a Babylon MultiMaterial
    const multiMat = new MultiMaterial(this._id + '_multi', this._scene);
    this._mesh.subMeshes = [];

    for (let i = 0; i < validSections.length; i++) {
      const section = validSections[i];
      const hydraMat = this._delegate.materials[section.materialId];
      multiMat.subMaterials.push(hydraMat.material);

      // SubMesh(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh)
      new SubMesh(i, 0, this._mesh.getTotalVertices(), section.start, section.length, this._mesh);
    }

    this._mesh.material = multiMat;
  }

  setDisplayColor(data: Float32Array, interpolation: string) {
    if (interpolation === 'constant' && data.length >= 3) {
      const mat = this._mesh.material;
      if (mat instanceof PBRMaterial) {
        mat.albedoColor = new Color3(data[0], data[1], data[2]);
      }
    } else if (interpolation === 'vertex') {
      this._colors = new Float32Array(data);
      this._dirty = true;
    }
  }

  setUV(data: Float32Array, dimension: number, interpolation: string) {
    if (interpolation === 'facevarying') {
      // Already expanded per-face-vertex by C++ side
      if (dimension >= 2) {
        this._facevaryingUvs = Array.from(data);
        // Babylon only uses 2D UVs; trim if dimension > 2
        if (dimension > 2) {
          const trimmed = new Float32Array(data.length / dimension * 2);
          for (let i = 0; i < data.length / dimension; i++) {
            trimmed[i * 2] = data[i * dimension];
            trimmed[i * 2 + 1] = data[i * dimension + 1];
          }
          this._facevaryingUvs = Array.from(trimmed);
        }
      }
      this._dirty = true;
    } else if (interpolation === 'vertex') {
      this._uvs = new Float32Array(data);
      this._dirty = true;
    }
  }

  updatePrimvar(name: string, data: Float32Array, dimension: number, interpolation: string) {
    if (!name || name === 'points') return;

    // Normalize UV primvar names
    if (name.startsWith('st')) name = 'uv';

    switch (name) {
      case 'displayColor':
        this.setDisplayColor(data, interpolation);
        break;
      case 'uv':
      case 'UVMap':
      case 'uvmap':
      case 'uv0':
      case 'UVW':
      case 'uvw':
      case 'map1':
        this.setUV(data, dimension, interpolation);
        break;
      case 'normals':
        this.setNormals(data, interpolation);
        break;
      default:
        break;
    }
  }

  // ── Commit: finalize vertex data and apply to mesh ─────────────

  commit() {
    if (!this._dirty) return;
    this._dirty = false;

    const vd = new VertexData();

    // Reorder per-vertex data using face indices → expanded flat arrays
    const positions = this.applyReorderedAttribute(this._points, 3);
    const normals = this.applyReorderedAttribute(this._normals, 3);
    const uvs = this.applyReorderedAttribute(this._uvs, 2);
    const colors = this.applyReorderedAttribute(this._colors, 3);

    if (positions) {
      vd.positions = Array.from(positions);
    }

    // Normals: prefer facevarying (already expanded), else reordered per-vertex
    if (this._facevaryingNormals) {
      vd.normals = this._facevaryingNormals;
    } else if (normals) {
      vd.normals = Array.from(normals);
    }

    // UVs: prefer facevarying
    if (this._facevaryingUvs) {
      vd.uvs = this._facevaryingUvs;
    } else if (uvs) {
      vd.uvs = Array.from(uvs);
    }

    // Vertex colors: convert RGB → RGBA (Babylon expects 4-component)
    if (colors) {
      const rgba = new Float32Array((colors.length / 3) * 4);
      for (let i = 0; i < colors.length / 3; i++) {
        rgba[i * 4] = colors[i * 3];
        rgba[i * 4 + 1] = colors[i * 3 + 1];
        rgba[i * 4 + 2] = colors[i * 3 + 2];
        rgba[i * 4 + 3] = 1.0;
      }
      vd.colors = Array.from(rgba);
    }

    // Sequential indices (data is already expanded)
    if (vd.positions) {
      const vertCount = vd.positions.length / 3;
      const seqIndices = new Uint32Array(vertCount);
      for (let i = 0; i < vertCount; i++) seqIndices[i] = i;
      vd.indices = Array.from(seqIndices);
    }

    vd.applyToMesh(this._mesh);
  }

  // Stubs for methods the WASM driver may call
  skelDetected() { /* skeletal animation not yet supported */ }
}
