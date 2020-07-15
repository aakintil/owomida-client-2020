<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  head: {
    title: {
      inner: 'Owomida'
    },
    meta: [
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'viewport', content: 'width=device-width minimum-scale=1.0 maximum-scale=1.0 user-scalable=no' }
    ]
  }
}
</script>