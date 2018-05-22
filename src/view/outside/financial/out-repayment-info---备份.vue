<template>
 <div class="detail">
  <brand><router-link to="/">我要还款</router-link></brand>
  <div class="bgwhite">
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="dRepayData">
    </tables-tit-more>
    <div class="bg-hui-info text-right">
      <div class="company-info">
       <dl>
        <dt>还款金额：</dt>
        <dd><span class="big-orange">{{}} </span></dd>
       </dl>
       <dl>
        <dt>还款日期：</dt>
        <dd>{{}}</dd>
       </dl>
      </div>
    </div>
    </div>
    <div class="bgwhite">
      <div class="piaoju">
      <dl style="border-bottom: none;">
       <dt>提交银行付款水单：</dt>
       <dd>
        <img src="../../../assets/img/yingye1.png">
       </dd>
      </dl>
     </div>
    </div>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: '合同号'},
          {title: '委托企业'},
          {title: '融资项目'},
          {title: '出口金额()'},
          {title: '融资金额()'},
          {title: '贷款周期()'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '还款状态'},
          {title: '还款倒计时(天)'},
          {title: '平台服务费'}
        ],
        url: ''
      }
    }
  },
  components: {
    brand,
    tablesTitMore
  }
})
</script>
<style type="text/css">
 @import '../../../assets/css/detail.css';
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
