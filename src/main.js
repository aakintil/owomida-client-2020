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
import moment from 'moment'

Vue.filter('formatNumber', function (value) {
  return numeral(value).format('0,0.00') // displaying other groupings/separators is possible, look at the docs
})

Vue.filter('formatDate', function (date) {
  return moment(date).format('MMM DD, YYYY')
})

Vue.filter('formatAccount', function (account) {
  let accounts = {
    '823': 'GTB - Primary Savings',
    '073': 'GTB - Business Savings',
    '493': 'GTB - Current',
    '431': 'Access - Savings'
  }
  return accounts[account]
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
      selected: '', // for the fucking b-form-select
      accountOptions: [
        { value: '', text: 'All Accounts' },
        { value: 'bankId=823', text: 'GTB - Primary Savings' },
        { value: 'bankId=073', text: 'GTB - Business Savings' },
        { value: 'bankId=493', text: 'GTB - Current' },
        { value: 'bankId=431', text: 'Access - Savings' }
      ]
    },
    transactions: {
      earningsTotal: 0,
      paymentsTotal: 0,
      paymentsTransactions: [],
      earningsTransactions: []
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
    setUpdatedTransactions (state, payload) {
      state.transactions.paymentsTotal = payload.payments
      state.transactions.earningsTotal = payload.earnings
      state.transactions.earningsTransactions = payload.earningsTransactions
      state.transactions.paymentsTransactions = payload.paymentsTransactions
    },
    setDateFilter (state, dateFilter) {
      state.filters.date = dateFilter
    },
    setAccountFilter (state, payload) {
      state.filters.selected = payload.accountFilter
    }
  },
  getters: {
    dateFilter: state => {
      return state.filters.date
    },
    accountFilter: state => {
      return state.filters.selected
    },
    transactionsList: state => {
      return state.transactions.list
    },
    earningsTotal: state => {
      return state.transactions.earningsTotal
    },
    paymentsTotal: state => {
      return state.transactions.paymentsTotal
    },
    accountOptions: state => {
      return state.filters.accountOptions
    },
    paymentsTransactions: state => {
      return state.transactions.paymentsTransactions
    },
    earningsTransactions: state => {
      return state.transactions.earningsTransactions
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
