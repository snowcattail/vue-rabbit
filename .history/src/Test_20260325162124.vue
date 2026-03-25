<template>
  <div class="mouse-test">
    <h2>测试鼠标追踪 Hook</h2>
    <p>当前鼠标的 X 坐标是：{{ x }}</p>
    <p>当前鼠标的 Y 坐标是：{{ y }}</p>
  </div>
</template>

<script lang="ts" setup name="MouseTest">
// 引入我们的“坐标追踪专员”
import useMouse from "@/hooks/useMouse";

// 老板下达指令：把 x 和 y 交给我
const { x, y } = useMouse();
</script>

<style scoped>
.mouse-test {
  background-color: lightgoldenrodyellow;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  margin-top: 20px;
}
</style>
