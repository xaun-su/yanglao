import { createRouter, createWebHistory } from 'vue-router';
import CommunityService from '../views/CommunityService.vue';
import Activity from '../views/Activity.vue';
import Profile from '../views/Profile.vue';
import ActivityDetail from '../views/ActivityDetail.vue';
import GenericService from '../views/GenericService.vue';
import FacilityDetail from '../views/FacilityDetail.vue';
import Login from '../views/Login.vue';
const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/activity',
        name: 'Activity',
        component: () => import('../views/Activity.vue'),
    },
    {
        path: '/activity/:id',
        name: 'ActivityDetail',
        component: () => import('../views/ActivityDetail.vue'),
    },
    {
        path: '/community-service',
        name: 'CommunityService',
        component: () => import('../views/CommunityService.vue'),
    },
    {
        path: '/generic-service/:serviceName',
        name: 'GenericService',
        component: () => import('../views/GenericService.vue'),
        props: true,
    },
    {
        path: '/facility/:facilityName',
        name: 'FacilityDetail',
        component: () => import('../views/FacilityDetail.vue'),
        props: true,
  },{
        path: '/community-comprehensive',
        name: 'CommunityComprehensiveService',
        component: () => import('../views/CommunityComprehensiveService.vue')
  },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
