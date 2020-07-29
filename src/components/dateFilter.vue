<template>
  <div class="page-time-filter">
    <div class="date today" v-model="date" @click="activeBtn = 'today'" v-bind:class="{selected: activeBtn === 'today' }">
      <p class="btn-link"> today </p>
    </div>

    <div class="date yesterday" v-model="date" @click="activeBtn = 'yesterday'" v-bind:class="{selected: activeBtn === 'yesterday' }">
      <p class="btn-link">yesterday</p>
    </div>

    <div class="date week" v-model="date" @click="activeBtn = 'week'" v-bind:class="{selected: activeBtn === 'week' }">
      <p class="btn-link">week</p>
    </div>
    <div class="date month" v-model="date" @click="activeBtn = 'month'" v-bind:class="{selected: activeBtn === 'month' }">
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

      this.getTransactions(params)
      // dispatch with an object
      this.$store.commit({
        type: 'updateFilter',
        filter: obj.target.innerHTML
      })
      console.log('updating store ', this.$store.state.filter)
    }
  },
  computed: {
    classObject: function () {
      return 'latest-class'
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