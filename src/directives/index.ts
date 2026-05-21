import { useIntersectionObserver } from "@vueuse/core";
import type { App } from "vue";

export const lazyPlugin = {
  install(app: App<Element>) {
    // 懒加载指令逻辑
    app.directive("img-lazy", {
      mounted(el, binding) {
        // // el：指令绑定到的元素 => <img data-v-3d73bacd="" alt="">
        // // binding.value：传递给指令的值 => 图片 url
        // console.log("el = ", el);
        // console.log(`binding.value = ${binding.value}`);
        const { stop } = useIntersectionObserver(
          el,
          // 此处表示把对象解构赋值成 isIntersecting
          // 对应属性值为 true / false
          // 1. 先拿到整个 entries 数组
          (entries) => {
            // 2. 安全地获取第一项，并使用可选链 `?.` 读取 isIntersecting
            // 这样如果 entries[0] 是 undefined，isIntersecting 也会是 undefined，而不会报错
            const isIntersecting = entries[0]?.isIntersecting;
            // console.log(isIntersecting);
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value;
              stop();
            }
          }
        );
      },
    });
  },
};
