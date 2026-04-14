import { ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";

const useUserStore = defineStore("user", () => {
  // 1. 定义管理用户数据的 state
  const userInfo = ref({});
  // 2. 定义获取接口数据的 action 函数
  const getUserInfo = async () => {
    const res = await loginAPI
  }
  // 3. 以对象形式将 state 和 action 返回
});
