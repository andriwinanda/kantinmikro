import { setToken, getToken, removeToken, getDataUser, setDataUser, removeDataUser } from '@/localstorageHelper'
import axios from 'axios'

const LOGIN = "LOGIN"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGOUT = "LOGOUT"
const POST_TOKEN = "POST_TOKEN"
const TOKEN_VERIFIED = "TOKEN_VERIFIED"
const RESET = "RESET"

const state = {
  isLoggedIn: !!(getToken()),
  menu: null,
  dataMenu: null,
  dataUser: getDataUser() || null
}

const mutations = {
  [LOGIN](state) {
    state.pending = true
  },
  [LOGIN_SUCCESS](state) {
    state.isLoggedIn = true
    state.pending = false
  },
  logout(state){
    removeToken()
    removeDataUser()
    state.dataUser = getDataUser()
    state.isLoggedIn = false
  },
  [POST_TOKEN](state) {
    state.pending = true
  },
  [TOKEN_VERIFIED](state) {
    state.pending = false
    state.hasBaseUrl = true
  },
  [LOGOUT](state) {
       state.dataUser = null
    state.isLoggedIn = false
  },
  setLocalstorage(state, dataLogin) {
    state.dataUser = dataLogin
  }
}
const actions = {
  login({ commit }) {
    commit(LOGIN_SUCCESS)
  },
  logout({ commit }) {
    removeToken()
    removeDataUser()
    commit(LOGOUT)
  }
}

export default {
  namespaced: true,
  strict: true,
  state,
  mutations,
  actions
}
