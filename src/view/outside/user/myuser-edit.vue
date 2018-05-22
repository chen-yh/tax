<template>
 <div>
  <brand></brand>
  <company :factoryInfo="factoryInfo" :factoryEquipment="factoryEquipment" :factoryMaterial="factoryMaterial"></company>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import company from '../../../components/common/user-edit'
export default({
  data () {
    return {
      factoryInfo: {},
      factoryEquipment: [],
      factoryMaterial: []
    }
  },
  components: {
    brand,
    company
  },
  mounted () {
    // this.getDatas()
  },
  methods: {
    getDatas () {
      let _this = this
      this.$http.get('/api/factory/select/bycondition?factoryId=' + this.$route.query.id)
        .then(res => {
          _this.factoryInfo = res.data.factoryInfo
          _this.factoryEquipment = res.data.factoryEquipment
          _this.factoryMaterial = res.data.factoryMaterial
          // if (res.data.factoryInfo.length > 0){
          //   _this.factoryMaterial = res.data.factoryMaterial
          // } else {
          //   _this.factoryInfo = ''
          // }
          // if (res.data.factoryEquipment.length > 0) {
          //   _this.factoryEquipment = res.data.factoryEquipment
          // } else {
          //   _this.factoryMaterial = ''
          // }
          // if (res.data.factoryMaterial.length > 0) {
          //   _this.factoryMaterial = res.data.factoryMaterial
          // } else {
          //   _this.factoryMaterial = ''
          // }
          
          
          // console.log('res', _this.factoryInfo, _this.factoryEquipment,  _this.factoryMaterial)
        })
    }
  }
 })
</script>
<style type="text/css" scoped>
</style>
