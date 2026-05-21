// 把 components 中的所有组件进行全局化注册
// 通过插件的方式
import ImageView from "./XtxImageView/index.vue";
import Sku from "./XtxSku/index.vue";
import type { App } from "vue";

export const componentPlugin = {
  install(app: App<Element>) {
    // app.component("组件名字", 组件配置对象)
    app.component("XtxImageView", ImageView);
    app.component("XtxSku", Sku);
  },
};
