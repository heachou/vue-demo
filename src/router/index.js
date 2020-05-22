import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/index/index.vue')
const Population = () => import('../views/population/population')
const City = () => import('../views/city/city')
const Town = () => import('../views/town/town')
const PopulationAdd = () => import('../views/population-add/population-add')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/population',
    name: 'population',
    component: Population
  },
  {
    path: '/population-add',
    name: 'population-add',
    component: PopulationAdd
  },
  {
    path: '/city',
    name: 'city',
    component: City
  },
  {
    path: '/town',
    name: 'town',
    component: Town
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
