import { ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";
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
