import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { VueCookies } from 'vue-cookies';

import './plugins/axios.js';
import './plugins/vee-validate.js';

import './assets/main.css';

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VueCookies, { expires: '1d' });
app.mount('#app');
