import http from "@/utils/http";
/**
 * @description: 获取 banner 图
 */
export function getBannerAPI() {
  return http({
    url: "home/banner",
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
