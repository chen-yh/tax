<template>
  <div>
    <brand></brand>
    <div class="bgwhite">
      <h2 class="h2-bord">基础贷款利率设置</h2>
      <div class="company">
        <span>企业名称：{{entName}}</span>
        <span>银行名称：{{bankName}}</span>
      </div>
     <!--利率-->
     <div class="rates">
        <dl v-for="(r,index) in ratelist">
          <dt>最长<span>{{r.months}}</span>个月，年利率：</dt>
          <dd><input type="" name="" placeholder="请输入利率" v-model="r.rateValue"> <span>%</span></dd>
        </dl>
        
    </div>

     <!--利率 end-->
    <div class="btn-orange-small add-bank" @click="addRateShow=true" v-show="showRateAdd">
      新增利率
    </div>
    <div class="rates-pop" v-show="addRateShow" style="margin-left:50px;">
        <span class="close" @click="addRateShow=false">X</span>
        <div> 最长 <span> <input type="text" v-model="m10" class="w50"> </span> 个月，年利率： 
        <input type="" name="" placeholder="请输入利率" v-model="r10"  class="w50"> <span class="red"> % </span>
          <span class="btn-hui-small" @click="addRate()">确定</span>
      </div>
        
    </div>
    <div class="mt40 oper">
      <div class="btn-zi-big btn-zi" @click="submit()">编辑并提交</div>
    </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import $ from 'jquery'
// import selects from '../../../components/base/selects'
export default({
  data () {
    return {
      entName: this.$route.query.entName,
      bankName: this.$route.query.bankName,
      objId: this.$route.query.objId,
      // 新增利率div显示隐藏
      addRateShow: false,
      // 银行id
      bankId: 0,
      // 月
      m0: 0,
      m1: 0,
      m2: 0,
      m3: 0,
      m10: 0,
      // 利率
      r0: 0,
      r1: 0,
      r2: 0,
      r3: 0,
      r10: 0,
      ratelist: [],
      showRateAdd: false,
      parames: []
    }
  },
  components: {
    brand
    // selects
  },
  created () {
    // this.selectBank = this.banklist[0]
  },
  mounted () {
    this.getRates()
  },
  methods: {
    // 获取基准利率
    getRates () {
      let _this = this
      this.$http.get('/api/rate/select?bankName=' + _this.bankName + '&&objId=' + _this.objId)
        .then(res => {
          this.ratelist = res.data.rateList
          console.log(res.data)
        })
    },
    // 新增利率
    addRate () {
      let _this = this
      this.$http.post('/api/rate/custom/add', {'bankId': _this.bankId, 'months': _this.m10, 'rateValue': _this.r10, 'objType': 0})
        .then(res => {
          console.log(res)
          if (res.data.status === 200) {
            this.getRates(_this.bankId)
          }
        })
    },
    // 编辑并提交
    submit () {
      let _this = this
      // 获取利率的input
      let arrInt = $('.rates input')
      // 遍历所有的利率
      _this.ratelist.forEach(function (item, index) {
        // 为后台返回的数据set一个属性及值
        _this.$set(item, 'rateValue',arrInt[index].value)
        let obj = {'id': item.id, 'rateValue': item.rateValue}
        // 把对象组合成数组
        _this.parames.push(obj)
      })
      console.log('parames', _this.parames)
      _this.$http.post('/api/rate/base/add', _this.parames)
        .then(res => {
          if (res.data.status === 200) {
            // 用的是elementUi 的提示框组件
            this.$message({
              message: '恭喜你，编辑修改成功',
              type: 'success'
            })
          }
        })
        // 数组置空
        _this.parames = []
    }
  }
})
</script>
<style type="text/css" scoped>
.company span{
  font-size:16px;
  font-weight:bold;
  display: inline-block;
  margin:10px 40px 20px 0;
}
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
  margin:10px 0;
}
.rates dl dt span{
  font-size:16px;
}
.rates dl dt,.rates dl dd{
  float:left;
  line-height:30px;
}
.rates dl dd span{
  color:#f48222;
}
.rates .btn-orange{
  float:left;
  margin-top:10px;
}
.oper{
  text-align: center;
  padding-top:50px;
  padding-bottom:70px;
}
.rates-main{
    padding:20px 0 10px 50px;
}
.rates-pop{
    border:solid 1px #ccc;
    padding:30px;
    margin-top:20px;
    width:500px;
    position: relative;
}
.close{
    position: absolute;
    right:7px;
    top:5px;
    color:#aaa;
    cursor: pointer;
    font-size:16px;
}
.rates-pop input{
    height:32px;
    line-height: 32px;
    padding:0 6px;
    width:360px;
}
.rates dd input{
  width:80px;
  text-align:center;
  height:30px;
  line-height: 30px;
  margin-top:0;
  vertical-align: top;
}
.rates-pop input.w50{
  width:60px;
  margin:0 5px;
}
.add-bank{
  margin-top:-40px;
  margin-left:700px;
  position: absolute;
}
</style>
