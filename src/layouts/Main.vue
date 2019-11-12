<template>
  <div>
    <div>
      <div class="top_panel">
        <h1>TOP PANEL</h1>
        <router-link v-if="user" to="/selectGame">Select Game</router-link>
        <user-section />
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Dice from "../components/Dice.vue";
import UserSection from "../components/UserSection.vue";
import { mapState } from 'vuex'

export default {
  name: "app",
  components: {
    UserSection,
    Dice
  },
  computed: mapState([
    'user',
    'userLoading'
  ])
};
</script>

<style scoped>
</style>