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

<script setup lang="ts">
import { getHotGoodsAPI } from "@/apis/detail.js";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

// type 适配不同类型热榜数据
const props = defineProps({
  type: {
    // 1 代表 24 小时热销榜 2 代表周热销榜 3 代表总热销榜
    // 可以使用 type 去适配 title 和数据列表
    type: Number,
    defalut: 1,
  },
});

const TITLEMAP = {
  1: "24小时热榜",
  2: "周热榜",
};

const title = computed(() => {
  return TITLEMAP[props.type];
});
</script>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;
    width: 280px;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
