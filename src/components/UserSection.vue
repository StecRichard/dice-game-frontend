<template>
  <div class="user_section">
    <template v-if="user">
          <div>Logged user: {{user.username}}</div>
          <button v-on:click="logout">Logout</button>
    </template>
    <template v-else>
        <div>Logged user: Anonymous user</div>
          <router-link class="link" to="/register">Register</router-link>
          &nbsp
          <router-link class="link" to="/login">Login</router-link>
    </template>  
  </div>  
</template>

<script>
export default {
  data: function () {
    return {}
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
    }
  },
  props: {
  },
  computed: {
    user: function () {
      return this.$store.state.user
    }  
  }
};
</script>
<style scoped>
.link {
  display: inline-block
}
</style>