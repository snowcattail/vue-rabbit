<template>
  <div class="goods-hot">
    <h3>周日榜单</h3>
    <RouterLink to="/" class="goods-item" v-for="item in 3" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">一双男鞋</p>
      <p class="desc ellipsis">一双好穿的男鞋</p>
      <p class="price">&yen;200.00</p>
    </RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
