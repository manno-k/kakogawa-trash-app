import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Cn from '@/components/Cn'
import Tw from '@/components/Tw'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/tw',
      name: 'Tw',
      component: Tw
    }
  ]
})
