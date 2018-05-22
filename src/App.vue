<template>
  <div id="app">
    <!-- <a href="index.html">外综服1111113</a>
    <a href="ooway.html">ooway</a>
    <a href="factory.html">factory</a> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/css/common.css';
#app{
  margin:0;
  padding:0;
  width:100%;
  margin:0 auto;
}

</style>
