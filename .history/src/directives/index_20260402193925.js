import { useIntersectionObserver } from "@vueuse/core";

const lazyPlugin = {
  install(app) {
    app.directive("img-lazy", {
      mounted(el, binding) {},
    });
  },
};
