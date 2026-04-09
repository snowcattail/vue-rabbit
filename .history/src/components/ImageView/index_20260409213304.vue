<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[0]" alt="" />
      <!-- 蒙层小滑块 -->
      <div class="layer" :style="{ left: `0px`, top: `0px` }"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div
      class="large"
      :style="[
        {
          backgroundImage: `url(${imageList[0]})`,
          backgroundPositionX: `0px`,
          backgroundPositionY: `0px`,
        },
      ]"
      v-show="false"
    ></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
