<template>
  <div>
    <headers :headers="headers"></headers>
    <div class="wrap-hui">
      <div class="w1200">
          <oowayLeft></oowayLeft>
          <div class="right">
             <router-view></router-view>
          </div>
      </div>
  </div>
  </div>
</template>
<script type="text/javascript">
import headers from '../../components/base/ooway-header'
import oowayLeft from '../../components/base/ooway-left'
// 引用右侧栏
import right from '../../components/base/right'
// 引用右侧栏
import oowayHome from '../../view/ooway/ooway-home'
export default({
  name: 'oowayIndex',
  data () {
    return {
      headers: '后台客户管理系统'
    }
  },
  components: {
    headers,
    oowayLeft,
    right,
    oowayHome
  },
  mounted () {
    this.getMessageData()
  },
  methods: {
     getMessageData () {
      var _this = this
      var data = localStorage.getItem('oowayUserLoginMsg')
      if (data == null || data.length == 0) {
          _this.$router.push({path: '/'})
      }
    }
  }
})
</script>
<style type="text/css" scoped>
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
/*.table{
    margin:0 auto;
    width: 500px;
}*/
</style>
