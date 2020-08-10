<template>
<div class="app-container">
<div class="header">
  <div class="top-navbar">
    <!-- <a href="" class="btn back-btn inactive"><img src="./static/imgs/icon-back.svg" alt=""></a> -->
    <a href="" class="logo btn-link">Owomida.</a>
    <!-- <div id="menu-btn" class="btn-link">Menu</div> -->
  </div>

  <div class="page-title">
    <h1> Earnings</h1> 
  </div>
  <b-form-select class='page-account' v-model="selected" @change="setAccountFilter" :options="getAccountOptions()"></b-form-select>

  <dateFilter v-bind:selected='selected' v-bind:getTransactions="getTransactions"></dateFilter>
</div>

<div class="content transactions-content">
  <div class="payments-total">
     <p>
       {{ earnings | formatNumber }}
    </p>
  </div>
  <div class="transactions-list">
    <p class="transactions-count">{{ earningsTransactions.length }} Transactions </p>
    <router-link :to="'transactionDetail/' + item._id" v-for="item in earningsTransactions" :key="item._id" class="transactions-list-row">
      <div class="transaction-column">
      <p class="transaction-account">{{item.account}}</p>
      <p class="transaction-description">{{ item.desc }}</p>
      </div>
      <div class="transaction-column">
      <p class="transaction-date">{{item.date | formatDate}}</p>
        <div class="transaction-amount-container">
          {{item.amount | formatNumber}}
        </div>
      </div>
    </router-link>
  </div>
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
      transactions: [],
      posts: [],
      accountFilter: 'all',
      selected: this.$store.getters.accountFilter,
      earnings: this.$store.getters.earningsTotal,
      earningsTransactions: this.$store.getters.earningsTransactions,
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
    this.updateData()
  },
  methods: {
    async getTransactions (params) {
      const response = await TransactionsService.fetchTransactions(params)
      console.log('inside get transactions func')
      this.setUpdatedTransactions(response.data.transactions)
      this.earningsTransactions = this.$store.getters.earningsTransactions
      this.earnings = this.$store.getters.earningsTotal
    },
    updateData () { // Just a regular js function that takes 1 arg
      let params = ''
      if (this.getAccountFilter() === '') {
        params = '/?filter=' + this.$store.getters.dateFilter
      } else {
        params = '/?filter=' + this.$store.getters.dateFilter + '&' + this.getAccountFilter()
      }
      this.getTransactions(params)
    },
    setUpdatedTransactions (payload) {
      this.$store.commit('setUpdatedTransactions', payload)
    },
    setAccountFilter (evnt) {
      // save the updated account filter in store
      let accountFilter = this.selected
      this.$store.commit('setAccountFilter', { accountFilter })

      this.updateData()
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