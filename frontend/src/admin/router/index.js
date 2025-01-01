import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
			path: '/admin',
			children: [
				{
					path: '',
					name: 'login',
					component: () => import('../views/LoginView.vue')
				}
			]
		}    
  ],
  scrollBehavior() {
    window.scrollTo(0, 0)
  }
})

export default router
