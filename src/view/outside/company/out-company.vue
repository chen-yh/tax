<template>
 <div>
  <brand></brand>
  <company :pDatas = "datas" :rootDatas="rootDatas" :idCards="idCards1">
    <div slot="popTit" class="pop" v-if="datas.status!=1 && datas.status!=2">
      欢迎回来，需要认证并完善企业信息后，大路平台进行审核，审核成功后
即可享受您应用的特权。
    </div>
    <div slot="operate">
       <div class="center">
        <div class="btn btn-zi-big" @click="goEdit()">编 &nbsp; 辑</div>
        <!-- <div class="btn btn-zi-big" @click="goEdit()" v-else="">企业认证</div> -->
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
    return {
      rootDatas: {},
      datas: {},
      idCards1: {},
      cId: '',
      showBtn: false
    }
  },
  components: {
    brand,
    company
  },
  mounted () {
    this.getData()
  },
  
  methods: {
    // 获取企业信息
   getData () {
      let _this = this
      this.$http.get('/api/tradecompany/findOne?id=' + _this.cId, {
      })
        .then(function (res) {
          if (res.status === 200 && res.data.result) {
            _this.rootDatas = res.data.result
            _this.datas = res.data.result.companyInfo
            let cards = res.data.result.companyInfo.idCard
            _this.idCards1 = cards.split(',')
            // console.log('idCards1', _this.idCards1)
            window.localStorage.setItem('rootCompanys', JSON.stringify(_this.rootDatas))
            window.localStorage.setItem('companys', JSON.stringify(_this.datas))
            // console.log('MMM', JSON.stringify(_this.idCards1))
            _this.showBtn = true
          } else {
            if (res.status === 0) {
              window.alert(res.msg)
            }
          }
        })
        .catch(function (error) {
          // console.log(error)
        })
    },
    goEdit () {
      // console.log('aaaaa',this.cId)
      this.$router.push({
        name: 'outCompanyEdit',
        query: {
          'id': this.datas.id || '',
          'bankName': this.rootDatas.bank ? this.rootDatas.bank.name : ''
        }
      })
    }
  }
})
</script>
