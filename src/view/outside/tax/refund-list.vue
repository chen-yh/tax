<template>
    <div>
       <brand></brand>
       <div class="bgwhite">
        <div class="filter">
          <dl>
          <dt style="font-weight:bold;">&nbsp;</dt>
          <dd>
            <label><input type="radio" name="stateCom" v-model="myStatus" value=""> 全 部</label>
            <label><input type="radio" name="stateCom" v-model="myStatus" value="7"> 待提交</label>
            <label><input type="radio" name="stateCom" v-model="myStatus" value="6"> 待放款</label>
            <label><input type="radio" name="stateCom" v-model="myStatus" value="5"> 已放款，待收款确认 </label>
            <label><input type="radio" name="stateCom" v-model="myStatus" value="4"> 收款已确认 </label>
            <label><input type="radio" name="stateCom" v-model="myStatus" value="3"> 待还款 </label>
            <label><input type="radio" name="stateCom" v-model="myStatus" value="2"> 已还款 </label>
            <label><input type="radio" name="stateCom" v-model="myStatus" value="1"> 平台已确认还款 </label>
          </dd>
        </dl>
      </div>
         <!--talbes1-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">退税融资列表
           </div>
            <div slot="datas"  v-show="popData3" class="pop-center">暂无数据</div>
           <div slot="datas" class="link-blue" v-show="mainData3">
             <dd v-for="(d,index) in datas1" :key="index" @click="goPage(d.refundApply.id)">
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
          {title: '融资审请日期'}
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
          {title: '融资审请日期'},
          {title: '未通过原因'}
        ],
        url: ''
      },
      datas1: [],
      //分页
      // 默认当前页
      curPage: 1,
      // 当前页的index
      curIndex: 0,
      //最大页数
      pageCount: 1,
      popData3: false,
      mainData3: true,
      myStatus: this.$route.query.myStatus || '',
      cStatus: ''
    }
  },
  components: {
    brand,
    page,
    tablesTitMore
  },
  mounted () {
    this.getData1('')
  },
  watch: {
    myStatus: function (val, oldVal) {
      console.log(val)
      if (val === '7') {
        
        this.getData1('&&saveState=', 0)

      }
      if (val === '6'){
        this.getData1('&&loanStatus=', 0)
      }
      if (val === '5'){
        this.getData1('&&loanStatus=', 1)
      }
      if (val === '4'){
        this.getData1('&&loanStatus=', 2)
      } 
      if (val === '3'){
        this.getData1('&&repayStatus=', 0)
      }
      if (val === '2'){
        this.getData1('&&repayStatus=', 3)
      }
       if (val === '1'){
        this.getData1('&&repayStatus=', 1)
      }
      else {
        this.getData1('', val)
      }
    }
  },
  methods: {
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getData1('', '')
    },
    // 待平台审核的退税融资
    getData1 (cStatus, val) {
      let _this = this
      // saveState=0&&
      this.$http.post('/api/tradecompany/detail/list?page=' + _this.curPage + cStatus + val)
        .then(function (res) {
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
            console.log('待平台审核融资退税列表', res)
            _this.datas1 = res.data.result.rows
            // 分页
            _this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
            _this.pageNum = res.data.result.pageNum
          } else {
            _this.popData3 = false
            _this.mainData3 = true
          }
        })
    },
    // 跳转到详情页
    goPage (_id) {
      this.$router.push({
        // 详情页
        name: 'outApplication1',
        query: {'id': _id}
      })
    }
  }
})
</script>
<style type="text/css" scoped>
 @import '../../../assets/css/detail.css'
</style>
