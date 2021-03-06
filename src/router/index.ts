import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '../views/Index.vue'
import NotFound from '../views/NotFound.vue'
import About  from '../views/About.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component:  Index
  } ,
  {
    path: '/about',
    name: 'About',
    component:  About
  } ,
  {
    path: '/*',
    name: 'NotFound',
    component:  NotFound
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
