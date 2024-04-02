
import { createApp } from 'vue'
import FrameworkView from './views/FrameworkView.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(FrameworkView)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
