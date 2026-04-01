import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
  // 导航列表数据管理

  // state 导航列表数据
  // 获取分类信息，将返回的数据存储到 categoryList 数组
  const categoryList = ref([]);

  // action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI();
    // console.log(res);
    categoryList.value = res.result;
  };

  return {
    categoryList,
    getCategory,
  };
});
