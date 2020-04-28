import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//在main.js中引入SVG.js，并把SVG绑定在原型上
import { SVG } from "@svgdotjs/svg.js";
Vue.prototype.$SVG =SVG;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
