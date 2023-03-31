# 主类

<Index />

<script setup>
import Index from './index.vue'
</script>

## 使用

```js
el:dom元素
tween:过渡库
path:加载路径
new Viewer({
  el: el as HTMLElement,
  tween: TWEEN,
  path:''
});
```

## API

<style>
    table th:nth-of-type(1) {
        width: 20%;
    }
    table th:nth-of-type(2) {
        width: 40%;
    }
    table th:nth-of-type(3) {
        width: 40%;
    }
</style>

| 属性            | 描述                        |
| --------------- | :-------------------------- |
| scene           | 当前场景容器                |
| gAmGroup        | 环境场景                    |
| gRayGroup       | 鼠标射线拾取组              |
| gScenes         | 所有场景容器                |
| gStatus         | 场景是否存于内存            |
| sceneidx        | 当前场景 id                 |
| model           | 模型类（执行 initModel 后） |
| clock           | 时钟对象                    |
| cameraType      | 相机类                      |
| activeCamera    | 当前激活相机                |
| renderer        | 渲染类                      |
| controls        | 控制器类                    |
| animate         | 帧动画执行类                |
| sky             | 天空类                      |
| environment     | 环境贴图                    |
| ambient         | 环境光                      |
| hemisphereLight | 半球光                      |
| directional     | 平行光                      |
| pointGroup      | 点光源组合                  |
| spotLight       | 聚光灯                      |
| rectAreaLight   | 区域光                      |
| event           | 事件                        |
| souce           | 资源加载                    |
| parade          | 巡游                        |
| spriteGroup     | 粒子组合                    |
| fog             | 雾                          |
| water           | 水                          |

| 方法               | 参数                                                                                                                                                                                        | 描述                                     |
| ------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| setScene           | index:场景 id,callback:加载成功回调                                                                                                                                                         | 加载场景                                 |
| flyTo              | { <br/>position:相机位置[],<br/> controls?:中心点位置[],<br/>duration?:动画时间,<br/>easing?:动画模式,<br/>start:开始回调,<br/>done:结束回调,<br/>stop:暂停回调,<br/>update:更新回调 <br/>} | 相机飞行                                 |
| destroy            | 无                                                                                                                                                                                          | 销毁场景                                 |
| initSky            | 无                                                                                                                                                                                          | 天空盒子类初始化(两种不同类型的天空盒子) |
| initEnvironment    | {<br/>path:资源路径(options.path 底下的相对路径),<br/>type:类型(hdr/exr)<br/>}                                                                                                              | 环境贴图初始化                           |
| initEvent          | types: ["click" , "dblclick" , "mousemove" ]                                                                                                                                                | 鼠标事件初始化                           |
| initModel          | 无                                                                                                                                                                                          | 模型加载类                               |
| initSkyLight       | skyColor:天空的灯颜色/ earthColor:地板灯颜色 /intensity:强度                                                                                                                                | 半球光                                   |
| initDirectional    | color:颜色 /intensity:强度                                                                                                                                                                  | 平行光                                   |
| initPointLight     | color:颜色/intensity:强度/ distance:距离                                                                                                                                                    | 点光源                                   |
| initSpotLight      | color:颜色/intensity:强度/ distance:距离/ target:照射对象(Vector3)                                                                                                                          | 聚光灯                                   |
| initRectArea       | color:颜色/width:宽度/height:高度/intensity:强度/                                                                                                                                           | 单个区域光                               |
| initRectAreaBox    | color:颜色/width:矩形边长/intensity:强度/ position:位置                                                                                                                                     | 模型加载类                               |
| initFog            | 无                                                                                                                                                                                          | 雾初始化                                 |
| initWater          | 详情看水相关类                                                                                                                                                                              | 水初始化                                 |
| initSource         | 无                                                                                                                                                                                          | 资源加载初始化                           |
| loadSprite         | {texture:图片,name:名称}                                                                                                                                                                    | 加载粒子                                 |
| initParade         | 详情查看巡游类                                                                                                                                                                              | 巡游                                     |
| initParticleEngine | 详情查看粒子系统类                                                                                                                                                                          | 粒子系统                                 |
| getParticleTween   | 详情查看粒子系统类                                                                                                                                                                          | 粒子系统过度动画                         |
| setParticleMode    | 详情查看粒子系统类                                                                                                                                                                          | 设置粒子模式                             |
