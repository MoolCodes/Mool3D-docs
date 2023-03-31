# 动画类

<Index />

<script setup>
import Index from './animate.vue'
</script>

## 使用

```js
内置方法，主类已经默认加载相机
el:dom元素
new Animate({
  clock:时钟对象
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

| Viewer  | 描述                                      |
| ------- | :---------------------------------------- |
| animate | 动画对象（Viewer 中通过 this.animate 访问 |

| 实例下         | 描述                                                                                                |
| -------------- | :-------------------------------------------------------------------------------------------------- |
| frameId        | requestAnimationFrame 对象                                                                          |
| animateFuntion | 帧动画执行组（类型:Fn[]）<br/>通过 this.animate.animateFuntion.push(()=>{})传递需要执行帧动画的逻辑 |
