<template>
<div class="app-container">
    <div class="header">
        <h1>TransactionDetail</h1>
        {{ transactionDetail }}
    </div>
    <div class="content">

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
      let transactions = this.$store.getters.paymentsTransactions.concat(this.$store.getters.earningsTransactions)
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