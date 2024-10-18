import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import UserManagementPage from '../views/UserManagementPage.vue';
import CreativePage from '@/components/CreativePage.vue';
import ContactPage from '@/components/ContactPage.vue';
import DashboardLayout from '../layouts/DashboardLayout.vue'; // Make sure this path is correct



const routes = [
  { path: '/', component: LoginPage },  // Set your main page to LoginPage
  { path: '/profile', component: ProfilePage },
  { path: '/user-management', component: UserManagementPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
