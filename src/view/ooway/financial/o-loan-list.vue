<template>
  <div class="detail">
    <brand></brand>
    <div class="bgwhite">
    <!--贷款还款总计-->
    <tables-tit-more :tablesData="dRepayData">
      <div slot="tables-tit">待放款列表
      </div>
      <div slot="datas">
        <dd v-for="d in loanDatas">
          <div>{{d.refundApply.contract}}</div>
          <div>
            <span v-if="d.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{d.entName}}</div>
          <div>{{d.refundApply.financing}}  元</div>
          <div>{{d.refundApply.loanPeriod}} 个月</div>
          <div>{{d.refundApply.createTime | dateFormate}}</div>
          <div>{{d.refundApply.costPlatform }} 元</div>
          <div @click="goPage(d,d.refundApply.id,d.refundApply.financing,d.refundApply.tradeserviceId)"><span class="link-blue f14">去放款</span></div>
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
import checkboxData from '../../../components/common/checkbox-data'
import {mapMutations} from 'vuex'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '融资企业'},
          {title: '融资金额()'},
          {title: '贷款周期(月)'},
          {title: '贷款申请时间'},
          {title: '平台服务费'},
          {title: '去放款'}
        ],
        url: 'goLoan'
      },
      loanDatas: {},
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
    tablesTitMore,
    checkboxData
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    ...mapMutations({
      setLoanInfo: 'SET_LOANINFO'
    }),
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getDatas()
    },
    // 获取数据
    getDatas () {
      let _this = this
      this.$http.get('/api/ooway/loan/refundapply/select?pageNum=' + _this.curPage)
        .then(res => {
          console.log(res.data)
          if(res.data.status === 200 && res.data.result.rows.length > 0) {
            _this.loanDatas = res.data.result.rows
            // 分页
            this.pageCount = Math.ceil(res.data.result.total/res.data.result.pageSize)
            this.pageNum = res.data.result.pageNum
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    goPage (d, _id, _num, _trId) {
      this.setLoanInfo(d)
      this.$router.push({
        name: 'goLoan',
        query: {
          'id': _id,
          'num': _num,
          'tradeserviceId': _trId
        }
      })
    }
  }
})
</script>
<style type="text/css" scoped>
@import '../../../assets/css/detail.css';
</style>
