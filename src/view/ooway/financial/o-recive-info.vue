<template>
 <div class="detail">
  <brand></brand>
  <div class="bgwhite">
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="dRepayData">
      <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
      <div slot="datas" v-show="mainData2">
        <dd v-for="d in datas" @click="goRefund(d.refundApply.id)">
          <div>{{d.refundApply.contract}}</div>
          <div>
            <span v-if="d.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{d.entName}}</div>
          <div>{{d.refundApply.declareSum}} 元</div>
          <div>{{d.refundApply.financing}} 元</div>
          <div>{{d.refundApply.loanPeriod}} 个月</div>
          <div>{{d.loanTime | dateFormate}}</div>
          <div>{{d.expireTime | dateFormate}}</div>
          <div>{{d.refundApply.repayState}}</div>
          <div>{{d.days}} 天</div>
          <div>{{d.refundApply.costPlatform }} 元</div>
        </dd>
      </div>
    </tables-tit-more>
    <div class="bg-hui-info text-right">
      <div class="company-info">
       <dl>
        <dt>还款金额：</dt>
        <dd><span class="big-orange">{{dataMain.amount}}</span></dd>
       </dl>
       <dl>
        <dt>还款日期：</dt>
        <dd>{{dataMain.repayTime | dateFormate}}</dd>
       </dl>
      </div>
    </div>
    </div>
    <div class="bgwhite">
      <div class="piaoju">
      <dl style="border-bottom: none;">
       <dt>提交银行付款水单：</dt>
       <dd>
        <img :src="dataMain.paymentImg">
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
          {title: '贷款周期'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '还款状态'},
          {title: '还款倒计时(天)'},
          {title: '平台服务费'}
        ],
        url: ''
      },
      money: this.$route.query.amount,
      datas: [],
      dataMain: {},
      popData2: false,
      mainData2: true
    }
  },
  components: {
    brand,
    tablesTitMore
  },
  mounted () {
    this.getDatas()
  },
  computed: {
    ...mapGetters(['repayMents'])
  },
  methods: {
    // 获取数据接口
    getDatas () {
      let _this = this
      this.$http.get('/api/ooway/repay/refundapply/select?id='+ this.$route.query.id)
        .then(res => {
          //res.data.status === 200 && 
          if (res.data.result && res.data.result.total > 0) {
            _this.dataMain = res.data.repayment
            _this.datas = res.data.result.rows
            console.log('aaaa', this.datas)
          } else {
            _this.popData2 = false
            _this.mainData2 = true
          }
        })
    },
    // 去确认
    goRepay () {
      let _this = this
      let params = {
        'id': this.repayMents.id,
        'amount': this.repayMents.amount,
        'applyId': this.repayMents.applyId
      }
      this.$http.post('/api/ooway/repay/confirm', params)
        .then(res => {
          if (res.data.status === 200) {
            _this.$message({
              type: 'success',
              message: '还款确认成功!'
            })
            this.$router.push({
              name: 'reciveAffirmList'
            })
          }
        })
    },
    goRefund (id) {
      this.$router.push({
         name: 'outTaxInfo',
         query: {
          'id': id
         }
      })
    }
  }
})
</script>
<style type="text/css">
 @import '../../../assets/css/detail.css';
 .company-info dl dd{
  width:auto;
 }
</style>
