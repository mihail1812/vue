import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'
import Costs from '../views/Costs.vue'
import Error404 from '../views/Error404.vue'

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
    children: [
      {
        path: 'add',
        component: AddPaymentForm,
      },
      {
        path: 'add/:id',
        component: AddPaymentForm,
      }
    ]
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404,
  }
  
]

const router = new VueRouter({
  routes,
  mode: 'history' // Отключение хэша
})

// router.afterEach(function(to, from){
//   console.log(to, '11');
//   console.log(from, '22');
// })

export default router