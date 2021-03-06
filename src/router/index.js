import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/index/index')
const Population = () => import('../views/population/population')
const City = () => import('../views/city/city')
const Town = () => import('../views/town/town')
const TownBind = () => import('../views/town-bind/town-bind')
const PopulationAdd = () => import('../views/population-add/population-add')
const PopulationEdit = () => import('../views/population-add/population-add')
const CommunityAdd = () => import("../views/community-add/community-add")
const CityEdit = () => import("../views/city-edit/city-edit")
const CityBind = () => import("../views/city-bind/city-bind")
// 人编辑
const PersonEdit = ()=> import("../views/person-edit/person-edit")
// 人新增
const PersonAdd = ()=> import("../views/person-add/person-add")
// 房间信息
const HouseInfo = ()=> import("../views/house-info/house-info")

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
    path: '/population-edit/:id',
    name: 'population-edit',
    component: PopulationEdit
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
    path: '/person-add',
    name: 'person-add',
    component: PersonAdd
  },
  {
    path: '/community-add',
    name: 'community-add',
    component: CommunityAdd
  },
  {
    path: '/house-info/:id',
    name: 'house-info',
    component: HouseInfo
  },
  {
    path: '/town',
    name: 'town',
    component: Town
  },
  {
    path: '/town-bind',
    name: 'town-bind',
    component: TownBind
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
