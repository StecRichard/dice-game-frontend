<template>
  <h2>Game</h2>
</template>

<script>
import Main from '../layouts/Main'

export default {
  components: {
    Main
  },
  created: function(){
    this.$store.dispatch('me')
  }
};
</script>