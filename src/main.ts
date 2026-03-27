import { initBabylon, removeDefaultScene, type BabylonContext } from './babylon-setup';
import { initUsdModule, loadUsdFiles, type UsdSceneHandle } from './usd-loader';
import { setupDropHandler } from './drop-handler';

const statusEl = document.getElementById('status')!;
const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;

// 1. Initialize Babylon.js with default playground scene
const ctx: BabylonContext = initBabylon(canvas);
let defaultSceneVisible = true;

// 2. Initialize USD WASM module in background
let usdReady = false;
initUsdModule((status) => {
  statusEl.textContent = status || 'Loading USD runtime…';
}).then(() => {
  usdReady = true;
  statusEl.textContent = 'Ready — drop a .usd / .usda / .usdz file or folder to load';
}).catch((err) => {
  console.error('Failed to initialize USD module:', err);
  statusEl.textContent = 'Failed to load USD runtime';
});

// 3. Track active USD scene
let activeUsdScene: UsdSceneHandle | null = null;
let updateObserver: any = null;

// 4. Set up drag & drop
setupDropHandler(canvas, {
  onFilesDropped: async ({ allFiles, rootFile, fileEntries }) => {
    if (!usdReady) {
      statusEl.textContent = 'USD runtime still loading, please wait…';
      return;
    }

    const fileCount = allFiles.length;
    statusEl.textContent = `Loading ${rootFile.name} (${fileCount} file${fileCount > 1 ? 's' : ''})…`;

    // Dispose previous USD scene
    if (activeUsdScene) {
      activeUsdScene.dispose();
      activeUsdScene = null;
    }
    if (updateObserver) {
      ctx.scene.onBeforeRenderObservable.remove(updateObserver);
      updateObserver = null;
    }

    // Remove default Babylon playground scene
    if (defaultSceneVisible) {
      removeDefaultScene(ctx);
      defaultSceneVisible = false;
    }

    try {
      activeUsdScene = await loadUsdFiles(ctx.scene, allFiles, rootFile, fileEntries);

      // Register update in render loop
      updateObserver = ctx.scene.onBeforeRenderObservable.add(() => {
        const dt = ctx.engine.getDeltaTime() / 1000;
        activeUsdScene?.update(dt);
      });

      // Frame the loaded content
      frameCamera(ctx);

      statusEl.textContent = `Loaded: ${rootFile.name} (${fileCount} file${fileCount > 1 ? 's' : ''})`;
    } catch (err) {
      console.error('Failed to load USD file:', err);
      statusEl.textContent = `Error loading ${rootFile.name}`;
    }
  },
});

/**
 * Adjust camera to frame loaded USD content.
 */
function frameCamera(ctx: BabylonContext) {
  setTimeout(() => {
    const meshes = ctx.scene.meshes.filter(m => m.name !== '__root__');
    if (meshes.length === 0) return;

    let min = meshes[0].getBoundingInfo().boundingBox.minimumWorld.clone();
    let max = meshes[0].getBoundingInfo().boundingBox.maximumWorld.clone();

    for (const mesh of meshes) {
      mesh.computeWorldMatrix(true);
      const bb = mesh.getBoundingInfo().boundingBox;
      min.minimizeInPlace(bb.minimumWorld);
      max.maximizeInPlace(bb.maximumWorld);
    }

    const center = min.add(max).scale(0.5);
    const size = max.subtract(min);
    const maxDim = Math.max(size.x, size.y, size.z, 0.1);

    ctx.camera.setTarget(center);
    ctx.camera.radius = maxDim * 2;
    ctx.camera.alpha = -Math.PI / 2;
    ctx.camera.beta = Math.PI / 3;
  }, 100);
}
