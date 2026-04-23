import http from "@/utils/http";

// 封装所有和用户有关的接口函数
export const loginAPI = ({ account, password }) => {
  return http({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};

// 获取猜你喜欢的数据
export const getLikeListAPI = ({ limit = 4 }) => {
  return http({
    url: "/goods/relevant",
    params: {
      limit,
    },
  });
};
