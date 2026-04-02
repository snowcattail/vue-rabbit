import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    app.directive("img-lazy", {
      mounted(el, binding) {
        // el: 指令绑定的元素
        // binding
        console.log(el, binding.value);
        const { stop } = useIntersectionObserver(el, ([{ isIntersecing }]) => {
          console.log(isIntersecing);
          if (isIntersecing) {
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
