import { createRouter, createWebHistory } from 'vue-router'
import CommunityService from '../views/CommunityService.vue'
import Activity from  '../views/Activity.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/Activity.vue')
  },
  {
    path: '/community-service',
    name: 'CommunityService',
    component: () => import('../views/CommunityService.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/:pathMatch(.*)*', // 匹配所有未知路由
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
