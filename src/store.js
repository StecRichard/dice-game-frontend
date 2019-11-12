import Vuex from 'vuex'
import Vue from 'vue'
import { userActions } from "./userActions";
import { gameActions } from "./gameActions";
import { userMutations } from "./userMutations";
import { gameMutations } from "./gameMutations";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    numbers: null,
    loading: false,
    selectedDiceNumber: null,
    userLoading: true,
    games: null,
    currentGame: null
  },
  mutations: {
    ...gameMutations,
    ...userMutations
  },
  actions: {
    ...gameActions,
    ...userActions
  }
})