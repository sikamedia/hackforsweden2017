import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    result: {}
  },
  mutations: {
    INCREMENT (state) {
      state.counter ++
    },
    DECREMENT (state) {
      if (state.counter > 0) {
        state.counter --
      } else {
        state.counter = 0
      }
    }
  }
})
