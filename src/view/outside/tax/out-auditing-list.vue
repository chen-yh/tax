<template>
 <div class="detail">
  <brand><router-link to="/">出口企业退税申请</router-link></brand>
  <div class="bgwhite">
    <div class="filter">
      <dl>
        <dt>审核状态：</dt>
        <dd>
          <select v-model="affirmState">
            <option value="0">待审核</option>
            <option value="0">审核通过</option>
            <option value="0">审核未通过</option>
          </select>
        </dd>
      </dl>
    </div>
    <!--出口企业申请-->
    <tables-tit-more :tablesData="loanDetial">
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
      loanCount: {
        data: [
          {title: '出口金额'},
          {title: '融资金额'},
          {
            title: '平台服务费'},
          {title: '已还款'},
          {title: '未还款'}
        ]
      },
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
        url: 'outAuditingInfo'
      },
      // select
      affirmState: 0
    }
  },
  components: {
    brand,
    tablesTitMore
  },
  watch: {
    affirmState: function(val, oldVal) {
      console.log(val)
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
  margin:10px 20px;
}
.filter dl dt,.filter dl dd{
  float:left;
}
.filter dl dt{
  margin-right:10px;
  color:#333;
}
</style>
