import { createApp } from 'vue'
import App from './App.vue'
import Layout from '@/layouts/Layout'
import './index.css'
import router from './router'


const app = createApp(App)

app.component('Layout', Layout)
app.use(router)
app.mount('#app')
