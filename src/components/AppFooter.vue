<template>
  <footer class="footer">
    <p>© 2024 - All rights reserved</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  background-color: #7b1fa2; /* Darker Violet */
  color: white;
  text-align: center;
  padding: 0.5em 0; /* Thinner footer */
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;  /* Ensure the footer stretches to the left edge */
  right: 0; /* Ensure the footer stretches to the right edge */
}
</style>
