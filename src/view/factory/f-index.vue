<template>
 <div>
  <headers :headers="headers"></headers>
  <div class="wrap-hui">
      <div class="w1200">
          <outLeft></outLeft>
          <div class="right">
             <router-view></router-view>
          </div>
      </div>
  </div>
 </div>
</template>
<script type="text/javascript">
// 引用头部
import headers from '../../components/base/factory-header'
// 引用左侧栏
import outLeft from '../../components/base/f-left'
// 引用右侧栏
import right from '../../components/base/right'
// 引用右侧栏
import outhome from '../../view/factory/f-home'
export default({
  name: 'factory',
  data () {
    return {
      headers: '外综服企业操作中心'
    }
  },
  components: {
    headers,
    outLeft,
    right,
    outhome
  },
  mounted () {
    // this.getMessageData()
  },
  methods: {
     getMessageData () {
      var _this = this
      var data = localStorage.getItem('factoryUserLoginMsg')
      if (data == null) {
          _this.$router.push({path: '/'})
      }
    }
  }
})
</script>
<style type="text/css">
    .w1200{
        min-width:1200px;
        margin:0 auto;
        padding-top:20px;
        clear:both;
        overflow: hidden;
    }
    .wrap-hui{
        background: #f7f7f7;
        width:100%;
        min-width:1200px;
    }
</style>
