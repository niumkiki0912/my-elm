import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login')
    },
    {
      path: '/',
      name: 'home',
      component:() => import('./views/home')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search/index.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component:() => import('./views/mine')
    },
    {
      path: '/order',
      name: 'order',
      component:() => import('./views/order')
    }
    // {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
