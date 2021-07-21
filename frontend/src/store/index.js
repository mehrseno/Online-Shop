import { createStore } from "vuex";
import { getAPI } from './../axios-api'


export default createStore({
    state: {
        cart: {
            items: [],
        },
        token: {
            accessToken: null,
            refreshToken: null,
        },
        user: {
            name: "",
            lastname: "",
            address: "",
            email: ""
        }
    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('cart')) {
                state.cart = JSON.parse(localStorage.getItem('cart'))
            } else {
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        initializeToken(state) {
            if (localStorage.getItem('token')) {
                state.token = JSON.parse(localStorage.getItem('token'))
            } else {
                localStorage.setItem('token', JSON.stringify(state.token))
            }
        },
        addToCart(state, item) {
            const exists = state.cart.items.filter(i => i.product.id === item.product.id)
            if (exists.length) {
                exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
            } else {
                state.cart.items.push(item)
            }

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        updateStorage(state, { access, refresh }) {
            state.token.accessToken = access
            state.token.refreshToken = refresh
            localStorage.setItem('token', JSON.stringify(state.token))
            // localStorage.setItem('accessToken', state.accessToken)
            // localStorage.setItem('refreshToken', state.refreshToken)
        },
        destroyToken(state) {
            state.token.accessToken = null
            state.token.refreshToken = null
            // localStorage.setItem('accessToken', state.accessToken)
            // localStorage.setItem('refreshToken', state.refreshToken)
        },
        updateUser(state, { user }) {
            state.user = user
        }
    },
    getters: {
        loggedIn(state) {
            // state.accessToken = localStorage.getItem('accessToken')
            // state.token = JSON.parse(localStorage.getItem('token'))
            // console.log(state.token)
            // console.log(state.token.accessToken !== null)
            return state.token.accessToken !== null;
        }
    },
    actions: {
        userLogout(context) {
            if (context.getters.loggedIn) {
                context.commit('destroyToken')
            }
        },
        userLogin(context, userCredentials) {
            console.log("in login");
            console.log(userCredentials);
            return new Promise((resolve, reject) => {
                getAPI.post('/api/api-token/', {
                    username: userCredentials.email,
                    password: userCredentials.password
                }).then(response => {
                    context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh })
                    console.log('saved the token')
                    resolve()
                })
            })
        },
        userRegister(context, user) {
            console.log("In register");
            return new Promise((resolve, reject) => {
                getAPI.post('/api/register', {
                    name: user.name,
                    lastname: user.lastname,
                    password: user.password,
                    address: user.address,
                    email: user.email
                }).then(response => {
                })
            })
        }
    }
})