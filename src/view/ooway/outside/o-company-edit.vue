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
  	this.getDatas ()
  },
  methods: {
  	// 获取企业信息列表
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
    },
  	// 编辑企业信息
  	getCompany () {
      let _this = this
      let params = {
        'id': this.$route.query.id,
        'entName': this.entName,
        // 企业性质
        'entNature': this.entNature,
        // 出口退税开户行
        'bankName': this.bankName,
        // 出口退税账户
        'bankNumber': this.bankNumber,
        // 所在省份：
        'province': this.province,
        // 海关出口等级
        'exportRank': this.exportRank,
        // 所在城市
        'city': this.city,
        // 退税等级
        'refundTaxRank': this.refundTaxRank,
        // 退税金额
        'refundTax': this.refundTax,
        // 上一年出口规模
        'exportScale': this.exportScale,
        // 企业资质
        'entAptitude': this.entAptitude,
        // 其它
        'otherInfo': this.otherInfo,
        // 身份证信息
        'idCard': this.idCard,
        // 公司营业执照，照片
        'businessLicence': this.businessLicence,
        // 海关登记
        'customsRegister': this.customsRegister,
        // 进出口企业登记证；照片
        'entRegister': this.entRegister
      }
      this.$http.post('/api/tradecompany/edit', params)
        .then((res) => {
          console.log('res', res)
          if (res.data.status === 200) {
            this.$message({
              message: '恭喜你，公司信息提交成功',
              type: 'success'
            })
          }
          setTimeout(function () {
            _this.$router.push({
              name: 'outhome'
            })
          }, 2000)
        })
    },
    // 上传身份证正面
    setIdCard (e, id) {
      // this.idCard = e.target.files
      console.log('e', e.target.files[0])
      let files = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(files)
      reader.onload = function (e) {
        var result = document.getElementById(id)
        // 显示文件
        result.innerHTML = '<img src="' + this.result + '" class="img-size" width="260" height="147"/>'
      }
      this.$http.post('/api/auth/upload/image', {idenimg: this.result})
        .then(res => {
          console.log(res)
        })
    }
  }
})
</script>
<style type="text/css" scoped>
</style>
