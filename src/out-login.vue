<template>
  <div id="ooways">
    <span @click="goIndex()" v-if="login">aaaa</span>
    <div><router-view  v-if="loginY" /></div>
  </div>
</template>
<script type="text/javascript">
export default{
  name: 'Ooway',
  data () {
    return {
      loginY: false,
      login: true
    }
  },
  methods: {
    goIndex () {
      this.loginY = true
      this.login = false
    }
  }

}
</script>
