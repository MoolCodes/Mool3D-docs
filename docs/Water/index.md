# water 类

<index />

<script setup>
import index from './water.vue'
</script>

## 使用

```js
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
  sunPosition: new Vector3(0, 5, 0),
  sunColor: "#e19d6a",
  waterColor: "#e19d6a",
  distortionScale: 0.7,
  time: 1 / 100,
  scene: this.scene,
});
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

| Viewer    |                                                                                                                                                                                                                                                                                                                                                              |            |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 属性      | 描述                                                                                                                                                                                                                                                                                                                                                         |            |
| water     | 构造器对象（Viewer 中通过 this.water 访问）                                                                                                                                                                                                                                                                                                                  |            |
| 方法      | 参数                                                                                                                                                                                                                                                                                                                                                         | 描述       |
| initWater | {<br/>radius:半径(number),<br/>textureWidth:贴图宽度(number),<br/>textureHeight:贴图高度(number),<br/>sunPosition:阳光位置(Vector3),<br/>sunColor:阳光颜色(string),<br/>waterColor:水的颜色(string),<br/>waterPosition:水的位置(Vector3),<br/>distortionScale:倒影形变程度(number),<br/>time:水的运动速度(number),<br/>texture:水的贴图(TextureLoader)<br/>} | 初始化方法 |

| 实例下  |                                  |
| ------- | :------------------------------- |
| 属性    | 描述                             |
| water   | 访问水实例，可修改水的着色器参数 |
| time    | 修改水运动速度                   |
| 方法    | 描述                             |
| init    | 初始化                           |
| destory | 销毁                             |
