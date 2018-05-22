<template>
 <div class="detail">
  <brand><router-link to="/">融资确认</router-link></brand>
  <div class="bgwhite">
    <!--贷款还款总计-->
    <tables-tit-more :tablesData="loanCount">
      <div slot="tables-tit">统计
      </div>
      <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
      <div slot="datas" v-show="mainData2">
        <dd>
          <div>{{affirmCount.export}} 美元</div>
          <div>{{affirmCount.financ}} 美元</div>
          <div>{{affirmCount.server }} 元</div>
        </dd>
      </div>
    </tables-tit-more>
    <!--融资确认明细-->
    <tables-tit-more :tablesData="loanDetial">
      <div slot="tables-tit">融资确认
      </div>
      <div slot="datas"  v-show="popData" class="pop-center">暂无数据</div>
      <div slot="datas" class="link-blue" v-show="mainData">
        <dd v-for="d in affirmDatas" @click="goPage(d.refundApply.id)">
          <div>{{d.refundApply.contract}}</div>
          <div>
            <span v-if="d.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{d.factoryInfo.entName}}</div>
          <div>{{d.refundApply.declareSum}} 元</div>
          <div>{{d.refundApply.declareTime | dateFormate}}</div>
          <div>{{d.refundApply.financing}} 元</div>
          <div>{{d.refundApply.createTime | dateFormate}}</div>
          <div>{{d.loanPeriod?d.loanPeriod:d.refundApply.loanPeriod}}个月</div>
          <div>{{d.serverCost?d.serverCost :d.refundApply.costPlatform }} 元</div>
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
          {title: '平台服务费(元) '}
        ]
      },
      loanDetial: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '企业名称 '},
          {title: '出口金额'},
          {title: '出口日期'},
          {title: '融资金额'},
          {title: '融资申请时间'},
          {title: '贷款周期'},
          {title: '平台服务费'}
        ],
        url: 'financingAffirm'
      },
      // 融资确认列表
      affirmDatas: [],
      // 统计
      affirmCount: {},
      // 暂无数据
      popData: false,
      mainData: true,
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
    this.getAffirmCount()
  },
  methods: {
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getCompanys()
    },
    // 融资待确认列表
    getDatas () {
      let _this = this
      this.$http.get('/api/financ/confirm/list?page=' + _this.curPage)
        .then(res => {
          console.log(res.data.result)
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
            this.affirmDatas = res.data.result.rows
            // 分页
            this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
            this.pageNum = res.data.result.pageNum
            // 暂无数据
            _this.popData = false,
            _this.mainData = true
          } else {
            _this.popData = true,
            _this.mainData = false
          }
        })
    },
    // 融资待确认统计
    getAffirmCount () {
      let _this = this
      this.$http.get('/api/financ/statistic')
        .then(res => {
          console.log('融资待确认统计', res.data)
          if (res.data.status === 200) {
            this.affirmCount = res.data.result
            // 暂无数据
            _this.popData2 = false,
            _this.mainData2 = true
          }
          else {
            _this.popData2 = true,
            _this.mainData2 = false
          }
        })
    },
    // 去详情页
    goPage (_id) {
      this.$router.push({
        name: 'financingAffirm',
        query: {'applyId': _id}
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
