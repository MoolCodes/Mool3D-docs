import { Vector3, RepeatWrapping } from "three";
import { Viewer } from "../Threejs/index";
export class Index extends Viewer {
  pointIndex: number;
  constructor(options) {
    super(options);
    this.initModel();
  }
  init() {
    this.initSky();
    this.initSource();
    this.model.playAllClipes(this.sceneidx);
    this.sky.initShaderSky({
      scale: 10000,
      turbidity: 2,
      rayleigh: 4,
      postion: [15, 0.5, -20],
    });
    // this.initWater({
    //   textureWidth: 500,
    //   textureHeight: 500,
    //   radius: 500,
    //   waterPosition: new Vector3(0, -17, 0),
    //   texture: this.souce.loadTexture({
    //     path: "/docs/public/images/waternormals.jpg",
    //     onLoad: function (texture) {
    //       texture.wrapS = texture.wrapT = RepeatWrapping;
    //     },
    //   }),
    //   sunPosition: new Vector3(-10, 10, -10),
    //   sunColor: "#32669b",
    //   waterColor: "#fff",
    //   distortionScale: 0.7,
    //   time: 1 / 50,
    //   scene: this.scene,
    // });
    this.ambient?.setLight(0.5, 0.7);
  }
  clearLight() {
    this.ambient?.setLight(1, 0.7);
    this.hemisphereLight && this.hemisphereLight.destory();
    this.directional && this.directional.destory();
    this.pointGroup[this.pointIndex] &&
      this.pointGroup[this.pointIndex].destory();
    this.spotLight && this.spotLight.destory();
    this.rectAreaLight && this.rectAreaLight.destory();
    console.log(this.scene);
  }
  setLight() {
    this.clearLight();
    this.ambient?.setLight(1.5, 1);
  }
  setSkyLight() {
    this.clearLight();
    this.initSkyLight("#66dd7a", "#66dd7a", 2);
    this.hemisphereLight.light.position.set(0, 180, 0);
    this.hemisphereLight.initHelper(30);
  }
  setDirectional() {
    this.clearLight();
    this.initDirectional("#db5847", 2);
    this.directional.light.position.set(50, 100, -50);
    this.directional.initHelper(40);
    this.directional.light.shadow.mapSize.x = 8192;
    this.directional.light.shadow.mapSize.y = 8192;
  }

  setPoint() {
    this.clearLight();
    this.pointIndex = this.initPointLight("#db5847", 3, 0);
    this.pointGroup[this.pointIndex].light.position.set(200, 200, -200);
    this.pointGroup[this.pointIndex].initHelper(40);
    this.pointGroup[this.pointIndex].light.castShadow = true;
  }

  setSpot() {
    this.clearLight();
    this.initSpotLight("#db5847", 5, 600, new Vector3(0, 0, 0));
    this.spotLight.light.position.set(0, 300, 0);
    this.spotLight.light.angle = 0.8;
    this.spotLight.initHelper(30);
  }

  setRect() {
    this.clearLight();
    this.initRectArea("#fff", 100, 100, 30);
    this.rectAreaLight.light.position.set(100, 100, 100);
    this.rectAreaLight.light.lookAt(0, 0, 0);
    this.rectAreaLight.initHelper(30);
  }

  setRectBox() {
    this.clearLight();
    this.initRectAreaBox("#fff", 140, 5, [10, 0, 50]);
    this.rectAreaLight.initBoxHelper(30);
  }
  setRectBoxNoHelper() {
    this.clearLight();
    this.initRectAreaBox("#66dd7a", 150, 5, [10, 0, 50]);
  }
}
