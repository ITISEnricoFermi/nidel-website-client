import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/views/root.route/root'
import Camera from '@/views/camera.route/camera'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    }, {
      path: '/camera',
      name: 'Camera',
      component: Camera
    }
  ]
})
