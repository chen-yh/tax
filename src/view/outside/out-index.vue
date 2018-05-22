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
import headers from '../../components/base/outside-header'
// 引用左侧栏
import outLeft from '../../components/base/out-left'
// 引用右侧栏
import right from '../../components/base/right'
// 引用右侧栏
import outhome from '../../view/outside/out-home'
export default({
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
    this.getMessageData()
  },
  methods: {
        //登录判断
    getMessageData () {
      var _this = this
      var data = localStorage.getItem('outsideUserLoginMsg')
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
