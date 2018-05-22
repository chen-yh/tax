<template>
    <div>
       <brand>退税融资</brand>
       <div class="bgwhite">
         <h2 class="title">{{companyInfo}}</h2>
         <div class="bg-hui-info">
           <div class="company-info">
             <dl>
              <dt>您今年授信额度上限：</dt>
              <dd>{{creditDatas?creditDatas.yearLimit : 0}} 元</dd>
             </dl>
             <dl>
              <dt>本月授信额度：</dt>
              <dd>{{creditDatas?creditDatas.monthLimit:0}} 元</dd>
             </dl>
            </div>
            <div class="company-info">
             <dl>
              <dt>本月剩余授信额度：</dt>
              <dd>{{creditDatas?creditDatas.monthBalance:0}} 元</dd>
             </dl>
             <dl>
              <dt> </dt>
              <dd> </dd>
             </dl>
            </div>
            <p class="padd10">您已经通过平台融资 <span class="red">{{biCount.allsize}} </span>笔，融资金额共计 <span class="red">{{biCount.allmoney}}</span> 元。<br/>
            其中 <span class="red">{{biCount.size}} </span>笔为退税融资，退税融资金额 <span class="red">{{biCount.money}} </span>元。</p>
         </div>
       </div>
       <div class="bgwhite">
         <div class="btn-big-orange" @click="reviewTheValidation()">申请退税融资</div>
       </div>
       <div class="bgwhite">
         <!--talbes1-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">待平台审核的退税融资列表
             <span class="more" @click="goMore()" v-show="mainData">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData" class="pop-center">暂无数据</div>
           <div slot="datas"  class="link-blue" v-show="mainData">
             <dd v-for="(d,index) in data1" :key="index" @click="goPage(d.repayment.applyId)">
               <div>{{d.refundApply.contract}}</div>
               <div>{{d.factoryInfo.entName}}</div>
               <div>{{d.refundApply.declareTime | dateFormate}}</div>
               <div>{{d.refundApply.declareSum}}</div>
               <div>{{d.refundApply.earnings}}</div>
               <div>{{d.refundApply.settlement}}</div>
               <div>{{d.refundApply.invoiceQuantity}}</div>
               <div>{{d.refundApply.financing}}</div>
               <div>{{d.refundApply.createTime | dateFormate}}</div>
             </dd>
           </div>
         </tables-tit-more>
         <!--talbes2-->
         <tables-tit-more :tablesData="taxData2">
           <div slot="tables-tit">审批未通过列表
             <span class="more" @click="goMore()" v-show="mainData2">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
           <div slot="datas" class="link-blue" v-show="mainData2">
             <dd v-for="(d,index) in data2" :key="index" @click="goPage(d.refundApply.id, d.refundApply.verifyState, d.refundApply.verifyResult)">
               <div>{{d.refundApply.contract?d.refundApply.contract:'合同号'}}</div>
               <div>{{d.entName}}</div>
               <div>{{d.refundApply.declareTime | dateFormate}}</div>
               <div>{{d.refundApply.declareSum}}</div>
               <div>{{d.refundApply.earnings?d.refundApply.earnings:0}}</div>
               <div>{{d.refundApply.totalInvoice?d.refundApply.settlement:0}}</div>
               <div>{{d.refundApply.financing?d.refundApply.financing:0}}</div>
               <div>{{d.refundApply.createTime | dateFormate}}</div>
               <div>{{d.refundApply.reason}}</div>
             </dd>
           </div>
         </tables-tit-more>
         <!--talbes3-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">待提交退税融资列表
             <span class="more" @click="goMore()" v-show="mainData3">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData3" class="pop-center">暂无数据</div>
           <div slot="datas" class="link-blue" v-show="mainData3">
             <dd v-for="(d,index) in data3" :key="index" @click="goPageD(d.refundApply.id, d.refundApply, d.factoryInfo, d)">
               <div>{{d.refundApply.contract}}</div>
               <div>{{d.factoryInfo.entName}}</div>
               <div>{{d.refundApply.declareTime | dateFormate}}</div>
               <div>${{d.refundApply.declareSum}} 元</div>
               <div>￥{{d.refundApply.earnings}} 元</div>
               <div>￥{{d.refundApply.settlement}} 元</div>
               <!-- <div>{{d.refundApply.invoiceQuantity}}</div> -->
               <div>￥{{d.refundApply.financing}} 元</div>
               <div>{{d.refundApply.createTime | dateFormate}}</div>
             </dd>
           </div>
         </tables-tit-more>
         <!--talbes4-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">待财务确认的放款退税融资列表
             <span class="more" @click="goMore()" v-show="mainData4">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData4" class="pop-center">暂无数据</div>
           <div slot="datas" class="link-blue" v-show="mainData4">
             <dd v-for="(d,index) in data4" :key="index" @click="goPage(d.repayment.applyId)">
               <div>{{d.refundApply.contract}}</div>
               <div>{{d.factoryInfo.entName}}</div>
               <div>{{d.refundApply.declareTime | dateFormate}}</div>
               <div>{{d.refundApply.declareSum}}</div>
               <div>{{d.refundApply.earnings}}</div>
               <div>{{d.refundApply.settlement}}</div>
               <div>{{d.refundApply.invoiceQuantity}}</div>
               <div>{{d.refundApply.financing}}</div>
               <div>{{d.refundApply.createTime | dateFormate}}</div>
             </dd>
           </div>
         </tables-tit-more>
         <!--talbes5-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">已经放款的退税融资列表
             <span class="more" @click="goMore()" v-show="mainData5">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData5" class="pop-center">暂无数据</div>
           <div slot="datas" class="link-blue" v-show="mainData5">
             <dd v-for="(d,index) in data5" :key="index" @click="goPage(d.repayment.applyId)">
               <div>{{d.refundApply.contract}}</div>
               <div>{{d.factoryInfo.entName}}</div>
               <div>{{d.refundApply.declareTime | dateFormate}}</div>
               <div>{{d.refundApply.declareSum}}</div>
               <div>{{d.refundApply.earnings}}</div>
               <div>{{d.refundApply.settlement}}</div>
               <div>{{d.refundApply.invoiceQuantity}}</div>
               <div>{{d.refundApply.financing}}</div>
               <div>{{d.refundApply.createTime | dateFormate}}</div>
             </dd>
           </div>
         </tables-tit-more>
         <!--talbes5-->
         <tables-tit-more :tablesData="taxData3">
           <div slot="tables-tit">待您处理的工厂融资请求列表
             <span class="more" @click="goMore()" v-show="mainData6">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData6" class="pop-center">暂无数据</div>
           <div slot="datas" class="link-blue" v-show="mainData6">
             <dd v-for="(d,index) in data6" :key="index" @click="goPage(d.repayment.applyId)">
               <div>{{d.refundApply.contract}}</div>
               <div>{{d.factoryInfo.entName}}</div>
               <div>{{d.refundApply.declareTime | dateFormate}}</div>
               <div>{{d.refundApply.declareSum}}</div>
               <div>{{d.refundApply.earnings}}</div>
               <div>{{d.refundApply.settlement}}</div>
               <div>{{d.refundApply.invoiceQuantity}}</div>
               <div>{{d.refundApply.financing}}</div>
               <div>{{d.refundApply.createTime | dateFormate}}</div>
             </dd>
           </div>
         </tables-tit-more>

       </div>
    </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
export default({
  data () {
    return {
      // 待平台审核
      taxData: {
        data: [
          {title: '合同号'},
          {title: '委托企业'},
          {title: '出口申报日期'},
          {title: '报关金额'},
          {title: '结汇金额'},
          {title: '发票总金额'},
          {title: '融资金额'},
          {title: '融资申请日期'}
        ],
        url: ''
      },
      // 审批未通过
      taxData2: {
         data: [
          {title: '合同号'},
          {title: '委托企业'},
          {title: '出口申报日期'},
          {title: '报关金额'},
          {title: '结汇金额'},
          {title: '发票总金额'},
          {title: '融资金额'},
          {title: '融资申请日期'},
          {title: '未通过原因'}
        ],
        url: ''
      },
      // 审批未通过
      taxData3: {
         data: [
          {title: '合同号'},
          {title: '委托企业'},
          {title: '出口申报日期'},
          {title: '报关金额'},
          {title: '结汇金额'},
          {title: '发票总金额'},
          {title: '开票日期'},
          {title: '融资金额'},
          {title: '融资申请日期'}
        ],
        url: ''
      },
      // 暂无数据
      popData: false,
      mainData: true,
      // 暂无数据
      popData2: false,
      mainData2: true,
      // 暂无数据
      popData3: false,
      mainData3: true,
      // 暂无数据
      popData4: false,
      mainData4: true,
      // 暂无数据
      popData5: false,
      mainData5: true,
      // 暂无数据
      popData6: false,
      mainData6: true,
      datas1: [],
      // 授信额度
      creditDatas: {},
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: [],
      biCount: {},
      companyInfo: ''
    }
  },
  components: {
    brand,
    tablesTitMore
  },
  mounted () {
    this.getData1()
    this.getData2()
    this.getData3()
    this.getData4()
    this.getData5()
    this.getData6()
    this.getCredit()
    this.getCount()

    this.companyInfo = JSON.parse(window.localStorage.getItem('outsideUserLoginMsg')).entName
    // console.log('aaaa',this.companyInfo)
  },
  methods: {
    reviewTheValidation () {
      console.log ('ooooooo')
      let _this = this
      this.$http.post('/api/validate/user', {
      }).then(function (res) {
        console.log('3333', res)
        if (res.data.msg === '成功') {
          _this.$router.push({
            name: 'outApplication1'
          })
        }else {
          alert('请认证企业信息')
          _this.$router.push({
            name: 'outCompanyEdit'
          })
        }
      }).catch(function (error) {
      })
    },
    // 待平台审核的退税融资
    getData1 () {
      let _this = this
      this.$http.get('/api/tradecompany/detail/list?page=1&&verifyObj=2&&verifyState=1')
        .then(function (res) {
          console.log('待平台审核融资退税列表', res)
          if(res.data.status===200 && res.data.result && res.data.result.total > 0){
            _this.data1 = res.data.result.rows
          } else {
            _this.popData = true,
            _this.mainData = false
          }
        })
    },
    // 大路平台审核未通过
    getData2 () {
      let _this = this
      // this.$http.get('/api/tradecompany/detail/list?page=1&&verifyObj=2&&verifyState=2&&verifyResult=0')
      this.$http.get('/api/tradecompany/selectby?verifyObj=2&&verifyState=2&&verifyResult=0')
        .then(function (res) {
          console.log('审核未通过', res.data.result.rows, res.data)
          if(res.data.status===200 && res.data.result && res.data.result.total > 0){
            _this.data2 = res.data.result.rows
          } else {
            _this.popData2 = true
            _this.mainData2 = false
          }
        })
    },
    // 待提交退税融资列表
    getData3 () {
      let _this = this
      this.$http.get('/api/tradecompany/detail/list?page=1&&saveState=0')
        .then(function (res) {
          if(res.data.status===200 && res.data.result && res.data.result.total > 0){
            _this.data3 = res.data.result.rows
          } else {
            _this.popData3 = true,
            _this.mainData3 = false
          }
        })
    },
    // 待财务确认的放款退税融资列表

    getData4 () {
      let _this = this
       this.$http.get('/api/trade/loan/list?page=' + _this.curPage + '&&loanStatus=1', {})
        .then(function (res) {
          console.log('待平台审核融资退税列表', res)
          if(res.data.status===200 && res.data.result.total > 0){
            _this.data4 = res.data.result.rows
          } else {
            _this.popData4 = true,
            _this.mainData4 = false
          }
        })
    },
    // 待提交退税融资列表
    getData5 () {
      let _this = this
      this.$http.get('/api/tradecompany/detail/list?page=1&&loanStatus=1')
        .then(function (res) {
          console.log('待平台审核融资退税列表', res)
          if(res.data.status===200 && res.data.result && res.data.result.total > 0){
            _this.data5 = res.data.result.rows
          } else {
            _this.popData5 = true,
            _this.mainData5 = false
          }
        })
    },
    // 待您处理的工厂融资请求列表
    getData6 () {
      let _this = this
      this.$http.get('/api/tradecompany/detail/list?page=1&&verifyObj=1&&verifyState=1')
        .then(function (res) {
          console.log('待处理的工厂', res)
          if(res.data.status===200 && res.data.result && res.data.result.total > 0){
            _this.data6 = res.data.result.rows
          } else {
            _this.popData6 = true,
            _this.mainData6 = false
          }
        })
    },

    // 跳转到详情页
    goPage (_id, verifyState, verifyResult) {
      this.$router.push({
        // 详情页
        name: 'outApplicationInfo',
        query: {'id': _id, 'verifyState': verifyState, 'verifyResult': verifyResult}
      })
    },
    // 跳转到待提交页面
    goPageD (_id, _r, _f, d) {
      this.$router.push({
        // 详情页
        name: 'outApplication1',
        query: {'id': _id, 'd': d, 'refundApply': _r, 'factoryInfo': _f}
      })
    },
    // 跳转到更多页
    goMore (status) {
      this.$router.push({
        name: 'refundList',
        query: {
          'verifyState': status
        }
      })
    },
    // // 授信额度接口
    getCredit () {
      let _this = this
      this.$http.get('/api/tradecompany/credit/detail')
        .then(res => {
          console.log('99999', res.data)
          _this.creditDatas = res.data.result
        })
    },
    getCount () {
      this.$http.get('/api/tradecompany/select/refundinfo')
        .then(res => {
          this.biCount = res.data
          console.log(res)
        })
    }
  }
})
</script>
<style type="text/css" scoped>
 @import '../../../assets/css/detail.css';
 .company-info dl dt{
  line-height: 34px;
 }
</style>
