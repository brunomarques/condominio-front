export default {
    redirectIfAuthenticated(to, from, next) {
        const token = $cookies.get('_condominio_token');

        if(token) {
            next({ name: 'dashboard' });
        } else {
            next();
        }
    },
};