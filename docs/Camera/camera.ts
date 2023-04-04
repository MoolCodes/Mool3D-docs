import { Viewer } from "mool3d";
import { CameraHelper, PerspectiveCamera } from "three";
export class Camera extends Viewer {
  constructor(options) {
    super(options);
    this.initModel();
  }
  getCameraHelper() {
    const camera: THREE.Camera = new PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    camera.position.set(0, 0, 5);
    const helper = new CameraHelper(camera);
    this.gScenes[this.sceneidx].add(helper);
    this.gScenes[this.sceneidx].add(camera);
  }
  init() {
    this.initEnvironment({
      path: "exr.exr",
      type: "exr",
    });
    this.initSky();
    this.sky.setSkyBox("sky4");
    this.getCameraHelper();
  }
}
