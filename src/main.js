// main.js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router' // 确保你的 router 已经配置好

const app = createApp(App)

app.use(ElementPlus)
app.use(router) // 使用 router
app.mount('#app')
