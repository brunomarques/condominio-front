const TOKEN_LOGIN = '_condominio_token';

export default {
    setToken(token) {
        $cookies.set(TOKEN_LOGIN, token);
    },
    getToken() {
        return $cookies.get(TOKEN_LOGIN);
    },
    removeToken() {
        $cookies.remove(TOKEN_LOGIN);
    },
};