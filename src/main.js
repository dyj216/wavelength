import Vue from 'vue'
import { MdButton, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdCard)

new Vue({
  render: h => h(App),
}).$mount('#app')
