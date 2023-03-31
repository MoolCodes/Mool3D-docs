# 雾类

<index />

<script setup>
import index from './fog.vue'
</script>

## 使用

```js
this.initFog();
this.fog.initFog("#cccccc", 10, 500);
this.fog.initFogExp("#cccccc", 1);
```

## API

<style>
       table th:nth-of-type(1) {
        width: 100px;
    }
    table th:nth-of-type(2) {
        width: 500px;
    }
</style>

| Viewer  | 描述                                      |
| ------- | :---------------------------------------- |
| 属性    |                                           |
| fog     | 构造器对象（Viewer 中通过 this.fog 访问） |
| 方法    |                                           |
| initFog | 初始化方法                                |

| 实例下     | 参数                                                      | 描述       |
| ---------- | :-------------------------------------------------------- | ---------- |
| 方法       |                                                           |            |
| initFog    | color:颜色<br/>near:开始雾的最小距离<br/>far:雾的最大距离 | 雾         |
| initFogExp | color:颜色<br/>density:雾的密度增长的速度                 | 线性增长雾 |
