import {createRouter, createWebHistory} from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import ProductsPage from '@/views/ProductsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({top: 0}),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsPage
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

export default router;
