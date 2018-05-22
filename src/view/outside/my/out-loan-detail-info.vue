<template>
 <div>
  <brand></brand>
  <detailInfo :loan="loan" :refundApply="refundApply" :products="products" :factoryInfo="factoryInfo" :datasInfo="datasInfo" :loanDetail="loanDetail" :receiptImgss="receiptImgss"></detailInfo>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import detailInfo from '../../../components/common/detail-info'
import {mapGetters} from 'vuex'
export default({
  name: 'dtailInfo',
  data () {
    return {
      datasInfo: {},
      loan: {},
      refundApply: {},
      products: {},
      factoryInfo: {},
      receiptImgss: []
    }
  },
  computed: {
    ...mapGetters(['loanDetail'])
  },
  components: {
    brand,
    detailInfo
  },
  mounted () {
    this.getDatas()
    console.log('this.loanDetail', this.loanDetail)
  },
  methods: {
    getDatas () {
      let _this = this
      let loanId = this.$route.query.loanId
      console.log('aaaa', this.loanId)
      this.$http.post('/api/tradecompany/detail/one?loanId=' + loanId)
        .then(res => {
          console.log('res', res)
          this.datasInfo = res.data.result
          this.loan = res.data.result.loan
          this.refundApply = res.data.result.refundApply
          this.products = res.data.result.products[0]
          this.factoryInfo = res.data.result.factoryInfo
          if (res.data.status === 200) {
            this.datasInfo = res.data.result
            this.receiptImgss = res.data.result.refundApply.receiptImg.split(',')
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 明细列表
    }
  }
})
</script>
<style type="text/css">
</style>
