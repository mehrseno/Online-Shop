import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import UserProfile from '../views/UserProfile.vue'
import AdminProfile from '../views/AdminProfile.vue'
import Logout from '../views/Logout.vue'
import Product from '../views/Product.vue'

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
        path: '/user_profile',
        name: 'UserProfile',
        component: UserProfile,
        meta: {
            requiresLogin: true
        }
    },
    {
        path: '/admin_profile',
        name: 'AdminProfile',
        component: AdminProfile,
        meta: {
            requiresLogin: true
        }
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
    },
    {
        path: '/:category_slug/:product_slug/',
        name: 'Product',
        component: Product,
    }
]

function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

async function tryScrollToAnchor(hash, timeout = 1000, delay = 1000) {
    while (timeout > 0) {
        const el = document.querySelector(hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            break;
        }
        await wait(delay);
        timeout = timeout - delay;
    }
}

const router = createRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            tryScrollToAnchor(to.hash, 2000, 100);
        }
    },
    history: createWebHistory(process.env.BASE_URL),
})

export default router