# 灯光类

<index />

<script setup>
import index from './light.vue'
</script>

## 使用

```js
this.ambient.setLight(1.5, 1); //场景光
this.initSkyLight("#66dd7a", "#66dd7a", 2); //半球光
this.initDirectional("#db5847", 2); //平行光
this.pointIndex = this.initPointLight("#db5847", 3, 0); //点光源
this.initSpotLight("#db5847", 5, 600, new Vector3(0, 0, 0)); //聚光灯
this.initRectArea("#fff", 100, 100, 30); //区域光
this.initRectAreaBox("#fff", 150, 150, 5, [10, 0, 50]); //光盒

//初始化光的位置是0,0,0(修改位置等信息见下方)
setRect() {
  this.clearLight();
  this.initRectArea("#fff", 100, 100, 30);
  this.rectAreaLight.light.position.set(100, 100, 100);
  this.rectAreaLight.light.lookAt(0, 0, 0);
  this.rectAreaLight.initHelper(30);
}
```

## API

<style>
       table th:nth-of-type(1) {
        width: 100px;
    }
    table th:nth-of-type(2) {
        width: 400px;
    }
</style>

| Viewer          |                                                                                                                                |              |
| --------------- | :----------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 属性            | 描述                                                                                                                           | 类型         |
| ambient         | 构造器对象（Viewer 中通过 this.ambient 访问）                                                                                  | 场景光类     |
| hemisphereLight | 构造器对象（Viewer 中通过 this.hemisphereLight 访问）                                                                          | 半球光类     |
| directional     | 构造器对象（Viewer 中通过 this.directional 访问）                                                                              | 平行光类     |
| pointGroup      | 构造器对象（Viewer 中通过 this.pointGroup 访问）                                                                               | 点光源组类   |
| spotLight       | 构造器对象（Viewer 中通过 this.spotLight 访问）                                                                                | 聚光灯类     |
| rectAreaLight   | 构造器对象（Viewer 中通过 this.rectAreaLight 访问）                                                                            | 区域光类     |
| 方法            | 参数                                                                                                                           | 描述         |
| initSkyLight    | skyColor:天空光颜色(string),<br/>earthColor:地板光颜色(string),<br/>intensity:强度(number)                                     | 半球光初始化 |
| initDirectional | color:光颜色(string),<br/>intensity:强度(number)                                                                               | 平行光初始化 |
| initPointLight  | color:光颜色(string),<br/>intensity:强度(number),<br/>distance:距离(number), decay?:衰减(number)=>pointGroup 中的下标          | 点光源初始化 |
| initSpotLight   | color:光颜色(string),<br/>intensity:强度(number),<br/>distance:距离(number), target?:聚焦位置(Vector3)                         | 聚光灯初始化 |
| initRectArea    | color:光颜色(string),<br/>width:宽度(number),<br/>height:高度(number),<br/>intensity:强度(number)                              | 区域光初始化 |
| initRectAreaBox | color:光颜色(string),<br/>width:宽度(number),<br/>height:高度(number),<br/>intensity:强度(number),<br/>position:位置(number[]) | 光盒初始化   |

| 各实例下                | 描述                         |
| ----------------------- | :--------------------------- |
| 属性                    |                              |
| light                   | 光对象(通过这里修改光的属性) |
| helper                  | 光辅助对象                   |
| 方法                    | 描述                         |
| initHelper              | 光辅助对象初始化             |
| destory                 | 销毁光                       |
| initBoxHelper(光盒特有) | 光盒辅助对象初始化           |
