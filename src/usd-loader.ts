import { Scene, TransformNode } from '@babylonjs/core';
import { BabylonRenderDelegate } from './hydra';
import type { DroppedFile } from './drop-handler';

// Minimal type declarations for the WASM USD module
interface USDModule {
  FS_createDataFile(parent: string, filepath: string, data: Uint8Array, canRead: boolean, canWrite: boolean, canOwn: boolean): void;
  FS_createPath(parent: string, path: string, canRead: boolean, canWrite: boolean): void;
  FS_unlink(path: string): void;
  FS_rmdir(path: string): void;
  FS_analyzePath(path: string): any;
  HdWebSyncDriver: new (delegate: any, filepath: string) => HdWebSyncDriver;
  ready: Promise<any>;
  debug: boolean;
}

interface USDStage {
  GetStartTimeCode(): number;
  GetEndTimeCode(): number;
  GetTimeCodesPerSecond(): number;
  GetUpAxis(): number;
}

interface HdWebSyncDriver {
  Draw(): void;
  SetTime(timecode: number): void;
  GetTime(): number;
  GetStage(): USDStage | Promise<USDStage>;
  getFile(path: string, cb: (data: ArrayBufferLike) => void): void;
  delete(): void;
  isDeleted(): boolean;
}

let usdModule: USDModule | null = null;

/**
 * Global store of dropped files. The USD WASM runtime's HTTPAssetResolver
 * will call our urlModifier when it tries to fetch any referenced file.
 * We intercept those requests and serve the file from this map.
 */
let droppedFileEntries: FileSystemFileEntry[] = [];

/**
 * Set the active dropped file entries for URL resolution.
 * Called before loading a USD scene from dropped files.
 */
export function setDroppedFileEntries(entries: FileSystemFileEntry[]) {
  droppedFileEntries = entries;
}

/**
 * Try to find a dropped file matching the requested URL.
 * The USD runtime may request files with various path formats.
 */
function findDroppedFile(url: string): FileSystemFileEntry | null {
  if (!droppedFileEntries.length) return null;

  // Normalize: strip leading slashes, protocol, etc.
  let normalizedUrl = url;
  // Strip common prefixes the resolver might add
  if (normalizedUrl.startsWith('http://') || normalizedUrl.startsWith('https://')) {
    try {
      const parsed = new URL(normalizedUrl);
      normalizedUrl = decodeURIComponent(parsed.pathname);
    } catch { /* keep as-is */ }
  }
  normalizedUrl = normalizedUrl.replace(/^\/+/, '').replace(/\\/g, '/');

  // Try exact fullPath match first
  for (const entry of droppedFileEntries) {
    const entryPath = entry.fullPath.replace(/^\/+/, '');
    if (entryPath === normalizedUrl) return entry;
  }

  // Try matching by filename suffix (the URL might have extra prefix paths)
  for (const entry of droppedFileEntries) {
    const entryPath = entry.fullPath.replace(/^\/+/, '');
    if (normalizedUrl.endsWith(entryPath) || normalizedUrl.endsWith('/' + entryPath)) {
      return entry;
    }
    // Also try just the filename for simple references
    if (normalizedUrl.endsWith(entry.name)) {
      // Check if the directory part matches too
      const urlDir = normalizedUrl.substring(0, normalizedUrl.length - entry.name.length);
      const entryDir = entryPath.substring(0, entryPath.length - entry.name.length);
      if (urlDir.endsWith(entryDir) || !entryDir) return entry;
    }
  }

  // Last resort: just match the filename (when only name is referenced)
  const urlFileName = normalizedUrl.split('/').pop();
  if (urlFileName) {
    const matches = droppedFileEntries.filter(e => e.name === urlFileName);
    if (matches.length === 1) return matches[0];
  }

  return null;
}

export async function initUsdModule(onStatus?: (msg: string) => void): Promise<USDModule> {
  if (usdModule) return usdModule;

  const { getUsdModule } = await import('@needle-tools/usd');

  usdModule = await (getUsdModule as any)({
    setStatus: (status: string) => {
      onStatus?.(status);
    },
    urlModifier: async (url: string) => {
      // Intercept file fetches — serve from dropped files if available
      const found = findDroppedFile(url);
      if (found) {
        // Return a File object; the WASM runtime reads it directly
        return new Promise<File>((resolve, reject) => {
          found.file(resolve, reject);
        });
      }
      // Not found in dropped files — let the runtime fetch normally
      return url;
    },
  }) as USDModule;

  return usdModule;
}

export interface UsdSceneHandle {
  driver: HdWebSyncDriver;
  delegate: BabylonRenderDelegate;
  stage: USDStage;
  usdRoot: TransformNode;
  update(dt: number): void;
  dispose(): void;
}

/**
 * Determine file format from ArrayBuffer magic bytes.
 */
function guessExtension(buffer: ArrayBuffer): string {
  const arr = new Uint8Array(buffer, 0, Math.min(buffer.byteLength, 8));
  if (arr[0] === 0x50 && arr[1] === 0x4B) return 'usdz';
  const header = String.fromCharCode(...arr);
  if (header.startsWith('PXR-USDC')) return 'usdc';
  return 'usd';
}

/** Common directory prefix in the WASM virtual FS to avoid clashes */
const WASM_DIR = 'needle/';

/**
 * Load a set of files (from a folder drop) into the WASM virtual FS,
 * then create an HdWebSyncDriver pointing at the root USD file.
 */
export async function loadUsdFiles(
  scene: Scene,
  allFiles: DroppedFile[],
  rootFile: DroppedFile,
  fileEntries?: FileSystemFileEntry[],
): Promise<UsdSceneHandle> {
  const USD = await initUsdModule();

  // Store file entries for URL resolution during rendering
  if (fileEntries) {
    setDroppedFileEntries(fileEntries);
  }

  // Track all paths we write so we can clean up on dispose
  const createdPaths: string[] = [];
  const createdDirs = new Set<string>();

  // Ensure base directory exists
  if (!createdDirs.has(WASM_DIR)) {
    try { USD.FS_createPath('', WASM_DIR, true, true); } catch { /* exists */ }
    createdDirs.add(WASM_DIR);
  }

  // Write all files into the WASM virtual filesystem
  for (const df of allFiles) {
    const parts = df.relativePath.split('/');
    const fileName = parts.pop()!;
    const directory = parts.join('/');

    // Ensure parent directories exist
    if (directory) {
      const segments = directory.split('/');
      let currentPath = '';
      for (const seg of segments) {
        currentPath += seg + '/';
        const fullDir = WASM_DIR + currentPath;
        if (!createdDirs.has(fullDir)) {
          try { USD.FS_createPath('', fullDir, true, true); } catch { /* exists */ }
          createdDirs.add(fullDir);
        }
      }
    }

    const fileDir = WASM_DIR + (directory ? directory + '/' : '');
    const buffer = await df.file.arrayBuffer();
    try {
      USD.FS_createDataFile(fileDir, fileName, new Uint8Array(buffer), true, true, true);
      createdPaths.push(fileDir + fileName);
    } catch (e) {
      console.warn(`[usd-loader] Failed to write ${df.relativePath} to WASM FS:`, e);
    }
  }

  // Determine the root file path in the virtual FS
  const rootPath = WASM_DIR + rootFile.relativePath;

  // Create USD root transform node
  const usdRoot = new TransformNode('usdRoot', scene);

  // Create our Babylon render delegate
  const delegate = new BabylonRenderDelegate(scene, usdRoot);

  // Create driver
  let driverOrPromise: any = new USD.HdWebSyncDriver(delegate as any, rootPath);
  if (driverOrPromise instanceof Promise) driverOrPromise = await driverOrPromise;
  const finalDriver = driverOrPromise as HdWebSyncDriver;
  delegate.setDriverAccessor(() => finalDriver);

  // Initial draw
  finalDriver.Draw();

  // Get stage info
  let stage = finalDriver.GetStage() as USDStage | Promise<USDStage>;
  if (stage instanceof Promise) {
    stage = await stage;
    stage = finalDriver.GetStage() as USDStage;
  }

  // Handle Z-up stages
  const upAxis = String.fromCharCode(stage.GetUpAxis());
  if (upAxis === 'z' || upAxis === 'Z') {
    usdRoot.rotation.x = -Math.PI / 2;
  }

  const finalStage = stage;
  let time = 0;

  return {
    driver: finalDriver,
    delegate,
    stage: finalStage,
    usdRoot,
    update(dt: number) {
      if (finalDriver.isDeleted()) return;
      time += dt;
      const tps = finalStage.GetTimeCodesPerSecond();
      const start = finalStage.GetStartTimeCode();
      const end = finalStage.GetEndTimeCode();
      const range = end - start;
      if (range > 0 && tps > 0) {
        const timecode = start + ((time * tps) % range);
        finalDriver.SetTime(timecode);
      }
      finalDriver.Draw();
    },
    dispose() {
      finalDriver.delete();
      delegate.dispose();
      droppedFileEntries = [];
      for (const path of createdPaths) {
        try { USD.FS_unlink(path); } catch { /* ignore */ }
      }
      const dirs = [...createdDirs].sort((a, b) => b.length - a.length);
      for (const dir of dirs) {
        try { USD.FS_rmdir(dir); } catch { /* ignore */ }
      }
    },
  };
}

/**
 * Convenience: load a single file (e.g. a .usdz archive).
 */
export async function loadUsdFile(
  scene: Scene,
  fileName: string,
  fileBuffer: ArrayBuffer,
): Promise<UsdSceneHandle> {
  let sanitized = fileName.replace(/[\\/]/g, '_');
  const ext = sanitized.split('.').pop()?.toLowerCase() ?? '';
  const validExts = ['usd', 'usda', 'usdc', 'usdz'];
  if (!validExts.includes(ext)) {
    sanitized += '.' + guessExtension(fileBuffer);
  }

  const file = new File([fileBuffer], sanitized);
  const droppedFile: DroppedFile = { relativePath: sanitized, name: sanitized, file };
  return loadUsdFiles(scene, [droppedFile], droppedFile);
}
