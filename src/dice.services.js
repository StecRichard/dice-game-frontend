import axios from "axios";
import { store } from "../src/store"

const getRandomNumbersRemotely = async (count = 3) => {
  return await axios
    .get("http://localhost:3000/dices/?count=" + count)
    .then(
      response => {
        return response.data
      }
    );
}

export const throwDices = async (context, count = 3) => {
  if (context.loading) {
export const throwDices = async (count = 3) => {

  if (store.state.loading) {
    return;
  }

  store.commit('changeLoadingStatus', true)

  let intervalId = setInterval(() => {
    if (store.state.loading) {
      if (!store.state.numbers) {
        store.commit('changeNumbers', [1, 1, 1]);
      }

      if(count > 1){
        store.commit('changeNumbers', store.state.numbers.map(element => {
          element = getRandomNumber();
          return element;
        }))
      } else {
        store.state('changeSelectedDiceNumber', getRandomNumber())
      }
    } else {
      clearInterval(intervalId);
    }
  }, 100);

  setTimeout(async () => {
    if(count > 1){
      store.commit('changeNumbers', await getRandomNumbersRemotely());
    } else {
      store.state('changeSelectedDiceNumber', (await getRandomNumbersRemotely(1))[0]);
    }
    store.commit('changeLoadingStatus', false)
  }, 1000);
}