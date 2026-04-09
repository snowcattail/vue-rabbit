import http from "@/utils/http";

// 获取商品信息
export const getDetail = (id) => {
  return http({
    url: "/goods",
  });
};
