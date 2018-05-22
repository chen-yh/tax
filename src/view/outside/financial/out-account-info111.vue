<template>
 <div class="detail">
  <brand></brand>
  <!--贷款即收款-->
  <div class="bgwhite">
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="dRepayData">
      <div slot="datas"  v-show="popData" class="pop-center">暂无数据</div>
      <div slot="datas"  class="link-blue" v-show="mainData">
        <dd @click="goTax(refundData.id)">
          <div>{{refundData.contract}}</div>
          <div>
            <span v-if="refundData.financingProject==1">退税融资</span>
          </div>
          <div>{{fData.entName}}</div>
          <div>{{refundData.financing}}</div>
          <div>{{refundData.loanPeriod}}</div>
          <div>{{datasLoan.createTime | dateFormate}}</div>
          <div>{{datasLoan.expireTime | dateFormate}}</div>
          <div>{{creditLimit.monthBalance}}</div>
        </dd>
      </div>
    </tables-tit-more>
    <div class="bg-hui-info text-right">
      <div class="company-info">
       <dl>
        <dt>收款金额：</dt>
        <dd><span class="big-orange">{{datasLoan.amount}}  元</span></dd>
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
          <img :src="datasLoan.loanImg">
         </dd>
        </dl>
       </div>
    </div>

  <!--还款-->
  <div class="bgwhite">
    <!--贷款还款明细-->
     <tables-tit-more :tablesData="dRepayData">
      <div slot="tables-tit">还款详情
      </div>
      <div slot="datas"  v-show="dpopData" class="pop-center">暂无数据</div>
      <div slot="datas" v-for="(r,index) in repayDatas.refundApplyList
" :key="index" v-show="dmainData" id="tables">
        <dd>
          <div>{{r.refundApply.contract}}</div>
          <div>
            <span v-if="r.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{r.factoryName}}</div>
          <div>{{r.refundApply.declareSum}}</div>
          <div>{{r.refundApply.financing}}</div>
          <div>{{r.refundApply.refundTax}}</div>
          <div>{{r.refundApply.remainPayments}}</div>
          <div>{{r.refundApply.loanPeriod}}</div>
          <div>{{r.loanTime | dateFormate}}</div>
          <div>{{r.expireTime | dateFormate}}</div>
          <div>
            <span v-if="r.refundApply.repayState==0" class="red">未还</span>
            <span v-if="r.refundApply.repayState==1" class="red" >完成还款</span>
            <span v-if="r.refundApply.repayState==2" class="red">未还清</span>
            <span v-if="r.refundApply.repayState==3" class="red">已还未确认</span>
          </div>
          <div>{{r.days}} 天</div>
          <div>{{r.refundApply.serverCost?r.refundApply.serverCost:r.refundApply.costPlatform }} 元</div>
        </dd>
      </div>
    </tables-tit-more>
    <div class="bg-hui-info">
      <div class="company-info">
       <dl>
        <dt>还款金额：</dt>
        <dd><span class="big-orange">{{repayDatas.repayment.amount}} </span></dd>
       </dl>
       <dl>
        <dt>还款日期：</dt>
        <dd>{{repayDatas.repayment.repayTime | dateFormate}}</dd>
       </dl>
      </div>
    </div>
    </div>
    <div class="bgwhite">
      <div class="piaoju">
      <dl style="border-bottom: none;">
       <dt>提交银行付款水单：</dt>
       <dd>
        <img :rc="repayDatas.repayment.paymentImg">
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
      datas: {},
      datasLoan: {},
      // 暂无数据
      popData: false,
      mainData: true,
      dpopData: false,
      dmainData: true,
      // 暂无数据 end
      refundData: {},
      fData: {},
      creditLimit: {},
      // 还款
      repayDatas: {}
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
          if (res.data.status === 200 && res.data.result) {
          console.log('收款确认', res.data)
          this.datas = res.data.result
          this.refundData = res.data.result.refundApply
          this.fData = res.data.result.factoryInfo
          this.creditLimit = res.data.result.creditLimit
          this.datasLoan = res.data.result.loan
          } else {
            _this.popData = true
            _this.mainData = false
          }
          
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
    },
    // 还款
     getRepay () {
      let _this = this
      this.$http.get('/api/repayment/detail/onerepay?id='+ _this.$route.query.id)
        .then(res => {
          _this.repayDatas = res.data
          console.log('iiii', _this.repayDatas.repayment.amount)
        })
    },
    // 获取id
    getId () {
      this.repayDatas.forEach(function (item, index) {
        this.applyIdsArr.push(item.applyId)
        this.applyIds = this.applyIdsArr.join(',')
      })
      console.log('uyyy', this.applyIds)
      return this.applyIds
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
