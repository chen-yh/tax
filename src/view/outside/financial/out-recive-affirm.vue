<template>
 <div class="detail">
  <brand></brand>
  <div class="bgwhite">
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="dRepayData">
      <div slot="datas">
        <dd @click="goTax(refundApply.id)">
          <div>{{refundApply.contract}}</div>
          <div>
            <span v-if="refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{factoryInfo.entName}}</div>
          <div>{{refundApply.financing}}</div>
          <div>{{refundApply.loanPeriod}}</div>
          <div>{{datasLoan.createTime | dateFormate}}</div>
          <div>{{datasLoan.expireTime | dateFormate}}</div>
          <div>{{creditLimit.monthBalance}}</div>
        </dd>
      </div>
    </tables-tit-more>
    <div class="bg-hui-info text-right">
      <div class="company-info" style="width:auto">
       <dl>
        <dt>收款金额：</dt>
        <dd><span class="big-orange">{{datasLoan.amount}} 元</span></dd>
       </dl>
       <dl>
        <dt>收款日期：</dt>
        <dd>{{datasLoan.loanTime | dateFormate}}</dd>
       </dl>
      </div>
    </div>
    </div>
    <div class="bgwhite">
      <div class="piaoju">
        <dl style="border-bottom: none;">
         <dt>银行付款水单：</dt>
         <dd>
          <a :href="datasLoan.loanImg" target="_blank">
            <img :src="datasLoan.loanImg">
          </a>
         </dd>
        </dl>
       </div>
       <div class="operate">
         <div class="btn-zi btn-zi-big float-right" @click="goPage(datasLoan.id)">确认收款</div>
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
          {title: '融资项目'},
          {title: '委托企业'},
          {title: '融资金额'},
          {title: '贷款周期'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '剩余授信额度'}
        ],
        url: ''
      },
      // 收款数据
      refundApply: {},
      factoryInfo: {},
      creditLimit: {},
      datasLoan: {}
    }
  },
  components: {
    brand,
    tablesTitMore
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    // 获取收款数据
    getDatas () {
      let _this = this
      let _id = _this.$route.query.loanId
      this.$http.get('/api/repayment/detail/one?loanId='+ _id)
        .then(res => {
          console.log('收款确认', res.data)
          this.refundApply = res.data.result.refundApply
          this.factoryInfo = res.data.result.factoryInfo
          this.creditLimit = res.data.result.creditLimit
          this.datasLoan = res.data.result.loan
        })
    },
    // 确认收款操作
    goPage (_loanId) {
      let _this = this
      this.$http.get('/api/trade/loan/confirm/receive?loanId='+ _loanId)
        .then(res => {
          console.log('收款确认', res)
          if(res.data.status === 200) {
            _this.$message({
                type: 'success',
                message: '收款确认!'
              })
            _this.$router.push({
               name: 'outReciveList'
            })
          }
          
        })
    },
    // 去融资申请详情
    goTax (_id) {
      this.$router.push({
        name: 'outApplicationInfo',
        query: {
          'id': _id
        }
      })
    }
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
.company-info dl dd{
  width:auto;
}
</style>
