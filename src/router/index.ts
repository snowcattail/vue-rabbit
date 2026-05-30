import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login/MyIndex.vue";
import Layout from "@/views/Layout/MyIndex.vue";
import Home from "@/views/Home/MyIndex.vue";
import Category from "@/views/Category/MyIndex.vue";
import SubCategory from "@/views/SubCategory/MyIndex.vue";
import Detail from "@/views/Detail/MyIndex.vue";
import CartList from "@/views/CartList/MyIndex.vue";
import Checkout from "@/views/Checkout/MyIndex.vue";
import Pay from "@/views/Pay/MyIndex.vue";
import PayBack from "@/views/Pay/PayBack.vue";
import Member from "@/views/Member/MyIndex.vue";
import UserInfo from "@/views/Member/components/UserInfo.vue";
import UserOrder from "@/views/Member/components/UserOrder.vue";

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
        {
          path: "checkout",
          component: Checkout,
        },
        {
          path: "cartlist",
          component: CartList,
        },
        {
          path: "pay",
          component: Pay,
        },
        {
          path: "paycallback",
          component: PayBack,
        },
        {
          path: "member",
          component: Member,
          // 总是把 /member 重定向到 member/user
          redirect: "member/user",
          children: [
            {
              path: "user",
              component: UserInfo,
            },
            {
              path: "order",
              component: UserOrder,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      component: Login,
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
