import { createApp } from 'vue'
import App from './App.vue'
import Layout from '@/layouts/Layout'
import './index.css'
import router from './router'
import VueFinalModal from 'vue-final-modal'

const app = createApp(App)

app.component('Layout', Layout)
app.use(router)
app.use(VueFinalModal())
app.mount('#app')
