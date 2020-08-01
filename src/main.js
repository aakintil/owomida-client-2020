// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import VueHead from 'vue-head'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/styles/reset.css'
import '@/styles/semantic-dropdown.css'
import '@/styles/transition.css'
import '@/styles/styles.css'
import { FormSelectPlugin } from 'bootstrap-vue'
import numeral from 'numeral'
import dateFilter from './components/dateFilter'

Vue.filter('formatNumber', function (value) {
  return numeral(value).format('0,0.00') // displaying other groupings/separators is possible, look at the docs
})
Vue.use(Vuex)
Vue.use(FormSelectPlugin)
Vue.use(VueHead)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    filters: {
      date: 'today',
      account: 'all'
    },
    transactions: {
      earningsTotal: 0,
      paymentsTotal: 0,
      list: []
    }
  },
  mutations: {
    setTransactionsList (state, transaction) {
      state.transactions.list = transaction
    },
    setEarningsTotal (state, payload) {
      state.transactions.earningsTotal = payload.earningsTotal
    },
    setPaymentsTotal (state, payload) {
      state.transactions.paymentsTotal = payload.paymentsTotal
    },
    setOveriewTotal (state, payload) {
      state.transactions.paymentsTotal = payload.payments
      state.transactions.earningsTotal = payload.earnings
    },
    setDateFilter (state, dateFilter) {
      state.filters.date = dateFilter
    },
    setAccountFilter (state, payload) {
      state.filters.account = payload.accountFilter
    }
  },
  getters: {
    dateFilter: state => {
      return state.filters.date
    },
    accountFilter: state => {
      return state.filters.account
    },
    transactionsList: state => {
      return state.transactions.list
    },
    earningsTotal: state => {
      return state.transactions.earningsTotal
    },
    paymentsTotal: state => {
      return state.transactions.paymentsTotal
    }
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, dateFilter },
  store: store
})
