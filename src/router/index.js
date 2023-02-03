import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/HotSpringWebsite',
      name: 'HotSpringWebsite',
      component: () => import('../views/HotSpringWebsite/index.vue'),
    },
  ],
})

export default router
