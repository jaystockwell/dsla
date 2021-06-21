import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import axios from 'axios'
import VueAxios from 'vue-axios'
app.use(VueAxios, axios);

import store from './store';
app.use(store);
//app.config.globalProperties.$store = store;

import router from './router';
app.use(router);

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
app.use(ElementPlus)

app.mount('#app');


