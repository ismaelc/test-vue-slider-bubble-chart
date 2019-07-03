import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ReactiveQuadrant from '@/views/ReactiveQuadrant'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/project',
      name: 'ProjectQuadrant',
      component: ReactiveQuadrant
    }
  ]
})