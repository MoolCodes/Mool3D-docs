import { Viewer } from "../Threejs/index";
import {
  LineBasicMaterial,
  Vector3,
  LineSegments,
  Mesh,
  EdgesGeometry,
} from "three";

/************************
 *
 * 模型网格膨胀
 *
 * ***********************/
function dilateGeometry(geometry, length) {
  const position = geometry.attributes.position;
  const objGeometry = geometry;

  const _v1 = new Vector3();
  const _v2 = new Vector3();
  if (objGeometry && objGeometry.isGeometry) {
    console.error(
      "THREE.VertexNormalsHelper no longer supports Geometry. Use BufferGeometry instead."
    );
    return;
  } else if (objGeometry && objGeometry.isBufferGeometry) {
    const objPos = objGeometry.attributes.position;
    const objNorm = objGeometry.attributes.normal;
    // for simplicity, ignore index and drawcalls, and render every normal
    let idx = 0;
    for (let j = 0, jl = objPos.count; j < jl; j++) {
      _v1.set(objPos.getX(j), objPos.getY(j), objPos.getZ(j));
      _v2.set(objNorm.getX(j), objNorm.getY(j), objNorm.getZ(j));
      position.setXYZ(
        idx,
        _v1.x + _v2.x * length,
        _v1.y + _v2.y * length,
        _v1.z + _v2.z * length
      );
      idx += 1;
    }
  }
  position.needsUpdate = true;
  return geometry;
}
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
    this.initSky();
    this.sky.initShaderSky({
      scale: 10000,
      turbidity: 2,
      rayleigh: 4,
      postion: [15, 2, -20],
    });
    // this.gScenes[this.sceneidx].children[0].traverse((child) => {
    //   console.log(child);
    //   if (child instanceof Mesh) {
    //     // child.visible = false;
    //     let geom = child.geometry.clone();
    //     geom = dilateGeometry(geom, 0.01);
    //     const edges = new EdgesGeometry(geom);
    //     edges.applyMatrix4(child.matrixWorld);
    //     const line = new LineSegments(
    //       edges,
    //       new LineBasicMaterial({
    //         color: 0x00ff00,
    //         opacity: 0.1,
    //         transparent: true,
    //         linewidth: 1,
    //       })
    //     );
    //     this.scene.add(line);
    //   }
    // });
  }
}
