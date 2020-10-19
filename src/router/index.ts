import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home.vue';
import About from '../views/about.vue';
import Todo from '../views/todo.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASEURL,
  routes
})

export default router
