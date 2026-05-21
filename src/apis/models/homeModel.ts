import type { ClassData } from "./layoutModel";
// Banner 请求
export interface BannerRequest {
  distributionSite: string;
}

// Banner 响应
export interface BannerResponse {
  hrefUrl: string;
  id: string;
  imgUrl: string;
  type: string;
}

// HotList 响应
export interface HotListResponse {
  alt: string;
  id: string;
  picture: string;
  title: string;
}

// GoodsList 响应
export interface GoodsListResponse extends ClassData {
  // 在导航数据 ClassData 类型定义的基础上
  // 新增属性 saleInfo
  saleInfo: string;
}
