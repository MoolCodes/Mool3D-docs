## 引擎的设计思想

```ts
目前引擎的大致目录
 - threejs
   - plugins
    - camera.ts
    - render.ts
    ......
   - libs
   - types
    - types.ts
   - index.ts
```

本引擎是个人完成的，建议按照我所设计的思想去开发。

设计思路：依照目录结构大致分为入口文件 （index.ts）/插件类（plugins 文件夹）/类型（types 文件夹）/依赖（libs 文件夹）

```js
入口文件：提供一个 Viewer 类作为主类在其上挂着plugins下的各个子类。这边不建议直接绕过
Viewer 直接使用plugins
```

```js
plugins文件下放各个细化的子类如 camera/render/controls等
如有定制化的子类建议通过 Viewer 类来承载使用

libs 依赖类 threejs中所依赖的文件

types 类型声明的文件
```

## 业务扩展建议

当然我们日常开发中会涉及到相关的业务类，如何在引擎上进行扩展呢？

```js
由于时间的累积，都在主类上扩展相关实例或者方法的话，代码会越来越冗余，不易维护。
这边建议模块化来开发，通过声明业务类继承主类的方式扩展相关的业务代码，不同的场景有不同的业务类，
互不影响，方便维护。
```
