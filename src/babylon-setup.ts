import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, Color4 } from '@babylonjs/core';

export interface BabylonContext {
  engine: Engine;
  scene: Scene;
  camera: ArcRotateCamera;
  canvas: HTMLCanvasElement;
  defaultMeshes: ReturnType<typeof createDefaultScene>;
}

function createDefaultScene(scene: Scene) {
  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 2, segments: 32 }, scene);
  sphere.position.y = 1;

  const ground = MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);

  return { sphere, ground };
}

export function initBabylon(canvas: HTMLCanvasElement): BabylonContext {
  const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

  const scene = new Scene(engine);
  scene.clearColor = new Color4(0.1, 0.1, 0.18, 1);

  const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 3, 10, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  camera.lowerRadiusLimit = 0.5;
  camera.wheelDeltaPercentage = 0.02;

  new HemisphericLight('light', new Vector3(0, 1, 0), scene);

  const defaultMeshes = createDefaultScene(scene);

  window.addEventListener('resize', () => engine.resize());

  engine.runRenderLoop(() => scene.render());

  return { engine, scene, camera, canvas, defaultMeshes };
}

export function removeDefaultScene(ctx: BabylonContext) {
  ctx.defaultMeshes.sphere.dispose();
  ctx.defaultMeshes.ground.dispose();
}
