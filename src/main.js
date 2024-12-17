import './assets/main.css'
import 'primeicons/primeicons.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);

// This is setup to use the vue-router
app.use(router);
app.mount('#app');

