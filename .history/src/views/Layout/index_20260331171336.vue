<template>
  <div>
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
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
</script>
