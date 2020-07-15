// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import VueHead from 'vue-head'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/styles/reset.css'
import '@/styles/semantic-dropdown.css'
import '@/styles/transition.css'
import '@/styles/styles.css'
import { FormSelectPlugin } from 'bootstrap-vue'
import numeral from 'numeral'

Vue.filter('formatNumber', function (value) {
  return numeral(value).format('0,0.00') // displaying other groupings/separators is possible, look at the docs
})
Vue.use(FormSelectPlugin)
Vue.use(VueHead)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
