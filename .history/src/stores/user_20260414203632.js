import { ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";

export const useUserStore = defineStore(
  "user",
  () => {
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
    };
    // 4. 以对象形式将 state 和 action 返回
    return {
      userInfo,
      getUserInfo,
    };
  },
  {
    persist: true, // store 持久化配置
  },
);
