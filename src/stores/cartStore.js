import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore(
  "cart",
  () => {
    // 定义 state - cartList
    const cartList = ref([]);
    // 定义 getter - allCount / allPrice
    // 1. 总数量 - 所有项的 count 之和
    const allCount = computed(() => {
      return cartList.value.reduce((a, c) => {
        return a + c.count;
      }, 0);
    });
    // 2. 总价 - 所有项的 count * price 之和
    const allPrice = computed(() => {
      return cartList.value.reduce((a, c) => {
        return a + c.count * c.price;
      }, 0);
    });
    // 定义 action - addCart
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
    // 定义 action - delCart
    const delCart = async (skuId) => {
      // 思路：
      // 1. 找到要删除项的下标值 - findIndex
      // 2. 使用数组的删除方法 - splice
      const idx = cartList.value.findIndex((item) => {
        return skuId === item.skuId;
      });
      cartList.value.splice(idx, 1);
    };
    return {
      cartList,
      allCount,
      allPrice,
      addCart,
      delCart,
    };
  },
  {
    persist: true,
  },
);
