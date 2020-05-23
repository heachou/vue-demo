import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  strictMode: true,
  reducer: state => ({
    user: state.user // 这个就是存入localStorage的值
  })
})

export default new Vuex.Store({
  state: {
    user: { },
  },
  mutations: {
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION, // this mutation **MUST** be named "RESTORE_MUTATION"
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {},
  plugins: [vuexLocal.plugin]
})
