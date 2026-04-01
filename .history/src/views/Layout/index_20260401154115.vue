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
</script>
