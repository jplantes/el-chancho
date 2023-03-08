import { createRouter, createWebHistory } from 'vue-router'
import { isAutenticatedGuard } from './auth-guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../modules/shared/layouts/GeneralLayout.vue'),
      beforeEnter: [ isAutenticatedGuard ],
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '',
          name: 'singin',
          component: () => import('../modules/auth/views/SingInView.vue')
        }
      ]
    }
    
  ]
})

export default router
