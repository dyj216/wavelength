import Vue from 'vue'
import {MdButton, MdCard, MdCheckbox, MdDialog, MdIcon} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdIcon)
Vue.use(MdDialog)
Vue.use(MdCheckbox)

new Vue({
  render: h => h(App),
}).$mount('#app')
