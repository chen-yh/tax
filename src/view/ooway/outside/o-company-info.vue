<template>
 <div>
  <brand></brand>
  <company :rootDatas="rootDatas" :pDatas="pDatas" :idCards="idCards1">
   </company>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import company from '../../../components/common/company'
export default({
  data () {
    return {
      pDatas: {},
      rootDatas: {},
      idCards1: {}
    }
  },
  components: {
    brand,
    company
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    getDatas () {
      let _this = this
      this.$http.get('/api/tradecompany/findOne?id='+ this.$route.query.id)
        .then(res => {
          this.rootDatas = res.data.result
          this.pDatas = res.data.result.companyInfo
          // 身份证
          let cards = res.data.result.companyInfo.idCard
          _this.idCards1 = cards.split(',')
          console.log('idCards1', _this.idCards1)
          window.localStorage.setItem('rootCompanys', JSON.stringify(_this.rootDatas))
          window.localStorage.setItem('companys', JSON.stringify(_this.datas))
          console.log('MMM', JSON.stringify(_this.idCards1))
        })
    }
  }
})
</script>
