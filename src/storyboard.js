import { createApp } from 'vue'
import StoryboardView from './views/StoryboardView.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(StoryboardView)
app.use(ElementPlus)
app.use(router)

app.mount('#app-storyboard')
