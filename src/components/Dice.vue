<template>
  <div class="diceContainer">
    <img :src="renderImg(number)" v-on:click="clickListenerHandler" />
  </div>  
</template>

<script>
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from "../assets/dice6.png";

export default {
  methods: {
    clickListenerHandler(event) {
      if(this.$listeners.click){
        this.$listeners.click(event)
      } 
    },
    renderImg(number) {
      let diceImgArray = [dice1, dice2, dice3, dice4, dice5, dice6];
      return diceImgArray[number - 1];
    }
  },
  props: {
    number: Number,
    loading: Boolean
  }
};
</script>

<style scoped>
img {
  transform:scale(0.4); transition:transform 0.5s linear;
}

img:hover {
  transform: scale(0.6);
}

.diceContainer {
  margin: 0 auto;
}
</style>