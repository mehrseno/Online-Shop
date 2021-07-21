import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
        if (!store.getters.loggedIn) {
            console.log('in check ')
            console.log(store.getters.loggedIn)
            next({ name: 'Login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

createApp(App).use(VueAxios, axios).use(router).use(store).mount('#app')
