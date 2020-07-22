import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

// Login
import Login from '@/pages/Login'
// Dashboard
import Dashboard from '@/pages/Dashboard'
import Stand from '@/pages/Member/Stand'

Vue.use(Router)
let routes = [
  // Dashboard
  {
    path: '/',
    name: 'Dasboard',
    component: Dashboard
  },
  // Login
  {
    path: '/login',
    name: `Login`,
    component: Login
  },
  {
    path: '/member/stand',
    name: `Stand List`,
    component: Stand
  },
  // 
 
]
const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
})
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");

  if (to.path !== '/login') {
    if (!token) {
      store.dispatch("login/logout")
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router;