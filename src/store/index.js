import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    result: {kommun: 'Lidingö', year: '2016', houseType: 'house'}
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
    },
    PREDICTION (state) {

    }
  }
})
