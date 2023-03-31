# 环境贴图类

<Index />

<script setup>
import Index from './environment..vue'
</script>

## 使用

```js
new Environment({
  renderer: this.renderer,
  path: this.options.path,
  scene: this.gScenes[this.sceneidx],
  environment: environment,
});
```

## API

<style>
    table th:nth-of-type(1) {
        width: 200px;
    }
    table th:nth-of-type(2) {
        width: 600px;
    }
</style>

| Viewer          | 描述                                                 |
| --------------- | :--------------------------------------------------- |
| environment     | 环境贴图类对象（Viewer 中通过 this.environment 访问) |
| initEnvironment | 初始化方法 <br/> 参数:下方 environment               |

| 实例下      | 描述                            |
| ----------- | :------------------------------ |
| environment | path:路径<br/>type:'hdr'或'exr' |
| init        | 初始化方法                      |
