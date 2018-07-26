import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Cn from '@/components/Cn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/53410',
      name: 'index',
      component: Index
    },
    {
      path: '/53410/cn',
      name: 'Cn',
      component: Cn
    }
  ]
})
