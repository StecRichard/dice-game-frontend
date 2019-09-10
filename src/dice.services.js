import axios from "axios";

export const getRandomNumbers = async (count = 3) => {
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
    return;
  }

  context.loading = true;

  let intervalId = setInterval(() => {
    if (context.loading) {
      if (!context.numbers) {
        context.numbers = [1, 1, 1];
      }

      if(count > 1){
        context.numbers = context.numbers.map(element => {
          element = Math.floor(Math.random() * (7 - 2) + 2);
          return element;
        });
      } else {
        context.selectedDiceNumber = Math.floor(Math.random() * (7 - 2) + 2);
      }
    } else {
      clearInterval(intervalId);
    }
  }, 100);

  setTimeout(async () => {
    if(count > 1){
      context.numbers = await getRandomNumbers();
    } else {
      context.selectedDiceNumber = (await getRandomNumbers(1))[0];
    }
    context.loading = false;
  }, 1000);
}