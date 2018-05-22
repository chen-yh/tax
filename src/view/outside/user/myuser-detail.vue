<template>
 <div>
  <brand>企业信息</brand>
  <company :factoryInfo="factoryInfo" :factoryEquipment="factoryEquipment" :factoryMaterial="factoryMaterial">
    <!-- <div slot="operate">
       <div class="center">
        <div class="btn">编 &nbsp; 辑</div>
        <div class="btn-yellow" style="display:none;">提 &nbsp; 交</div>
       </div>
     </div> -->
   </company>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import company from '../../../components/common/f-company'
export default({
  data () {
    return {
      outsideUser: {},
      // 工厂信息
      factoryInfo: {},
      // 原材料
      factoryMaterial: [],
      // 工厂设备
      factoryEquipment: []
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
    // 调客户详情接口
    getDatas () {
      let _this = this
      let id = this.$route.query.id
      this.$http.get('/api/factory/select/bycondition?factoryId=' + id)
        .then(res => {
          console.log('用户详情', res.data)
          if(res.data.status === 200){
            _this.outsideUser = res.data
            _this.factoryInfo = res.data.factoryInfo
            // 工厂设备
            _this.factoryEquipment = res.data.factoryEquipment[0]
            // 工厂材料
            _this.factoryMaterial = res.data.factoryMaterial[0]
          }
        })
    }
  }
})
</script>