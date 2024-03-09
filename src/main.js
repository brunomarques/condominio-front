import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import { VueCookies } from 'vue-cookies';

import App from './App.vue';
import router from './router';
import './plugins/axios.js';

import './assets/main.css';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VueCookies, { expires: '1d' });

app.mount('#app');
