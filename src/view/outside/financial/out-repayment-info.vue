<template>
 <div class="detail">
  <brand></brand>
  <div class="bgwhite">
    <!--贷款还款明细-->
     <tables-tit-more :tablesData="dRepayData">
      <div slot="tables-tit">还款详情
      </div>
      <div slot="datas"  v-show="dpopData" class="pop-center">暂无数据</div>
      <div slot="datas" v-for="(r,index) in repayDatas.refundApplyList
" :key="index" v-show="dmainData" id="tables">
        <dd @click="goTax(r.refundApply.id)" class="link-blue">
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
        <dd><span class="big-orange">{{repayment.amount}} 元</span></dd>
       </dl>
       <dl>
        <dt>还款日期：</dt>
        <dd>{{repayment.repayTime | dateFormate}}</dd>
       </dl>
      </div>
    </div>
    </div>
    <div class="bgwhite">
      <div class="piaoju">
      <dl style="border-bottom: none;">
       <dt>提交银行付款水单：</dt>
       <dd>
        <img :src="repayment.paymentImg">
       </dd>
      </dl>
     </div>
    </div>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
import {mapGetters} from 'vuex'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: '合同号'},
          {title: '委托企业'},
          {title: '融资项目'},
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '放款金额'},
          {title: '剩余还款'},
          {title: '贷款周期'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '还款状态'},
          {title: '还款倒计时'},
          {title: '平台服务费'}
        ],
        url: ''
      },
      repayOperate: '',
       // 还款待确认提示无数据
      popData: false,
      // 还款待确认主要数据
      mainData: true,
      // 待还款的提示无数据
      dpopData: false,
      // 待还款主要数据
      dmainData: true,
      paymentImg: '',
      applyIds: '',
      applyIdsArr: [],
      repayTime: '',
      // money: this.$route.query.amount || 0,
      repayDatas: {},
      repayment: {}
    }
  },
  components: {
    brand,
    tablesTitMore
  },
  mounted () {
    this.getRepay()
  },
  // computed: {
  //   ...mapGetters(['repayInfo'])
  // },
  methods: {
    // 获取选中的还款记录列表
    getRepay () {
      let _this = this
      // this.$http.get('/api/repayment/repay/list?amount=' + this.$route.query.amount + 
      //     '&&loanIds=' + this.$route.query.loanIds)
      //   .then(res => {
      //     console.log(res.data)
      //     _this.repayDatas = res.data.result
      //     _this.paymentImg = res.data.result[0].paymentImg
      //     // 获取id
      //     _this.repayDatas.forEach(function(item, index) {
      //       console.log('5555', item.loan.applyId)
      //       _this.applyIdsArr.push(item.loan.applyId)
      //       _this.applyIds = _this.applyIdsArr.join(',')
      //     })
      //   })
      this.$http.get('/api/repayment/detail/onerepay?id='+ _this.$route.query.id)
        .then(res => {
          if (res.data.status === 200) {
            _this.repayDatas = res.data
            _this.repayment = res.data.repayment
          }
          
          // console.log('iiii', _this.repayDatas.repayment.amount)
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
    },
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
</style>
