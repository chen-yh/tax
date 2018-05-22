<template>
 <div>
  <!--基本信息-->
   <div class="bgwhite">
    <h2 class="title"> 查看企业信息 </h2>
    <div class="bg-hui-info">
     <div class="company-info">
       <dl>
        <dt><span class="red">* </span>企业名称：</dt>
        <dd> {{this.entName}} </dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>所在省份：</dt>
        <dd> {{this.province}} </dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>所在城市：</dt>
        <dd> {{this.city}} </dd>
       </dl>
      </div>
      <div class="company-info">
        <dl>
        <dt><span class="red">* </span>企业性质：</dt>
        <dd> {{this.sile}} </dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>上一年度出口金额：</dt>
        <dd> {{this.exportScale}}  美元</dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>上一年退税金额：</dt>
        <dd> {{this.refundTax}} </dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt><span class="red">* </span>成立时间：</dt>
        <dd> {{this.foundTime | dateFormate}} </dd>
       </dl>
       <dl>
        <dt>&nbsp;</dt>
        <dd>&nbsp;</dd>
       </dl>
       <dl>
        <dt>&nbsp;</dt>
        <dd>&nbsp;</dd>
       </dl>
      </div>
      <div style="margin-left:13px; margin-top:10px;"><span class="bold"><span class="red">* </span>出口产品：{{this.mainProduct}} </span>
      </div>
    </div>
    <!-- <p class="pop">以下为非必填信息，但为了您公司的展示形象，希望填写完整</p> -->
   </div>
   <!--资质信息-->
   <div class="bgwhite">
    <h2 class="title">
     上传图片信息
    </h2>
    <div class="bg-hui-info">
      <div class="piaoju">
       <dl>
         <dt>产品图片</dt>
         <dd>
          <div class="pic1 f-pic1"><img :src="imgsSrc1"></div>
        <!-- <img :src="pDatas.businessLicence"> -->
        </dd>
       </dl>
      </div>
    </div>
    <div class="bg-hui-info">
      <div class="piaoju">
       <dl>
         <dt>工厂内景照片</dt>
         <dd>
          <div class="pic1 f-pic1"><img :src="imgsSrc2"></div>
            <!-- <img :src="pDatas.businessLicence"> -->
        </dd>
       </dl>
      </div>
    </div>
    <div class="bg-hui-info">
      <div class="piaoju">
       <dl>
         <dt>生产设备照片</dt>
         <dd>
          <div class="pic1 f-pic1"><img :src="imgsSrc3"></div>
            <!-- <img :src="pDatas.businessLicence"> -->
        </dd>
       </dl>
      </div>
    </div>
    <!--图片结束-->
   </div>
   <!--主要装备-->
   <div class="bgwhite">
     <h2 class="title">主要装备能力情况</h2>
      <div class="bg-hui-info">
       <div class="company-info">
         <dl>
          <dt>设备名称：</dt>
          <dd> {{this.deviceName}} </dd>
         </dl>
         <dl>
          <dt>规格型号：</dt>
          <dd> {{this.productModel}} </dd>
         </dl>
         <dl>
          <dt>数量：</dt>
          <dd> {{this.quantity}} </dd>
         </dl>
        </div>
        <div class="company-info">
         <dl>
          <dt>性能说明：</dt>
          <dd> {{this.performance}} </dd>
         </dl>
         <dl>
          <dt>制造厂：</dt>
          <dd> {{this.manufacturer}} </dd>
         </dl>
         <dl>
          <dt>投入使用时间：</dt>
          <dd> {{this.engagedTime | dateFormate}} </dd>
         </dl>
        </div>
        <div class="company-info">
         <dl>
          <dt>产能情况：</dt>
          <dd> {{this.capacity}} </dd>
         </dl>
         <dl>
          <dt>&nbsp;</dt>
          <dd>&nbsp;</dd>
         </dl>
         <dl>
          <dt>&nbsp;</dt>
          <dd>&nbsp;</dd>
         </dl>
        </div>
      </div>
   </div>
   <!--主要原材料采购渠道情况-->
   <div class="bgwhite">
     <h2 class="title">主要原材料采购渠道情况</h2>
      <div class="bg-hui-info">
       <div class="company-info">
         <dl>
          <dt>原材料名称：</dt>
          <dd> {{this.materialName}} </dd>
         </dl>
         <dl>
          <dt>规格型号及主要技术：</dt>
          <dd> {{this.productModel1}} </dd>
         </dl>
         <dl>
          <dt>供应商名称：</dt>
          <dd> {{this.supplierName}} </dd>
         </dl>
        </div>
         <div class="company-info">
         <dl>
          <dt>供应商类型：</dt>
          <dd> {{this.supplierType}} </dd>
         </dl>
         <dl>
          <dt>年供货金额（万）：</dt>
          <dd> {{this.annualAmount}} </dd>
         </dl>
         <dl>
          <dt>年采购总额比：</dt>
          <dd> {{this.materialRatio}} </dd>
         </dl>
        </div>
        <div style="margin-left:10px; margin-top:10px;">备注：{{this.remarks}}
        </div>
      </div>
   </div>
   <!--身份证-->
   <div class="bgwhite">
     <h2 class="title">
      法人代表或实际控制人信息
     </h2>
     <div class="shenfen">
      <dl>
       <dt>身份证正面</dt>
       <dd>
        <img :src="imgsSrc4">
       </dd>
      </dl>
      <dl>
       <dt>身份证反面</dt>
       <dd>
        <img :src="imgsSrc5">
       </dd>
      </dl>
     </div>
   </div>
   <!--企业营业执照及海关注册登记证-->
   <div class="bgwhite">
    <h2 class="title">企业营业执照及海关注册登记证</h2>
    <div class="shenfen">
     <dl>
      <dt>营业执照</dt>
      <dd>
        <img :src="imgsSrc6">
      </dd>
     </dl>
     <dl>
      <dt>海关注册登记证照片</dt>
      <dd>
        <img :src="imgsSrc7">
      </dd>
     </dl>
    </div>
   </div>
   <div class="bgwhite">
    <h2 class="title">
     企业其它补充信息
    </h2>
    <div class="bg-hui-info">
     暂无
    </div>
   </div>
  <!--  <div class="center">
    <button class="btn btn-zi-big" @click="submitUser()">提 &nbsp; 交</button>
   </div> -->
 </div>
</template>
<script type="text/javascript">
import uploadImg from '../base/uploadImg'
export default({
  data () {
    return {
      // companyData: JSON.parse(window.localStorage.getItem('companys')),
      // rootCompanyData: JSON.parse(window.localStorage.getItem('rootCompanys')),
      submitTrue: true,
      // 省
      province: '' ,
      // 市
      city: '',
      // 工厂名
      entName: '',
      // 企业性质
      sile: '',
      // 上一年出口规模 |
      exportScale: '',
      // 上一年退税金额 |
      refundTax: '',
      // 成立时间 |
      foundTime: '', 
      // 主营产品 |
      mainProduct: '',
      // 工厂主营产品图片
      productImg: '',
      // 法人代表身份证 |
      idCard: '',   
      // | 公司营业执照
      businessLicence: '',
      // 工厂设备
      // 工厂设备
      factoryInside: '',
      productPhoto: '',
      deviceName: '',
      productModel1: '',
      quantity: '',
      performance: '',
      manufacturer: '',
      engagedTime: '',
      capacity: '',
      // 工厂原材料
      // 工厂原材料
      materialName: '',
      productModel: '',
      productModel1: '',
      supplierName: '',
      supplierType: '',
      annualAmount: '',
      materialRatio: '',
      remarks: '',
      customsRegister: '',
      // materialName1: '',
      // productModel1: '',
      // supplierName1: '',
      // supplierType1: '',
      // annualAmount1: '',
      // materialRatio1: '',
      // remarks1: '',
      // 新增后返回来的id
      newId: '',
      policyurl: '',
      iSrc: '',
      // 图片路径
      imgsSrc1: '',
      imgsSrc2: '',
      imgsSrc3: '',
      imgsSrc4: '',
      imgsSrc5: '',
      imgsSrc6: '',
      imgsSrc7: ''
    }
  },
  components: {
  },
  mounted () {
    this.getDatas ()
  },
  methods: {
    goEdit () {
      this.$router.push({
        name: 'fCompanyEdit',
        path: '/fCompanyEdit',
      })
    },
    getDatas () {
      let _this = this
      let id = this.$route.query.id
      this.$http.get('/api/factory/select/bycondition?factoryId=' + id)
      .then(function (res) {
        // alert('成功')
        console.log('00000',res,res.data.factoryEquipment[0].productModel)

       _this.deviceName = res.data.factoryEquipment[0].deviceName
       _this.productModel= res.data.factoryEquipment[0].productModel
       _this.quantity = res.data.factoryEquipment[0].quantity
       _this.performance = res.data.factoryEquipment[0].performance
       _this.manufacturer = res.data.factoryEquipment[0].manufacturer
       _this.engagedTime = res.data.factoryEquipment[0].engagedTime
       _this.capacity = res.data.factoryEquipment[0].capacity
       _this.foundTime =  res.data.factoryEquipment[0].createTime
       _this.imgsSrc2 = res.data.factoryEquipment[0].factoryInside
       _this.imgsSrc3 = res.data.factoryEquipment[0].productPhoto

       _this.entName = res.data.factoryInfo.entName
       _this.province = res.data.factoryInfo.province
       _this.city = res.data.factoryInfo.city
       _this.sile = res.data.factoryInfo.sile
       _this.exportScale = res.data.factoryInfo.exportScale
       _this.refundTax = res.data.factoryInfo.refundTax
       _this.createTime = res.data.factoryInfo.createTime
       _this.mainProduct = res.data.factoryInfo.mainProduct
       _this.otherInfo = res.data.factoryInfo.otherInfo
       _this.imgsSrc1 = res.data.factoryInfo.productImg
       _this.imgsSrc7 = res.data.factoryInfo.customsRegister
       // var array = new Array ()
       // array = res.data.factoryInfo.idCard.split(',')
       _this.imgsSrc4 = res.data.factoryInfo.idCard.split(',')[0]
       _this.imgsSrc5 = res.data.factoryInfo.idCard.split(',')[1]
       _this.imgsSrc6 = res.data.factoryInfo.businessLicence

       _this.materialName = res.data.factoryMaterial[0].materialName
       _this.supplierName = res.data.factoryMaterial[0].supplierName
       _this.supplierType = res.data.factoryMaterial[0].supplierType
       _this.annualAmount = res.data.factoryMaterial[0].annualAmount
       _this.materialRatio = res.data.factoryMaterial[0].materialRatio
       _this.remarks = res.data.factoryMaterial[0].remarks
       _this.productModel1 = res.data.factoryMaterial[0].productModel

      }).catch(function (error) {
        // alert('失败')
        // console.log(error)
      })
    }
  }
})
    // // 提交按钮
    // submitUser (datas) {
    //   // this.$emit('factoryInfo', datas)
    //   // 调编辑企业信息接口
    //   let parames = {
    //     'province': this.province || '' ,
    //     // 市
    //     'city': this.city || '',
    //     // 工厂名
    //     'entName': this.entName || '',
    //     // 上一年出口规模 |
    //     'exportScale': this.exportScale || '',
    //     // 上一年退税金额 |
    //     'refundTax': this.refundTax || '',
    //     // 成立时间 |
    //     'foundTime': this.foundTime || '', 
    //     // 主营产品 |
    //     'mainProduct': this.mainProduct || '',
    //     // 工厂主营产品图片
    //     'productImg': this.imgsSrc1 || '',
    //     // 法人代表身份证 |
    //     'idCard': this.imgsSrc4 + ',' + this.imgsSrc5 || '',   
    //     // | 公司营业执照
    //     'businessLicence': this.imgsSrc6 || '',
    //     'customsRegister': this.imgSrc7 || ''
    //   }
    //   let parames1 ={
    //     'factoryInside': this.imgsSrc2 || '',
    //     'productPhoto': this.imgsSrc3 || '',
    //     'deviceName': this.deviceName || '',
    //     'productModel': this.productModel || '',
    //     'quantity': this.quantity || '',
    //     'performance': this.performance || '',
    //     'manufacturer': this.manufacturer || '',
    //     'engagedTime': this.engagedTime || '',
    //     'capacity': this.capacity || ''
    //   }
    //   let parames2 = {
    //     'materialName': this.materialName || '',
    //     'productModel1': this.productModel || '',
    //     'supplierName': this.supplierName || '',
    //     'supplierType': this.supplierType || '',
    //     'annualAmount': this.annualAmount || '',
    //     'materialRatio': this.materialRatio || '',
    //     'remarks': this.remarks || ''
    //   }
    //   console.log(parames, parames1, parames2);
    // }
</script>
<style type="text/css">
 @import '../../assets/css/detail.css';
 .company-info dl dt{
    width:46%;
  }
  .company-info input{
    width:140px;
  }
  .mcenter{
    margin:0 auto;
  }
  textarea{
    width:97%;
    padding:10px;
    font-size:14px;
    line-height:22px;
  }
  input[type="text"]{
    color:#999;
  }
  .btn-file{
    float:none;
  }
  .pic1{
    min-height:170px;
  }
  .company-info dl dd{
    width:49%;
  }
  .file-up2 input[type='file']{
    left:480px;
  }
  .shenfen .file-up3 input[type='file']{
    left:117px;
  }
</style>
