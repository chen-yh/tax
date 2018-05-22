<template>
 <div class="detail">
  <brand><router-link to="/">平台对账</router-link></brand>
  <div class="bgwhite">
    <h2 class="title">平台服务费收取规则：</h2>
    <div class="bg-hui-info">
      <ul class="info">
        <li>1、对于所有退税融资业务，每出口一美元，收取0.5分人民币服务费。</li>
        <li>
          2、对于平台介绍的出口业务，每出口一美元，额外收取0.5分人民币服务费。
        </li>
        <li>
          3、额外的年利率。
        </li>
      </ul>
    </div>
    <!--平台对账总计-->
    <tables-tit-more :tablesData="loanCount">
      <div slot="tables-tit">统计
      </div>
      <div slot="datas">
        <dd>
          <div>{{countDatas.export || 0}} 美元</div>
          <div>{{countDatas.financ || 0}} 元</div>
          <div>{{countDatas.repaid || 0}} 元</div>
          <div>{{countDatas.repay || 0}} 元</div>
          <div>{{countDatas.server || 0}} 元</div>
        </dd>
      </div>
    </tables-tit-more>
    <!--平台对账-->
    <tables-tit-more :tablesData="loanDetial">
      <div slot="tables-tit">平台对账
      </div>
      <div slot="datas"  v-show="popData" class="pop-center">暂无数据</div>
      <div slot="datas"  class="link-blue" v-show="mainData">
        <dd v-for="d in billDatas" @click="goPage(d.loan.id, d, d.refundApply.surplusRefund, d.refundApply.remainPayments)">
          <div>{{d.refundApply.contract}}</div>
          <div>
            <span v-if="d.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{d.factoryInfo.entName}}</div>
          <div>{{d.refundApply.declareSum}} 美元</div>
          <div>{{d.refundApply.financing}} 元</div>
          <div>{{d.refundApply.surplusRefund}} 元</div>
          <div>{{d.refundApply.remainPayments}}</div>
          <div>{{d.refundApply.loanPeriod}} 个月</div>
          <div>{{d.loan.loanTime | dateFormate}}</div>
          <div>{{d.loan.expireTime | dateFormate}}</div>
          <div>{{d.serverCost}} 元</div>
        </dd>
      </div>
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
      loanCount: {
        data: [
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '已还款'},
          {title: '未还款'},
          {title: '平台服务费'}
        ]
      },
      loanDetial: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '企业名称 '},
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '已还款'},
          {title: '未还款'},
          {title: '贷款周期'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '平台服务费'}
        ],
        url: 'loanDetailInfo'
      },
      // 平台对账汇总
      countDatas: {},
      // 平台对账数据
      billDatas: [],
      // 暂无数据
      popData: false,
      mainData: true,
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
    this.getDatasCount()
    this.getDatas()
  },
  methods: {
    ...mapMutations ({
      loanDetail: 'SET_LOAN_DETAIL'
    }),
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getDatas()
    },
    getDatasCount () {
      let _this = this
      // 平台对账统计数据接口
      this.$http.get('/api/financ/bill/statistic')
        .then(res => {
          console.log('平台统计数据', res)
          if (res.data.status == 200 && res.data.result) {
            _this.countDatas = res.data.result
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 平台对账接口
    getDatas () {
      this.$http.get('/api/financ/bill/list?page='+ this.curPage + '&&loanStatus=2')
        .then(res => {
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
            this.billDatas = res.data.result.rows
            // 分页
            this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
            this.pageNum = res.data.result.pageNum
          } else {
            this.popData = true
            this.mainData = false
          }
        })
    },
    //进入详情页
    goPage (_id, _data, _r, _rDate) {
      this.$router.push({
        name: 'outAccountInfo',
        query: {'loanId': _id, 'r': _r, 'rDate': _rDate}
      })
      this.loanDetail(_data)
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
