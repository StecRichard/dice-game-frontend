<template>
  <div id="app">
    <h1>Kostky</h1>
    <div>
      <button v-if="!loading" v-on:click="startThrow">Throw</button>
    </div>

    <div class="dicesContainer">
      <dice
        v-on:click="selectDice(index)"
        :key="index"
        :loading="loading"
        :number="number"
        v-for="(number, index) in numbers"
      />
    </div>

    <div v-if="selectedDiceNumber" class="dicesContainer" v-on:click="throwDice">
      <dice :number="selectedDiceNumber"/>
    </div>
  </div>
</template>

<script>
import Dice from "./components/Dice.vue";
import { getRandomNumbers } from "./dice.services";
import { throwDices } from "./dice.services";

export default {
  name: "app",
  data: () => {
    return {
      numbers: null,
      loading: false,
      selectedDiceNumber: null
    };
  },
  components: {
    Dice
  },
  methods: {
    selectDice(indexInNumbers) {
      var number = this.numbers[indexInNumbers];
      if (this.loading) {
        return;
      }
      console.log("Selecting dice with number:" + number);

      this.selectedDiceNumber = number;
      delete this.numbers[indexInNumbers];
    },
    startThrow(){
      throwDices(this);
    },
    throwDice(){
      throwDices(this, 1);
    }
  }
};
</script>

<style>
button {
  margin: 20px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.dicesContainer {
  width: 50%;
  margin: 0 auto;
  display: flex;
}
</style>
