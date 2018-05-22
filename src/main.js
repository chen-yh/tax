// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/router-app'
import store from './store/index'
import Element from 'element-ui'
// import $ from 'jquery'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
// 全局过滤器
import filters from './assets/js/common'
// 调用段总的代码
// import simHttp from './simHttp'
// 全局过滤器结束
Vue.prototype.$http = axios
// 调用段总的代码
// Vue.use(simHttp)
// 
Vue.use(Vuex)
Vue.use(Element)
Vue.config.productionTip = false
// 跳转后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
