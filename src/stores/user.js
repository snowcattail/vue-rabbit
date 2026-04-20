import { ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";
import { mergeCartAPI } from "@/apis/cart";
import { useCartStore } from "@/stores/cartStore";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();

    // 1. 定义管理用户数据的 state
    const userInfo = ref({});
    // 2. 定义获取接口数据的 action 函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      // 合并购物车
      // 添加 await，确保合并购物车请求在后端彻底完成
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        }),
      );
      // 2. 调用正确的 action，拉取最新数据并更新 state
      await cartStore.updateNewsList();
    };
    // 3. 退出时清除用户信息（action）
    const clearUserInfo = () => {
      userInfo.value = {};
      // 执行清除购物车的 action
      cartStore.clearCart();
    };
    // 4. 以对象形式将 state 和 action 返回
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true, // store 持久化配置
  },
);
