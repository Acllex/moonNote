import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/notebooks'
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/Login')
  },
  {
    path: '/notebooks',
    component: ()=>import('../views/NotebookList')
  },
  {
    path: '/note',
    component: ()=>import('../views/NoteDetail')
  },
  {
    path: '/trash',
    component: ()=>import('../views/TrashDetail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
