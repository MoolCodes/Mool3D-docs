# 天空类

<Index />

<script setup>
import Index from './sky.vue'
</script>

## 使用

```js
el:dom元素
tween:过渡库
path:加载路径
sceneA = new Index({
  el: el as HTMLElement,
  tween: TWEEN,
  path: "../public/scene/",
});
sceneA.initSky();
//天空盒子
sceneA.sky.setSkyBox("sky4");
//着色器天空
sceneA.sky.initShaderSky({
  scale: 100,
  turbidity: 2,
  rayleigh: 4,
  postion: [15, 2, -20],
});
```

## API

<style>
    table th:nth-of-type(1) {
        width: 100px;
    }
    table th:nth-of-type(2) {
        width: 600px;
    }
</style>

| Viewer        | 描述                                                 |                        |
| ------------- | :--------------------------------------------------- | ---------------------- |
| 属性          |                                                      |                        |
| sky           | 天空类                                               |                        |
| 方法          | 描述                                                 | 参数                   |
| setSkyBox     | 天空盒子（例：（'sky4'）加载 path 下的 sky4 文件夹） | flieName               |
| initShaderSky | 着色器类                                             | ShaderSkyParams 见下方 |

| 名称            | 参数             | 类型     |
| --------------- | :--------------- | -------- |
| ShaderSkyParams | scale:大小       | number   |
|                 | turbidity:浑浊度 | number   |
|                 | rayleigh:散射    | number   |
|                 | postion:位置     | number[] |
