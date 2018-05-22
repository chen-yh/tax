<template>
    <div>
       <brand>退税融资申请</brand>
       <div class="bgwhite">
         <auditing :applyData="applyData" :auditInfo="auditInfo" :auditInfoAll="auditInfoAll"></auditing>
       </div>
    </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import auditing from '../../../components/common/auditing'
export default({
  data () {
    return {
      applyData: {
        data: [
          {title: '融资项目'},
          {title: '融资金额()'},
          {title: '贷款周期'},
          {title: '融资申请时间'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '平台服务费'}
        ],
        url: ''
      },
      auditInfo: {},
      auditInfoAll: {}
    }
  },
  components: {
    brand,
    auditing
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    goInfo () {
      this.$router.push({name: 'outApplicationInfo'})
    },
    getDatas () {
      this.$http.get('/api/refundapply/select/bycondition?id=' + this.$route.query.id)
        .then(res => {
          this.auditInfo = res.data.refundApply
          this.auditInfoAll = res.data
        })
    }
  }
})
</script>
