import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            transitionName: 'slide-right'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            transitionName: 'slide-right'
        }
    },
    {
        path: '/planet',
        name: 'Planet',
        component: () => import('../views/Planet.vue'),
        meta: {
            transitionName: 'slide-left'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
        meta: {
            transitionName: 'slide-left'
        }
    },
    {
        path: '/card',
        name: 'Card',
        component: () => import('../views/Card.vue'),
        meta: {
            transitionName: 'slide-left'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;