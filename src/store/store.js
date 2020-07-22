import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'

Vue.use(Vuex)



Vue.use(Vuex)
const state = {
  showSidebar: false,
  activePage: ''
}
const mutations = {
  showSidebar (state) {
    state.showSidebar = !state.showSidebar
  }

}
const actions = {
  showSidebar (context) {
    context.commit('showSidebar')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    login
  }
})
