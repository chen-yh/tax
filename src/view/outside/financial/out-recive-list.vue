<template>
 <div class="detail">
  <brand><router-link to="/"></router-link></brand>
  <div class="bgwhite">
    <!--收款明细-->
    <tables-tit-more :tablesData="loanDetial">
      <div slot="tables-tit">收款待确认列表
      </div>
      <div slot="datas"  v-show="popData" class="pop-center">暂无数据</div>
      <div slot="datas" v-show="mainData">
        <dd v-for="(r,index) in reciveDatas" :key="index" @click="goPage(r.loan.id)" class="link-blue">
          <div>{{r.refundApply.contract}}</div>
          <div>
            <span v-if="r.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{r.factoryInfo.entName ? r.factoryInfo.entName :'工厂名称'}}</div>
          <!-- <div>{{r.refundApply.declareTime | dateFormate}}</div> -->
          <!--出口金额-->
          <div>{{r.refundApply.declareSum}} 元</div>
          <!--融资金额-->
          <div>{{r.refundApply.financing}} 元</div>
          <!--融资金额-->
          <div>{{r.loan.amount}} 元</div>
          <!--贷款周期-->
          <div>{{r.refundApply.loanPeriod}} 个月</div>
          <!--贷款开始时间-->
          <div>{{r.loan.loanTime | dateFormate}}</div>
          <!--贷款到期时间-->
          <div>{{r.loan.expireTime | dateFormate}}</div>
          <!--还款状态-->
          <div>
            <span v-if="r.refundApply.repayState==0" class="red">未还</span>
            <span v-if="r.refundApply.repayState==1" class="red" >完成还款</span>
            <span v-if="r.refundApply.repayState==2" class="red">未还清</span>
            <span v-if="r.refundApply.repayState==3" class="red">已还未确认</span>
          </div>
          <!--延期时间-->
          <div>{{r.deadDays}} 天</div>
          <!--服务费-->
          <div>{{r.serverCost }} 元</div>
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
          {title: '委托企业'},
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '收款金额'},
          {title: '贷款周期'},
          {title: '贷款开始'},
          {title: '贷款到期'},
          {title: '还款状态'},
          {title: '还款倒计时'},
          {title: '平台服务费'}
        ],
        url: 'reciveAffirm'
      },
      // 收款确认
      reciveDatas: [],
      // 暂无数据显示隐藏
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
    this.getDatas()

  },
  methods: {
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getDatas()
    },
    // 获取数据
    getDatas () {
      let _this = this
      this.$http.get('/api/trade/loan/list?page=' + _this.curPage + '&&loanStatus=1', {})
        .then(res => {
          console.log('收款确认列表', res.data.result)
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
            this.reciveDatas = res.data.result.rows
            // 分页
            this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
            this.pageNum = res.data.result.pageNum
            //
            this.popData = false
            this.mainData = true
          } else {
            this.popData = true
            this.mainData = false
          }
        })
    },
    // 跳转到还款详情页面
    goPage (_id) {
      this.$router.push({
        name: 'reciveAffirm',
        query: {'loanId': _id}
      })
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
