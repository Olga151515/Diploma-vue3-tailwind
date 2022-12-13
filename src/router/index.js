import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/planet',
        name: 'Planet',
        component: () => import('../views/Planet.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
    },
    {
        path: '/card',
        name: 'Card',
        component: () => import('../views/Card.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;