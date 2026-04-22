import { computed, onUnmounted } from "vue";
import dayjs from "dayjs";

export const useCountDown = () => {
  // 1. 响应式数据
  let timer = null;
  const time = ref(0);
  // 格式化时间 为 xx 分 xx 秒
  const formatTime = computed(() => {
    return dayjs.unix(time.value).format("mm分ss秒");
  });
  // 2. 开启倒计时的函数
  const start = (curTime) => {
    // 开始倒计时的逻辑
    // 核心逻辑：每隔 1s 就减 1
    time.value = curTime;
    timer = setInterval(() => {
      time.value--;
    }, 1000);
  };
  // 组件销毁时，清除定时器
  onUnmounted(() => timer && clearInterval(timer));
  return {
    formatTime,
    start,
  };
};
