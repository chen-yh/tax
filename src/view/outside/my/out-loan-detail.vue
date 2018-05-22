<template>
 <div class="detail">
  <brand></brand>
  <div class="bgwhite">
    <div class="filter">
      <dl>
        <dt>贷款开始时间：</dt>
        <dd>
          <select v-model="loanTime">
            <option value="6">全部</option>
            <option value="1">今日</option>
            <option value="3">本周</option>
            <option value="4">本月</option>
            <option value="5">本年</option>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>还款倒计时：</dt>
        <dd>
          <select v-model="refundTime">
            <option value="">全部</option>
            <option value="2">本日</option>
            <option value="3">本周</option>
            <option value="4">本月</option>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>还款状态：</dt>
        <dd>
          <select v-model="refundStatus">
            <option value="">全部</option>
            <option value="0">未还款</option>
            <option value="1">已还款</option>
            <option value="2">未还清</option>
            <option value="3">还款待确认</option>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>是否逾期</dt>
        <dd>
          <select  v-model="overdueState">
            <option value="">全部</option>
            <option value="0">未到期</option>
            <option value="1">逾期</option>
          </select>
        </dd>
      </dl>
    </div>
    <!--贷款还款总计-->
    <tables-tit-more :tablesData="loanCount">
      <div slot="tables-tit">数据统计</div>
      <dd slot="datas">
        <div>{{countDatas.export}} 元</div>
        <div>{{countDatas.financ}} 元</div>
        <div>{{countDatas.repay}} 元</div>
        <div>{{countDatas.repaid}} 元</div>
        <div>{{countDatas.server}} 元</div>
      </dd>
    </tables-tit-more>
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="loanDetial" :tDatas="countDatas">
      <div slot="tables-tit">贷款 / 还款明细</div>
      <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
      <dd slot="datas" v-show="mainData2" class="link-blue" v-for="a in loanDatas"  @click="goPage(a.loan.id, a)">
          <div>{{a.refundApply.contract}}</div>
          <div>
            <span v-if="a.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{a.factoryInfo.entName}}</div>
          <div>{{a.refundApply.declareTime | dateFormate}}</div>
          <div>{{a.refundApply.declareSum}} 元</div>
          <div>{{a.refundApply.financing}} 元</div>
          <div>{{a.refundApply.loanPeriod}} 个月</div>
          <div>{{a.loan.loanTime | dateFormate}}</div>
          <div>{{a.deadDays}} 天</div>
          <div>{{a.refundApply.surplusRefund}} 元</div>
          <div>{{a.refundApply.remainPayments}} 元</div>
          <div>
            <span v-if="a.refundApply.repayState==0"  class="red">未还款</span>
            <span v-if="a.refundApply.repayState==1">已还款</span>
            <span v-if="a.refundApply.repayState==2"  class="red">未还清</span>
            <span v-if="a.refundApply.repayState==3"  class="red">还款待确认</span>
          </div>
          <div>{{a.serverCost }} 元</div>
      </dd>
    </tables-tit-more>
    </div>
    <!--分页-->
    <page :pageSize="pageCount" :curPage="curPage" :curIndex="curIndex" @getCurPage="getCurPage"></page>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import page from '../../../components/base/page'
import tablesTitMore from '../../../components/common/tables-tit-more'
import {mapMutations} from 'vuex'
export default({
  data () {
    return {
      // 统计数据的字段
      loanCount: {
        data: [
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '已还款'},
          {title: '未还款'},
          {title: '平台服务费 '}
        ]
      },
      // 借贷明细的字段
      loanDetial: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '委托企业'},
          {title: '出口日期'},
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '贷款周期'},
          {title: '贷款时间'},
          {title: '还款倒计时'},
          {title: '已还款金额'},
          {title: '未还款金额'},
          {title: '还款状态'},
          {title: '平台服务费'}
        ],
        url: 'loanDetailInfo'
      },
      // 数据
      countDatas: {},
      loanDatas: [],
      loanTime: this.$route.query.loanTime || 6,
      refundTime: '',
      refundStatus: this.$route.query.refundStatus || '',
      yuqi: 0,
      overdueState: '',
      // 暂无数据
      popData2: false,
      mainData2: true,
      //分页
      // 默认当前页
      curPage: 1,
      // 当前页的index
      curIndex: 0,
      //最大页数
      pageCount: 1
    }
  },
  components: {
    brand,
    page,
    tablesTitMore
  },
  mounted () {
    this.getDatas()
    this.getDatasInfo(this.$route.query.loanTime || 6, '', this.$route.query.refundStatus || '', '')
  },
  watch: {
    loanTime: function (val, oldVal){
      console.log(val)
      this.getDatasInfo(val, this.refundTime, this.refundStatus, this.overdueState)
    },
    refundTime: function (val, oldVal){
      console.log(val)
      this.getDatasInfo(this.loanTime, val, this.refundStatus, this.overdueState)
    },
    refundStatus: function (val, oldVal){
      console.log(val)
      this.getDatasInfo(this.loanTime, this.refundTime, val, this.overdueState)
    },
    yuqi: function (val, oldVal) {
      console.log(val)

    },
    overdueState: function (val, oldVal){
      this.getDatasInfo(this.loanTime, this.refundTime, this.refundStatus, val)
    }
  },
  methods: {
    ...mapMutations({
      setLoanDetail: 'SET_LOAN_DETAIL'
    }),
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getDatasInfo(this.$route.query.loanTime || 6, '', this.$route.query.refundStatus || '', '')
    },
    getDatas () {
      let _this = this
      // 借贷明细的统计
      this.$http.post('/api/tradecompany/financ/statistic', {})
        .then(res => {
          if (res.data.status === 200) {
            _this.countDatas = res.data.result
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDatasInfo (_loanTime, _refundTime, _refundStatus, _overdueState) {
      let _this = this
      // 借贷明细列表
      let pramas = {
        'page': 1,
        'loanTime': _loanTime,
        'repayTime': _refundTime,
        'repayStatus': _refundStatus,
        'overdueStatus': _overdueState
      }
      this.$http.get('/api/tradecompany/detail/list?page=1&&loanTime=' + _loanTime + '&&repayTime=' + _refundTime + '&&repayStatus=' + _refundStatus + '&&overdueStatus=' + _overdueState + '&&loanStatus=2')
        .then(res => {
          console.log(res)
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
            _this.loanDatas = res.data.result.rows
            // 分页
            _this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
            _this.pageNum = res.data.result.pageNum
          } else {
            // 暂无数据
            _this.popData2 = true
            _this.mainData2 = false
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    goPage (_id, _datas) {
      this.$router.push({
        name: 'loanDetailInfo',
        query: {'loanId': _id}
      })
      this.setLoanDetail(_datas)
    }
  }
})
</script>
<style type="text/css" scoped>
</style>
