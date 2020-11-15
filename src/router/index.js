import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
    children: [ 
      { path: '', component: () => import('../views/Products.vue') },
      { path: 'details/:idProduct', component: () => import('../views/Details.vue') },
      { path: 'cart', component: () => import('../views/Cart.vue') }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
