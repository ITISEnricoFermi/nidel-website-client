import Vue from 'vue'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

export const SocketInstance = socketio('/', { secure: true, rejectUnauthorized: false, transports: ['websocket', 'flashsocket', 'polling'] })

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

Vue.use(VueSocketIO, SocketInstance)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
