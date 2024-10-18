<template>
  <nav class="navbar">
    <img src="@/assets/logo.png" alt="Logo" class="logo" />
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/user-management">Contact</router-link></li>
      <li><router-link to="/login">Login</router-link></li> <!-- Corrected Login link -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.navbar {
  background-color: #ff80bf; /* Soft Pink */
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Ensure it spans the full width */
  box-sizing: border-box; /* Include padding in the width calculation */
  position: fixed; /* Make it stay fixed at the top */
  top: 0; /* Align it to the top */
  left: 0; /* Ensure it stretches to the left */
  right: 0; /* Ensure it stretches to the right */
  z-index: 1000; /* Ensure it stays on top of other content */
}

.navbar ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin: 0; /* Remove any default margin */
  padding: 0; /* Remove default padding */
}

.navbar a {
  text-decoration: none;
  color: #7e57c2; /* Violet for the text */
  font-weight: bold;
  padding: 0.5em 1em; /* Add padding to make the link areas larger and even */
}

/* Prevent any hover or active state from changing the navbar background */
.navbar a:hover,
.navbar a:active,
.navbar a:focus {
  background-color: transparent; /* Ensure the background does not change */
  color: #7e57c2; /* Text remains violet when hovered or active */
}

.logo {
  height: 40px;
}
</style>
