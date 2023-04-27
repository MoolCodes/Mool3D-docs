import { Sprite as TSprite, SpriteMaterial, FrontSide, Object3D } from "three";
import { SpriteType, SpriteParams } from "../types/types";
export class Sprite implements SpriteType {
  sprite: THREE.Sprite;
  object: THREE.Object3D;
  constructor() {
    this.object = new Object3D();
  }
  init(options: SpriteParams) {
    this.sprite = new TSprite(
      new SpriteMaterial({
        map: options.texture,
        side: FrontSide,
        transparent: true,
        depthWrite: false,
        sizeAttenuation: false,
        toneMapped: false,
      })
    );
    this.sprite.name = options.name;
    this.sprite.renderOrder = 10000;
    this.sprite.geometry.computeBoundingBox();
    this.sprite.geometry.center();
    this.object.attach(this.sprite);
    return this.object;
  }
}
