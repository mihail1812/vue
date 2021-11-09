import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
//import AddPaymentForm from '../components/AddPaymentForm.vue'
import Costs from '../views/Costs.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/costs',
    name: 'Costs',
    component: Costs,
  },
  
]

const router = new VueRouter({
  routes,
  mode: 'history' // Отключение хэша
})

export default router