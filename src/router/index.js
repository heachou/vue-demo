import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/Index/Index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
