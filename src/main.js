import { createApp } from 'vue'
import App from './App.vue'
import Layout from '@/layouts/Layout'
import './index.css'
import router from './router'


createApp(App)
    .component('Layout', Layout)
    .use(router)
    .mount('#app')
