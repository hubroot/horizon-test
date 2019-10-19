import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import Form from '../views/Form.vue'
import Editor from '../views/Editor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  },
  {
    path: '/form',
    name: 'form',
    component: Form
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
