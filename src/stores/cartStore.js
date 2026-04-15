import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore(
  "cart",
  () => {
    // 1. 定义 state - cartList
    const cartList = ref([]);
    // 2. 定义 action - addCart
    const addCart = async (goods) => {
      // 添加购物车

      // 已添加过 - count + 1
      // 未添加过 - 直接 push

      // 思路：
      // 通过匹配传递过来的商品对象中的 skuId
      // 能不能在 cartList 中找到，
      // 找到即添加过

      // Array.prototype.find()
      // 用来找出第一个符合条件的数组成员
      const item = cartList.value.find((item) => {
        return goods.skuId === item.skuId;
      });
      if (item) {
        // 找到
        item.count++;
      } else {
        // 未找到
        cartList.value.push(goods);
      }
    };
    return {
      cartList,
      addCart,
    };
  },
  {
    persist: true,
  },
);
