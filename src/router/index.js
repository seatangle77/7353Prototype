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
    },
    {
      path: '/prototype',
      name: 'prototype',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PrototypeView.vue')
    },
    {
      path: '/storyboard',
      name: 'storyboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StoryboardView.vue')
    }
  ]
})

export default router
