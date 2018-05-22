<template>
  <div>
    <brand></brand>
    <div class="bgwhite">
      <div class="rates-main">
        <span>银行名称：
          <!-- <selects></selects> -->
          <select v-model="selectBank">
            <option selected="selected" value="0" id="0"> 请选择银行 </option>
            <option v-for="b in banklist" :value="b.id">{{b.name}}</option>
          </select>
        </span>
      </div>
      <tables-tit-more :tablesData="taxData0">
         <div slot="tables-tit">基础利率
         </div>
         <div slot="datas"  v-show="popData0" class="pop-center">暂无数据</div>
         <div slot="datas" class="link-blue" v-show="mainData0">
           <dd v-for="d in ratelist">
             <div>{{d.bankName}}</div>
             <div>最长 {{d.months}} 个月</div>
             <div>{{d.rateValue}} %</div>
             <div class="link-blue" @click="goEdit(d.bankId)">编辑</div>
           </dd>
         </div>
       </tables-tit-more>
      <tables-tit-more :tablesData="taxData">
         <div slot="tables-tit">定制贷款利率</div>
         <div slot="datas"  v-show="popData" class="pop-center">暂无数据</div>
         <div slot="datas" class="link-blue" v-show="mainData">
           <dd v-for="d in ratelist1">
             <div>{{d.entName}}</div>
             <div>{{d.bankName}}</div>
             <div>最长 {{d.months}} 个月</div>
             <div>{{d.rateValue}} %</div>
             <div class="link-blue" @click="goEdit1(d.objId,d.entName,d.bankName)">编辑</div>
           </dd>
         </div>
       </tables-tit-more>
    </div>
  </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
export default({
  data () {
    return {
      companyName: '北京智贸通',
      taxData: {
        data: [
          {title: '企业名称'},
          {title: '银行名称'},
          {title: '贷款期限'},
          {title: '利率值'},
          {title: '操作'}
        ],
        url: ''
      },
      taxData0: {
        data: [
          {title: '银行名称'},
          {title: '贷款期限'},
          {title: '利率值'},
          {title: '操作'}
        ],
        url: ''
      },
      // 银行名称
      banklist: [],
      // 银行的默认选中值
      selectBank: '0',
      // 基础利率
      ratelist: [],
      ratelist1: [],
      // 基础利率name
      ratelistName: {},
      // 定制利率
      dRages: [],
      // 暂无数据
      popData0: true,
      mainData0: false,
      // 暂无数据
      popData: true,
      mainData: false,
      // 数据连接
      dataMain: {}
    }
  },
  components: {
    brand,
    tablesTitMore
  },
  mounted () {
    this.getBanks()
  },
  watch: {
    selectBank (val, oldVal) {
      // 基础利率
      this.getRates(val)
      // 定制利率
      this.getRates1(val)
      this.getDRate(val)
      // 设置无数据隐藏
      this.popData0 = false
      this.mainData0 = true
      this.popData = false
      this.mainData = true
      this.bankId = val
    }
  },
  methods: {
    // 获取银行接口
    getBanks () {
      let _this = this
      this.$http.get('/api/bank/select')
        .then(res => {
          console.log('res.data', res.data)
          _this.banklist = res.data.bankList
        })
    },
    // 获取基准利率
    getRates (_id) {
      console.log(_id)
      let _this = this
      this.$http.get('/api/rate/base/select?bankId=' + _id +'&&objType=0')
        .then(res => {
          this.ratelist = res.data.rateList
        })
    },
    // 定制利率
    getRates1 (_id) {
      console.log(_id)
      let _this = this
      this.$http.get('/api/rate/base/select?bankId=' + _id +'&&objType=1')
        .then(res => {
          this.ratelist1 = res.data.rateList
        })
    },
    // 追加字段
    addTitle () {
      let _this = this
      this.ratelist.forEach(function (value, index) {
        console.log('uu', value)
          _this.reatelistName = {title: '最长' + value.months + '个月利率'}
          // _this.taxData.data.push(_this.reatelistName)
          _this.taxData.data.splice(2, 0, _this.reatelistName)
      })
      console.log('00000', this.taxData)
    },
    // 获取定制利率
    getDRate (_bankId) {
      this.$http.get('/api/rate/select?bankId=' + _bankId)
        .then(res => {
          this.dRages = res.data
        })
    },
    // 编辑基础利率
    goEdit (_bankId, _name) {
      this.$router.push({
        name: 'oowayInterestRatesSet',
        query: {'bankId': _bankId, 'bankName': _name}
      })
    },
    // 编辑定制利率
    goEdit1 (_objId, _name, _bankName, _bankId) {
      this.$router.push({
        name: 'ratesSetEdit',
        query: {'objId': _objId, 'entName': _name, 'bankName': _bankName, 'bankId': _bankId}
      })
    }
  }
})
</script>
<style type="text/css" scoped>
.mt40{
  margin-top:40px;
}
.rates{
  clear:both;
  overflow: hidden;
}
.rates dl{
  float:left;
  width:30%;
  font-size:14px;
  padding-left:5%;
}
.rates dl dt span{
  font-size:16px;
}
.rates dl dt,.rates dl dd{
  float:left;
}
.rates dl dd span{
  color:#f48222;
}
.rates dl dd input{width:50px;}
.rates .btn-orange{
  float:left;
  margin-top:10px;
}
.oper{
  text-align: center;
  padding-top:50px;
  padding-bottom:70px;
}

.tables-tits{
    width:100%;
    clear:both;
    overflow: hidden;
    margin-bottom:-5px;
    margin-top:30px;
}
.tables-tits li{
    float:left;
    width:22%;
    height:50px;
    line-height:50px;
    text-align:center;
    font-weight:normal;
    background: #fafafa;
}
/*.tables-tits li.w15{
    width:13%;
}*/
.tables-tits li.w50{
    width:78%;
    background: #f4f4f4
}
</style>