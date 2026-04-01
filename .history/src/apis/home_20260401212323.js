import http from "@/utils/http";
/**
 * @description: 获取 banner 图
 */
export function getBannerAPI() {
  return http({
    url: "home/banner",
  });
}

function fineNewAPI() {
  return http({
    url: "home/new",
  });
}
