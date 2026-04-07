import http from "@/utils/http";
/**
 * @description: 获取 banner 图
 */
export function getBannerAPI(params = {}) {
  // 默认为 1，商品为 2
  const { distributionSite = "1" } = params;
  return http({
    url: "home/banner",
    params: {
      distributionSite,
    },
  });
}
/**
 * @description: 获取新鲜好物
 */
export function findNewAPI() {
  return http({
    url: "home/new",
  });
}
/**
 * @description: 获取人气推荐
 */
export function findHotAPI() {
  return http({
    url: "home/hot",
  });
}
/**
 * @description: 获取所有商品列表
 */
export function getGoodsAPI() {
  return http({
    url: "home/goods",
  });
}
