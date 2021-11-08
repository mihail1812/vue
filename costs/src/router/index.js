import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/costs',
    name: 'Costs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Costs.vue')
  },
  {
    path: '/costs/AddPaymentForm',
    name: 'AddPaymentForm', 
    component: () => import(/* webpackChunkName: "about" */ '../components/AddPaymentForm.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' // Отключение хэша
})

export default router
