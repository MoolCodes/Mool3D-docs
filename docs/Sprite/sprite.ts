import { Viewer } from "mool3d";
import Effect from "../Threejs/shader/effect";
import { CircleGeometry, Mesh, Color } from "three";
export class Index extends Viewer {
  hovermaterial: THREE.ShaderMaterial;
  select: THREE.Object3D;
  constructor(options) {
    super(options);
    this.initModel();
  }
  init() {
    this.hovermaterial = Effect["effect35"]();
    this.hovermaterial.uniforms.u_color.value = new Color("#02fffc");
    this.animate.animateFuntion.push(() => {
      if (this.select?.type === "Sprite") {
        const itime = this.clock.getElapsedTime();
        this.hovermaterial.uniforms.iTime.value = itime;
      }
    });
    this.initSky();
    this.initSource();
    this.controls.initTransform(this.sceneidx);
    this.initEnvironment({
      path: "exr.exr",
      type: "exr",
    });
    this.sky.initShaderSky({
      scale: 10000,
      turbidity: 2,
      rayleigh: 4,
      postion: [15, 2, -20],
    });
    this.initEvent(["click"]);
    this.attach();
  }
  initSprite() {
    let sprite = this.loadSprite({
      texture: this.souce.loadTexture({
        path: "/docs/public/images/SXT.png",
      }),
      name: "sprite",
    });
    sprite.scale.set(0.1, 0.1, 0.1);
    sprite.position.set(0, 1.5, 0);
    let effect: THREE.Mesh = new Mesh(
      new CircleGeometry(2, 100),
      this.hovermaterial
    );
    effect.rotateX(Math.PI / 2);
    effect.visible = false;
    effect.position.set(0, 0.8, 0);
    (sprite as unknown as { effect: any }).effect = (tage) => {
      effect.visible = tage;
    };
    sprite.attach(effect);
    return sprite;
  }
  add() {
    this.gRayGroup[this.sceneidx].add(this.initSprite());
  }
  attach() {
    this.event.typesFn.click.push((e) => {
      if (e.list[0].object.type === "Sprite") {
        this.select && (this.select.parent as any).effect(false);
        this.controls.transformControls.attach(e.list[0].object.parent);
        this.select = e.list[0].object;
        (this.select.parent as any).effect(true);
      } else {
        this.controls.transformControls.detach();
        this.select && (this.select.parent as any).effect(false);
        this.select = null;
      }
    });
  }
}
