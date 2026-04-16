import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { useUserStore } from "./user";
import { insertCartAPI, findNewCartListAPI } from "@/apis/cart";

export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();

    // state
    // 定义 state - cartList
    const cartList = ref([]);

    // getter
    // 定义 getter - allCount / allPrice / isAll
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
    // 是否全选计算属性（配合 allCheck）
    const isAll = computed(() => {
      // Array.prototype.every()
      // 所有成员的返回值都是 true，整个 every 方法才返回 true，否则返回 false
      return cartList.value.every((item) => {
        return item.selected;
      });
    });
    // 已选择数量
    const selectedCount = computed(() => {
      return cartList.value
        .filter((item) => {
          return item.selected;
        })
        .reduce((a, c) => {
          return a + c.count;
        }, 0);
    });
    // 已选择商品价钱合计
    const selectedPrice = computed(() => {
      return cartList.value
        .filter((item) => {
          return item.selected;
        })
        .reduce((a, c) => {
          return a + c.count * c.price;
        }, 0);
    });
    // isLogin
    const isLogin = computed(() => {
      return userStore.userInfo.token;
    });

    // action
    // 定义 action - addCart
    const addCart = async (goods) => {
      const { skuId, count } = goods;
      if (isLogin.value) {
        // 登录之后的加入购车逻辑
        await insertCartAPI({ skuId, count });
        const res = await findNewCartListAPI();
        cartList.value = res.result;
      } else {
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
    // 定义 action - singleCheck
    const singleCheck = (skuId, selected) => {
      // 通过 skuId 找到要修改的那一项
      // 然后把 selected 修改为传入的 selected
      const item = cartList.value.find((item) => {
        return item.skuId === skuId;
      });
      item.selected = selected;
    };
    // 定义 action - allCheck
    const allCheck = (selected) => {
      // 把 cartList 中的每一项的 selected 设置为当前全选框状态
      cartList.value.forEach((item) => (item.selected = selected));
    };
    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      addCart,
      delCart,
      singleCheck,
      allCheck,
    };
  },
  {
    persist: true,
  },
);
