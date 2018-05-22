<template>
  <div class="detail">
    <brand></brand>
    <div class="bgwhite">
    <!--贷款还款总计-->
    <h2 class="h2-bord">外综服退税融资申请</h2>
    <filter-company @myState="getState">
    </filter-company>
    <tables-tit-more :tablesData="dRepayData">
      <div slot="tables-tit">
      </div>
      <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
      <div slot="datas" class="link-blue" v-show="mainData2">
        <dd v-for="v in vdatas" @click="goPage(v.refundApply.id)">
          <div>{{v.refundApply.contract}}</div>
          <div>{{v.entName}}</div>
          <div>
            <span v-if="v.refundApply.financingProject == 1">融资申请</span>
          </div>
          <div>{{v.refundApply.declareTime | dateFormate}}</div>
          <div>{{v.refundApply.declareSum}} 美元</div>
          <div>{{v.refundApply.settlement}}</div>
          <div>{{v.refundApply.totalInvoice}}</div>
          <!-- <div>{{v.refundApply.invoiceTime | dateFormate}}</div> -->
          <div>{{v.refundApply.createTime | dateFormate}}</div>
          
          <div>
            <span v-if="v.refundApply.verifyState==0">未审核</span>
            <span v-if="v.refundApply.verifyState==1">待审核</span>
            <span v-if="v.refundApply.verifyState==2">已审核</span>
          </div>
          <div>{{v.refundApply.reason}}</div>
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
import filterCompany from '../../../components/common/filter-company'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: '合同号'},
          {title: '企业名称'},
          {title: '融资项目'},
          {title: '申请出口时间'},
          {title: '报关金额'},
          {title: '结汇金额'},
          {title: '发票总金额'},
          {title: '申请退税日期'},
          {title: '是否审核'},
          {title: '未通过原因'}
        ],
        url: 'outTaxInfo'
      },
      vdatas: [],
      //分页
      // 默认当前页
      curPage: 1,
      // 当前页的index
      curIndex: 0,
      //最大页数
      pageCount: 1,
      // 暂无数据
      popData2: false,
      mainData2: true
    }
  },
  components: {
    brand,
    tablesTitMore,
    checkboxData,
    filterCompany,
    page
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getState()
    },
    goRepay () {
      this.$router.push({name: 'goRepayment'})
    },
    getDatas () {
      let _this = this
      // this.$http.get('/api/ooway/refundapply/factory/select?verifyObj=2&&verifyState' + this.myState.verifyState ? this.myState.verifyState : '' + '&&verifyResult=' + this.myState.verifyResult ? this.myState.verifyResult : '')
      //   .then(res => {
      //     _this.vdatas = res.data.result.rows
      //   })
    },
    getState (val) {
      let _this = this
      console.log(val)
      if (val == 0) {
         this.$http.get('/api/ooway/refundapply/factory/select?pageNum=' + _this.curPage + '&&verifyObj=2')
           .then(res => {
            if (res.data.status === 200 && res.data.result && res.data.result.total >0) {
              _this.popData2 = false
              _this.mainData2 = true
              _this.vdatas = res.data.result.rows
              _this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
              _this.pageNum = res.data.result.pageNum
             
            } else {
              _this.popData2 = true,
              _this.mainData2 = false
            }
        })
      } else if(val == 1){
        this.$http.get('/api/ooway/refundapply/factory/select?pageNum=' + _this.curPage + '&&verifyObj=2&&verifyState=1')
        .then(res => {
            if (res.data.result.rows.length >0) {
              _this.popData2 = false
              _this.mainData2 = true
              _this.vdatas = res.data.result.rows
              _this.pageSize = _this.vdatas.length / 8
              _this.pageSize = res.data.result.pageSize
              _this.pageNum = res.data.result.pageNum
            } else {
              _this.popData2 = true,
              _this.mainData2 = false
            }
        })
      } else if(val==2){
        this.$http.get('/api/ooway/refundapply/factory/select?pageNum=' + _this.curPage + '&&verifyObj=2&&verifyState=2' + '&&verifyResult=1')
        .then(res => {
            if (res.data.status === 200 && res.data.result && res.data.result.rows.length >0) {
              _this.popData2 = false
              _this.mainData2 = true
              _this.vdatas = res.data.result.rows
              _this.pageSize = Math.ceil(_this.vdatas.length / 8)
              _this.pageSize = res.data.result.pageSize
              _this.pageNum = res.data.result.pageNum
            } else {
              _this.popData2 = true,
              _this.mainData2 = false
            }
        })
      } else {
        this.$http.get('/api/ooway/refundapply/factory/select?pageNum=' + _this.curPage + '&&verifyObj=2&&verifyState=2' + '&&verifyResult=0')
        .then(res => {
            if (res.data.result.rows.length >0) {
              _this.popData2 = false
              _this.mainData2 = true
              _this.pageSize = res.data.result.pageSize
              _this.pageNum = res.data.result.pageNum
             _this.vdatas = res.data.result.rows
            } else {
              _this.popData2 = true,
              _this.mainData2 = false
            }
        })
      }
    },
    // 跳转到审核页面
    goPage (_id) {
      this.$router.push({
        name: 'outTaxInfo',
        query: {'id': _id}
      })
    }
    
  }
})
</script>
<style type="text/css" scoped>
@import '../../../assets/css/detail.css';
.filter dl dt{padding-top:0px;}
</style>
