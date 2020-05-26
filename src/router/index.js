import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/index/index')
const Population = () => import('../views/population/population')
const City = () => import('../views/city/city')
const Town = () => import('../views/town/town')
const PopulationAdd = () => import('../views/population-add/population-add')
const CommunityAdd = () => import("../views/community-add/community-add")
const CityEdit = () => import("../views/city-edit/city-edit")
const CityBind = () => import("../views/city-bind/city-bind")
// 人编辑
const PersonEdit = ()=> import("../views/person-edit/person-edit")

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
    path: '/city-bind/:id',
    name: 'city-bind',
    component: CityBind
  },
  {
    path: '/city-edit/:id',
    name: 'city-edit',
    component: CityEdit
  },
  {
    path: '/person-edit/:id',
    name: 'person-edit',
    component: PersonEdit
  },
  {
    path: '/community-add',
    name: 'community-add',
    component: CommunityAdd
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
