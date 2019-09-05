<template>
  <div id="app">
    <h1>Mezi kozy</h1>
    <h1>{{numbers}}</h1>
    <div class="dicesConteiner">
      <dice v-on:click="selectDice" :key="index" :number="number" v-for="(number, index) in numbers" />
    </div>

    <div>
      <button v-on:click="throwDices">Throw Dices</button>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Dice from "./components/Dice.vue";
import axios from "axios";

export default {
  name: "app",
  data: () => {
    return {
      numbers: null,
      loading: false
    };
  },
  components: {
    HelloWorld,
    Dice
  },
  methods: {
    selectDice() {
    },
    throwDices() {
      if(this.loading){ 
        return 
      }

      this.loading = true;

      let intervalId = setInterval(() => {
        if(this.loading){
          if(!this.numbers){ 
            this.numbers = [1,1,1]
          }
          
          this.numbers = this.numbers.map(element => {            
            element = Math.floor(Math.random() * (7 - 2) + 2); 
            return element
          }); 
        } else {
          clearInterval(intervalId)
        }
      }, 100)

      setTimeout(() => {
        axios
          .get("http://localhost:3000/dices")
          .then(
            response => {
              this.numbers = response.data
              this.loading = false
            }
              
          );
      }, 3000);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.dicesConteiner {
  display: flex;
}
</style>
