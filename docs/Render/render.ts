import { Viewer } from "../Threejs/index";
import { Water, City } from "../Threejs/shader/water";
import { Vector3, CircleGeometry, RepeatWrapping, ShaderMaterial } from "three";
export class Render extends Viewer {
  constructor(options) {
    super(options);
    this.initModel();
  }
  init() {
    this.initSky();
    this.initSource();
    this.initEnvironment({
      path: "exr.exr",
      type: "exr",
    });
    this.setLight();
    this.sky.initShaderSky({
      scale: 100,
      turbidity: 1,
      rayleigh: 10,
      postion: [15, 6, -20],
    });
    this.initWater({
      textureWidth: 200,
      textureHeight: 200,
      radius: 400,
      waterPosition: new Vector3(0, 0.2, 0),
      texture: this.souce.loadTexture({
        path: "/docs/public/images/waternormals.jpg",
        onLoad: function (texture) {
          texture.wrapS = texture.wrapT = RepeatWrapping;
        },
      }),
      sunPosition: new Vector3(0, 0, 0),
      sunColor: "#f2c144",
      waterColor: "#fff",
      distortionScale: 0.7,
      time: 1 / 100,
      scene: this.scene,
    });
  }
  setLight() {
    this.ambient?.setLight(1, 0.1);
  }
  setShader() {
    this.model.deepFunction.push(({ e, item }) => {
      if (item.name == "mool") {
        const shaderMat = new ShaderMaterial(City);
        e.material = shaderMat;
      } else {
        e.scale.set(0.8, 0.8, 0.8);
      }
    });
    this.animate?.animateFuntion.push((delta) => {
      City.uniforms.iTime.value += delta / 1.5;
    });
  }
}
