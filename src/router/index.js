import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import Employees from '../views/Employees.vue'
import Editor from '../views/Editor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/location',
    name: 'location',
    component: Map
  },
  {
    path: '/employees',
    name: 'employees',
    component: Employees
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
