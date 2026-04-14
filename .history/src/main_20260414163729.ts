import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { lazyPlugin } from "@/directives";
import { componentPlugin } from "@/components";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

const app = createApp(App);
const pinia = createPinia();

app.use(createPinia());
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin);

// 注册持久化插件
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.mount("#app");
