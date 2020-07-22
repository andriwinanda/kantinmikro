// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/style.scss'
import Buefy from 'buefy'
import store from './store/store.js'
import axios from './axiosHelper'
import VueMoment from 'vue-moment'
Vue.use(VueMoment)
// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// Vue.use(VueSidebarMenu)

Vue.use(Buefy)
Object.defineProperties(Vue.prototype, {
  // Custom header axios
  axios: {
    get() { return axios }
  },
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
