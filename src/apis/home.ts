import http from "@/utils/http";
import type {
  BannerRequest,
  BannerResponse,
  GoodsListResponse,
  HotListResponse,
} from "./models/homeModel";

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
export function findNewAPI(): Result<Good[]> {
  return http({
    url: "home/new",
  });
}
/**
 * @description: 获取人气推荐
 */
export function findHotAPI(): Result<HotListResponse[]> {
  return http({
    url: "home/hot",
  });
}
/**
 * @description: 获取所有商品列表
 */
export function getGoodsAPI(): Result<GoodsListResponse[]> {
  return http({
    url: "home/goods",
  });
}
