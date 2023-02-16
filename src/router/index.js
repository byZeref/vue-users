import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../store/users'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

// redirecciona al login si no esta logueado el usuario
router.beforeEach((to) => {
  const userStore = useUserStore()
  if (!userStore.userLogged.email && to.name !== 'login') {
    return { name: 'login' }
  }

})

export default router
