import http from "@/utils/http";

function getBannerAPI() {
  return http({
    url: "home/banner",
  });
}
