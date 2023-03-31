# 模型类

<Index />

<script setup>
import Index from './model.vue'
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
sceneA.setScene(index,callback)
```

## API

<style>
    table th:nth-of-type(1) {
        width: 200px;
    }
    table th:nth-of-type(2) {
        width: 200px;
    }
</style>

| Viewer   | 描述                                   | 参数                                         |
| -------- | :------------------------------------- | -------------------------------------------- |
| 属性     |                                        |                                              |
| model    | 模型类(在 Viewer 通过 this.model 访问) |
| 方法     |                                        |                                              |
| setScene | 初始化与切换场景                       | index:场景 id<br/> callback:模型加载成功回调 |

| 实例下         | 描述                 |                                                                                                    |
| -------------- | :------------------- | -------------------------------------------------------------------------------------------------- |
| 属性           |                      | 类型                                                                                               |
| mixer          | 动画实例             |                                                                                                    |
| animate        | 开始暂停执行动画     | boolean                                                                                            |
| deepFunction   | 深度处理模型函数     | fn[]                                                                                               |
| 方法           |                      | 参数                                                                                               |
| load           | 加载配置文件渲染模型 | sceneidx:当前场景 id(number) <br/>callback:模型加载成功回调                                        |
| loadModel      | 加载文件渲染模型     | url:文件路径(string) <br/>sceneidx:场景 id(number)<br/>callback:模型加载成功回调(携带模型对象回参) |
| playAllClipes  | 执行全场景动画       | sceneidx:当前场景 id (number)                                                                      |
| playNameClipes | 执行名称动画         | sceneidx:当前场景 id (number)<br/>clipName:动画名称 (string)                                       |
