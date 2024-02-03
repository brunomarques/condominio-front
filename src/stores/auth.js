import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
        authErrors: [],
        authToken: null,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        token: (state) => state.authToken,
    },
    actions: {
        async getToken() {
            //to JWT
            return this.authToken;

            //to sanctum
            //await axios.get('/sanctum/csrf-cookie');

            //do not work
            //this.authToken = response.config.headers['X-XRSF-TOKEN'];
        },

        async getUser() {
            //to JWT
            return this.authUser;

            //to sanctum
            /*await this.getToken();

            const data = await axios.get('api/user');
            this.authUser = data.data;*/
        },

        async login(data) {
            this.authErrors = [];

            try {
                //to JWT
                await axios.post('/login', {
                    email: data.email,
                    password: data.password,
                }).then((response) => {
                    this.authUser = response.data.data;
                    this.authToken = response.data.access_token;

                    this.router.push('dashboard');
                });
                //to sanctum
                /*await axios.post('/login', {
                    email: data.email,
                    password: data.password,
                }).then(async () => {
                    const data = await axios.get('api/user');
                    this.authUser = data.data;

                    this.router.push('dashboard');
                });*/
            } catch (err) {
                if (err.response.status === 422) {
                    this.authErrors = err.response.data.errors;
                }
            }
        },

        async register(data) {
            this.authErrors = [];

            await this.getToken();

            try {
                await axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                }).then(async () => {
                    const data = await axios.get('api/user');
                    this.authUser = data.data;

                    this.router.push({ name: 'dashboard' });
                });
            } catch (err) {
                if (err.response.status === 422) {
                    this.authErrors = err.response.data.errors;
                }
            }

        },

        async logout() {
            //await this.getToken();

            await axios.post('/logout')
                .then(() => {
                    this.authUser = null;
                    this.router.push({ name: 'login' });
                });

        },

        async forgotPassword(email) {
            this.authErrors = [];

            await this.getToken();

            try {
                await axios.post('/forgot-password', {
                    email: email,
                }).then(() => {
                    this.authUser = null;
                    this.router.push({ name: 'login' });
                });
            } catch (err) {
                if (err.response.status === 422) {
                    this.authErrors = err.response.data.errors;
                }
            }
        },
    },
});