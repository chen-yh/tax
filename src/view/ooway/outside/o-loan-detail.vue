<template>
 <div class="detail">
  <brand></brand>
  <div class="bgwhite">
    <div class="filter">
      <dl>
        <dt>贷款开始时间：</dt>
        <dd>
          <select v-model="searchTime">
            <option value="">全部</option>
            <option value="1">今日</option>
            <option value="2">本周</option>
            <option value="3">本月</option>
            <option value="4">本年</option>
          </select>
          <!-- <input type="date" name=""> -->
        </dd>
      </dl>
      <dl>
        <dt>还款倒计时：</dt>
        <dd>
          <select v-model="refundTime">
            <option value="">全部</option>
            <option value="2">3日内</option>
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
    <div class="filter">
    <dl>
        <dt>外综服名称：</dt>
        <dd>
          <input type="" name="" v-model="tradeName" placeholder="请输入外综服企业名称">
        </dd>
      </dl>
      <dl>
        <dt>出口企业名称：</dt>
        <dd>
          <input type="" name="" v-model="entNames" placeholder="请输入出口企业名称">
        </dd>
      </dl>
    </div>
    <!--贷款还款总计-->
    <!-- <tables-tit-more :tablesData="loanCount">
      <div slot="tables-tit">统计
      </div>
    </tables-tit-more> -->
    <!--贷款还款明细-->
    <div style="width:100%; overflow:auto">
        <tables-tit-more :tablesData="loanDetial" class="w160" style="width:160%;">
          <div slot="tables-tit">贷款 / 还款明细
          </div>
          <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
          <div slot="datas" class="link-blue" v-show="mainData2">
            <dd v-for="d in datasMain" @click="goPage(d.refundApply.id)">
              <div>{{d.refundApply.contract}}</div>
              <div>
                <span v-if="d.refundApply.financingProject==1">退税融资</span>
              </div>
              <div>{{d.entName}}</div>
              <div>{{d.factoryName}}</div>
              <div>{{d.refundApply.declareSum}} 元</div>
              <div>{{d.refundApply.financing}} 元</div>
              <div>{{d.refundApply.costPlatform }} 元</div>
              <div>{{d.refundApply.loanPeriod}} 个月</div>
              <div>{{d.refundApply.createTime | dateFormate}}</div>
              <div>{{d.expireTime | dateFormate}}</div>
              <div>
                <span v-if="d.refundApply.repayState==0">未还款</span>
                <span v-if="d.refundApply.repayState==1">已还款</span>
                <span v-if="d.refundApply.repayState==2">未还清</span>
                <span v-if="d.refundApply.repayState==3">已还款未确认</span>
              </div>
              <div>
                <span v-if="d.refundApply.overdueState==1">逾期</span>
                <span v-if="d.refundApply.overdueState==0">未到期</span>
              </div>
              <div>{{d.refundApply.surplusRefund}}</div>
              <div>{{d.refundApply.remainPayments}}</div>
              <div>{{d.days}}</div>
            </dd>
          </div>
        </tables-tit-more>
      </div>
      <!--分页-->
    <page :pageSize="pageCount" :curPage="curPage" :curIndex="curIndex" @getCurPage="getCurPage"></page>
    </div>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import page from '../../../components/base/page'
import tablesTitMore from '../../../components/common/tables-tit-more'
export default({
  data () {
    return {
      loanCount: {
        data: [
          {title: '出口金额'},
          {title: '融资金额'},
          {
            title: '平台服务费 '},
          {title: '已还款'},
          {title: '未还款'}
        ]
      },
      loanDetial: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '外综服企业'},
          {title: '出口企业 '},
          {title: '出口金额 '},
          {title: '融资金额'},
          {title: '平台服务费'},
          {title: '贷款周期'},
          {title: '贷款开始时间'},
          {title: '贷款结束时间'},
          {title: '还款状态'},
          {title: '是否逾期'},
          {title: '已还款'},
          {title: '剩余还款'},
          {title: '还款倒计时'}
        ],
        url: 'oLoanInfo',
        
      },
      // 全部数据
      datasMain: [],
      //分页
      // 默认当前页
      curPage: 1,
      // 当前页的index
      curIndex: 0,
      //最大页数
      pageCount: 1,
      // 暂无数据
      popData2: false,
      mainData2: true,
      // select框
      searchTime: this.$route.query.searchTime || '',
      refundTime: '',
      refundStatus: '',
      overdueState: this.$route.query.overdueState || '',
      deaDays: 0,
      tradeName: '',
      entNames: ''
    }
  },
  components: {
    brand,
    page,
    tablesTitMore
  },
  mounted () {
    this.getDatas(this.$route.query.searchTime || '', '', this.$route.query.overdueState || '', '', '', '')
  },
  watch: {
    searchTime: function (val, oldVal){
      console.log(val)
      this.getDatas(val, this.refundTime, this.refundStatus, this.overdueState, this.tradeName, this.entNames)
    },
    refundTime: function (val, oldVal){
      console.log(val)
      this.getDatas(this.searchTime, val, this.refundStatus, this.overdueState, this.tradeName, this.entNames)
    },
    refundStatus: function (val, oldVal){
      console.log(val)
      this.getDatas(this.searchTime, this.refundTime, val, this.overdueState, this.tradeName, this.entNames)
    },
    overdueState: function (val, oldVal){
      this.getDatas(this.searchTime, this.refundTime, this.refundStatus, val, this.tradeName, this.entNames)
    },
    tradeName: function (val, oldVal) {
      this.getDatas(this.searchTime, this.refundTime, this.refundStatus, this.overdueState, val, this.entNames)
    },
    entNames: function (val, oldVal) {
      this.getDatas(this.searchTime, this.refundTime, this.refundStatus, this.overdueState, this.tradeName, val)
    }
  },
  methods: {
    getDatas (_searchTime, _refundTime, _refundStatus, _overdueState, _tradeName, _entNames) {
      let _this = this
      this.$http.get('/api/ooway/refundapply/tradecompany/select?pageNum=' + _this.curPage + '&&searchTime=' + _searchTime + '&&overTime=' + _refundTime + '&&repayState=' + _refundStatus + '&&overdueState=' + _overdueState + '&&tradeCompanyName=' + _tradeName + '&&factoryName='+ _entNames)
        .then(res => {
          console.log(res.data)
          if (res.data.status === 200 && res.data.result && res.data.result.rows) {
            _this.datasMain = res.data.result.rows
            // 分页
              _this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
              _this.pageNum = res.data.result.pageNum
            _this.popData2 = false
            _this.mainData2 = true
          } else {
            _this.popData2 = true
            _this.mainData2 = false
          }
          
        })
    },
    goPage (_id) {
      this.$router.push({
        name: 'oLoanInfo',
        query: {
          'id': _id
        }
      })
    },
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getDatas(this.$route.query.searchTime || '', '', this.$route.query.overdueState || '', '', '', '')
    }
  }
})
</script>
<style type="text/css" scoped>
.tables.w160 dl{
  width:160%!important;
}
.filter{
  vertical-align: middle;
  line-height: 30px;
  margin-bottom:20px;
}
.filter input{
  height:30px;
  line-height: 30px;
  vertical-align: top;
  padding:0 5px;
}
</style>
