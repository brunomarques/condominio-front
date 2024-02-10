import { defineStore } from 'pinia';
import axios from 'axios';
import messages from '../utils/messages.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
        authToken: null,
        authErrors: [],
        authErrorMessage: null,
        authErrorCode: null,
        authRegistered: false,
        authEmailVerified: false,
        authPasswordChanged: false,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        token: (state) => state.authToken,
        errorsMessage: (state) => state.authErrorMessage,
        errorCode: (state) => state.authErrorCode,
        registered: (state) => state.authRegistered,
        emailVerified: (state) => state.authEmailVerified,
        passwordChanged: (state) => state.authPasswordChanged,
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
                    this.authUser = response?.data?.data;
                    this.authToken = response?.data?.access_token;

                    $cookies.set('_condominio_token', response?.data?.access_token);

                    this.router.push('dashboard');
                }).catch((err) => {
                    if (err?.response.status === 401) {
                        const responseError = err?.response?.data?.error;

                        this.authErrorMessage = messages[responseError];
                        this.authErrorCode = err?.response?.status;
                    } else if (err?.response?.status === 422) {
                        this.authErrorCode = err?.response?.status;
                        this.authErrors = err?.response?.data?.errors;
                        this.authErrorMessage = err?.response?.data?.message;
                    }
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

            //await this.getToken();

            try {
                await axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                }).then(async () => {
                    this.authRegistered = true;
                    this.router.push({ name: 'login' });
                }).catch((err) => {
                    if (err?.response.status === 401) {
                        const responseError = err?.response?.data?.error;

                        this.authErrorMessage = messages[responseError];
                        this.authErrorCode = err?.response?.status;
                    } else if (err?.response?.status === 422) {
                        this.authErrorCode = err?.response?.status;
                        this.authErrors = err?.response?.data?.errors;
                        this.authErrorMessage = err?.response?.data?.message;
                    }
                });
            } catch (err) {
                if (err.response.status === 422) {
                    this.authErrors = err.response.data.errors;
                }
            }

        },

        async verifyEmail(data) {
            this.authErrors = [];

            try {
                //to JWT
                await axios.post('/verify-email', {
                    token: data,
                }).then(() => {
                    this.authEmailVerified = true;

                    this.router.push({ name: 'login' });
                }).catch((err) => {
                    const status = err?.response?.status;

                    if (status === 401 || status === 400) {
                        const responseError = err?.response?.data?.error;

                        this.authErrorMessage = messages[responseError];
                        this.authErrorCode = err?.response?.status;
                    } else if (err?.response?.status === 422) {
                        this.authErrorCode = err?.response?.status;
                        this.authErrors = err?.response?.data?.errors;
                        this.authErrorMessage = err?.response?.data?.message;
                    }
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
                    $cookies.remove('_condominio_token');

                    this.authUser = null;
                    this.authToken = null;

                    this.router.push({ name: 'login' });
                });

        },

        async forgotPassword(email) {
            this.authErrors = [];

            try {
                await axios.post('/forgot-password', {
                    email: email,
                }).then(() => {
                    this.authUser = null;
                    this.router.push({ name: 'login' });
                }).catch((err) => {
                    const status = err?.response?.status;

                    if (status === 401 || status === 400) {
                        const responseError = err?.response?.data?.error;

                        this.authErrorMessage = messages[responseError];
                        this.authErrorCode = err?.response?.status;
                    } else if (err?.response?.status === 422) {
                        this.authErrorCode = err?.response?.status;
                        this.authErrors = err?.response?.data?.errors;
                        this.authErrorMessage = err?.response?.data?.message;
                    }
                });
            } catch (err) {
                if (err.response.status === 422) {
                    this.authErrors = err.response.data.errors;
                }
            }
        },

        async resetPassword(data) {
            this.authErrors = [];

            try {
                await axios.post('/reset-password', {
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                    token: data.token,
                }).then(async () => {
                    this.authPasswordChanged = true;
                    this.router.push({ name: 'login' });
                }).catch((err) => {
                    if (err?.response.status === 401) {
                        const responseError = err?.response?.data?.error;

                        this.authErrorMessage = messages[responseError];
                        this.authErrorCode = err?.response?.status;
                    } else if (err?.response?.status === 422) {
                        this.authErrorCode = err?.response?.status;
                        this.authErrors = err?.response?.data?.errors;
                        this.authErrorMessage = err?.response?.data?.message;
                    }
                });
            } catch (err) {
                if (err.response.status === 422) {
                    this.authErrors = err.response.data.errors;
                }
            }

        },
    },
});