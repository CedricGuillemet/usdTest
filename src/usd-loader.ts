import { Scene, TransformNode } from '@babylonjs/core';
import { BabylonRenderDelegate } from './hydra';

// Minimal type declarations for the WASM USD module
interface USDModule {
  FS_createDataFile(parent: string, filepath: string, data: Uint8Array, canRead: boolean, canWrite: boolean, canOwn: boolean): void;
  FS_createPath(parent: string, path: string, canRead: boolean, canWrite: boolean): void;
  FS_unlink(path: string): void;
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

  // Dynamic import to access getUsdModule from @needle-tools/usd
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
  const arr = new Uint8Array(buffer, 0, 4);
  // USDZ is a zip archive: PK header
  if (arr[0] === 0x50 && arr[1] === 0x4B) return 'usdz';
  // USDC (crate): starts with "PXR-USDC"
  const header = String.fromCharCode(...new Uint8Array(buffer, 0, 8));
  if (header.startsWith('PXR-USDC')) return 'usdc';
  return 'usd';
}

export async function loadUsdFile(
  scene: Scene,
  fileName: string,
  fileBuffer: ArrayBuffer,
): Promise<UsdSceneHandle> {
  const USD = await initUsdModule();

  // Sanitize filename
  let sanitized = fileName.replace(/[\\/]/g, '_');
  const ext = sanitized.split('.').pop()?.toLowerCase() ?? '';
  const validExts = ['usd', 'usda', 'usdc', 'usdz'];
  if (!validExts.includes(ext)) {
    sanitized += '.' + guessExtension(fileBuffer);
  }

  // Write file to WASM virtual filesystem
  USD.FS_createDataFile('', sanitized, new Uint8Array(fileBuffer), true, true, true);

  // Create USD root transform node
  const usdRoot = new TransformNode('usdRoot', scene);

  // Create our Babylon render delegate
  const delegate = new BabylonRenderDelegate(scene, usdRoot);

  // Create driver (may return a Promise due to Asyncify)
  let driverOrPromise: any = new USD.HdWebSyncDriver(delegate as any, sanitized);
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

  // Handle Z-up stages: Babylon is Y-up
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
      try {
        USD.FS_unlink(sanitized);
      } catch { /* file may already be unlinked */ }
    },
  };
}
