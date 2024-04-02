import { createApp } from 'vue'
import PrototypeView from './views/PrototypeView.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(PrototypeView)
app.use(ElementPlus)
app.use(router)

app.mount('#app-prototype')
