# 控制器类

<Index />

<script setup>
import Index from './control.vue'
</script>

## 使用

```js
内置方法，主类已经默认加载相机
new Control({
    camera,
    renderer,
    scene
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

| Viewer   | 描述                                          |
| -------- | :-------------------------------------------- |
| 属性     |                                               |
| controls | 控制器对象（Viewer 中通过 this.controls 访问) |

| 实例下            | 描述                       |
| ----------------- | :------------------------- |
| 属性              |                            |
| orbitControls     | 轨道控制器(属性方法见官网) |
| transformControls | 变换控制器(属性方法见官网) |
