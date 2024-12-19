import './assets/main.css'
import 'primeicons/primeicons.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);

// This is setup to use the vue-router
app.use(router);

// Uses toast with this
app.use(Toast);
app.mount('#app');

