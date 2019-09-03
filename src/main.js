// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import baiduMap from "vue-baidu-map"


Vue.use(baiduMap,{
  ak:'7V8G1BRm90LViGEMNbUtjZAdZ3HjGEfu'
});

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
