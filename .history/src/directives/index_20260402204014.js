import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
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
          ([{ isIntersecting }]) => {
            console.log(isIntersecting);
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value;
              stop();
            }
          },
        );
      },
    });
  },
};
