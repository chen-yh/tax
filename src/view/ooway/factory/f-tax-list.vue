<template>
  <div class="detail">
    <brand></brand>
    <div class="bgwhite">
    <!--贷款还款总计-->
    <h2 class="h2-bord">外综服退税融资申请</h2>
    <filter-company @myState="getState">
    </filter-company>
    <filter-companys @myStateObj="getStateObj">
    </filter-companys>
    <tables-tit-more :tablesData="dRepayData">
      <div slot="tables-tit">
      </div>
      <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
      <div slot="datas" class="link-blue" v-show="mainData2">
        <dd v-for="v in vdatas" @click="goPage(v.refundApply.id)">
          <div>{{v.refundApply.contract}}</div>
          <div>{{v.entName}}</div>
          <div>
            <span v-if="v.refundApply.financingProject == 1"> 融资申请 </span>
          </div>
          <div>{{v.refundApply.declareTime | dateFormate}}</div>
          <div>{{v.refundApply.declareSum}}</div>
          <div>{{v.refundApply.settlement}}</div>
          <div>{{v.refundApply.totalInvoice}}</div>
          <div>{{v.refundApply.invoiceTime | dateFormate}}</div>
          <div>{{v.refundApply.createTime | dateFormate}}</div>
          
          <div>
            <span v-if="v.refundApply.verifyState==0">待审核</span>
            <span v-if="v.refundApply.verifyState==1">审核通过</span>
            <span v-if="v.refundApply.verifyState==2">待审核</span>
          </div>
          <div>{{v.refundApply.reason}}</div>
        </dd>
      </div>
    </tables-tit-more>
    </div>
  </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
import checkboxData from '../../../components/common/checkbox-data'
import filterCompany from '../../../components/common/filter-company'
import filterCompanys from '../../../components/common/filter-company-obj'
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
          {title: '开票年月'},
          {title: '申请退税日期'},
          {title: '是否审核'},
          {title: '未通过原因'}
        ],
        url: 'outTaxInfo'
      },
      vdatas: [],
      // 暂无数据
      popData2: false,
      mainData2: true,
      selectObj: 2,
      state: 0,
    }
  },
  components: {
    brand,
    tablesTitMore,
    checkboxData,
    filterCompany,
    filterCompanys
  },
  mounted () {
    this.getDatas(this.state, this.selectObj)
  },
  methods: {
    goRepay () {
      this.$router.push({name: 'goRepayment'})
    },
    getDatas (state, obj) {
      let _this = this

      if (state == 0) {
         this.$http.get('/api/ooway/refundapply/factory/select?verifyObj=' + obj)
           .then(res => {
            if (res.data.result.rows.length >0) {
              _this.popData2 = false
              _this.mainData2 = true
             _this.vdatas = res.data.result.rows
            } else {
              _this.popData2 = true,
              _this.mainData2 = false
            }
        })
      } else if(state == 1){
        this.$http.get('/api/ooway/refundapply/factory/select?verifyObj=' + obj + '&&verifyState=1')
        .then(res => {
            if (res.data.result.rows.length >0) {
              _this.popData2 = false
              _this.mainData2 = true
             _this.vdatas = res.data.result.rows
            } else {
              _this.popData2 = true,
              _this.mainData2 = false
            }
        })
      } else if(state==2){
        this.$http.get('/api/ooway/refundapply/factory/select?verifyObj==' + obj + '&&verifyState=2' + '&&verifyResult=2')
        .then(res => {
            if (res.data.result.rows.length >0) {
              _this.popData2 = false
              _this.mainData2 = true
             _this.vdatas = res.data.result.rows
            } else {
              _this.popData2 = true,
              _this.mainData2 = false
            }
        })
      } else {
        this.$http.get('/api/ooway/refundapply/factory/select?verifyObj=2&&verifyState=2' + '&&verifyResult=3')
        .then(res => {
            if (res.data.result.rows.length >0) {
              _this.popData2 = false
              _this.mainData2 = true
             _this.vdatas = res.data.result.rows
            } else {
              _this.popData2 = true,
              _this.mainData2 = false
            }
        })
      }
    },
    getState (val) {
      this.state = val
      console.log(val)
      this.getDatas(this.state, this.selectObj)
    },
    // 
    getStateObj (obj) {
      this.selectObj = obj
      console.log(obj)
      this.getDatas(this.state, this.selectObj)
    },
    // 跳转到审核页面
    goPage (_id) {
      this.$router.push({
        name: 'fTaxInfo',
        query: {'id': _id}
      })
    }
    
  }
})
</script>
<style type="text/css" scoped>
@import '../../../assets/css/detail.css';
.filter dl dt{padding-top:0px;}
.other dl{
  padding:0px 50px 12px 0;
}
</style>
