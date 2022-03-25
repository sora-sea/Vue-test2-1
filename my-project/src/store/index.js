import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender: '',
    year: '',
    month: '',
    day: '',
    anser1: '',
    anser2: '',
    anser3: '',
    consultation:''
  },
  mutations: {
    gender (state, gender) {
      state.gender = gender
    },
    selectyear (state, selectyear) {
      state.year = selectyear
    },
    selectmonth (state, selectmonth) {
      state.month = selectmonth
    },
    selectday (state, selectday) {
      state.day = selectday
    },
    add (state, add) {
      state.anser1 = add
    },
    add2 (state, add2) {
      state.anser2 = add2
    },
    add3 (state, add3) {
      state.anser3 = add3
    },
    text (state, text) {
      state.consultation = text
    }
  },
  actions: {
  },
  modules: {
  }
})
