<template>
  <div class="brand">当前位置：<router-link to="/outindex">
  {{brandHome}}</router-link> <span v-if="parentBrand!==''"> > </span>
{{parentBrand}}<span v-if="brand!==''"> > </span>{{brand}}<slot></slot></div>
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex'
export default{
  data () {
    return {
      brandHome: '首页'
    }
  },
  computed: {
    ...mapGetters([
      'brand',
      'parentBrand'
    ])
  },
  created () {
    // console.log('aaaa', '> ' + this.brand)
  }
}
</script>
