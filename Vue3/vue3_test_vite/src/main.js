import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
//1.引入
import {createPinia} from 'pinia'
//2.创建
const pinia = createPinia()
const app = createApp(App)
//3.安装
app.use(pinia)
app.mount('#app')


