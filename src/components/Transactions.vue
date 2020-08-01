<template>
<div class="app-container">
<div class="header">
  <div class="top-navbar">
    <!-- <a href="" class="btn back-btn inactive"><img src="./static/imgs/icon-back.svg" alt=""></a> -->
    <a href="" class="logo btn-link">Owomida.</a>
    <!-- <div id="menu-btn" class="btn-link">Menu</div> -->
  </div>

  <div class="page-title">
    <h1> Overview</h1> 
  </div>
  <b-form-select class='page-account' v-model="selected" @change="setAccountFilter" :options="getAccountOptions()"></b-form-select>
  
  <dateFilter v-bind:getTransactions="getTransactions"></dateFilter>
</div>
<div class="content">
    <div class="date-row">
        <p class="date">June 18, 2020</p> <!-- data -->
    </div>
    <div class="funds-container">
        <p class="section-label">
            My Funds
            <!-- data -->
        </p>

        <div class="card card-large card-payments">
            <router-link to="/payments">
                <p class="card-label btn-link">
                    Payments
                </p>
                <div class="card-amount-container">
                    <p class="card-amount">
                      {{ payments | formatNumber }}
                    </p>
                    <img src="/static/imgs/icon-payments.svg" alt="" class="icon icon-payment">
                </div>
            </router-link>
        </div>

        <div class="card card-large card-earnings">
            <a href="">
                <!-- data -->
                <p class="card-label btn-link">
                    Earnings
                </p>
                <div class="card-amount-container">
                    <p class="card-amount">
                        {{ earnings | formatNumber }}
                    </p>
                    <img src="/static/imgs/icon-earnings.svg" alt="" class="icon icon-earnings">
                </div>
            </a>
        </div>
    </div>
</div>
</div>
</template>

<script>
import TransactionsService from '@/services/TransactionsService'
import dateFilter from './dateFilter'
export default {
  name: 'posts',
  components: {
    dateFilter
  },
  data () {
    return {
      transactions: [],
      posts: [],
      selected: this.$store.getters.accountFilter,
      payments: this.$store.getters.paymentsTotal,
      earnings: this.$store.getters.earningsTotal
    }
  },
  mounted () {
    // this.getPosts()
    this.getTransactions()
  },
  methods: {
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
      console.log('inside get transactions func')
      this.setUpdatedTransactions(response.data.transactions)
      this.payments = this.$store.getters.paymentsTotal
      this.earnings = this.$store.getters.earningsTotal
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
    },
    setUpdatedTransactions (payload) {
      this.$store.commit('setUpdatedTransactions', payload)
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