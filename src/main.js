import { createApp } from 'vue'
import App from './App.vue'
import Layout from '@/layouts/Layout'
import Vue3Transitions from 'vue3-transitions'
import './index.css'
import router from './router'


const app = createApp(App)

app.component('Layout', Layout)
app.use(Vue3Transitions)
app.use(router)
app.mount('#app')
