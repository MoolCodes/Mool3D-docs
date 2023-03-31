import { RepeatWrapping, Vector3, AnimationMixer } from "three";
import { Viewer } from "../Threejs/index";
import { Roam } from "../Threejs/plugins/sceneRoam";

export class Index extends Viewer {
  Roam: any;
  oldMater: any;
  player: any;
  animations: any;
  mixer: THREE.AnimationMixer;
  particle: ParticleEngineType;
  constructor(options) {
    super(options);
    this.initModel();
  }
  init() {
    this.initSource();
    this.initSky();
    this.model.playAllClipes(8);
    this.sky.initShaderSky({
      scale: 10000,
      turbidity: 1,
      rayleigh: 10,
      postion: [15, 6, -20],
    });
    this.particle = this.initParticleEngine(this.particle, true);
    this.fish();
    this.loadPlayer();
  }

  fish() {
    this.ambient?.setLight(1, 0.7);
    this.particle.destroy();
    this.setParticleMode(this.particle, "fireflies", {
      positionBase: new Vector3(50, 50, -50),
      positionSpread: new Vector3(200, -200, 200),
      sizeBase: 10,
      particlesPerSecond: 5,
      particleDeathAge: 10,
      particleTexture: this.souce.loadTexture({
        path: "/docs/public/images/fish.png",
      }),
    });
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
      "../public/scene/glb/run.glb",
      this.sceneidx,
      (glb, animations) => {
        this.player = glb;
        this.player.scale.set(3, 3, 3);
        this.player.castShadow = true;
        this.player.receiveShadow = true;
        this.player.visible = true;
        this.player.traverse((c) => {
          c.castShadow = true;
        });
        this.animations = animations;
        this.mixer = new AnimationMixer(glb);
        this.mixer.clipAction(this.animations[1]).play();
        this.animate.animateFuntion.push((dt) => {
          this.mixer && this.mixer.update(dt);
        });
        this.roam();
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
      this.mixer.stopAllAction();
      this.mixer.clipAction(this.animations[1]).play();
    } else {
      this.mixer.stopAllAction();
      this.mixer.clipAction(this.animations[0]).play();
    }
  }
  /*
   *@description: 漫游初始化
   *@author: yangj
   *@date: 2023-03-28 14:19:48
   *@return:
   */
  roam() {
    this.Roam = new Roam({
      scene: this.gScenes[this.sceneidx],
      camera: this.activeCamera,
      animate: this.animate.animateFuntion,
      controls: this.controls.orbitControls,
      renderer: this.renderer,
      object: this.player,
      runCallback: this.runCallback.bind(this),
    });
    this.Roam.init();
    this.setLight();
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
      this.mixer.stopAllAction();
      this.mixer.clipAction(this.animations[0]).play();
      this.Roam.isRun = true;
    }
  }
  end() {
    this.Roam.fwdPressed = false;
    if (this.Roam.isRun) {
      this.mixer.stopAllAction();
      this.mixer.clipAction(this.animations[1]).play();
      this.Roam.isRun = false;
    }
  }
  jump() {
    if (this.Roam.playerIsOnGround) {
      this.Roam.playerVelocity.y = this.Roam.params.playerVelocity;
    }
  }
  super() {
    if (this.Roam.params.playerSpeed == 5) {
      this.Roam.params.playerSpeed = 0.3;
      this.Roam.params.playerVelocity = 5;
      this.Roam.object.traverse((child) => {
        if (child.material) {
          child.material = this.oldMater;
        }
      });
    } else {
      this.Roam.object.traverse((child) => {
        if (child.material) {
          this.oldMater = child.material.clone();
          child.material.map = this.souce.loadTexture({
            path: "/docs/public/images/super.png",
            onLoad: function (texture) {
              texture.wrapS = texture.wrapT = RepeatWrapping;
              texture.rotation = 1.5;
            },
          });
        }
      });
      this.Roam.params.playerSpeed = 5;
      this.Roam.params.playerVelocity = 20;
    }
  }
}