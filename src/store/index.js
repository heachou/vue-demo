import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  strictMode: true,
  reducer: state => ({
    user: state.user, // 这个就是存入localStorage的值
    fleetInfo: state.fleetInfo // 这个就是存入localStorage的值
  })
})

export default new Vuex.Store({
  state: {
    user: { },
    fleetInfo: {},
    ownerTypeMap:{
      0: '自有房', 
      1: '租客', 
      2: '借住',
      3: '工作人员', 
      9: '其他'
    }
  },
  mutations: {
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION, // this mutation **MUST** be named "RESTORE_MUTATION"
    setUser(state, user) {
      state.user = user
    },
    setFleetInfo(state,fleetInfo){
      state.fleetInfo = fleetInfo
    }
  },
  actions: {},
  plugins: [vuexLocal.plugin]
})
