import {createRouter, createWebHistory} from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import CustomizePage from '@/views/CustomizePage.vue';
import CheckoutPage from '@/views/CheckoutPage.vue';
import LoginPage from '@/views/auth/LoginPage.vue';
import SignupPage from '@/views/auth/SignupPage.vue';
import ResetPassword from '@/views/auth/ResetPassword.vue';
import NewPassword from '@/views/auth/NewPassword.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({top: 0}),
  routes: [
    {path: '/', name: 'Home', component: LandingPage},
    {path: '/products', name: 'Products', component: ProductsPage},
    {path: '/customize', name: 'Customize', component: CustomizePage},
    {path: '/checkout', name: 'Checkout', component: CheckoutPage},
    {path: '/auth/login', name: 'Login', component: LoginPage},
    {path: '/auth/signup', name: 'Signup', component: SignupPage},
    {path: '/auth/reset-password', name: 'Reset', component: ResetPassword},
    {path: '/auth/new-password', name: 'New password', component: NewPassword}
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
