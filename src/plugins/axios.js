import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

//axios.defaults.baseURL = 'http://localhost:8000'; //para o sanctum
axios.defaults.baseURL = 'http://api.test/api/v1/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';