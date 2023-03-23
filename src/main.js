import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



import './assets/css/main.css'
import './assets/css/tailwindcss.css'
// @home-style  
import './assets/css/home_style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
