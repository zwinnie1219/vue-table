import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scene',
    name: 'Scene',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Scene.vue')
  },
  {
    path: '/try',
    name: 'Try',
    component: () => import('../views/Try.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
