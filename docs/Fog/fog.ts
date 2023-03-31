import { Viewer } from "../Threejs/index";

export class Index extends Viewer {
  constructor(options) {
    super(options);
    this.initModel();
    this.model.deepFunction.push(({ e }) => {
      e.scale.set(300, 300, 300);
    });
  }
  init() {
    this.initSource();
    this.initSky();
    this.setLight();
    this.sky.initShaderSky({
      scale: 10000,
      turbidity: 1,
      rayleigh: 10,
      postion: [15, 6, -20],
    });
    this.initEnvironment({
      path: "exr.exr",
      type: "exr",
    });
    this.initFog();
    this.fog.initFog("#cccccc", 10, 500);
  }
  setLight() {
    this.ambient?.setLight(1, 0.1);
  }
}
