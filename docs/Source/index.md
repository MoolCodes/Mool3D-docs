# 资源类

<index />

<script setup>
import index from './source.vue'
</script>

## 使用

```js
new Source();
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

| Viewer     | 描述                                        |
| ---------- | :------------------------------------------ |
| 属性       |                                             |
| souce      | 构造器对象（Viewer 中通过 this.souce 访问） |
| 方法       |                                             |
| initSource | 初始化方法                                  |

| 实例下      | 参数                                                                              | 描述     |
| ----------- | :-------------------------------------------------------------------------------- | -------- |
| 方法        |                                                                                   |          |
| loadTexture | params:{ <br/> path:路径 ,<br/> onLoad:加载成功回调,<br/> onError:加载失败 <br/>} | 加载贴图 |
