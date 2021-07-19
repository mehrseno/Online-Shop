import { createStore } from "vuex";
import { getAPI } from './../axios-api'


export default createStore({
    state: {
        accessToken: null,
        refreshToken: null,
    },
    mutations: {
        updateStorage(state, { access, refresh }) {
            state.accessToken = access
            state.refreshToken = refresh
        },
    },
    actions: {
        userLogin(context, userCredentials) {
            console.log("in login");
            console.log(userCredentials);
            return new Promise((resolve, reject) => {
                getAPI.post('/api/api-token/', {
                    email: userCredentials.email,
                    password: userCredentials.password
                }).then(response => {
                    context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh })
                    resolve()
                })
            })
        }
    }
})