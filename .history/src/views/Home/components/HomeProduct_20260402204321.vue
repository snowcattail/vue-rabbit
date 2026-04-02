<template>
  <div class="home-product">
    <!-- <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img :src="cate.picture" />
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <RouterLink to="/" class="goods-item">
              <img :src="good.picture" alt="" />
              <p class="name ellipsis">{{ good.name }}</p>
              <p class="desc ellipsis">{{ good.desc }}</p>
              <p class="price">&yen;{{ good.price }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </HomePanel> -->
    ———————————————— 版权声明：本文为CSDN博主「@赵士杰」的原创文章，遵循CC 4.0
    BY-SA版权协议，转载请附上原文出处链接及本声明。
    原文链接：https://blog.csdn.net/qq_20185737/article/details/131329916
  </div>
</template>

<script setup lang="ts">
import HomePanel from "./HomePanel.vue";
</script>

<style scoped lang="scss"></style>
