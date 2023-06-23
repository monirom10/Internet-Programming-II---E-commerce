import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import iPhone from '../views/iPhone.vue';
import Samsung from '../views/Samsung.vue';
import Oppo from '../views/Oppo.vue';
import Huawei from '../views/Huawei.vue';
import Login from '../views/Login.vue';
import BuyNow from '../views/BuyNow.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/iphone',
      name: 'iphone',
      component: iPhone
    },
    {
      path: '/samsung',
      name: 'samsung',
      component: Samsung
    },
    {
      path: '/oppo',
      name: 'oppo',
      component: Oppo
    },
    {
      path: '/huawei',
      name: 'huawei',
      component: Huawei
    },
    {
      path: '/buynow',
      name: 'buynow',
      component: BuyNow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
