# 粒子系统

<Index />

<script setup>
import Index from './particle.vue'
</script>

## 使用

```js
export class Index extends Viewer {
  particle: ParticleEngineType;
  constructor(options) {
    super(options);
  }
  init() {
    this.particle = this.initParticleEngine(this.particle, true);
  }
  snow() {
    this.setParticleMode(this.particle, "snow", {
      positionBase: new Vector3(0, 150, 0),
      positionSpread: new Vector3(400, 0, 400),
      velocityBase: new Vector3(20, -100, 0),
      velocitySpread: new Vector3(-10, -50, 0),
      particlesPerSecond: 50,
      particleDeathAge: 3,
      sizeTween: this.getParticleTween([0, 0.25], [10, 13]),
    });
  }
}
```

## API

<style>
    table th:nth-of-type(1) {
        width: 100px;
    }
    table th:nth-of-type(2) {
        width: 350px;
    }
</style>

| Viewer 下方法      | 参数                                                                            | 描述         |
| ------------------ | :------------------------------------------------------------------------------ | ------------ |
| initParticleEngine | particle:粒子接收对象<br/> mugen:是否无限循环                                   | 粒子类初始化 |
| setParticleMode    | particle:粒子接收对象<br/> key:粒子类型<br/>ParticleExamplesParams:粒子配置对象 | 设置粒子模式 |
| getParticleTween   | times:时间过渡区间([0.5,1])<br/>values:数值过渡区间([10, 13])                   | 粒子过渡函数 |

| 实例下     | 描述                                              |              |
| ---------- | :------------------------------------------------ | ------------ |
| 属性       | 描述                                              | 类型         |
| mugen      | 是否无限循环                                      | boolean      |
| scene      | 场景                                              | THREE.Scene  |
| start      | 是否开始运动动画                                  | boolean      |
| 方法       | 参数                                              | 描述         |
| initialize | 无                                                | 粒子组初始化 |
| setValues  | parameters:粒子配置对象<br/>params:自定义配置对象 | 粒子模式     |
| update     | dt:时间                                           | 粒子更新     |
| destroy    | 无                                                | 粒子销毁     |

<style>
    table th:nth-of-type(1) {
        width: 100px;
    }
    table th:nth-of-type(2) {
        width: 250px;
    }
</style>

| 粒子配置对象        | 类型          | 描述                                         |
| ------------------- | :------------ | -------------------------------------------- |
| positionBase        | THREE.Vector3 | 初始位置                                     |
| positionStyle       | 1/2           | cube or sphere                               |
| positionSpread      | THREE.Vector3 | 初始位置随机累加值（差异化）                 |
| positionRadius      | number        | sphere 类型的粒子扩散范围                    |
| velocityStyle       | 1/2           | cube or sphere                               |
| velocityBase        | THREE.Vector3 | 粒子运动方向以及速度                         |
| velocitySpread      | THREE.Vector3 | 初始化粒子运动方向和速度随机累加值（差异化） |
| speedBase           | number        | sphere 类型粒子扩散速度                      |
| speedSpread         | number        | sphere 类型粒子扩散速度随机累加值（差异化）  |
| accelerationBase    | THREE.Vector3 | 运动初始加速度                               |
| accelerationSpread  | THREE.Vector3 | 运动加速度随机累加值（差异化）               |
| angleBase           | number        | 角度初始值                                   |
| angleSpread         | number        | 角度初始化随机累计值（差异化）               |
| angleVelocityBase   | number        | 角度随着运动增量                             |
| angleVelocitySpread | number        | 角度增量随机累加值（差异化）                 |
| sizeBase            | number        | 大小初始值                                   |
| sizeSpread          | number        | 大小初始化随机累加值（差异化）               |
| sizeTween           | ParticleTween | 大小随时间变化过渡函数                       |
| colorBase           | THREE.Vector3 | 颜色初始值                                   |
| colorSpread         | THREE.Vector3 | 颜色初始化随机累加值（差异化）               |
| colorTween          | ParticleTween | 颜色随时间变化过渡函数                       |
| opacityBase         | number        | 透明度初始值                                 |
| opacitySpread       | number        | 透明度初始化随机累加值（差异化）             |
| opacityTween        | ParticleTween | 透明度随时间变化过渡函数                     |
| particlesPerSecond  | number        | 每秒产生粒子数量                             |
| particleDeathAge    | number        | 粒子存活时间                                 |
| emitterDeathAge     | number        | 结束粒子运动时间                             |
