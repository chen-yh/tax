<template>
 <div>
  <brand></brand>
  <company @factoryInfo="getFInfo"></company>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import company from '../../../components/common/user-add'
export default({
  data () {
    return {}
  },
  components: {
    brand,
    company
  },
  mounted () {
    // this.getDatas()
  },
  methods: {
    getFInfo (datas) {
      console.log('allData', datas)
    },
    // getDatas () {
    //  let parmes = {
    //    province: this.province,
      // city: this.city,
      // entName: this.entName,
      // exportScale: this.exportScale,
      // refundTax: this.refundTax,
      // foundTime: this.foundTime,
      // mainProduct: this.mainProduct,
      // productImg: this.productImg,
      // idCard: this.idCard,
      // businessLicence: this.businessLicence,
      // factoryInside: this.factoryInside,
      // productPhoto: this.productPhoto,
      // deviceName: this.deviceName,
      // productModel: this.productModel,
      // quantity: this.quantity,
      // performance: this.performance,
      // manufacturer: this.manufacturer,
      // engagedTime: this.engagedTime,
      // capacity: this.capacity,
      // materialName: this.materialName,
      // productModel: this.productModel,
      // supplierName: this.supplierName,
      // supplierType: this.supplierType,
      // annualAmount: this.annualAmount,
      // materialRatio: this.materialRatio,
      // remarks: this.remarks
    //  }
    //  this.$http.post('/api/factory/update/information', {})
    //    .then(res => {
    //      console.log('新增客户', res)
    //    })
    // }
  }
})
</script>
<style type="text/css" scoped>
</style>
