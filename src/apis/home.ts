import http from "@/utils/http";
import type { BannerRequest, BannerResponse } from "./models/homeModel";

/**
 * @description: 获取 banner 图
 */
// 注意 Result<T> 中的 T 是一个数组类型 BannerResponse[]
// 不要错写成 BannerResponse
export function getBannerAPI(params: BannerRequest): Result<BannerResponse[]> {
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
