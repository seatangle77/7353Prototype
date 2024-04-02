import { createRouter, createWebHistory } from 'vue-router'
import StoryboardView from '../views/StoryboardView.vue'
import FrameworkView from '../views/FrameworkView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'framework',
      component: FrameworkView
    }
  ]
})

export default router

