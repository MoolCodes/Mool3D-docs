<template>
  <div>
    <div class="wrap">
      <!--    loding-->
      <div class="loading" v-show="loading">
        <div class="loading-text">
          <span class="loading-text-words">L</span>
          <span class="loading-text-words">O</span>
          <span class="loading-text-words">A</span>
          <span class="loading-text-words">D</span>
          <span class="loading-text-words">I</span>
          <span class="loading-text-words">N</span>
          <span class="loading-text-words">G</span>
        </div>
        <div class="loding-percent">{{ parseInt(progressNum) }}%</div>
      </div>
      <!--转场动画-->
      <div class="container" v-show="transition">
        <span class="container-text">{{ transitionText }}</span>
      </div>
      <div ref="refmap" id="map" class="map"></div>
      <div class="tips" v-show="tips">
        <div class="loading-text">
          <span class="loading-text-words">请</span>
          <span class="loading-text-words">点</span>
          <span class="loading-text-words">击</span>
          <span class="loading-text-words">下</span>
          <span class="loading-text-words">方</span>
          <span class="loading-text-words">按</span>
          <span class="loading-text-words">钮</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <button class="custom-btn btn-3" @click="snow">
        <span>雪花❄️</span>
      </button>
      <button class="custom-btn btn-6" @click="rain">
        <span>雨水🌧️</span>
      </button>
      <button class="custom-btn btn-16" @click="smoke">
        <span>烟雾🌫️</span>
      </button>
      <button class="custom-btn btn-8" @click="starfield">
        <span>星星🌟</span>
      </button>
    </div>
    <div class="btn">
      <button class="custom-btn btn-3" @click="candle">
        <span>火焰🔥</span>
      </button>
      <button class="custom-btn btn-6" @click="firework">
        <span>烟花🎆</span>
      </button>
      <button class="custom-btn btn-16" @click="clouds">
        <span>云☁️</span>
      </button>
      <button class="custom-btn btn-8" @click="fireflies">
        <span>萤火虫🐛</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Index } from "./particle";
import { ref, onMounted, watch, onBeforeUnmount, unref } from "vue";
import TWEEN from "@tweenjs/tween.js";
import bus from "../public/eventBus";

const props = defineProps({
  sceneId: {
    type: String,
    default: "0",
  },
  visible: {
    type: Boolean,
    default: false,
  },
});
const refmap = ref();
let sceneA: any;
let tips = ref(false);
let loading = ref<boolean>(true);
let transition = ref<boolean>(false);
let transitionText = ref<string>("");
let progressNum = ref<string>("0");
onMounted(() => {
  init();
});
onBeforeUnmount(() => {
  sceneA && sceneA.destroy();
  bus.off("scene");
});
bus.on("scene", (info: any) => {
  const map = {
    loading: () => {
      //加载
      progressNum.value = info.progressNum;
      loading.value = info.value;
    },
    transition: () => {
      //过度
      transition.value = info.value;
    },
  };
  map[info.type]();
});
watch(
  () => progressNum,
  (e) => {
    bus.emit("progressNum", unref(e));
    if (parseInt(unref(e)) >= 100) {
      setTimeout(() => {
        loading.value = false;
        transition.value = true;
        setTimeout(() => {
          transition.value = false;
        }, 1500);
      }, 1000);
    }
  },
  {
    deep: true,
  }
);
watch(
  () => props.sceneId,
  () => {},
  {
    deep: true,
    immediate: true,
  }
);
//初始化
const init = () => {
  const el = refmap.value;
  sceneA = new Index({
    el: el as HTMLElement,
    tween: TWEEN,
    path: "../public/scene/",
    bus,
  });
  setScene("1");
};
const snow = () => {
  sceneA.snow();
};
const rain = () => {
  sceneA.rain();
};
const starfield = () => {
  sceneA.starfield();
};
const fireflies = () => {
  sceneA.fireflies();
};
const candle = () => {
  sceneA.candle();
};
const clouds = () => {
  sceneA.clouds();
};
const firework = () => {
  sceneA.firework();
};
const smoke = () => {
  sceneA.smoke();
};
//切换场景
const setScene = (scene: string) => {
  switch (scene) {
    case "1":
      sceneA.setScene(2, () => {
        sceneA.init();
      });
      transitionText.value = "粒子系统";
      sceneA.flyTo({
        position: [-20, 50, 40],
        controls: [-20, 50, 0],
        duration: 2000,
      });
      break;
    default:
      break;
  }
};
</script>

<style scoped>
@import url(../public/css/index.css);
.wrap,
.map {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  z-index: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 5px #23272d, 0px 0px 4px 2px #23272d;
}

.loading {
  width: 100%;
  height: 300px;
  background: #000000;
  z-index: 100002;
}

.loding-percent {
  font-family: fcdD;
  font-size: 18px;
  margin: auto;
  width: 100px;
  height: 80px;
  text-align: center;
  transform: translate(0, 70%);
  color: #ffffff;
}

.loading-text {
  margin: auto;
  text-align: center;
  width: 100%;
  height: 100px;
  line-height: 260px;
}

.loading-text span {
  display: inline-block;
  margin: 0 5px;
  font-size: 20px;
  color: #ffffff;
}

.loading-text span:nth-child(1) {
  filter: blur(0px);
  animation: blur-text 1.5s 0s infinite linear alternate;
}

.loading-text span:nth-child(2) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.1s infinite linear alternate;
}

.loading-text span:nth-child(3) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.2s infinite linear alternate;
}

.loading-text span:nth-child(4) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.3s infinite linear alternate;
}

.loading-text span:nth-child(5) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.4s infinite linear alternate;
}

.loading-text span:nth-child(6) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.5s infinite linear alternate;
}

.loading-text span:nth-child(7) {
  filter: blur(0px);
  animation: blur-text 1.5s 0.7s infinite linear alternate;
}

.button {
  z-index: 1000;
}

@keyframes blur-text {
  0% {
    filter: blur(0px);
  }

  100% {
    filter: blur(3px);
  }
}

@keyframes move-letter {
  0% {
    opacity: 0;
    letter-spacing: -40px;
    filter: blur(3px);
  }

  25% {
    opacity: 1;
  }

  50% {
    letter-spacing: 0px;
    filter: blur(1px);
  }

  75% {
    letter-spacing: 10px;
    filter: blur(0.5px);
  }

  100% {
    letter-spacing: 10px;
  }
}

.container {
  width: 100%;
  height: 300px;
  margin: auto;
  z-index: 99;
  text-align: center;
  background-color: #000;
  filter: contrast(30);
}
.container-text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: fcdD;
  transform: translate(-50%, -50%);
  font-size: 20px;
  letter-spacing: -40px;
  color: #fff;
  animation: move-letter 1.5s linear infinite forwards;
}
.btn {
  margin-top: 20px;
  display: flex;
  padding: 0 10px;
  justify-content: space-around;
}
.tips {
  position: absolute;
  z-index: 99;
  top: 70px;
  left: 50%;
  font-size: 20px;
  transform: translate(-50%, -50%);
}
.tips .loading-text span {
  background: linear-gradient(180deg, #00f5fd 0%, #006be1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
