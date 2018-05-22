<template>
 <div>
  <brand></brand>
  <company :rootDatas="rootDatas" :pDatas="pDatas"></company>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import company from '../../../components/common/company-edit-ooway'
export default({
  data () {
    return {
      rootCompanyData1: {},
      companyData1: {},
      flag: false,
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
    // this.rootCompanyData1 = JSON.parse(window.localStorage.getItem('rootCompanys'))
    // this.companyData1 = JSON.parse(window.localStorage.getItem('companys'))
    // console.log('companyData1', this.companyData1, this.rootCompanyData1)
  },
  methods: {
    getDatas () {
      let _this = this
      this.$http.get('/api/tradecompany/findOne?id='+ this.$route.query.id)
        .then(res => {
          if (res.data.status === 200 && res.data.result) {
            _this.rootDatas = res.data.result
            _this.pDatas = res.data.result.companyInfo
            console.log('aaaaaa', _this.pDatas)
            // 身份证
            let cards = res.data.result.companyInfo.idCard
            _this.idCards1 = cards.split(',')
            // console.log('idCards1', _this.idCards1)
          }
        })
    }
  }
})
</script>
<style type="text/css">
</style>
