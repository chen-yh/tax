<template>
 <div>
  <brand></brand>
   <detailInfo :refundApply = "refundApply" :loanDetail="loanDetail" :datasInfo="datasInfo" :factoryInfo="factoryInfo" :receiptImgss="receiptImgss"></detailInfo>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import detailInfo from '../../../components/common/detail-info'
export default({
  name: 'dtailInfo',
  data () {
    return {
      refundApply: {},
      loanDetail: {},
      factoryInfo: {},
      datasInfo: [],
      verifyState: this.$route.query.verifyState || '',
      verifyResult: this.$route.query.verifyResult || '',
      receiptImgss: [],
      receiptImg: {}
    }
  },
  components: {
    brand,
    detailInfo
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    getDatas () {
      let _this = this
      this.$http.get('/api/refundapply/select/bycondition?id=' + this.$route.query.id)
        .then(res => {
          this.refundApply = res.data.refundApply
          this.factoryInfo = res.data.factoryInfo
          this.loanDetail = res.data
          this.datasInfo = res.data.InvoiceInfoList
          this.verifyState = res.data.refundApply.verifyState
          this.verifyResult = res.data.refundApply.verifyResult
          console.log(9999, res.data)
          _this.receiptImg = _this.refundApply.receiptImg
          _this.receiptImgss = _this.receiptImg.split(',')
        })
    },
    goEdit () {
      this.$router.push({
        name: 'outApplication1'
      })
    }
  }
})
</script>
<style>
.company-info dl dt{
    line-height: 35px;
  }
</style>
