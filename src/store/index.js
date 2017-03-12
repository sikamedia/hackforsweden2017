import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    result: {kommun: 'Lidingö', year: '2016', houseType: 'house', price: 0}
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
    PREDICTION (state, userInput) {
      console.log('output is in store:', userInput)
      if (userInput.kommun === 'Lidingö') {
        state.result.kommun = userInput.kommun
        if (userInput.year === '2016') {
          if (userInput.houseType === 'apartment') {
            state.result.price = 14921 + 3645 * 0.7337 + 22588 * 1.0666
            state.result.year = userInput.year
            state.result.houseType = userInput.houseType
          }
        }
      } else {
        state.result.kommun = 'sos'
      }
      //  AP=14921+3645*tp+22588*mi
      //  VP=22796+36144*mi-4766*tax
    }
  }
})
