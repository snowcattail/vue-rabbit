import { ref, onMounted, onUnmounted } from "vue";

export default function useMouse() {
  // 1. 装备：定义响应式数据，记录鼠标位置
  const x = ref(0);
  const y = ref(0);

  // 2. 干活的方法：更新坐标
  // 这个函数接收一个鼠标事件对象 (event)
  function updatePosition(event: MouseEvent) {
    x.value = event.pageX; // 获取鼠标距离页面左边缘的距离
    y.value = event.pageY; // 获取鼠标距离页面上边缘的距离
  }

  // 3. 上下班时间：生命周期钩子
  onMounted(() => {
    // 组件一挂载（上班），就开始监听 window 的鼠标移动事件
    window.addEventListener("mousemove", updatePosition);
  });

  onUnmounted(() => {
    // 组件卸载时（下班），一定要清理掉监听器，养成好习惯！
    window.removeEventListener("mousemove", updatePosition);
  });

  // 4. 交付成果：向外部提供东西
  return { x, y };
}
