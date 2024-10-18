import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';                
import ProfilePage from '../views/ProfilePage.vue';
import PortfolioShowcase from '../views/PortfolioShowcase.vue';
import ContactPage from '../views/ContactPage.vue';
import CreativePage from '../views/CreativePage.vue';
import DashboardLayout from '../layouts/DashboardLayout.vue';   

const routes = [
  {
    path: '/',
    component: LoginPage,                                      
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/portfolio/showcase',
    component: PortfolioShowcase,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
  {
    path: '/creative',
    component: CreativePage,
  },

  {
    path: '/dashboard',
    component: DashboardLayout,                              
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
