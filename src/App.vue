// src/App.vue

<template>
  <div id="app">
    <AppNavbar />
    <AppSidebar />
    <router-view /> <!-- This displays the active route -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppSidebar,
    AppFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #ff4d94;
  background-color: #f3e5f5;
  padding: 20px;
}
</style>
