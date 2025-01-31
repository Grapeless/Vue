import './index.css'
import {createApp} from 'vue'

//插件
import router from './router/index.js'
import {createPinia} from "pinia";


import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
