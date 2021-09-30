import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';         // 引入 elementUI的HTML、JS
import 'element-ui/lib/theme-chalk/index.css';  // 引入 element 的 CSS

Vue.use(ElementUI); // 启用 element 插件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
