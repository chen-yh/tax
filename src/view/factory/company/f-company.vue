<template>
 <div>
  <brand>企业信息</brand>
  <company>
    <div slot="operate">
       <div class="center">
        <div class="btn">编 &nbsp; 辑</div>
        <div class="btn-yellow" style="display:none;">提 &nbsp; 交</div>
       </div>
     </div>
   </company>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import company from '../../../components/common/f-company'
export default({
  data () {
    return {}
  },
  components: {
    brand,
    company
  }
})
</script>
