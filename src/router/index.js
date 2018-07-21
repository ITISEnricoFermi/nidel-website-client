import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/root.route/root'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    }
  ]
})
