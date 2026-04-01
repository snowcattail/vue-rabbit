<template>
  <div>
    <!-- 吸顶导航栏组件 -->
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!-- 二级路由出口组件 -->
    <RouterView />
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";

// // 对象解构赋值
// const categoryStore = useCategoryStore();
// const { getCategory } = categoryStore;
// 等价于
const { getCategory } = useCategoryStore();
// 实例被挂载后调用
// 要拿到 categoryStore 里返回的 getCategory 函数
onMounted(() => getCategory());
</script>
