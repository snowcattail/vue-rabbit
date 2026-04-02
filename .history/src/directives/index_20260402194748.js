import { useIntersectionObserver } from "@vueuse/core";

const lazyPlugin = {
  install(app) {
    app.directive("img-lazy", {
      mounted(el, binding) {
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
