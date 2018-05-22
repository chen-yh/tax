// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import factory from './factorys'
import router from './router/router-factory'
import store from './store/index'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
Vue.use(Element)
// 跳转后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
new Vue({
  el: '#factory',
  store,
  router,
  components: { factory },
  render: h => h(factory)
})
