import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";
import Detail from "@/views/Detail/index.vue";
import CartList from "@/views/CartList/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      // Home 页是首页下的二级路由，配置在首页路径下
      children: [
        {
          // Home 页默认在首页显示，path 为空
          path: "",
          component: Home,
        },
        {
          path: "category/:id", // :id 动态接收分类 id 参数
          component: Category,
        },
        {
          path: "category/sub/:id",
          component: SubCategory,
        },
        {
          path: "detail/:id",
          component: Detail,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/cartlist",
      component: CartList,
    },
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
