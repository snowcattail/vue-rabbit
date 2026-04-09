<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      :to="`/detail/${item.id}`"
      class="goods-item"
      v-for="item in hotList"
      :key="item.id"
    >
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
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
    // 1 代表 24 小时热销榜，2 代表周热销榜，3 代表总热销榜
    // 可以使用 type 去适配 title 和数据列表
    type: Number,
    defalut: 1,
  },
});

const TITLEMAP = {
  1: "24小时热榜",
  2: "周热榜",
};

// 计算属性只读（getter）
const title = computed(() => {
  return TITLEMAP[props.type];
});

const route = useRoute();
const hotList = ref([]);

const getHotList = async () => {
  const res = await getHotGoodsAPI({
    id: route.params.id,
    type: props.type,
  });
  console.log(res);
  hotList.value = res.result;
};

onMounted(() => getHotList());
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
