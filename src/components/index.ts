// 管理所有的全局组件
import type { App } from "vue";
import CARD from "./card.vue";
// 将全局组件封装到插件中
export default {
  install(Vue: App) {
    Vue.component("CARD", CARD);
  }
};
