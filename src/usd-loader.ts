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

export async function initUsdModule(onStatus?: (msg: string) => void): Promise<USDModule> {
  if (usdModule) return usdModule;

  const { getUsdModule } = await import('@needle-tools/usd');

  usdModule = await (getUsdModule as any)({
    setStatus: (status: string) => {
      onStatus?.(status);
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
): Promise<UsdSceneHandle> {
  const USD = await initUsdModule();

  // Track all paths we write so we can clean up on dispose
  const createdPaths: string[] = [];
  const createdDirs = new Set<string>();

  // Write all files into the WASM virtual filesystem
  for (const df of allFiles) {
    const parts = df.relativePath.split('/');
    const fileName = parts.pop()!;
    const directory = parts.join('/');

    // Ensure parent directories exist
    if (directory) {
      // Create each segment of the path
      const segments = directory.split('/');
      let currentPath = '';
      for (const seg of segments) {
        currentPath += seg + '/';
        const fullDir = WASM_DIR + currentPath;
        if (!createdDirs.has(fullDir)) {
          try {
            USD.FS_createPath('', fullDir, true, true);
          } catch { /* may already exist */ }
          createdDirs.add(fullDir);
        }
      }
    } else if (!createdDirs.has(WASM_DIR)) {
      try {
        USD.FS_createPath('', WASM_DIR, true, true);
      } catch { /* may already exist */ }
      createdDirs.add(WASM_DIR);
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
      // Clean up all files from virtual FS
      for (const path of createdPaths) {
        try { USD.FS_unlink(path); } catch { /* ignore */ }
      }
      // Clean up directories (reverse order so children go first)
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
  // Sanitize filename
  let sanitized = fileName.replace(/[\\/]/g, '_');
  const ext = sanitized.split('.').pop()?.toLowerCase() ?? '';
  const validExts = ['usd', 'usda', 'usdc', 'usdz'];
  if (!validExts.includes(ext)) {
    sanitized += '.' + guessExtension(fileBuffer);
  }

  // Wrap as a DroppedFile
  const file = new File([fileBuffer], sanitized);
  const droppedFile: DroppedFile = { relativePath: sanitized, name: sanitized, file };
  return loadUsdFiles(scene, [droppedFile], droppedFile);
}
