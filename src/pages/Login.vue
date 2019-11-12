<template>
  <div>
    <h2>Login</h2>
    <form @submit="login">
      Username
      <input type="text" v-model="user.username" />
      Password
      <input type="password" v-model="user.password" />
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import Main from "../layouts/Main";

export default {
  components: {
    Main
  },
  data: function() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login(e) {
      e.preventDefault(); 
      this.$store.dispatch("login", this.user);
    }
  }
};
</script>