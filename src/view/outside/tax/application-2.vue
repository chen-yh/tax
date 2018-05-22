<template>
    <div>
       <brand>退税融资申请</brand>
       <div class="bgwhite">
         <div class="bg-hui-info">
           <div class="path">
             <dl class="active">
               <dt>1</dt>
               <dd>单据上传及信息确认</dd>
             </dl>
             <dl class="active">
               <dt>2</dt>
               <dd>选择融资金额及期限</dd>
             </dl>
             <dl>
               <dt>3</dt>
               <dd>确认融资</dd>
             </dl>
           </div>
           <div class="pop">
            <span>
              您年授信额度：{{creditData.yearLimit}}元
            </span>
            <span>
              您本月授信额度：{{creditData.monthLimit}}元
            </span>
            <span>
              可使用最大融资额：{{creditData.yearBalance}}元
            </span>
            <p>为确保融资正常，请及时去银行交纳保证金，提高授信额度。</p>
           </div>
         </div>

         <!--报关信息-->
         <h2 class="tit-hui">
           选择融资金额及贷款期限
         </h2>
         <div class="set1">
             <div class="set-money">
               融资金额： <input type="text" name="" class="w200" v-model="financing"> 元 <span v-if="potTit" class="red">输入格式不正确，请输入数字格式</span>
             </div>
             <div v-for="r in rates">
               <label><input type="radio" name="loanPeriod1" v-model="rate" :value="r.months"> 最长{{r.months}}个月，年利率{{r.rateValue}}%</label>
             </div>
         </div>
         <div class="pop">
           注： 融资期限为最长融资期限。最长融资期限内，您可根据实际情况提前还款，还款利息按日计算。
         </div>
         <div class="operate">
           <div class="btn-no" @click="goPrev()">上一步</div>
           <div class="btn-true" @click="goPage()">下一步</div>
         </div>
       </div> 
    </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import {mapMutations, mapGetters} from 'vuex'
export default({
  data () {
    return {
      // 融资金额
      financing: this.$route.query.financing,
      // 贷款周期
      loanPeriod: '',
      // 融资申请的信息
      taxAllInfo3: {},
      rates: [],
      rate: '',
      infoAll: {},
      applyId: '',
      rateValue: '',
      creditData: {},
      potTit: false
    }
  },
  components: {
    brand
  },
  // computed: {
  //     ...mapGetters(['taxAllInfo'])
  //   },
  watch: {
    rate: function (val, oldVal) {
      let _this = this
      _this.rate = val
      //  获取rateValue
      _this.rates.forEach(function (item, index) {
        if(item.months == val) {
          _this.rateValue = item.rateValue
        }
      })
    }
  },
  computed: {
    // financing: function() {
    //   let reg = /^(-?\d+)(\.\d+)?$/
    //   if (!reg.financing) {
    //     // this.$alert('提示信息', '输入格式不正确，请输入数字格式', {
    //     //   confirmButtonText: '确定'
    //     // })
    //     this.potTit = true
    //   }
    // }
  },
  mounted () {
    this.getRate()
    this.getCredit()
  },
  methods: {
    ...mapMutations({
      setTaxAllInfo2: 'SET_TAX_ALLINFO2',
    }),
    // 上一步
    goPrev () {
      this.$router.push({
        name: 'outApplication1',
        query: {
          'id': this.$route.query.id
        }
      })
    },
    // 下一步
    goPage () {
      let _this = this
      this.$http.post('/api/refund/updatebytra',{'financing': _this.financing, 'id': _this.$route.query.id, 'loanPeriod': _this.rate, 'rate': _this.rateValue})
        .then(res => {
          if (res.data.status === 200) {
            _this.applyId = res.data.result.id
            _this.setTaxAllInfo2(res.data.result)
            this.$router.push({
              name: 'outApplication3',
              query: {'applyId': _this.applyId}
            })
          } else {
            this.$alert(res.data.msg, '提示信息', {
              confirmButtonText: '确定'
            })
          }
         
        })
    },
    // 获取利率
    getRate () {
      let _this = this
      this.$http.get('/api/rate/refundapply/select?tradeserviceId='+ _this.$route.query.tradeserviceId)
        .then(res => {
          if (res.data.status == 200) {
            this.rates = res.data.rateList
          } else {
            this.$alert('大路平台还没有设置共管账户银行，请与其联系', '提示信息', {
              confirmButtonText: '确定'
            })
          }
          
        })
    },
    // 请求授信额度接口
    getCredit () {
      let _this = this
      this.$http.get('/api/tradecompany/credit/detail?trandId' + _this.trandId)
        .then(function (res) {
          if (res.data.status === 200 && res.data.result) {
            console.log('授信额度', res.data.result)
            _this.creditData = res.data.result
            // 年使用额度
            _this.usedYearData = parseInt(_this.creditData.yearLimit) - parseInt(_this.creditData.yearBalance)
            // 月使用额度
            _this.usedMonthData = parseInt(_this.creditData.monthLimit) - parseInt(_this.creditData.monthBalance)
          }
        
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
})
</script>
<style type="text/css">
  @import '../../../assets/css/detail.css'
</style>
