import axios from "axios";

export const gameActions = {
  throwDice: async (_, count = 3) => {
    if (store.state.loading) {
      return;
    }

    store.commit('changeLoadingStatus', true)

    let intervalId = setInterval(() => {
      if (store.state.loading) {
        if (!store.state.numbers || !store.state.numbers[0]) {
          store.commit('changeNumbers', [1, 1, 1]);
        }

        if (count > 1) {
          store.commit('changeNumbers', store.state.numbers.map(element => {
            element = getRandomNumber();
            return element;
          }))
        } else {
          store.commit('changeSelectedDiceNumber', getRandomNumber())
        }
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    setTimeout(async () => {
      if (count > 1) {
        store.commit('changeNumbers', await getRandomNumbersRemotely());
      } else {
        store.commit('changeSelectedDiceNumber', (await getRandomNumbersRemotely(1))[0]);
      }
      store.commit('changeLoadingStatus', false)
    }, 1000);
  }


}

const getRandomNumbersRemotely = async (count = 3) => {
  return await axios
    .get("http://localhost:3000/dice?count=" + count)
    .then(
      response => {
        return response.data
      }
    );
}

const getRandomNumber = (max = 6, min = 1) => {
  return Math.floor(Math.random() * (max + 1 - (min + 1)) + min + 1)
}