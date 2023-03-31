import { Viewer } from "../Threejs/index";
import { Vector3, RepeatWrapping, Color } from "three";
export class Index extends Viewer {
  particle: ParticleEngineType;
  constructor(options) {
    super(options);
    this.initModel();
  }
  init() {
    this.initSource();
    this.initSky();
    this.setLight();
    this.initFog();
    this.model.playAllClipes(this.sceneidx);
    this.sky.initShaderSky({
      scale: 1000,
      turbidity: 1,
      rayleigh: 2,
      postion: [-100, 5, -100],
    });
    this.particle = this.initParticleEngine(this.particle, true);
    this.fog.initFogExp("#cccccc", 0.003);
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
      sunPosition: new Vector3(-10, 10, -10),
      sunColor: "#f2c144",
      waterColor: "#fff",
      distortionScale: 0.7,
      time: 1 / 100,
      scene: this.scene,
    });
  }

  setLight() {
    this.ambient?.setLight(1.5, 0.7);
  }
  setSky() {
    (this.sky.sky as any).material.uniforms["sunPosition"].value = new Vector3(
      -100,
      5,
      -100
    );
  }

  snow() {
    this.ambient?.setLight(1, 0.7);
    (this.sky.sky as any).material.uniforms["sunPosition"].value = new Vector3(
      0,
      1,
      0
    );
    this.particle.destroy();
    this.setParticleMode(this.particle, "snow", {
      positionBase: new Vector3(0, 150, 0),
      positionSpread: new Vector3(400, 0, 400),
      velocityBase: new Vector3(20, -100, 0),
      velocitySpread: new Vector3(-10, -50, 0),
      particlesPerSecond: 50,
      particleDeathAge: 3,
      sizeTween: this.getParticleTween([0, 0.25], [10, 13]),
    });
  }

  rain() {
    this.particle.destroy();
    this.ambient?.setLight(0.2, 0.7);
    (this.sky.sky as any).material.uniforms["sunPosition"].value = new Vector3(
      0,
      1,
      0
    );
    this.setParticleMode(this.particle, "rain", {
      positionBase: new Vector3(0, 150, 0),
      positionSpread: new Vector3(400, 0, 400),
      velocityBase: new Vector3(0, -200, 0),
      velocitySpread: new Vector3(0, 0, 0),
      particlesPerSecond: 150,
      particleDeathAge: 2,
      sizeBase: 20,
      sizeSpread: 10,
      opacityBase: 0.5,
    });
  }
  starfield() {
    this.particle.destroy();
    this.ambient?.setLight(0.4, 0.7);
    (this.sky.sky as any).material.uniforms["sunPosition"].value = new Vector3(
      0,
      0,
      0
    );
    this.setParticleMode(this.particle, "starfield", {
      positionBase: new Vector3(-400, 200, -700),
      positionSpread: new Vector3(3000, 400, 0),
      sizeBase: 20,
      particlesPerSecond: 1000,
      particleDeathAge: 3,
    });
  }

  fireflies() {
    this.particle.destroy();
    this.ambient?.setLight(0.4, 0.7);
    (this.sky.sky as any).material.uniforms["sunPosition"].value = new Vector3(
      0,
      0,
      0
    );
    this.setParticleMode(this.particle, "fireflies", {
      positionBase: new Vector3(0, 100, -50),
      positionSpread: new Vector3(300, -200, 0),
      sizeBase: 20,
      particlesPerSecond: 10,
      particleDeathAge: 3,
      particleTexture: this.souce.loadTexture({
        path: "/docs/public/lizi/spark.png",
      }),
    });
  }

  candle() {
    this.setLight();
    this.setSky();

    this.particle.destroy();
    this.setParticleMode(this.particle, "candle", {
      positionBase: new Vector3(0, 10, -50),
      positionRadius: 1,
      velocityBase: new Vector3(0, 20, 0),
      velocitySpread: new Vector3(12, 40, 12),
      sizeTween: this.getParticleTween([10, 10.3, 10.2], [14, 10, 8]),
      particleDeathAge: 4,
    });
  }

  clouds() {
    this.setLight();
    (this.sky.sky as any).material.uniforms["sunPosition"].value = new Vector3(
      -100,
      20,
      -100
    );
    this.particle.destroy();
    this.setParticleMode(this.particle, "clouds", {
      positionBase: new Vector3(-320, 40, -300),
      positionSpread: new Vector3(50, 10, 100),
      velocityBase: new Vector3(1, 0, 0),
      velocitySpread: new Vector3(10, 0, 0),
      sizeBase: 30,
      sizeSpread: 10,
      particlesPerSecond: 100,
      particleDeathAge: 10,
      colorBase: new Vector3(1, 1, 1),
    });
  }

  firework() {
    this.particle.destroy();
    this.ambient?.setLight(0.4, 0.7);
    (this.sky.sky as any).material.uniforms["sunPosition"].value = new Vector3(
      0,
      0,
      0
    );
    this.setParticleMode(this.particle, "firework", {
      positionBase: new Vector3(-100, 150, -300),
      positionRadius: 15,
      particlesPerSecond: 3000,
      particleDeathAge: 4,
    });
  }
  smoke() {
    this.setLight();
    this.setSky();
    this.particle.destroy();
    this.setParticleMode(this.particle, "smoke", {
      positionBase: new Vector3(0, 10, -50),
      positionRadius: 1,
      velocityBase: new Vector3(0, 20, 0),
      velocitySpread: new Vector3(12, 40, 12),
      sizeTween: this.getParticleTween([10, 10.3, 10.2], [14, 10, 8]),
      particleDeathAge: 4,
    });
  }
}
