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
import { mapState } from 'vuex'

export default {
  name: "app",
  components: {
    Dice
  },
  methods: {
    selectDice(indexInNumbers) {
      if (this.$store.state.loading) {
        return;
      }
      
      var selectedNumber = this.$store.state.numbers[indexInNumbers];
      
      this.$store.commit('changeSelectedDiceNumber', selectedNumber);
      this.$store.commit('removeFromNumbers', indexInNumbers)
    },
    startThrow(){
      this.$store.dispatch('throwDices')
    },
    throwDice(){
      this.$store.dispatch('throwDices', 1)
    }
  },
  computed: mapState([
    'numbers',
    'loading',
    'selectedDiceNumber'
  ])
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
