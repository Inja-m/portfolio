import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin/',
      children: [
				{
					path: '',
					name: 'dashboard',
					meta: { requiresAuth: true },
					component: () => import('../views/DashboardView.vue')
				},
        {
          path: 'login',
          name: 'admin-login',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: 'logout',
          name: 'admin-logout',
          beforeEnter: (to, from, next) => {
            // Entferne lokale Daten und leite zum Login um
            window.localStorage.removeItem('jwt')
            window.localStorage.removeItem('userData')
            console.log('Logout erfolgreich')
            next({ name: 'admin-login' }) // Weiterleitung nach dem Logout
          }
        }
      ],
    },
		{
      path: '/',
      name: 'home',
      component: () => import('../../portfolio/views/HomeView.vue')
    },
		
  ],
  scrollBehavior() {
    window.scrollTo(0, 0)
  }
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!window.localStorage.getItem('jwt')
	console.log('jwt überprüft ', isAuthenticated, to.meta.requiresAuth)
 
	if (to.name === 'admin-login' && isAuthenticated) {
    next({ name: 'dashboard' }) // Wenn eingeloggt, zum Dashboard
    return
  }

  if (to.meta.requiresAuth && !isAuthenticated) {
    console.log('Nicht authentifiziert, Weiterleitung zum Login')
    next({ name: 'admin-login' }) // Weiterleitung zu Login
    return
  }

  next()
})

export default router
