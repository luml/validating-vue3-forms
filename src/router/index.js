import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'login' */ '../views/LoginForm.vue')
  },
  {
    path: '/componentsform',
    name: 'Componentsform',
    component: () => import(/* webpackChunkName: 'componentsform' */ '../views/ComponentsForm.vue')
  },
  {
    path: '/simpleform',
    name: 'Simpleform',
    component: () => import(/* webpackChunkName: 'simpleform' */ '../views/SimpleForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
