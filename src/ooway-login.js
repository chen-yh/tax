import Vue from 'vue'
import Ooway from './ooways'
import Vuex from 'vuex'
// import router from './router'
import router from './router/router-ooway'
import store from './store/index'
// Vue.config.productionTip = false
/* eslint-disable no-new */
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
// 跳转后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
Vue.use(Vuex)
new Vue({
  el: '#ooway',
  store,
  router,
  components: { Ooway },
  template: '<Ooway/>'
})
