<template>
  <div class="login-container">
    <h1>Login to Your Account</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="btn-login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log(`Logging in with email: ${this.email}`);
      // Add login logic here
    },
  },
};
</script>

<style scoped>
.login-container {
  background-color: #fce4ec; /* Light Pink */
  border-radius: 10px;
  padding: 2rem;
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}

h1 {
  color: #6a1b9a; /* Violet */
}

.form-group {
  margin-bottom: 1.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.btn-login {
  background-color: #ff80bf; /* Pink */
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.btn-login:hover {
  background-color: #f06292; /* Darker Pink */
}
</style>
