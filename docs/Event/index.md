# 模型类

<Index />

<script setup>
import Index from './event.vue'
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
type EventTypes = ['click','dblclick','mousemove']
sceneA.initEvent(types: EventTypes[])
```

## API

<style>
    table th:nth-of-type(1) {
        width: 200px;
    }
    table th:nth-of-type(2) {
        width: 250px;
    }
</style>

| Viewer    | 描述                                   | 参数                |
| --------- | :------------------------------------- | ------------------- |
| 属性      |                                        |                     |
| event     | 模型类(在 Viewer 通过 this.event 访问) |
| 方法      |                                        |                     |
| initEvent | 事件注册                               | types: EventTypes[] |

| 实例下  | 描述             |                              |
| ------- | :--------------- | ---------------------------- |
| 属性    |                  | 类型                         |
| types   | 事件类型         | EventTypes[]                 |
| typesFn | 各类事件函数解藕 | {[P in EventTypes]?: Fn[]; } |
| 方法    |                  | 参数                         |
| init    | 初始化方法       |                              |
