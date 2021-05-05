import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "Video" */ '../views/Video.vue')
  },
  {
    path: '/Mood',
    name: 'Mood',
    component: () => import(/* webpackChunkName: "Mood" */ '../views/Mood.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeResolve((to, from, next) => {
//   if (to.name !== 'Home' && from.name == null) next({ name: 'Home' })
// else next()
// })
export default router
