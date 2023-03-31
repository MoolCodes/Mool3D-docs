---
threejs 引擎说明
---

## 介绍

Threejs 是 以 webgl 为基座的一个框架，帮助在日常开发中减少进行复杂的数学运算，封装了多样性的数学方法。

本引擎对 threejs 做了二次的封装，更加方便与日常的开发使用。采用工厂模式与单例模式相结合的方式，通过 typeScript 进行类型的约束。

## 引入引擎

```js
el: canvas画布元素;
tween: 过渡库;
```

```js
import { Viewer } from "/@/threejs/index";
//基础使用

new Viewer({
  el: el as HTMLElement,
  tween: TWEEN,
  path:''
});
```

## 所需依赖

```js
threejs：版本尽量要大于143
tweenjs：提供视角过渡动画的库
axios：请求库
mitt：eventBus（看框架适配只要是事件总线都可）
typescript：ts识别库
```

```js
{
  "three": "^0.143.0",
  "@tweenjs/tween.js": "^18.6.4",
  "axios": "^0.26.1",
  "mitt": "^3.0.0",
  "typescript": "^4.6.3",
}
```
