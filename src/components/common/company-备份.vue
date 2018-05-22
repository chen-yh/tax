<template>
 <div>
  <!--基本信息-->
   <div class="bgwhite">
    <h2 class="title">企业名称</h2>
    <div class="pop">
       欢迎回来，需要认证并完善企业信息后，大路平台进行审核，审核成功后
即可享受您应用的特权。
     </div>
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
        <dd>{{rootDatas.province}}</dd>
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
        <dd>{{rootDatas.city}}</dd>
       </dl>
       <dl>
        <dt>税务局退税等级：</dt>
        <dd>{{pDatas.refundTaxRank}} 美元</dd>
       </dl>
       <dl>
        <dt>上一年退税金额：</dt>
        <dd>{{pDatas.refundTax}} 美元</dd>
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
        <dd>{{pDatas.exportScale}} </dd>
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
      <dl v-for="(s,index) in idCards" v-if="index<2">
       <dt>身份证反正面</dt>
       <dd>
        <img :src="s">
       </dd>
      </dl>
     <!--  <dl>
       <dt>身份证反面</dt>
       <dd>
        <img :src="shenfen2">
       </dd>
      </dl> -->
     </div>
   </div>
   <!--企业营业执照及海关注册登记证-->
   <div class="bgwhite">
    <h2 class="title">企业营业执照及海关注册登记证</h2>
    <div class="shenfen">
     <dl>
      <dt>营业执照1</dt>
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
      shenfen2: ''
    }
  },
  created () {
    this.shenfen1 = this.idCards[0]
    this.shenfen2 = this.idCards[1]
  },
  mounted () {
    this.fDatas()
    
  },
  methods: {
    fDatas () {
      console.log('9999', this.pDatas)
    }
  }
})
</script>
<style type="text/css">
 @import '../../assets/css/detail.css'
</style>
