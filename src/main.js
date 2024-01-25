import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import axios from "axios"

import 'tw-elements'
import '@/assets/css/tailwind.css'

import VeeValidatePlugin from '@/plugins/vee-validate'

axios.defaults.baseURL = 'http://localhost:8000/api/v1'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store);
app.use(router);
app.use(VeeValidatePlugin);
app.mount('#app')
