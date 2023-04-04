import { Viewer } from "mool3d";
import { Group, Color, SkinnedMesh } from "three";
export class Index extends Viewer {
  pipeLineArr: THREE.Vector3[];
  mark: THREE.Group;
  currentMark: THREE.Object3D;
  flyModel: THREE.Group;
  object: any;
  constructor(options) {
    super(options);
    this.initModel();
  }
  init() {
    this.pipeLineArr = [];
    this.mark = new Group();
    this.initSource();
    this.initSky();
    this.setEvent();
    this.initFlyModel();
    this.addTransform();
    this.initEnvironment({
      path: "exr.exr",
      type: "exr",
    });
    this.sky.setSkyBox("sky4");
    this.initparade();
    this.flyTo({
      position: [-49, 53, 3],
      controls: [0, 0, 0],
      duration: 2000,
    });
  }

  setRectBox() {
    // this.initRectAreaBox("#ffffff", 5, 1, [0.3, 0.7, 100]);
    // this.rectAreaLight.initBoxHelper(30);
  }
  setRectArea() {
    this.initRectArea("#fff", 10, 10, 200);
    this.rectAreaLight.light.position.set(0, 100, 0);
    // this.rectAreaLight.initHelper(30);
  }
  setRectBoxPosition(position, width = 5) {
    this.rectAreaLight.areaLight.children.forEach((light, index) => {
      switch (index) {
        case 0:
          light.position.set(position[0], width + position[1], position[2]);
          light.lookAt(position[0], width / 2, position[2]);
          break;
        case 1:
          light.position.set(
            width / 2 + position[0],
            width / 2 + position[1],
            position[2]
          );
          light.lookAt(position[0], width / 2 + position[1], position[2]);
          break;
        case 2:
          light.position.set(
            -width / 2 + position[0],
            width / 2 + position[1],
            position[2]
          );
          light.lookAt(position[0], width / 2 + position[1], position[2]);
          break;
        case 3:
          light.position.set(position[0], position[1], position[2]);
          light.lookAt(position[0], width / 2 + position[1], position[2]);
          break;
        case 4:
          light.position.set(
            position[0],
            width / 2 + position[1],
            width / 2 + position[2]
          );
          light.lookAt(position[0], width / 2 + position[1], position[2]);
          break;
        case 5:
          light.position.set(
            position[0],
            width / 2 + position[1],
            -width / 2 + position[2]
          );
          light.lookAt(position[0], width / 2 + position[1], position[2]);
          break;
        default:
          break;
      }
    });
  }
  initFlyModel() {
    this.model.loadModel(
      this.options.path + "glb/model.glb",
      this.sceneidx,
      (glb) => {
        let name = [
          "Object_14",
          "Object_13",
          "Object_12",
          "Object_11",
          "Object_10",
        ];
        glb.scale.set(1.3, 1.3, 1.3);
        glb.visible = false;
        this.flyModel = glb;
        this.flyModel.traverse((child) => {
          if (
            child instanceof SkinnedMesh &&
            child.material.isMeshStandardMaterial
          ) {
            child.material.color = new Color("#292c33");
            child.material.roughness = 0.1;
            child.material.metalness = 1;
            child.material.envMapIntensity = 2;
            if (name.includes(child.name)) {
              child.material.emissive = new Color("#14cecd");
              child.material.emissiveIntensity = 20;
            }
          }
        });
        this.scene.add(glb);
        // this.setRectBox();
        this.setRectArea();
        // this.model.playAllClipes(this.sceneidx);
      }
    );
  }
  //控制器
  addTransform() {
    this.controls.initTransform(this.sceneidx);
    this.controls.transformControls.setSize(0.7);
    this.controls.transformControls.addEventListener(
      "dragging-changed",
      (event) => {
        this.controls.orbitControls.enabled = !event.value;
        this.pipeLineArr[this.currentMark.userData.index] =
          this.currentMark.position.clone();
        if (!event.value) {
          this.controls.transformControls.detach();
          this.reload();
        }
      }
    );
  }
  /*
   *@description: 重绘
   *@author: yangj
   *@date: 2023-03-10 20:09:21
   *@return:
   */
  reload() {
    this.parade.clear();
    this.mark.clear();
    this.parade.drawPipeLine(this.pipeLineArr);
    // this.initMark();
  }
  /*
   *@description: 初始化巡游类
   *@author: yangj
   *@date: 2023-03-10 19:57:00
   *@return:
   */
  initparade() {
    let pipeTexture = this.souce.loadTexture({
      path: "/docs/public/images/line.png",
    });
    this.initParade({
      pipeParams: {
        tubularSegments: 80,
        radius: 0.15,
        radialSegments: 16,
        closed: false,
      },
      pipeTexture: pipeTexture,
      scene: this.gScenes[this.sceneidx],
      animate: this.animate.animateFuntion,
      speed: 1,
      object: this.object,
    });
    this.animate.animateFuntion.push((dt) => {
      pipeTexture.offset.x -= dt / 2;
    });
  }
  /*
   *@description: 标记点
   *@author: yangj
   *@date: 2023-03-10 19:56:49
   *@return:
   */
  initMark() {
    this.pipeLineArr.map((item, index) => {
      let mark = this.loadSprite({
        texture: this.souce.loadTexture({
          path: "/docs/public/images/cycle.png",
        }),
        name: "mark",
      });
      mark.position.copy(item);
      mark.userData.index = index;
      mark.scale.set(0.1, 0.1, 0.1);
      this.mark.add(mark);
    });
    this.gRayGroup[this.sceneidx].add(this.mark);
  }
  /*
   *@description: 开始巡游
   *@author: yangj
   *@date: 2023-03-10 19:56:17
   *@return:
   */
  startParade() {
    this.reload();
    this.parade.pipeLine.visible = false;
    this.controls.orbitControls.enabled = true;
    this.controls.transformControls.detach();
    this.parade.autoParade((type, { point, pointLook }) => {
      if (type === "start") {
        if (this.object instanceof Group) {
          this.activeCamera.position.set(
            pointLook.x - 1,
            pointLook.y + 5,
            pointLook.z - 12
          );
          this.activeCamera.lookAt(point);
          // this.setRectBoxPosition([point.x, point.y + 1, point.z]);
          this.rectAreaLight.light.position.set(
            point.x,
            point.y + 3,
            point.z + 2
          );
          this.rectAreaLight.light.lookAt(point);
        }
      } else {
        this.controls.orbitControls.enabled = false;
        this.parade.stop = true;
        this.parade.progress = 0;
        this.parade.direction = "GO";
        this.parade.pipeLine.visible = true;
        this.ambient.setLight(1.5, 0.7);
        this.flyTo({
          position: [-49, 53, 3],
          controls: [0, 0, 0],
          duration: 2000,
        });
      }
    });
  }
  /*
   *@description: 拾取模型位置
   *@author: yangj
   *@date: 2023-03-10 19:56:32
   *@return:
   */
  setEvent() {
    this.initEvent(["click", "dblclick"]);
    // this.event.typesFn.dblclick.push((e) => {
    //   let point: THREE.Vector3 = e.list[0].point.clone();
    //   point.y += 1;
    //   this.pipeLineArr.push(point);
    //   this.reload();
    //   console.log(
    //     " this.pipeLineArr",
    //     this.pipeLineArr.map((e) => {
    //       return `new Vector3(${[e.x, e.y, e.z]})`;
    //     })
    //   );
    // });
    this.event.typesFn.click.push((e) => {
      if (e.list[0].object.type === "Sprite") {
        this.currentMark = e.list[0].object.parent;
        this.controls.transformControls.attach(e.list[0].object.parent);
      }
    });
  }
}
