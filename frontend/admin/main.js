import { createApp } from 'vue'
import App from '../src/admin/App.vue'
import router from '../src/admin/router'

import '../style.css'

const app = createApp(App)

app.use(router)
	.mount('#admin')


