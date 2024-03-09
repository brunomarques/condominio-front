import axios from 'axios';
import cookie from '../services/cookie';


import { useAuthStore } from '../stores/auth';
import messages from '../utils/messages.js';

const token = cookie.getToken();

/*axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;*/

const axiosInstance = axios.create({
    headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`,
    },
    baseURL: 'http://condominio-back.test/api/v1/',
});

axiosInstance.interceptors.request.use(
    function (config) {
        /**
         * CAso ocorra algum problema de login..
         * (testes iniciais não precisou)
         */
        const token = cookie.getToken();
        config.headers['Authorization'] = `Bearer ${token}`;

        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        const store = useAuthStore();

        const responseError = error.response.data.error;

        store.authErrorMessage = messages[responseError];
        store.authErrorCode = error.response.status;
        store.authErrors = error.response.data.errors; //Se vem email não formatado, senha não formatada ou do tamanho correto...
        store.authErrorMessage = error.response.data.message;

        //console.dir(error.response.data);
        // console.dir(error.response.status);
        // console.dir(`Intercepting failed Response ${error}`);

        if(error.response.status === 401) {

            this.router.push({ name: 'login' });
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;