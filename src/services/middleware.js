import cookie from './cookie';
import axios from '../plugins/axios';

export default {
    async redirectIfNotAuthenticated(to, from, next) {
        const token = cookie.getToken();
        //console.log('token from redirectIfNotAuthenticated: '+token);
        let n;

        if(!token) {
            console.log('no token');
            n = { name: 'login' };
        }

        await axios.get('/me', {})
        /*.then((response) => {
            console.log(response);
        })*/
        .catch(() => {
            cookie.removeToken();

            n = { name: 'login' };
        });

        next(n);
    },

    redirectIfAuthenticated(to, from, next) {
        const token = cookie.getToken();
        let n;

        if(token) {
            n = { name: 'dashboard' };
        }

        next(n);
    },
};