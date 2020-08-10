<template>
  <div class="app-container">
    <div class="header short">
      <div class="top-navbar">
        <!-- <a href="" class="btn back-btn inactive"><img src="./static/imgs/icon-back.svg" alt=""></a> -->
        <a href="" class="logo btn-link">Owomida.</a>
        <!-- <div id="menu-btn" class="btn-link">Menu</div> -->
      </div>
      <div class="page-title">
        <h1> Transaction Detail</h1> 
      </div>
    </div>
    <div class="content transactions-content">
      <div class="transaction-detail-row">
        <p class="label">Type</p>
        <p class="text">{{ transactionDetail.type }}</p>
      </div>

      <div class="transaction-detail-row">
        <p class="label">Amount</p>
        <p class="text">{{ transactionDetail.amount | formatNumber }}</p>
      </div>

      <div class="transaction-detail-row">
        <p class="label">Date</p>
        <p class="text">{{ transactionDetail.date | formatDate }}</p>
      </div>

      <div class="transaction-detail-row">
        <p class="label">Account</p>
        <p class="text">{{ transactionDetail.account | formatAccount }}</p>
      </div>

      <div class="transaction-detail-row">
        <p class="label">Description</p>
        <p class="text">{{ transactionDetail.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import PostsService from '@/services/PostsService'
export default {
  name: 'transactionDetail',
  data () {
    return {
      transactionDetail: ''
    }
  },
  mounted () {
    this.getTransactionData()
  },
  methods: {
    getTransactionData () {
      let transactions = this.$store.getters.paymentsTransactions.concat(
        this.$store.getters.earningsTransactions
      )
      let id = this.$route.params.id
      let td = {}

      for (var i = 0; i < transactions.length; i++) {
        if (transactions[i]._id === id) {
          td = transactions[i]
        }
      }
      this.transactionDetail = td
    }
  }
}
</script>
