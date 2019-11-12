<template>
  <div>
    <h2>Register</h2>
    <form @submit="register">
      Username
      <input type="text" v-model="user.username" />
      Email
      <input type="email" v-model="user.email" />
      Password
      <input type="password" v-model="user.password" />
      <button>Register</button>
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
        email: "",
        password: ""
      }
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      this.$store.dispatch("register", this.user);
    }
  }
};
</script>