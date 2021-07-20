import { createStore } from "vuex";
import { getAPI } from './../axios-api'


export default createStore({
    state: {
        accessToken: null,
        refreshToken: null,
        user: {
            name: "",
            lastname: "",
            address: "",
            email: ""
        }
    },
    mutations: {
        updateStorage(state, { access, refresh }) {
            state.accessToken = access
            state.refreshToken = refresh
        },
        destroyToken(state) {
            state.accessToken = null
            state.refreshToken = null
        },
        updateUser(state, {user}) {
            state.user = user
        }
    },
    getters: {
        loggedIn(state) {
            return state.accessToken != null;
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