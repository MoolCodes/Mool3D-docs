import { Viewer } from "../Threejs/index";
export class Index extends Viewer {
  constructor(options) {
    super(options);
    this.initModel();
  }
  init() {
    this.controls.initTransform(this.sceneidx);
    this.initEnvironment({
      path: "exr.exr",
      type: "exr",
    });
    this.initSky();
    this.sky.initShaderSky({
      scale: 10000,
      turbidity: 2,
      rayleigh: 4,
      postion: [15, 2, -20],
    });
    this.getEvent();
    this.controls.orbitControls.enabled = false;
    this.controls.transformControls.enabled = false;
  }
  getEvent() {
    this.initEvent(["mousemove"]);
    this.event.typesFn = {
      mousemove: [
        (e) => {
          if (this.controls.transformControls.enabled) {
            this.controls.transformControls.attach(e.list[0].object.parent);
          }
        },
      ],
    };
  }
}
