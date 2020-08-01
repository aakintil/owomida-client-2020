<template>
<div class="app-container">
<div class="header">
  <div class="top-navbar">
    <!-- <a href="" class="btn back-btn inactive"><img src="./static/imgs/icon-back.svg" alt=""></a> -->
    <a href="" class="logo btn-link">Owomida.</a>
    <!-- <div id="menu-btn" class="btn-link">Menu</div> -->
  </div>

  <div class="page-title">
    <h1> Payments</h1> 
  </div>
  <b-form-select class='page-account' v-model="selected" @change="setAccountFilter" :options="getAccountOptions()"></b-form-select>

  <dateFilter v-bind:selected='selected' v-bind:getTransactions="getTransactions"></dateFilter>

</div>

</div>
</template>

<script>
import TransactionsService from '@/services/TransactionsService'
import dateFilter from './dateFilter'
export default {
  name: 'payments',
  components: {
    dateFilter
  },
  data () {
    return {
      date: {},
      transactions: [],
      posts: [],
      accountFilter: 'all',
      selected: this.$store.getters.accountFilter,
      options: [
        { value: '', text: 'All Accounts' },
        { value: 'bankId=823', text: 'GTB - Primary Savings' },
        { value: 'bankId=073', text: 'GTB - Business Savings' },
        { value: 'bankId=493', text: 'GTB - Current' },
        { value: 'bankId=431', text: 'Access - Savings' }
      ]
    }
  },
  mounted () {
    this.getTransactions()
  },
  methods: {
    async getTransactions (params) {
      const response = await TransactionsService.fetchTransactions(params)
      this.setOveriewTotal(response.data.transactions)
    },
    setOveriewTotal (payload) {
      this.$store.commit('setOveriewTotal', payload)
    },
    setAccountFilter (evnt) {
      // save the updated account filter in store
      let accountFilter = this.selected
      this.$store.commit('setAccountFilter', { accountFilter })
    },
    getAccountFilter () {
      return this.$store.getters.accountFilter
    },
    getAccountOptions () {
      return this.$store.getters.accountOptions
    }
  }
}
</script>