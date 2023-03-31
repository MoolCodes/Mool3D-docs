# 渲染类

<render />

<script setup>
import render from './render.vue'
</script>

## 使用

```js
内置方法，主类已经默认使用（需配合Animate类一同使用）
el:dom元素
new Renderer(el)
this.animate?.animateFuntion.push(() => { //类中具体介绍（解藕函数）
  this.renderer.render(scene, camera);
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

| Viewer   | 描述                                           |
| -------- | :--------------------------------------------- |
| 属性     |                                                |
| renderer | 构造器对象（Viewer 中通过 this.renderer 访问） |
