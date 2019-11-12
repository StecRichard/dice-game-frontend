import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from "../src/store"
import Game from './pages/Game'
import Register from './pages/Register'
import Login from './pages/Login'
import SelectGame from './pages/SelectGame'
import Main from './layouts/Main'

Vue.config.productionTip = false



const routes = [
  {
    path: '/',
    component: Game,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/selectGame',
    component: SelectGame,
    meta: { requiresAuth: true }
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  if (store.state.userLoading) {
    next({
      path: '/loading',
      // TODO:
    })
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.user ) {
    console.log("test1")
    next({
      path: '/login',
    })
  } else {
    console.log("test2")
    next()
  }
})

Vue.use(VueRouter)

new Vue({
  router,
  data: {
    currentRoute: window.location.pathname
  },
  render(h) { return h(Main) },
  store
}).$mount('#app')
