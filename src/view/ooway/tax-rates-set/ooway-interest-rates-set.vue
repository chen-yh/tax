<template>
  <div>
    <brand></brand>
    <div class="bgwhite">
      <h2 class="h2-bord">基础贷款利率设置</h2>
      <div class="rates-main">
          <span>银行名称：
            <!-- <selects></selects> -->
            <select v-model="selectBank">
              <option selected="selected" value="0" id="0"> 请选择银行 </option>
              <option v-for="b in banklist" :value="b.id">{{b.name}}</option>
            </select>
          </span>
          <div class="btn-orange-small" @click="addBank">
            新增银行
          </div>
          <div class="rates-pop" v-show="addBankShow">
              <span class="close" @click="addBankShow=false">X</span>
              <input type="text" name="" placeholder="请输入银行名称" v-model="bankName">
              <span class="btn-hui-small" @click="add()">确定</span>
          </div>
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
      // 新增银行弹窗是否显示
      addBankShow: false,
      // 关闭新增银行弹窗
      closeAddBank: false,
      // 银行名
      bankName: '',
      // select选择银行
      selectBank: this.$route.query.bankId || 0,
      // 全部银行列表
      banklist: [],
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
    this.getBanks()
    this.getRates(this.$route.query.bankId)
  },
  watch: {
    selectBank: function (val, oldval) {
      console.log(val, oldval)
      this.getRates(val)
      this.bankId = val
      this.showRateAdd = true
    }
  },
  methods: {
    // 获取银行接口
    getBanks () {
      this.$http.get('/api/bank/select')
        .then(res => {
          console.log('res.data', res.data)
          this.banklist = res.data.bankList
        })
    },
    // 新增银行的弹窗显示隐藏
    addBank () {
      this.addBankShow = true
      this.closeAddBank = true
      this.bankName = ''
    },
    // 新增银行
    add () {
      let _this = this
      // 新增银行接口
      this.$http.post('/api/bank/add', {'name': _this.bankName})
        .then(res => {
          if (res.data.status === 200) {
            _this.$message({
              type: 'success',
              message: '添加银行成功!'
            })
            _this.bankName = ''
            _this.addBankShow = false
            _this.getBanks()
          } else {
            this.$alert(res.data.msg, '提示信息', {
              confirmButtonText: '确定',
              callback: action => {
                // 回调函数：空
              }
            })
          }
        })
    },
    // 获取基准利率
    getRates (_id) {
      console.log(_id)
      let _this = this
      this.$http.get('/api/rate/select?bankId=' + _id)
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
      if (_this.ratelist) {
         _this.ratelist.forEach(function (item, index) {
          // 为后台返回的数据set一个属性及值
          _this.$set(item, 'rateValue',arrInt[index].value)
          let obj = {'id': item.id, 'rateValue': item.rateValue}
          // 把对象组合成数组
          _this.parames.push(obj)
        })
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
        this.$router.push({
          name: 'oowayHome'
        })
      } else {
         this.$alert('请先选择择银行', '提示信息', {
            confirmButtonText: '确定',
            callback: action => {
              // 回调函数：空
            }
          })
      }
    }
  }
})
</script>
<style type="text/css" scoped>
.mt40{
  margin-top:40px;
}

</style>
