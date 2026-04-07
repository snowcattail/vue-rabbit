import http from "@/utils/http";

/**
 * @description: 获取分类数据 /category?id=10020
 * @param {*} id 分类 id
 * @return {*}
 */
const getCategoryAPI = (id) => {
  return http({
    url: "/category",
    params: {
      id,
    },
  });
};
