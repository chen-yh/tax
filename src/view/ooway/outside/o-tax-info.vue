<template>
    <div>
       <brand></brand>
       <div class="bgwhite">
         <auditing :applyData="applyData" :auditInfo="auditInfo" :auditInfoAll="auditInfoAll" :receiptImgss="receiptImgss"></auditing>
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
          {title: '合同号'},
          {title: '融资项目'},
          // {title: '企业名称 '},
          {title: '出口金额'},
          {title: '出口日期'},
          {title: '融资金额'},
          {title: '融资申请时间'},
          {title: '贷款周期'},
          {title: '平台服务费'}
        ],
        url: ''
      },
      auditInfo: {},
      auditInfoAll: {},
      receiptImgss: [],
      receiptImg: {}
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
      let _this = this
      this.$http.get('/api/refundapply/select/bycondition?id=' + this.$route.query.id)
        .then(res => {
          this.auditInfo = res.data.refundApply
          this.auditInfoAll = res.data
          console.log(9999, res.data)
          _this.receiptImg = _this.auditInfo.receiptImg
          _this.receiptImgss = _this.receiptImg.split(',')
        })
    }
  }
})
</script>
<style type="text/css">
  .el-dialog{
    width:49%!important;
  }
</style>
