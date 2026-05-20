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
