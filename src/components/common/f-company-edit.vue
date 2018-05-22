<template>
 <div>
  <!--基本信息-->
   <div class="bgwhite">
    <h2 class="title">企业基本信息</h2>
    <div class="bg-hui-info">
     <div class="company-info">
       <dl>
        <dt><span class="red">* </span>企业名称：</dt>
        <dd><input type="text" name="putEntName" class="putEntName" placeholder="请输入企业名称" v-model="thisEntName" @focus="putEntName()" ></dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>所在省份：</dt>
        <dd><input type="text" name="putProvince" class="putProvince" placeholder="请输入所在省份" v-model="thisProvince" @focus="putProvince()"></dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>所在城市：</dt>
        <dd><input type="text" name="putCity" class="putCity" placeholder="请输入城市" v-model="thisCity" @focus="putCity()"></dd>
       </dl>
      </div>
      <div class="company-info">
        <dl>
        <dt><span class="red">* </span>企业性质：</dt>
        <dd><input type="text" name="putSile" class="putSile" placeholder="请输入企业性质" v-model="thisSile" @focus="putSile()"></dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>上一年度出口金额：</dt>
        <dd><input type="text" name="putExportScale" class="putExportScale" placeholder="请输入上一年度出口金额" v-model="thisExportScale" @focus="putExportScale()">  美元</dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>上一年退税金额：</dt>
        <dd><input type="text" name="putRefundTax" class="putRefundTax" placeholder="请输入上一年度退税金额" v-model="thisRefundTax" @focus="putRefundTax()"></dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt><span class="red">* </span>成立时间：</dt>
        <dd><input type="date" name="putCreateTime" class="putCreateTime" v-model="thisCreateTime" @focus="putCreateTime()"></dd>
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
      <div style="margin-left:13px; margin-top:10px;"><span class="bold"><span class="red">*</span>出口产品：</span>
        <textarea name="putMainProduct" class="putMainProduct" v-model="thisMainProduct" @focus="putMainProduct()">
        </textarea>
      </div>
    </div>
    <p class="pop">以下为非必填信息，但为了您公司的展示形象，希望填写完整</p>
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
          <div class="pic1 f-pic1"><img src="../../assets/img/yingye2.png"></div>
          <div class="btn-fil">
            <div class="btn-zi float-right mt40">点击上传</div>
          </div>
        </dd>
       </dl>
      </div>
    </div>
    <div class="bg-hui-info">
      <div class="piaoju">
       <dl>
         <dt>工厂内景照片</dt>
         <dd>
          <div class="pic1 f-pic1"><img src="../../assets/img/yingye2.png"></div>
          <div class="btn-fil">
            <div class="btn-zi float-right mt40">点击上传</div>
          </div>
        </dd>
       </dl>
      </div>
    </div>
    <div class="bg-hui-info">
      <div class="piaoju">
       <dl>
         <dt>生产设备照片</dt>
         <dd>
          <div class="pic1 f-pic1"><img src="../../assets/img/yingye2.png"></div>
          <div class="btn-fil">
            <div class="btn-zi float-right mt40">点击上传</div>
          </div>
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
          <dd><input type="text" name="putDeviceName" class="putDeviceName" placeholder="请输入设备名称" v-model="thisDeviceName" @focus="putDeviceName()"></dd>
         </dl>
         <dl>
          <dt>规格型号：</dt>
          <dd><input type="text" name="putProductModel" class="putProductModel" placeholder="请输入规格型号" v-model="thisProductModel" @focus="putProductModel()"></dd>
         </dl>
         <dl>
          <dt>数量：</dt>
          <dd><input type="text" name="putQuantity" class="putQuantity" placeholder="请输入数量" v-model="thisQuantity" @focus="putQuantity()"></dd>
         </dl>
         </div>
         <div class="company-info">
          <dl>
          <dt>性能说明：</dt>
          <dd><input type="text" name="putPerformance" class="putPerformance" placeholder="请输入性能说明" v-model="thisPerformance" @focus="putPerformance()"></dd>
         </dl>
         <dl>
          <dt>制造厂：</dt>
          <dd><input type="text" name="putManufacturer" class="putManufacturer" placeholder="请输入制造厂" v-model="thisManufacturer" @focus="putManufacturer()"></dd>
         </dl>
         <dl>
          <dt>投入使用时间：</dt>
          <dd><input type="date" name="putEngagedTime" class="putEngagedTime" v-model="thisEngagedTime" @focus="putEngagedTime()"></dd>
         </dl>
         </div>
         <div class="company-info">
         <dl>
          <dt>产能情况：</dt>
          <dd><input type="text" name="putCapacity" class="putCapacity" placeholder="请输入产能情况" v-model="putCapacity" @focus="putCapacity()"></dd>
         </dl>
         <dl></dl>
         <dl></dl>
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
          <dd><input type="text" name="putMaterialName" class="putMaterialName" placeholder="请输入原材料名称" v-model="thisManufacturer" @focus="putMaterialName()"></dd>
         </dl>
         <dl>
          <dt>规格型号及主要技术：</dt>
          <dd><input type="text" name="putProductModel1" class="putProductModel1" placeholder="请输入规格型号" v-model="thisProductModel1" @focus="putProductModel1()"></dd>
         </dl>
         <dl>
          <dt>供应商名称：</dt>
          <dd><input type="text" name="putSupplierName" class="putSupplierName" placeholder="请输入供应商名称" @focus="putSupplierName()"></dd>
         </dl>
        </div>
         <div class="company-info">
         <dl>
          <dt>供应商类型：</dt>
          <dd><input type="text" name="putSupplierType" class="putSupplierType" placeholder="请输入供应商类型" @focus="putSupplierType()"></dd>
         </dl>
         <dl>
          <dt>年供货金额（）：</dt>
          <dd><input type="text" name="putAnnualAmount" class="putAnnualAmount" placeholder="请输入年供货量" @focus="putAnnualAmount()"></dd>
         </dl>
         <dl>
          <dt>年采购总额比：</dt>
          <dd><input type="text" name="putMaterialRatio" class="putMaterialRatio" placeholder="请输入年采购总额比" v-model="thisMaterialRatio" @focus="putMaterialRatio()"></dd>
         </dl>
        </div>
        <div style="margin-left:59px; margin-top:10px;">备注：
          <!-- <textarea> -->
            <input type="text" name="putRemarks" class="putRemarks" placeholder="请输入备注" v-model="thisRemarks" @focus="putRemarks()">
          <!-- </textarea> -->
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
        <img src="../../assets/img/shenfenzheng1.png">
        <div class="file">
          <div class="file-up"><input type="file" name="" id="shenf1"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div>
       </dd>
      </dl>
      <dl>
       <dt>身份证反面</dt>
       <dd>
        <img src="../../assets/img/shenfenzheng2.png">
        <div class="file">
          <div class="file-up"><input type="file" name="" id="shenf1"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div>
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
        <img src="../../assets/img/yingye1.png">
        <div class="file">
          <div class="file-up"><input type="file" name="" id="shenf1"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div>
      </dd>
     </dl>
     <dl>
      <dt>海关注册登记证照片</dt>
      <dd>
        <img src="../../assets/img/yingye2.png">
        <div class="file">
          <div class="file-up"><input type="file" name="" id="shenf1"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div>
      </dd>
     </dl>
    </div>
   </div>
   <div class="bgwhite">
    <h2 class="title">
     企业其它补充信息
    </h2>
    <div class="bg-hui-info">
     <input type="text" name="putOtherInfo" class="putOtherInfo" placeholder="请输入补充信息" v-model="thisOtherInfo" @focus="putOtherInfo()">
    </div>
   </div>
   <div class="center">
    <button class="btn btn-zi-big" @click="postDatas()">提 &nbsp; 交</button>
   </div>
 </div>
</template>
<script type="text/javascript">
export default({
  data () {
    return {
      // submitTrue: true
      thisDeviceName: '',
      thisProductModel: '',
      thisQuantity: '',
      thisPerformance: '',
      thisManufacturer: '',
      thisEngagedTime: '',
      thisCapacity: '',

      thisEntName: '',
      thisProvince: '',
      thisCity: '',
      thisSile: '',
      thisExportScale: '',
      thisRefundTax: '',
      thisCreateTime: '',
      thisMainProduct: '',
      thisOtherInfo: '',

      thisMaterialName: '',
      thisProductModel1: '',
      thisSupplierName: '',
      thisSupplierType: '',
      thisAnnualAmount: '',
      thisMaterialRatio: '',
      thisRemarks: ''
    }
  },
  mounted () {
    // this.getDatas()
    // this.subordinateDepartmentsSelect()
    // this.assignRolesSelect()
    // this.radioSelect()
    this.getDatas()
  },
  methods: {
    getDatas () {

      let _this = this;
      this.$http.get('/api/factory/select/bycondition', {
      }).then(function (res) {
        alert('成功')
        console.log(res)

       _this.thisDeviceName = res.data.factoryEquipment[0].deviceName
       _this.thisProductModel= res.data.factoryEquipment[0].productModel
       _this.thisQuantity = res.data.factoryEquipment[0].quantity
       _this.thisPerformance = res.data.factoryEquipment[0].performance
       _this.thisManufacturer = res.data.factoryEquipment[0].manufacturer
       _this.thisEngagedTime = res.data.factoryEquipment[0].engagedTime
       _this.thisCapacity = res.data.factoryEquipment[0].capacity

       _this.thisEntName = res.data.factoryInfo.entName
       _this.thisProvince = res.data.factoryInfo.province
       _this.thisCity = res.data.factoryInfo.city
       _this.thisSile = res.data.factoryInfo.sile
       _this.thisExportScale = res.data.factoryInfo.exportScale
       _this.thisRefundTax = res.data.factoryInfo.refundTax
       _this.thisCreateTime = res.data.factoryInfo.createTime
       _this.thisMainProduct = res.data.factoryInfo.mainProduct
       _this.thisOtherInfo = res.data.factoryInfo.otherInfo

       _this.thisMaterialName = res.data.factoryMaterial[0].materialName
       _this.thisProductModel = res.data.factoryMaterial[0].productModel
       _this.thisSupplierName = res.data.factoryMaterial[0].supplierName
       _this.thisSupplierType = res.data.factoryMaterial[0].supplierType
       _this.thisAnnualAmount = res.data.factoryMaterial[0].annualAmount
       _this.thisMaterialRatio = res.data.factoryMaterial[0].materialRatio
       _this.thisRemarks = res.data.factoryMaterial[0].remarks

      }).catch(function (error) {
        alert('失败')
        console.log(error)
      })
    },
    putEntName () {
      $('.putEntName').val()
    },
    putProvince () {
      $('.putProvince').val()
    },
    putCity () {
      $('.putCity').val()
    },
    putSile () {
      $('.putSile').val()
    },
    putExportScale () {
      $('.putExportScale').val()
    },
    putRefundTax () {
      $('.putRefundTax').val()
    },
    putCreateTime () {
      $('.putCreateTime').val()
    },
    putMainProduct () {
      $('.putMainProduct').val()
    },
    putOtherInfo () {
      $('.putOtherInfo').val()
    },
    putDeviceName () {
      $('.putDeviceName').val()
    },
    putProductModel () {
      $('.putProductModel').val()
    },
    putQuantity () {
      $('.putQuantity ').val()
    },
    putPerformance () {
      $('.putPerformance').val()
    },
    putManufacturer () {
      $('.putManufacturer').val()
    },
    putEngagedTime () {
      $('.putEngagedTime').val()
    },
    putEngagedTime () {
      $('.putEngagedTime').val()
    },
    putMaterialName () {
      $('.putMaterialName').val()
    },
    putProductModel1 () {
      $('.putProductModel1').val()
    },
    putSupplierName () {
      $('.putSupplierName').val()
    },
    putSupplierType () {
      $('.putSupplierType').val()
    },
    putAnnualAmount () {
      $('.putAnnualAmount').val()
    },
    putMaterialRatio () {
      $('.putMaterialRatio').val()
    },
    putRemarks () {
      $('.putRemarks').val()
    },
    postDatas () {
      let _this = this;
      let pushEntName = $('.putEntName').val()
      let pushProvince = $('.putProvince').val()
      let pushCity = $('.putCity').val()
      let pushSile = $('.putSile').val()
      let pushExportScale = $('.putExportScale').val()
      let pushRefundTax = $('.putRefundTax').val()
      let pushCreateTime = $('.putCreateTime').val()
      let pushMainProduct = $('.putMainProduct').val()
      let pushOtherInfo = $('.putOtherInfo').val()

      let pushDeviceName = $('.putDeviceName').val()
      let pushProductModel = $('.putProductModel').val()
      let pushQuantity = $('.putQuantity').val()
      let pushPerformance = $('.putPerformance').val()
      let pushManufacturer = $('.putManufacturer').val()
      let pushEngagedTime = $('.putEngagedTime').val()
      let pushCapacity = $('.putCapacity').val()

      let pushMaterialName = $('.putMaterialName').val()
      let pushProductModel1 = $('.putProductModel1').val()
      let pushSupplierName = $('.putSupplierName').val()
      let pushSupplierType = $('.putSupplierType').val()
      let pushAnnualAmount = $('.putAnnualAmount').val()
      let pushMaterialRatio = $('.putMaterialRatio').val()
      let pushRemarks = $('.putRemarks').val()

      var factoryInfoMap = {}
      factoryInfoMap['entName'] = pushEntName
      factoryInfoMap['province'] = pushProvince
      factoryInfoMap['city'] = pushCity
      factoryInfoMap['sile'] = pushSile
      factoryInfoMap['exportScale'] = pushExportScale
      factoryInfoMap['refundTax'] = pushRefundTax
      factoryInfoMap['createTime'] = pushCreateTime
      factoryInfoMap['mainProduct'] = pushMainProduct
      factoryInfoMap['otherInfo'] = pushOtherInfo

      var factoryEquipmentMap = {}
      factoryEquipmentMap['deviceName'] = pushDeviceName
      factoryEquipmentMap['productModel'] = pushProductModel
      factoryEquipmentMap['quantity'] = pushQuantity
      factoryEquipmentMap['performance'] = pushPerformance
      factoryEquipmentMap['manufacturer'] = pushManufacturer
      factoryEquipmentMap['engagedTime'] = pushEngagedTime
      factoryEquipmentMap['capacity'] = pushCapacity

      var factoryMaterialMap = {}
      factoryMaterialMap['materialName'] = pushMaterialName,
      factoryMaterialMap['productModel'] = pushProductModel1,
      factoryMaterialMap['supplierName'] = pushSupplierName,
      factoryMaterialMap['supplierType'] = pushSupplierType,
      factoryMaterialMap['annualAmount'] = pushAnnualAmount,
      factoryMaterialMap['materialRatio'] = pushMaterialRatio,
      factoryMaterialMap['remarks'] = pushRemarks

      // console.log(pushDeviceName,factoryInfoMap,factoryEquipmentMap,factoryMaterialMap)

      this.$http.post('/api/factory/update/information', {

        factoryInfo: factoryInfoMap,
        factoryEquipment: factoryEquipmentMap,
        factoryMaterial: factoryMaterialMap

      }).then(function (res) {
        alert('成功')
        console.log(res)
      }).catch(function (error) {
        alert('失败')
        console.log(error)
      })
    }
  }
  // methods: {
  //   submitUser () {
  //     var _this = this
  //     if (this.submitTrue) {
  //       this.$message({
  //         message: '恭喜你，公司信息提交成功',
  //         type: 'success'
  //       })
  //     }
  //     setTimeout(function () {
  //       _this.$router.push({
  //         name: 'fHome'
  //       })
  //     }, 2000)
  //   }
  // }
})
</script>
<style type="text/css">
 @import '../../assets/css/detail.css'
</style>
