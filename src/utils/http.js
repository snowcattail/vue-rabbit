import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";

// 创建 axios 实例
const http = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// axios 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 1. 从 pinia 获取 token 数据
    const userStore = useUserStore();
    // 2. 按照后端要求拼接 token 数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e),
);

// axios 响应拦截器
http.interceptors.response.use(
  (res) => res.data,
  (e) => {
    // 从 pinia 获取 token 数据
    const userStore = useUserStore();
    // 统一错误提示
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    // token 失效（401）处理
    // 1. 清除本地用户数据
    // 2. 跳转登录页
    if (e.response.status === 401) {
      userStore.clearUserInfo();
      router.push("/login");
    }
    return Promise.reject(e);
  },
);

export default http;
