# 巡游类

<index />

<script setup>
import index from './parade.vue'
</script>

## 使用

```js
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
  object: this.activeCamera,
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

| Viewer     |                                                                                                                           |            |
| ---------- | :------------------------------------------------------------------------------------------------------------------------ | ---------- |
| 属性       | 描述                                                                                                                      |            |
| parade     | 构造器对象（Viewer 中通过 this.parade 访问）                                                                              |            |
| 方法       | 参数                                                                                                                      | 描述       |
| initParade | pipeParams:管道参数<br/> pipeTexture:管道贴图<br/> scene:场景<br/> animate:帧动画函数 <br/>speed:速度<br/>object:巡游对象 | 初始化方法 |

| 实例下       |                                                                                                                                                     |          |
| ------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 属性         | 描述                                                                                                                                                | 类型     |
| curve        | 曲线对象                                                                                                                                            | Object3D |
| pipeLine     | 管道对象                                                                                                                                            | Object3D |
| stop         | 暂停                                                                                                                                                | boolean  |
| progress     | 进度                                                                                                                                                | number   |
| speed        | 速度                                                                                                                                                | number   |
| direction    | 方向 （'GO'/'BACK'）                                                                                                                                | string   |
| loop         | 循环                                                                                                                                                | boolean  |
| object       | 巡游对象                                                                                                                                            | Object3D |
| 方法         | 参数                                                                                                                                                | 描述     |
| drawPipeLine | pipeLineArr:Vector3[]                                                                                                                               | 绘制管道 |
| clear        | 无                                                                                                                                                  | 重绘     |
| autoParade   | callback:(<br/>type:过程或者结束(string),<br/>value:{<br/>point:巡游对象所在位置(Vector3),<br/>pointLook:巡游对象未来的位置(Vector3)<br/>   }<br/>) | 巡游     |
