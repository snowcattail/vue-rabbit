import { getCategoryAPI } from "@/apis/category";
import type { Category } from "@/apis/models/categoryModel";
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export function useCategory() {
  const categoryData = ref({} as Category);
  const route = useRoute();
  const getCategoryData = async (id: string) => {
    const res = await getCategoryAPI(id);
    console.log(res);
    categoryData.value = res.result;
  };

  onMounted(() => {
    // 获取路由参数 id
    // useRoute() => route <=> this.$route
    getCategoryData(route.params.id as string);
  });

  // 路由参数变化时，将分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    // console.log("route has changed");
    // console.log(to);
    // // route.params.id 存在滞后性，无法及时获取路由参数
    // // 通过参数 to 目标路由对象，获取路由参数
    getCategoryData(to.params.id as string);
  });

  return {
    categoryData,
    getCategoryData,
  };
}
