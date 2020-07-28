<template>
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
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: 'Hello'
    }
  },
  methods: {
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
      // console.log(obj.target.innerHTML)
      this.getTransactions(params)
      // dispatch with an object
      this.$store.commit({
        type: 'updateFilter',
        filter: obj.target.innerHTML
      })
      console.log('updating store ', this.$store.state.filter)
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>