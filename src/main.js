// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import VueParticles from 'vue-particles'
import App from './App'
import router from './router'

export const SocketInstance = socketio('/', {secure: true, rejectUnauthorized: false, transports: ['websocket', 'flashsocket', 'polling']})

export const eventBus = new Vue({
  methods: {
    temperature_internal (temp) {
      this.$emit('temperature_internal', temp)
    },
    humidity_internal (humi) {
      this.$emit('humidity_internal', humi)
    },
    temperature_external (temp) {
      this.$emit('temperature_external', temp)
    },
    humidity_external (humi) {
      this.$emit('humidity_external', humi)
    },
    pressure (press) {
      this.$emit('pressure', press)
    },
    capacity (cap) {
      this.$emit('capacity', cap)
    }
  }
})

Vue.use(VueParticles)
Vue.use(VueSocketIO, SocketInstance)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'})
