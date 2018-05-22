<template>
 <div>
  <brand>企业信息</brand>
  <company>
    <div slot="operate">
     <div class="center">
      <div class="btn">审核通过</div>
      <div class="btn-hui2">审核不通过</div>
      <div class="btn-yellow"><router-link to="{name: outCompanyEdit}">编 &nbsp; 辑</router-link></div>
      <div class="btn-hui2">删 &nbsp; 除</div>
     </div>
   </div>
  </company>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import company from '../../../components/common/company'
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
