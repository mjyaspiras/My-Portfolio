<!-- src/components/AppSidebar.vue -->
<template>
  <div id="sidebar-wrapper" class="bg-gradient vh-100 d-flex flex-column">
    <div class="navbar-brand text-center py-4 fs-3 text-white border-bottom border-white">
      <strong>MyPortfolio</strong>
    </div>

    <div class="list-group list-group-flush flex-grow-1 overflow-auto">
      <router-link
        to="/profile"
        class="list-group-item list-group-item-action text-dark-violet bg-transparent py-3 d-flex align-items-center"
      >
        <i class="bi bi-person me-2"></i> Profile
      </router-link>
      <router-link
        to="/portfolio/showcase"
        class="list-group-item list-group-item-action text-dark-violet bg-transparent py-3 d-flex align-items-center"
      >
        <i class="bi bi-folder me-2"></i> Showcase
      </router-link>
      <router-link
        to="/contact"
        class="list-group-item list-group-item-action text-dark-violet bg-transparent py-3 d-flex align-items-center"
      >
        <i class="bi bi-envelope me-2"></i> Contact Page
      </router-link>
      <router-link
        to="/creative"
        class="list-group-item list-group-item-action text-dark-violet bg-transparent py-3 d-flex align-items-center"
      >
        <i class="bi bi-palette me-2"></i> Creative Page
      </router-link>
      <router-link
        to="/creative"
        class="list-group-item list-group-item-action text-dark-violet bg-transparent py-3 d-flex align-items-center"
      >
        <i class="bi bi-box-arrow-right me-2"></i> Logout
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>

<style scoped>
#sidebar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: linear-gradient(135deg, #6a1b9a, #8e44ad);
  padding-top: 1em;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
}

.navbar-brand {
  font-size: 1.75rem;
  color: #ff80bf;
}

.list-group-item {
  font-size: 1.25rem;
  margin-bottom: 0.5em;
  transition: background 0.3s ease;
  color: #4b0082; /* Dark Violet for text */
}

.list-group-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.btn {
  font-size: 1.15rem;
}

.bg-gradient {
  background: linear-gradient(135deg, #6a1b9a, #8e44ad);
}

.border-white {
  border-color: white !important;
}

.text-dark-violet {
  color: #4b0082 !important; /* Dark violet for the link text */
}

.text-white {
  color: white !important;
}

.bi {
  font-size: 1.5rem; /* Make icons larger */
  color: #4b0082; /* Dark violet for icons */
}

.mt-auto {
  margin-top: auto; /* Pushes the logout button to the bottom */
}
</style>
