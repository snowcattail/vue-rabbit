import http from "@/utils/http";
import type { Category } from "./models/categoryModel";

/**
 * @description: 获取分类数据 /category?id=10020
 * @param {*} id 分类id
 * @return {*}
 */
// 注：接口数据的 result 类型是 Object
// 所以类型定义是 Result<Category>
// 不要错写成 Result<Category[]>
export const getCategoryAPI = (id: string): Result<Category> => {
  return http({
    url: "/category",
    params: {
      id,
    },
  });
};

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getCategoryFilterAPI = (id) => {
  return http({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};

/**
 * @description: 获取导航数据
 * @data {
      categoryId: 1005000,
      page: 1,
      pageSize: 20,
      sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
    }
 * @return {*}
*/
export const getSubCategoryAPI = (data) => {
  // 注意是返回 http
  // 文档里写的 request 是错误的
  return http({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};
