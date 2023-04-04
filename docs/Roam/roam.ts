import { RepeatWrapping, AnimationMixer } from "three";
import { Viewer } from "../Threejs/index";
import { Roam } from "../Threejs/plugins/sceneRoam";

export class Index extends Viewer {
  Roam: any;
  oldMater: any;
  player: any;
  animations: any;
  stop: boolean;
  mixer: THREE.AnimationMixer;
  constructor(options) {
    super(options);
    this.initModel();
    this.stop = false;
  }
  init() {
    this.initSource();
    this.initSky();
    this.initEnvironment({
      path: "exr.exr",
      type: "exr",
    });
    this.sky.initShaderSky({
      scale: 10000,
      turbidity: 1,
      rayleigh: 10,
      postion: [15, 6, -20],
    });
    this.loadPlayer();
  }
  /*
   *@description: 平行光
   *@author: yangj
   *@date: 2023-03-28 14:19:24
   *@return:
   */
  setLight() {
    this.initDirectional("#fff", 1);
    this.directional.light.position.set(10, 100, 10);
    this.directional.light.shadow.bias = -0.0005;
    this.directional.light.shadow.mapSize.x = 8192; // 定义阴影贴图的宽度和高度,必须为2的整数此幂
    this.directional.light.shadow.mapSize.y = 8192; // 较高的值会以计算时间为代价提供更好的阴影质量
  }
  /*
   *@description: 移动模型
   *@author: yangj
   *@date: 2023-03-28 14:19:30
   *@return:
   */
  loadPlayer() {
    this.model.loadModel(
      "../public/scene/glb/walk.glb",
      this.sceneidx,
      (glb, animations) => {
        this.player = glb;
        this.player.scale.set(2.5, 2.5, 2.5);
        this.animations = animations;
        this.mixer = new AnimationMixer(glb);
        this.mixer.clipAction(this.animations[0]).play();
        this.animate.animateFuntion.push((dt) => {
          !this.stop && this.mixer && this.mixer.update(dt);
        });
        this.initroam();
      }
    );
  }
  /*
   *@description: 移动回调
   *@author: yangj
   *@date: 2023-03-28 14:19:40
   *@return:
   */
  runCallback(isRun) {
    if (!isRun) {
      this.stop = true;
    } else {
      this.stop = false;
      this.mixer.clipAction(this.animations[0]).play();
    }
  }
  /*
   *@description: 漫游初始化
   *@author: yangj
   *@date: 2023-03-28 14:19:48
   *@return:
   */
  initroam() {
    this.initRoam(this.player, this.runCallback.bind(this));
    this.setLight();
    setTimeout(() => {
      this.stop = true;
    }, 1000);
  }
  /*
   *@description: 角度换算
   *@author: yangj
   *@date: 2023-03-28 14:19:56
   *@return:
   */
  setAngle(angle) {
    this.Roam.angle = -angle;
    this.Roam.fwdPressed = true;
    if (!this.Roam.isRun) {
      this.stop = false;
      this.mixer.clipAction(this.animations[0]).play();
      this.Roam.isRun = true;
    }
  }
  end() {
    this.Roam.fwdPressed = false;
    if (this.Roam.isRun) {
      this.stop = true;
      this.Roam.isRun = false;
    }
  }
  jump() {
    if (this.Roam.playerIsOnGround) {
      this.Roam.playerVelocity.y = this.Roam.params.playerVelocity;
    }
  }
  first() {
    this.Roam.params.firstPerson = !this.Roam.params.firstPerson;
    if (!this.Roam.params.firstPerson) {
      this.Roam.camera.position
        .sub(this.Roam.controls.target)
        .normalize()
        .multiplyScalar(5)
        .add(this.Roam.controls.target);
      this.Roam.camera.updateMatrixWorld();
      this.Roam.object.visible = true;
      // this.Roam.controls.saveState();
    } else {
      this.Roam.camera.updateMatrixWorld();
      this.Roam.object.visible = false;
      this.Roam.controls.reset();
    }
  }
}
