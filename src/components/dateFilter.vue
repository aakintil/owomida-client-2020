<template>
  <div class="page-time-filter">
    <div class="date today" v-model="date" @click="setActiveDateFilterBtn('today')" v-bind:class="{selected: getActiveDateFilter() === 'today' }">
      <p class="btn-link"> today </p>
    </div>

    <div class="date yesterday" v-model="date" @click="setActiveDateFilterBtn('yesterday')" v-bind:class="{selected: getActiveDateFilter() === 'yesterday' }">
      <p class="btn-link">yesterday</p>
    </div>

    <div class="date week" v-model="date" @click="setActiveDateFilterBtn('week')" v-bind:class="{selected: getActiveDateFilter() === 'week' }">
      <p class="btn-link">week</p>
    </div>
    <div class="date month" v-model="date" @click="setActiveDateFilterBtn('month')" v-bind:class="{selected: getActiveDateFilter() === 'month' }">
      <p class="btn-link">month</p>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      activeBtn: 'today'
    }
  },
  props: {
    selected: {
      type: String
    },
    getTransactions: {
      type: Function
    }
  },
  methods: {
    setActiveDateFilterBtn (date) {
      let params = ''
      if (this.getActiveAccountFilter() === '') {
        params = '/?filter=' + date
      } else {
        params = '/?filter=' + date + '&' + this.getActiveAccountFilter()
      }
      this.getTransactions(params)
      this.$store.commit('setDateFilter', date)
    },
    setTransactionsList (transactions) {
      this.$store.commit('setTransactionsList', transactions)
    },
    getActiveAccountFilter () {
      return this.$store.getters.accountFilter
    },
    getActiveDateFilter () {
      return this.$store.getters.dateFilter
    }
  }
}
</script>