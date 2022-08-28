import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router/index.js'

createApp(App).use(router).mount('#app') //added a router middleware to utilise the router globally

