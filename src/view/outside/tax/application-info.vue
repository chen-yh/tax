<template>
 <div>
  <brand>详情</brand>
  <detailInfo :refundApply = "refundApply" :loanDetail="loanDetail" :datasInfo="datasInfo" :factoryInfo="factoryInfo" :receiptImgss="receiptImgss"></detailInfo>
  <div class="bgwhite textPadd">
    <div>审核状态：<span v-if="verifyState==1">等待大路平台审核</span><span v-if="verifyState==2">大路平台已审核</span></div>
    <div>审核结果：<span v-if="verifyResult==1">审核通过</span><span v-if="verifyResult==0" class="red">审核未通过</span></div>
    <div  v-if="verifyResult==0">
      <div>未通过原因：<span class="red">{{refundApply.reason}}</span></div>
      <div class="btn-zi" style="margin:10px 0 60px 50px;" @click="goEdit()">去重新申请</div>
    </div>
  </div>
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
