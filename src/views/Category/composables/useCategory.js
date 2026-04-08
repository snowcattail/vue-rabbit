import { getCategoryAPI } from "@/apis/category.js";
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategoryData = async (id) => {
    const res = await getCategoryAPI(id);
    // console.log(res);
    categoryData.value = res.result;
  };

  onMounted(() => {
    // 获取路由参数 id
    // useRoute() => route <=> this.$route
    getCategoryData(route.params.id);
  });

  // 路由参数变化时，将分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    // console.log("route has changed");
    // console.log(to);
    // route.params.id 存在滞后性，无法及时获取路由参数
    // 通过参数 to 目标路由对象，获取路由参数
    getCategoryData(to.params.id);
  });

  return { categoryData };
}
