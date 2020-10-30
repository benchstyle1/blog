import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    meta: {layout: "MainLayout"},
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/post/:id',
    name: 'PostView',
    meta: {layout: "DetailLayout"},
    component: () => import('../views/PostView.vue')
  },
  {
    path: '/user/:id',
    name: 'UserView',
    meta: {layout: "DetailLayout"},
    component: () => import('../views/UserView.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
