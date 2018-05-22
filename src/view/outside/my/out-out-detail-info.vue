<template>
 <div>
  <brand></brand>
  <detailInfo :refundApply="refundApply" :products="products" :factoryInfo="factoryInfo" :datasInfo="datasInfo" :loanDetail="loanDetail" :receiptImgss="receiptImgss"></detailInfo>
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
      loanDetail: {},
      refundApply: {},
      products: {},
      factoryInfo: {},
      receiptImgss: [],
      receiptImg: {}
    }
  },
  // computed: {
  //   // ...mapGetters(['loanDetail'])
  // },
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
      let id = this.$route.query.id
      // this.$http.post('/api/refundapply/query/detail-one?id=' + id)
      this.$http.post('/api/refund/select/bycondition?id=' + id)
        .then(res => {
          // this.datasInfo = res.data.result
          
          if (res.data.status === 200) {

            _this.datasInfo = res.data.InvoiceInfoList
            _this.loanDetail = res.data
            _this.refundApply = res.data.RefundApply
            _this.products = res.data.ProductList[0]
            _this.factoryInfo = res.data.factoryInfo
            _this.receiptImg = res.data.RefundApply.receiptImg
            _this.receiptImgss = _this.receiptImg.split(',')

            console.log('9000', _this.receiptImg)
          } else {
            // alert(0)
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
