import Vuex from 'vuex'
import Vue from 'vue'
import { throwDices } from "./dice.services";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    numbers: null,
    loading: false,
    selectedDiceNumber: null
  },
  mutations: {
    removeFromNumbers(state, indexInNumbers) {
      delete state.numbers[indexInNumbers];
    },
    changeLoadingStatus(state, demandedStatus){
      state.loading = demandedStatus
    },
    changeSelectedDiceNumber(state, selectedNumber){
      state.selectedDiceNumber = selectedNumber
    },
    changeNumbers(state, numbers){
      state.numbers = numbers
    }

  },
  actions: {
    throwDices (context, count = 3){
      throwDices(count)
    } 
  }
})