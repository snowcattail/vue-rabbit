import { getBannerAPI } from "@/apis/home";
import type { BannerResponse } from "@/apis/models/homeModel";
import { onMounted, ref } from "vue";

export function useBanner() {
  const bannerList = ref([] as BannerResponse[]);

  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    bannerList.value = res.result;
  };

  onMounted(() => getBanner());

  return { bannerList };
}
