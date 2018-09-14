import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
  state:{
    count:0,
    price:22
  },
  mutations:{
    'ADD_COUNT'(state){
      state.count++
    },
    'REDUCE_COUNT'(state){
      state.count--
    },
    'CHANGE_COUNT'(state, newCount){
      state.count = newCount
    }
  },
  getters:{
    totalPrice (state) {
      return state.count * state.price
    }
  },
  actions:{
    handleAsyncAction(store, payload){
      setTimeout( () => {
        store.commit('CHANGE_COUNT', payload)
      } , 1000)
    }
  }
})

export default store