<template>
 <div class="detail">
  <brand><router-link to="/">外综服</router-link></brand>
  <div class="bgwhite">
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="loanDetial">
      <div slot="tables-tit">我的客户列表
      </div>
    </tables-tit-more>
    </div>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
export default({
  data () {
    return {
      loanDetial: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '企业名称 '},
          {title: '合同号'},
          {title: '合同号'},
          {title: '合同号'},
          {title: '合同号'}
        ],
        url: 'fCompany'
      }
    }
  },
  components: {
    brand,
    tablesTitMore
  },
  methods: {
    addUser () {
      this.$router.push({name: 'myUserAdd'})
    }
  }
})
</script>
<style type="text/css" scoped>
.filter{
  clear:both;
  overflow: hidden;
}
.filter dl{
 float:left;
  margin:30px 20px;
}
.filter dl dt,.filter dl dd{
  float:left;
}
.filter dl dt{
  margin-right:10px;
  color:#333;
}
.filter label{
  display: inline-block;
  margin:10px 30px;
  float:left;
  padding: 20px 0
}
.btn-zi-big{
  float:right;
}
.filter{
  margin: 10px 0 30px 0;
}
</style>
