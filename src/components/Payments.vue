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
  <b-form-select class='page-account' v-model="selected" @change="getSelectedItem" :options="options"></b-form-select>

    <div class="page-time-filter">
    <div class="date today selected" v-model="date" @click="getDate">
      <p class="btn-link"> today </p>
    </div>

    <div class="date yesterday" v-model="date" @click="getDate">
      <p class="btn-link">yesterday</p>
    </div>

    <div class="date week" v-model="date" @click="getDate">
      <p class="btn-link">week</p>
    </div>
    <div class="date month" v-model="date" @click="getDate">
      <p class="btn-link">month</p>
    </div>
  </div>

</div>

</div>
</template>

<script>
import TransactionsService from '@/services/TransactionsService'
export default {
  name: 'payments',
  data () {
    return {
      date: {},
      transactions: [],
      posts: [],
      dateFilter: 'today',
      accountFilter: 'all',
      selected: '',
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
    this.fetchPayments()
    this.getTransactions()
  },
  methods: {
    async fetchPayments () {
      const response = await TransactionsService.fetchPayments()
      console.log('inside get payments ', response)
    },
    getDate (obj) {
      var current = document.getElementsByClassName('selected')
      console.log(current)
      current[0].className = current[0].className.replace(' selected', '')
      obj.target.parentNode.className += ' selected'
      let account = ''
      if (this.selected !== '') {
        account = '&' + this.selected
      }
      let params = '/?filter=' + obj.target.innerHTML + account
      this.dateFilter = obj.target.innerHTML
      console.log(obj.target.innerHTML)
      this.getTransactions(params)
    },
    getSelectedItem (newObjectState) { // Just a regular js function that takes 1 arg
      let account = ''
      if (this.selected !== '') {
        account = '&' + this.selected
      }
      let params = '/?filter=' + this.dateFilter + account
      this.accountFilter = this.selected
      this.getTransactions(params)
    },
    async getTransactions (params) {
      const response = await TransactionsService.fetchTransactions(params)
      this.transactions = response.data.transactions
      console.log('inside getTransactions', this.transactions)
    },
    async getPosts () {
      // const response = await PostsService.fetchPosts()
      // this.posts = response.data.posts
    },
    async deletePost (id) {
      // const $this = this
      // $this.$swal({
      //   title: 'Are you sure?',
      //   text: "You won't be able to revert this!",
      //   type: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      //   confirmButtonText: 'Yes, delete it!'
      // }).then(function () {
      //   PostsService.deletePost(id)
      //   $this.$router.go({
      //     path: '/'
      //   })
      // })
    }
  }
}
</script>