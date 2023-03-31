# 粒子类

<Index />

<script setup>
import Index from './sprite.vue'
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
sceneA.initSource();
sceneA.loadSprite({
  texture: sceneA.souce.loadTexture({
    path: "/docs/public/images/SXT.png",
  }),
  name: "sprite",
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

| Viewer      |                                                                |          |
| ----------- | :------------------------------------------------------------- | -------- |
| 属性        | 描述                                                           |          |
| spriteGroup | 粒子组（场景中所有的粒子）                                     |          |
| 方法        | 参数                                                           | 描述     |
| loadSprite  | texture:粒子贴图<br/>name:粒子名称<br/>return:（返回粒子对象） | 加载粒子 |

| 实例下 |                                                    |                    |
| ------ | :------------------------------------------------- | ------------------ |
| 属性   | 描述                                               | 类型               |
| sprite | 粒子对象                                           | Object3D           |
| 方法   | 参数                                               | 描述               |
| init   | options:{<br/>texture:贴图<br/>name:粒子名称<br/>} | 加载粒子初始化方法 |
