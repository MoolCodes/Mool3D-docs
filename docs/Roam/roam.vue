<template>
  <div class="wrap" @touchmove.prevent>
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
    <div
      v-if="isphone"
      class="rocking"
      @touchstart="touchstart"
      @touchmove.stop="mousemove"
      @touchend.stop="touchend"
    >
      <div
        class="hand"
        :style="{ left: hand[0] + 'px', top: hand[1] + 'px' }"
      ></div>
    </div>
    <div v-if="isphone" class="jump" @touchstart.stop="jump">跳跃</div>
    <div
      v-if="isphone"
      :class="[open ? 'super' : 'super1']"
      @touchstart.stop="first"
    >
      视角
    </div>
    <div
      v-if="!isphone"
      :class="[open ? 'super' : 'super1']"
      @click.stop="first"
    >
      视角
    </div>
  </div>
</template>

<script setup lang="ts">
import { Index } from "./roam";
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
let loading = ref<boolean>(true);
let transition = ref<boolean>(false);
let transitionText = ref<string>("");
let progressNum = ref<string>("0");
let start = ref<[number, number]>([78, 400]);
let hand = ref<[number, number]>([78, 400]);
let open = ref(false);
let isphone = ref(false);
onMounted(() => {
  init();
  isphone.value = !IsPC();
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
  });
  setScene(4);
};
const IsPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
const touchstart = (e) => {
  console.log(e);
};

const mousemove = (e) => {
  e.preventDefault();
  if (e.touches.length > 1) {
    return;
  }
  let angle = getAngle(
    { x: 0, y: 0 - unref(start)[1] },
    {
      x: e.touches[0].clientX - unref(start)[0],
      y: e.touches[0].clientY - unref(start)[1],
    }
  );
  if (e.touches[0].clientY < 340 || e.touches[0].clientX > 125) {
    return;
  }
  hand.value = [
    e.touches[0].clientX - unref(start)[0] + 50,
    e.touches[0].clientY - unref(start)[1] + 50,
  ];
  sceneA.setAngle(angle);
};
const touchend = () => {
  sceneA.end();
};
const jump = () => {
  sceneA.jump();
};
const first = () => {
  open.value = !unref(open);
  sceneA.first();
};
const getAngle = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  const dot = x1 * x2 + y1 * y2;
  const det = x1 * y2 - y1 * x2;
  const angle = (Math.atan2(det, dot) / Math.PI) * 180;
  return Math.atan2(det, dot);
};
//切换场景
const setScene = (scene: number) => {
  switch (scene) {
    case 4:
      sceneA.setScene(9, () => {
        setTimeout(() => {
          sceneA.init();
        }, 1000);
      });
      transitionText.value = "仿真漫游";
      sceneA.flyTo({
        position: [-5, 3, 2],
        controls: [0, 0, 0],
        duration: 2000,
      });
      break;
    default:
      break;
  }
};
</script>

<style scoped>
@font-face {
  font-family: fcdD;
  src: url("../public/font/fcdD.ttf");
}

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
  top: 0;
  left: 0;
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
.rocking {
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #cccccc66;
  bottom: 10px;
  left: 10px;
  z-index: 99;
}
.rocking::before {
  content: "";
  display: block;
  width: 25px;
  height: 25px;
  background-color: #cccccc70;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.hand {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #ffffff55;
  box-shadow: 0px 0px 20px 5px #23272d, 0px 0px 4px 2px #23272d;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.jump {
  position: absolute;
  right: 5px;
  z-index: 99;
  bottom: 45px;
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  background: linear-gradient(180deg, #00f5fd 0%, #006be1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-shadow: 0px 0px 20px 5px #00f5fd, 0px 0px 4px 2px #006be1;
}
.super {
  position: absolute;
  right: 40px;
  z-index: 99;
  bottom: 5px;
  width: 45px;
  height: 45px;
  font-size: 12px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  background: linear-gradient(180deg, #00f5fd 0%, #006be1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-shadow: 0px 0px 20px 5px #00f5fd, 0px 0px 4px 2px #006be1;
}

.super1 {
  position: absolute;
  right: 40px;
  z-index: 99;
  bottom: 5px;
  width: 45px;
  height: 45px;
  font-size: 12px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  background: linear-gradient(180deg, #fd6100 0%, #e10000 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-shadow: 0px 0px 20px 5px #fd6100, 0px 0px 4px 2px #e10000;
}
</style>
