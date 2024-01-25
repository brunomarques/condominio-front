export default {
    namespaced: true,
    state: () => ({
        user: {

        }
    }),
    mutations: {
        STORE_USER(state, data) {
            state.user = data
        }
    },
    actions: {}
}