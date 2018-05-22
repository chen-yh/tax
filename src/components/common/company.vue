<template>
 <div>
  <!--基本信息-->
   <div class="bgwhite">
    <h2 class="title">{{pDatas.entName}}</h2>
    <slot name="popTit">
    
    </slot>
    <div class="bg-hui-info">
     <div class="company-info">
       <dl>
        <dt>企业名称：</dt>
        <dd>{{pDatas.entName}}</dd>
       </dl>
       <dl>
        <dt>企业性质：</dt>
        <dd>{{pDatas.entNature}}</dd>
       </dl>
       <dl>
        <dt>出口退税开户行：</dt>
        <dd>{{pDatas.bankName}}</dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt>所在省份：</dt>
        <dd>{{rootDatas.province || pDatas.province}}</dd>
       </dl>
       <dl>
        <dt>海关出口等级：</dt>
        <dd>{{pDatas.exportRank}}</dd>
       </dl>
       <dl>
        <dt>出口退税银行账户：</dt>
        <dd>{{pDatas.bankNumber}}</dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt>所在城市：</dt>
        <dd>{{rootDatas.city ||  pDatas.city}}</dd>
       </dl>
       <dl>
        <dt>税务局退税等级：</dt>
        <dd>{{pDatas.refundTaxRank}}</dd>
       </dl>
       <dl>
        <dt>上一年退税金额：</dt>
        <dd>{{pDatas.refundTax}}  元</dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt>&nbsp;</dt>
        <dd>&nbsp;</dd>
       </dl>
       <dl>
        <dt>&nbsp;</dt>
        <dd>&nbsp;</dd>
       </dl>
       <dl>
        <dt>上一年出口规模：</dt>
        <dd>{{pDatas.exportScale}}  美元</dd>
       </dl>
      </div>
    </div>
   </div>
   <!--资质信息-->
   <div class="bgwhite">
    <h2 class="title">
     企业资质情况
    </h2>
    <div class="bg-hui-info">
     <p>{{pDatas.entAptitude}}</p>
    </div>
   </div>
   <!--身份证-->
   <div class="bgwhite">
     <h2 class="title">
      法人代表或实际控制人信息
     </h2>
     <div class="shenfen">
      <dl v-for="d in idCards">
       <dt>身份证反正面</dt>
       <dd>
        <img :src="d">
       </dd>
      </dl>
     <!--  <dl>
       <dt>身份证反面</dt>
       <dd>
        <img :src="idCards.split(',')?idCards.split(',')[1]:''">
       </dd>
      </dl> -->
     </div>
   </div>
   <!--企业营业执照及海关注册登记证-->
   <div class="bgwhite">
    <h2 class="title">企业营业执照及海关注册登记证</h2>
    <div class="shenfen">
     <dl>
      <dt>营业执照</dt>
      <dd>
        <img :src="pDatas.businessLicence">
      </dd>
     </dl>
     <dl>
      <dt>海关注册登记证照片</dt>
      <dd>
        <img :src="pDatas.customsRegister">
      </dd>
     </dl>
     <dl>
      <dt>进出口企业登记证</dt>
      <dd>
        <img :src="pDatas.entRegister">
      </dd>
     </dl>
    </div>
   </div>
   <div class="bgwhite">
    <h2 class="title">
     企业其它补充信息
    </h2>
    <div class="bg-hui-info">
     {{pDatas.otherInfo}}
    </div>
   </div>
   <slot name="operate"></slot>
 </div>
</template>
<script type="text/javascript">
export default({
  props: ['rootDatas', 'pDatas', 'idCards'],
  // props: {
  //   rootDatas: {
  //     thpe: Object
  //   },
  //   pDatas: {
  //     type: Object
  //   },
  //   aa: {
  //     type: Object
  //   }
  // },
  data () {
    return {
      datas: {},
      // shenfen1: this.pDatas.idCard[0],
      // shenfen2: this.pDatas.idCard[1]
      shenfen1: '',
      shenfen2: '',
      province: '',
      city: '',
      companyName: ''
    }
  },
  created () {
    
    
  },
  mounted () {
    this.fDatas()
    // this.companyName = window.localStorage.getItem('outsideUserLoginMsg') ? JSON.parse(window.localStorage.getItem('outsideUserLoginMsg')).entName : ''
    console.log('.....',this.companyName)
  },
  methods: {
    fDatas () {
      console.log('9999', this.pDatas)
    }
  }
})
</script>
<style type="text/css">
 @import '../../assets/css/detail.css';
 .company-info dl dd div{
  color:red;
 }
</style>
