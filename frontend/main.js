import { createApp } from 'vue'
import App from './src/portfolio/App.vue'
import router from './src/portfolio/router'

import '/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
