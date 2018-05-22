<template>
 <div class="detail">
  <brand></brand>
  <div class="bgwhite">
    <div class="filter">
      <dl>
        <dt>出口申报日期：</dt>
        <dd>
          <select v-model="exportDate">
            <option value="">全部</option>
            <option value="1">今日</option>
            <option value="2">本周</option>
            <option value="3">本月</option>
            <option value="4">本年</option>
          </select>
        </dd>
      </dl>
      <!-- <dl>
        <dt>融资开始时间：</dt>
        <dd>
          <select v-model="taxCreateTime">
            <option value="0">全部</option>
            <option value="1">今日</option>
            <option value="2">本周</option>
            <option value="3">本月</option>
            <option value="4">本年</option>
          </select>
        </dd>
      </dl> -->
    </div>
    <!--出口明细总计-->
    <tables-tit-more :tablesData="loanCount">
      <div slot="tables-tit">统计
      </div>
      <dd slot="datas">
        <div>{{countDatas.export}} 元</div>
        <div>{{countDatas.financ}} 元</div>
        <div>{{countDatas.repay}} 元</div>
        <div>{{countDatas.repaid}} 元</div>
        <div>{{countDatas.server}} 元</div>
      </dd>
    </tables-tit-more>
    <!--出口明细明细-->
    <tables-tit-more :tablesData="loanDetial">
      <div slot="tables-tit">出口明细
      </div>
      <dd slot="datas" class="link-blue" v-for="a in loanDatas" @click="goPage(a.id, a, a.factoryInfoName, a.refundApply.tradeserviceName)">
        <div>{{a.refundApply.contract}}</div>
        <div>
          <span v-if="a.refundApply.financingProject==1">退税融资</span>
        </div>
        <div>{{a.factoryInfoName}}</div>
        <div>{{a.refundApply.declareTime | dateFormate}}</div>
        <div>{{a.refundApply.declareSum}}</div>
        <div>{{a.product? (a.product.name? a.product.name : "") : ""}}</div>
        <div>aa</div>
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
      loanCount: {
        data: [
          {title: '出口金额'},
          {title: '融资金额'},
          {
            title: '平台服务费'
          },
          {title: '已还款'},
          {title: '未还款'}
        ]
      },
      loanDetial: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '委托企业'},
          {title: '出口申报日期'},
          {title: '出口金额'},
          {title: '出口产品'},
          {title: '融资开始时间'}
        ],
        url: 'loanDetailInfo'
      },
      countDatas: {},
      loanDatas: [],
      //分页
      // 默认当前页
      curPage: 1,
      // 当前页的index
      curIndex: 0,
      //最大页数
      pageCount: 1,
      // select
      exportDate: '',
      taxCreateTime: 0
    }
  },
  components: {
    brand,
    page,
    tablesTitMore
  },
  mounted () {
    this.getDatas()
    this.getOutDatas(0)
  },
  watch: {
    exportDate: function(val, oldVal) {
      this.getOutDatas(this.exportDate)
    },
    // taxCreateTime: function(val, oldVal) {
    //   this.getOutDatas(this.exportDate, val)
    // }
  },
  methods: {
    ...mapMutations({
      setLoanDetail: 'SET_LOAN_DETAIL'
    }),
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getOutDatas('')
    },
    getDatas () {
      let _this = this
      // 出口明细的统计
      this.$http.get('/api/tradecompany/financ/statistic')
        .then(res => {
          console.log('res111111', res.data)
          if (res.data.status === 200) {
            _this.countDatas = res.data.result
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 出口明细列表
    getOutDatas (_exportDate) {
      let _this = this
      this.$http.get('/api/refundapply/search/exit?page=' + _this.curPage + '&&declareTime=' + _exportDate)
        .then(res => {
          console.log('出口明细', res)
          if (res.data.status === 200) {
            _this.loanDatas = res.data.result.rows
            // 分页
            this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
            this.pageNum = res.data.result.pageNum
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    goPage (_id, _data, _f, _name) {
      this.$router.push({
        name: 'outDetailInfo',
        query: {'id': _id, 'factory': _f , 'tName': _name}
      })
      this.setLoanDetail(_data)
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
