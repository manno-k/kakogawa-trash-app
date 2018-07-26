import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Cn from '@/components/Cn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/cn',
      name: 'Cn',
      component: Cn
    }
  ]
})
