import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
	{
		path: '/projects',
		name: '',
		children: [
			{
				path: '',
				name: 'projects',
				component: () => import('../views/ProjectsView.vue'),
			},
			{
			  path: ':id', 
			  name: 'projectDetails',
			  component: () => import('../views/DetailProjectView.vue')
			}
		  ]
	}
  ],
	scrollBehavior() {
		window.scrollTo(0,0);
	}
})

export default router
