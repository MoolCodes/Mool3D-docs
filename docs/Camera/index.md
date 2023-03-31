# 相机类

<camera />

<script setup>
import camera from './camera.vue'
</script>

## 使用

```js
内置方法，主类已经默认加载相机
el:dom元素
new Camera(el);

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

| Viewer | 描述                                                       |                                             |
| ------ | :--------------------------------------------------------- | ------------------------------------------- |
| 属性   | 描述                                                       |                                             |
| camera | 相机对象（Viewer 中通过 this.activeCamera 访问）           |                                             |
| 方法   | 参数                                                       | 描 述                                       |
| flyTo  | tween:过渡对象<br/>controls:控制器类<br/>option:见下方详解 | 相机飞行方法(Viewer 中通过 this.flyTo 调用) |

| flyTo 参数 | 详解                                                              |
| ---------- | :---------------------------------------------------------------- |
| option     | position:位置 <br/> controls:中心偏移<br/> duration:运动时长<br/> |
| 回调函数   | start:开始 <br/> done:结束<br/> stop:暂停<br/>update:更新         |
