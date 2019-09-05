<template>
  <div class="diceConteiner">
    <img :src="renderImg(number)" />
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
    renderImg: number => {
      let diceImgArray = [dice1, dice2, dice3, dice4, dice5, dice6];
      return diceImgArray[number - 1];
    }
  },
  props: {
    number: Number
  }
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  transition: width 0.5s, height 0.5s;
}

img:hover {
  width: 150px;
  height: 150px;
  transition: width 0.5s, height 0.5s;
}

.diceConteiner {
  height: 150px;
  width: 150px;
}
</style>