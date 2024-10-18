<!-- AppSidebar.vue -->

<template>
  <div id="sidebar-wrapper" class="bg-light vh-100 d-flex flex-column">
    <div class="navbar-brand text-center py-3 fs-4 text-pink border-bottom">
      <strong>MyPortfolio</strong>
    </div>

    <div class="list-group list-group-flush flex-grow-1 overflow-auto">
      <router-link
        to="/portfolio/profile"
        class="list-group-item list-group-item-action text-dark bg-transparent"
      >
        <i class="bi bi-person"></i> Profile
      </router-link>
      <router-link
        to="/portfolio/showcase"
        class="list-group-item list-group-item-action text-dark bg-transparent"
      >
        <i class="bi bi-folder"></i> Showcase
      </router-link>
      <router-link
        to="/portfolio/contact"
        class="list-group-item list-group-item-action text-dark bg-transparent"
      >
        <i class="bi bi-envelope"></i> Contact
      </router-link>
      <router-link
        to="/portfolio/creative"
        class="list-group-item list-group-item-action text-dark bg-transparent"
      >
        <i class="bi bi-palette"></i> Creative
      </router-link>
    </div>

    <div class="p-3 border-top">
      <button
        class="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-box-arrow-right me-2"></i> Logout
      </button>
    </div>
  </div>
</template>
