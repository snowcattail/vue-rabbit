/**
 * @description: 获取 banner 图
 */
import http from "@/utils/http";

export function getBannerAPI() {
  return http({
    url: "home/banner",
  });
}
