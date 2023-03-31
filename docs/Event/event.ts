import { Viewer } from "../Threejs/index";
import { City } from "../Threejs/shader/water";
import { ShaderMaterial } from "three";
export class Index extends Viewer {
  constructor(options) {
    super(options);
    this.initModel();
  }
  init() {
    this.initEnvironment({
      path: "exr.exr",
      type: "exr",
    });
    this.setShader();
    this.initSky();
    this.sky.initShaderSky({
      scale: 100,
      turbidity: 2,
      rayleigh: 4,
      postion: [15, 2, -20],
    });
  }
  setEvent(callback) {
    this.initEvent(["mousemove"]);
    this.event.typesFn = {
      mousemove: [
        (e) => {
          const shaderMat = new ShaderMaterial(City);
          e.list[0].object.material = shaderMat;
          callback(e.list[0].point);
        },
      ],
    };
  }
  setShader() {
    this.animate?.animateFuntion.push((delta) => {
      City.uniforms.iTime.value += delta / 1.5;
    });
  }
}
