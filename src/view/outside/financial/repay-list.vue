<template>
  <div class="detail">
    <brand><router-link to="/">我要还款</router-link></brand>
    <div class="bgwhite">
    <!--贷款还款总计-->
    <div class="scrollAuto">
      <tables-tit-more :tablesData="dRepayData" :mainData="mainData">
        <div slot="tables-tit">已还款列表
        </div>
        <div slot="datas"  v-show="popData" class="pop-center">暂无数据</div>
        <div slot="datas" v-for="(r,index) in dRepayDatas" :key="index" v-show="mainData">
          <dd v-for="(d,index) in r.loanDetails" :key="index" @click="goDaiDefault(d.refundApply.id)" class="link-blue">
            <div>{{d.refundApply.contract}}</div>
            <div>
              <span v-if="d.refundApply.financingProject==1">退税融资</span>
            </div>
            <div>{{d.factoryInfo.entName ? d.factoryInfo.entName : ''}}</div>
            <div>${{d.refundApply.declareSum}} 元</div>
            <div>￥{{d.refundApply.financing}} 元</div>
            <div>￥{{d.loan.amount}} 元</div>
            <div>￥{{d.refundApply.surplusRefund}}元</div>
            <div>{{d.refundApply.loanPeriod}}个月</div>
            <div>{{d.loan.loanTime | dateFormate}}</div>
            <div>{{d.loan.expireTime | dateFormate}}</div>
            <div>
              <span v-if="d.refundApply.repayState==0" class="red">未还</span>
              <span v-if="d.refundApply.repayState==1" class="red" >完成还款</span>
              <span v-if="d.refundApply.repayState==2" class="red">未还清</span>
              <span v-if="d.refundApply.repayState==3" class="red">已还未确认</span>
            </div>
            <div>{{d.deadDays}} 天</div>
            <div>{{d.refundApply.costPlatform }} 元</div>
          </dd>
          <dd slot="countData">
            <div class="countData">
              <div class="f16">总还款：{{r.repayment.amount}} 元</div>
              <div><span class="blueCursor" @click="goDetailRepay(r)">查看详情 >> </span></div>
            </div>
          </dd>
        </div>
      </tables-tit-more>
    </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
import checkboxData from '../../../components/common/checkbox-data'
import $ from 'jquery'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '委托企业'},
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '放款金额'},
          {title: '还本金和利息'},
          {title: '贷款周期'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '还款状态'},
          {title: '还款倒计时'},
          {title: '平台服务费'}
        ],
        url: 'outRepaymentInfo'
      },
      dRepayDatas: [],
      repayDatas: [],
      // 出口总额
      countOut: 0,
      // 融资总额
      countFinancing: 0,
      // 平台服务费
      countServerCost: 0,
      // 还款待确认提示无数据
      popData: false,
      // 还款待确认主要数据
      mainData: true,
      // 待还款的提示无数据
      dpopData: false,
      // 待还款主要数据
      dmainData: true,
      // 还款复选框
      repayBox: [],
      lens: 0,
      countDatas: {},
      // 总金额
      totalMoney: 0,
      repayDataAll: 0,
      amounts: 0,
      applyId: '',
      applyIdArr: [],
      applyIds: ''
    }
  },
  components: {
    brand,
    tablesTitMore,
    checkboxData
  },
  mounted () {
    this.getDatas1()
    this.getDatas2()
    this.countRepay()
  },
  methods: {
    getDatas1 () {
      // 已还款待平台确认接口
      this.$http.get('/api/repayment/repay/apply/list?page=1&&loanStaus=1')
        .then(res => {
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
            this.dRepayDatas = res.data.result.rows
          } else {
            this.popData = true
            this.mainData = false
          }
        })
    },
    // 待还款接口
    getDatas2 () {
      this.$http.post('/api/tradecompany/detail/list?page=1&&repayStatus=4&&loanStatus=2')
        .then(res => {
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
            // 待还款数据
            this.repayDataAll = res.data.result
            this.repayDatas = res.data.result.rows
            let len = res.data.result.rows.length
            for (let i = 0; i < len; i++) {
              // 计算出口总额
              this.countOut += res.data.result.rows[i].refundApply.declareSum
              // 计算融资总金额
              this.countFinancing += res.data.result.rows[i].refundApply.financing
              // 计算平台服务费
              this.countServerCost += res.data.result.rows[i].serverCost
            }
          } else {
            this.dpopData = true
            this.dmainData = false
          }
        })
    },
    // 待还款的统计接口
    countRepay () {
      this.$http.post('/api/tradecompany/financ/statistic?repayStatus=4')
        .then(res => {
          console.log('res000000', res)
          if (res.data.status === 200 && res.data.result) {
            this.countDatas = res.data.result
          }
        })
    },
    // 选中后去还款
    // 去还款接口
    goRepay () {
      let _this = this
      let parames = {
        'amount': this.totalMoney,
        'loanIds': this.applyIds
      }
      console.log(parames)
      this.$router.push({
        name: 'goRepayment',
        query: {
          'amount': this.totalMoney,
          'loanIds': this.applyIds
        }
      })
    },
    // 全选
    checkedAlls: function () {
      this.checked = !this.checked
      let _this = this
      // 我的
      this.repayDatas.forEach(function(item, index) {
        if (typeof item.checked === 'undefined') {
          _this.$set(item, 'checked', _this.checked)
          // _this.amounts = item.loan.amount
          _this.amounts = item.refundApply.remainPayments
          _this.totalMoney += _this.amounts
          // 获取applyId并转成字符串
          _this.applyId = item.loan.id
          _this.applyIdArr.push(_this.applyId)
          _this.applyIds = _this.applyIdArr.join(',')
          console.log(_this.applyIds)
          //
          return _this.applyIds
        } else {
          item.checked = !item.checked
          if(item.checked === true) {
            // _this.amounts = item.loan.amount
            _this.amounts = item.refundApply.remainPayments
            _this.totalMoney += _this.amounts
            _this.lens = $('input:checkbox:checked').not('#all').length
            // 获取applyId并转成字符串
            _this.applyId = item.loan.id
            _this.applyIdArr.push(_this.applyId)
            _this.applyIds = _this.applyIdArr.join(',')
            console.log(_this.applyIds)
            //
          } else {
            // _this.amounts = item.loan.amount
            _this.amounts = item.refundApply.remainPayments
            _this.totalMoney -= _this.amounts
            _this.lens = 0
            // 获取applyId并转成字符串
            _this.applyId = item.loan.id
            _this.applyIdArr.splice(index, 1)
            _this.applyIds = _this.applyIdArr.join(',')
            console.log(_this.applyIds)
            //
          }
        }
        _this.applyIds = _this.applyIdArr.join(',')

      })
      if(this.checked){
        _this.lens = this.repayDatas.length
      } else {
        _this.lens = 0
      }
      $('#len').text(_this.lens)
    },
    // 单个复选框
    oneCheckbox (items, index) {
      let totalM = 0
      console.log(typeof items.checked === 'undefined', items.checked)
      this.lens = $('input:checkbox:checked').not('#all').length
      $('#len').text(this.lens)
      if (typeof items.checked === 'undefined') {
        this.$set(items, 'checked', true)
        // this.amounts = items.loan.amount
        this.amounts = items.refundApply.remainPayments
        this.totalMoney += this.amounts
        // 获取applyId并转成字符串
        this.applyId = items.loan.id
        this.applyIdArr.push(this.applyId)
        this.applyIds = this.applyIdArr.join(',')
        console.log(this.applyIds)
        //
      } else {
        this.$set(items, 'checked', !items.checked)
        if(items.checked === true) {
          // this.amounts = items.loan.amount
          this.amounts = items.refundApply.remainPayments
          this.totalMoney += this.amounts
          // 获取applyId并转成字符串
          this.applyId = items.loan.id
          this.applyIdArr.push(this.applyId)
          this.applyIds = this.applyIdArr.join(',')
          console.log(this.applyIds)
          //
        } else {
          // this.amounts = items.loan.amount
          this.amounts = items.refundApply.remainPayments
          this.totalMoney -= this.amounts
          // 获取applyId并转成字符串
          this.applyId = items.loan.id
          this.applyIdArr.splice(index, 1)
          this.applyIds = this.applyIdArr.join(',')
          console.log(this.applyIds)
          //
        }
      }
    },
    // 进入还款详情
    goDaiDefault (_id) {
      this.$router.push({
        name: 'outApplicationInfo',
        query: {
          'id': _id
        }
      })
    },
    // 进入融资申请详情页
    // goDetail (_id) {
    //   this.$router.push({
    //     name: 'outApplicationInfo',
    //     query: {
    //       'id': _id
    //     }
    //   })
    // },
    // 进入收款页面
    goDetail (_id) {
      this.$router.push({
        name: 'reciveInfo',
        query: {
          'loanId': _id
        }
      })
    },
    // 跳转到还款详情页面
    goPage (_id) {
      this.$router.push({
        name: 'reciveAffirm',
        query: {'loanId': _id}
      })
    },
    // 去查看还款详情
    goDetailRepay (d) {
      this.$router.push({
        name: 'outRepaymentInfo',
        query: {
          'id': d.repayment.id
        }
      })
    }
  },
  // watch: {
  //   repayBox: {
  //     handler () {
  //       if (this.repayBox.length === this.repayDatas.length) {
  //         this.checkedAll = true
  //       } else {
  //         this.checkedAll = false
  //       }
  //     },
  //     deep: true
  //   }
  // }
  
})
</script>
<style type="text/css" scoped>
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
.bordm{
  clear:both;
  overflow: hidden;
  border-bottom:solid 1px #ccc;
  padding-bottom:15px;
}
.repay-right{
  width:700px;
  float:right;
  margin-bottom:;
}
.repay-right span{
  display: inline-block;
  padding:0px 20px;
}
.check{
  float:left;
  line-height: 44px;
}
.check label{
  display: inline-block;
  margin-right:40px;
}
.bg-hui{
  background: #f8f8f8;
  padding: 0px 0px 0 10px;
  margin: 10px 0;
}
.go-repayment{
  float:right;
}
.go-repayment span{
  color:#f0830f;
  font-size:16px;
}
.btn-gorepay{
  display: inline-block;
  width:100px;
  height:48px;
  line-height: 47px;
  background: #f0830f;
  color:#fff;
  text-align: center;
  margin-left:20px;
  cursor:pointer;
}
.countData div{
  float:right;
  margin:10px;
  width:190px;
  flex:none;
  justify-content:flex-end;
}
.checkbox1{
  position: absolute;
  left:10px;
  top:18px;
}
#tables dd{
  position: relative;
}
/*.check{
  display: inline-block;
  width:10px;
  height:10px;
  border:solid 1px #ccc;
  margin:2px 10px;
}
.checked{
  display: inline-block;
  width:10px;
  height:10px;
  border:solid 1px #ccc;
  background: #eee;
}*/
</style>
