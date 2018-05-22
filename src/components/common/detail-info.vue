<template>
 <div>
  <!--基本信息-->
   <div class="bgwhite">
   <!--  <h2 class="title"><span class="orange">{{this.$route.query.factory.factoryInfoName}}</span>企业退税融资申请</h2>
    <p>我司委托<span class="orange">{{this.$route.query.fName.tradeserviceName}}</span>代理出口，出口信息如下：</p> -->
    <div>出口信息如下：</div>
    <h2 class="title2">报关单信息</h2>
    <div class="bg-hui-info">
     <div class="company-info">
       <dl>
        <dt>合同号：</dt>
        <dd>{{refundApply.contract}}</dd>
       </dl>
       <dl>
        <dt>报关单号：</dt>
        <dd>{{refundApply.customsDecl}}</dd>
       </dl>
       <dl>
        <dt>报关单金额：</dt>
        <dd>{{refundApply.declareSum}}  元</dd>
       </dl>

      </div>
      <div class="company-info">
       <dl>
        <dt>海关放行状态：</dt>
        <dd>{{refundApply.passState}}</dd>
       </dl>
       <dl>
        <dt>出口申报日期：</dt>
        <dd>{{refundApply.declareTime | dateFormate}}</dd>
       </dl>
       <dl>
        <dt>委托出口企业：</dt>
        <dd>{{factoryInfo?factoryInfo.entName:this.$route.query.factory}} </dd>
       </dl>
      </div>
     </div>
     <h2 class="tit-hui">
       报关商品信息
     </h2>
     <div v-for="d in loanDetail.ProductList"  class="bg-hui-info">
       <div class="company-info">
         <dl>
          <dt>出口商品名称：</dt>
          <dd>{{d.name}}</dd>
         </dl>
         <dl>
          <dt>出口商品HS编码：</dt>
          <dd>{{d.hsNumber}}</dd>
         </dl>
         <dl>
          <dt>退税率：</dt>
          <dd>{{d.rate}}%</dd>
         </dl>
        </div>
        <div class="company-info">
         <dl>
          <dt>商品单价：</dt>
          <dd>{{d.price}} 美元</dd>
         </dl>
         <dl>
          <dt>商品数量：</dt>
          <dd>{{d.quantity}}</dd>
         </dl>
         <dl>
          <dt>商品总价：</dt>
          <dd>{{d.totalPrice}} 美元</dd>
         </dl>
        </div>
     </div>
     <!--结汇收汇信息-->
    <h2 class="title2">结汇收汇信息</h2>
    <div class="bg-hui-info">
      <div class="company-info">
       <dl>
        <dt>结汇金额：</dt>
        <dd>{{refundApply.settlement}}  美元</dd>
       </dl>
       <dl>
        <dt>收汇金额：</dt>
        <dd>{{refundApply.earnings}}  美元</dd>
       </dl>
       <dl>
        <dt>退税金额：</dt>
        <dd>{{refundApply.financing}} 元</dd>
       </dl>
      </div>
    </div>
    <h2 class="title2">发票信息</h2>
    <div class="bg-hui-info">
        <div class="company-info" v-for="v in datasInfo.invoiceInfos?datasInfo.invoiceInfos:loanDetail.InvoiceInfoList">
         
         <dl>
          <dt>开票日期：</dt>
          <dd>{{v.createTime | dateFormate}}</dd>
         </dl>
         <dl>
          <dt>发票号码：</dt>
          <dd>{{v.invoiceNumber}}</dd>
         </dl>
         <dl>
          <dt>发票金额：</dt>
          <dd>{{v.invoiceMoney}}</dd>
         </dl>
        </div>
    </div>
    <div class="bg-hui-info">
     <!--  <div class="company-info">
       <dl>
        <dt>发票代码：</dt>
        <dd>{{refundApply.invoiceCode}}</dd>
       </dl>
       <dl>
        <dt>开票日期：</dt>
        <dd>{{refundApply.createTime | dateFormate}}</dd>
       </dl>
       <dl>
        <dt>发票数量：</dt>
        <dd>{{refundApply.invoiceQuantity}}</dd>
       </dl>
      </div> -->
     <div class="bg-hui-info">
        <div class="company-info">
          <dl>
          <dt>发票代码：</dt>
          <dd>{{refundApply.invoiceCode}}</dd>
         </dl>
          <dl>
          <dt>发票数量：</dt>
          <dd>{{refundApply.invoiceQuantity}}</dd>
         </dl>
         <dl>
          <dt>发票总金额：</dt>
          <dd>{{refundApply.totalInvoice}}</dd>
         </dl>
        </div>
      </div>
     </div>
   </div>
   <!--资质信息-->
   <!--身份证-->
   <div class="bgwhite">
     <p>票据信息</p>
     <div class="piaoju">
      <dl>
       <dt>报关单：</dt>
       <dd>
        <img :src="refundApply.customsDeclImg">
       </dd>
      </dl>
      <dl>
       <dt>收汇凭证：</dt>
       <dd>
        <img :src="refundApply.earningsImg">
       </dd>
      </dl>
      <dl>
       <dt>结汇凭证：</dt>
       <dd>
        <img :src="refundApply.transferImg">
       </dd>
      </dl>
      <dl>
       <dt>发票：</dt>
       <dd class="fapiao">
        <div class="pic3">
          <span  v-for="i in receiptImgss">
            <img :src="i">
          </span>
        </div>
       </dd>
      </dl>
     </div>
   </div>
   <!--企业营业执照及海关注册登记证-->
   <div class="bgwhite">
    <p>数据统计信息</p>
    <tablesTitMore :tablesData="detailInfo">
      <dd slot="datas">
        <div>{{refundApply.contract}}</div>
        <div><span v-if="refundApply.financingProject==1">退税融资</span></div>
        <!-- <div>{{loanDetail}}</div> -->
        
        <div>{{refundApply.declareSum}}  元</div>
        <div>{{refundApply.declareTime | dateFormate}}</div>
        <div>{{refundApply.financing}}  元</div>
        <div>{{refundApply.createTime | dateFormate}}</div>
        <!-- <div>{{refundApply.loanTime?(refundApply.loanTime | dateFormate): '暂无'}}</div>
        <div>{{refundApply.expireTime?(refundApply.expireTime | dateFormate):'暂无'}}</div> -->
        <div>{{refundApply.loanPeriod}} 个月</div>
        <div>{{loanDetail.serverCost?loanDetail.serverCost :refundApply.costPlatform }} 元</div>
      </dd>
    </tablesTitMore>
   </div>
 </div>
</template>
<style type="text/css" scoped>
 @import '../../assets/css/detail.css';
  .company-info dl dt{
    line-height: 33px;
  }
</style>
<script type="text/javascript">
import tablesTitMore from '../../components/common/tables-tit-more'
export default({
  props: ['loan', 'refundApply', 'products', 'factoryInfo', 'datasInfo', 'loanDetail', 'receiptImgss'],
  data () {
    return {
      detailInfo: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          // {title: '企业名称 '},
          {title: '出口金额'},
          {title: '出口日期'},
          {title: '融资金额'},
          {title: '融资申请时间'},
          {title: '贷款周期'},
          {title: '平台服务费'}
        ],
        url: ''
      }
    }
  },
  components: {
    tablesTitMore
  },
  mounted () {
    console.log('this.detailDatas', this.detailDatas)
  },
  methods: {
    getDatas () {
      this.$http.post('')
    },
    getPhone () {}
  }
})
</script>
