import { Viewer } from "mool3d";
import { Vector3, RepeatWrapping } from "three";

export class Index extends Viewer {
  particle: any;
  constructor(options) {
    super(options);
    this.init();
  }
  init() {
    this.initSource();
    this.initSky();
    this.setLight();
    this.sky.initShaderSky({
      scale: 100,
      turbidity: 1,
      rayleigh: 10,
      postion: [15, 6, -20],
    });
    this.initEnvironment({
      path: "exr.exr",
      type: "exr",
    });
    this.initWater({
      textureWidth: 200,
      textureHeight: 200,
      radius: 400,
      waterPosition: new Vector3(0, 0, 0),
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
    this.flyTo({
      position: [0, 0, 6],
      controls: [0, 2, 0],
      duration: 2000,
    });
  }
  setLight() {
    this.ambient?.setLight(1, 0.1);
  }
}
