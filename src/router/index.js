import {createRouter, createWebHistory} from 'vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        alias: ['/home', '/index']
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/userProfile',
        name: 'UserProfile',
        component: UserProfile
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router 