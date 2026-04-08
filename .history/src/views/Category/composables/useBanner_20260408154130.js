import { ref, onMounted } from "vue";
import { getCategoryAPI } from "@/apis/category.js";

function useBanner() {}

const bannerList = ref([]);

const getBanner = async () => {
  const res = await getBannerAPI({
    distributionSite: "2",
  });
  bannerList.value = res.result;
};

onMounted(() => getBanner());
