<template>
 <div>
  <brand></brand>
  <company :pDatas="pDatas" :rootDatas="rootDatas" :idCards="idCards">
    <div slot="operate">
     <div class="center">
      <div class="btn" @click="auditingYes()">审核通过</div>
      <div class="btn-hui2"  @click="auditNo()">审核不通过</div>
     <!--  <div class="btn-yellow"><router-link to="{name: outCompanyEdit}">编 &nbsp; 辑</router-link></div> -->
      <div class="btn-hui2">删 &nbsp; 除</div>
     </div>
     <!--设置授信额度 和 提保方式-->
     <div class="bgwhite" v-if="passAffirm">
       <h2 class="title">
        保证金与授信额度
       </h2>
       <div class="bg-hui-info">
        <div class="company-info company-inof2">
         <dl>
          <dt><span class="red">*</span> 您今年授信额度上限：</dt>
          <dd> <input type="text" placeholder="请输入金额" v-model="yearLimit"> 元
            <div>
              <span v-if="!/^[0-9].*$/.test(yearLimit)">请输入数字格式</span>
            </div>
          </dd>
         </dl>
         <dl>
          <dt><span class="red">*</span> 本月授信额度上限：</dt>
          <dd><input type="text" placeholder="请输入金额" v-model="monthLimit"> 元
            <div>
              <span v-if="!/^[0-9].*$/.test(monthLimit)">请输入数字格式</span>
            </div>
          </dd>
         </dl>
        </div>
        <!-- <div class="company-info company-inof2">
         <dl>
          <dt><span class="red">*</span> 退税融资共管账户：</dt>
          <dd><input type="text" placeholder="请输入账户" v-model="coCount">
            <div>
              <span v-if="coCount==''">不能为空</span>
            </div>
          </dd>
         </dl>
         <dl>
          <dt>&nbsp;</dt>
          <dd>&nbsp;</dd>
         </dl>
        </div> -->
       </div>
       <!--利率设置-->
       <h2 class="title">
        利率设置
       </h2>
       <div class="bg-hui-info clear">
         <!--利率-->
         <div class="rates">
            <dl v-for="d in ratelists">
              <dt><span class="red">*</span> 最长<span>{{d.months}}</span>个月，年利率：</dt>
              <dd>{{d.rateValue}} <span>%</span></dd>
            </dl>
            
        </div>

         <!--利率 end-->
        <div class="btn-orange-small add-bank" @click="addRateShow=true" >
          新增定制利率
        </div>
        <div class="rates-pop" v-show="addRateShow" style="margin-left:50px;">
            <span class="close" @click="addRateShow=false">X</span>
            <div> 最长 <span> <input type="text" v-model="m10" class="w50"> </span> 个月，年利率： 
            <input type="" name="" placeholder="请输入利率" v-model="r10"  class="w50"> <span class="red"> % </span>
              <!-- <span class="btn-hui-small" @click.once="addRate()">确定</span> -->
          </div>
        </div>
       </div>
       <!--担保方式-->
       <h2 class="title">
        <span class="red">*</span> 担保方式
       </h2>
       <div class="bg-hui-info clear ratesMain">
        <div class="company-info company-inof2">
         <dl>
          <dt><label><input type="radio" v-model="money" value="0" style="width:auto;"> 保证金担保：</label></dt>
          <dd><input type="text" class="money" placeholder="请输入担保金数额"> 元
            <!-- div>
              <span v-if="!/^[0-9].*$/.test(money)">请输入数字格式</span>
          </div> -->
          </dd>
         </dl>
         <dl>
          <dt><label><input type="radio" v-model="money" value="1"  style="width:auto;"> 房屋抵押担保：</label></dt>
          <dd><input type="text" class="money"  placeholder="请输入担保金数额"> 元
            <!-- <div>
              <span v-if="!/^[0-9].*$/.test(money)">请输入数字格式</span>
            </div> -->
          </dd>
         </dl>
        </div>
        <div class="company-info company-inof2">
         <dl>
          <dt><label><input type="radio" v-model="money" value="2"  style="width:auto;"> 其它担保：</label></dt>
          <dd><input type="text" class="money"  placeholder="请输入担保金数额"> 元
            <!-- <div>
              <span v-if="!/^[0-9].*$/.test(money)">请输入数字格式</span>
            </div> -->
          </dd>
         </dl>
         <dl>
          <dt><label><input type="radio" v-model="money" value="3" style="width:auto"> 无担保：<input type="text" class="money"  placeholder="请输入担保金数额" style="display:none" value="0"></label></dt>
          <dd>&nbsp;</dd>
         </dl>
        </div>
       </div>
       <div style="margin:30px auto; text-align:center;">
         <span class="btn-zi btn-zi-big" @click="submitCompany()">提交</span>
       </div>
       
      </div>
     <!--授信额度担保方式end-->
      <el-dialog
        title="审核不通过原因"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose" :label-width="formLabelWidth">
        <div class="dialog-int">
          <h2>*  以下企业基本信息不符</h2>
          <label><input type="checkbox"  name="check" v-model="check" value="所在省份"> 所在省份</label>
          <label><input type="checkbox"  name="check" v-model="check" value="所在城市"> 所在城市</label>
          <label><input type="checkbox"  name="check" v-model="check" value="企业名称"> 企业名称</label>
          <label><input type="checkbox"  name="check" v-model="check" value="上一年度出口规模"> 上一年度出口规模</label>
          <label><input type="checkbox"  name="check" v-model="check" value="上一年度退税金额"> 上一年度退税金额</label>
          <label><input type="checkbox"  name="check" v-model="check" value="海关出口等级"> 海关出口等级</label>
          <h2>*  以下出口退税专用帐户信息不符</h2>
          <label><input type="checkbox"  name="check" v-model="check" value="开户行信息"> 开户行信息</label>
          <label><input type="checkbox"  name="check" v-model="check" value="银行账户"> 银行账户</label>
          <h2>*  以下法人代表或公司实际控制人信息不符</h2>
          <label><input type="checkbox"  name="check" v-model="check" value="身份证"> 身份证</label>
          <label><input type="checkbox"  name="check" v-model="check" value="营业执照"> 营业执照</label>
          <label><input type="checkbox"  name="check" v-model="check" value="海关注册登记证照片"> 海关注册登记证照片</label>
          <label><input type="checkbox"  name="check" v-model="check" value="进出口企业登记证"> 进出口企业登记证</label>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="getReson()">确 定</el-button>
        </span>
      </el-dialog>



   </div>
  </company>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import company from '../../../components/common/company'
import {mapGetters} from 'vuex'
import $ from 'jquery'
export default({
  data () {
    return {
      dialogVisible: false,
      formLabelWidth: '600px',
      pDatas: {},
      rootDatas: {},
      idCards: {},
      info: [],
      // 利率
      ratelists: [],
      showRateAdd: true,
      addRateShow: false,
      // 授信额度
      yearLimit: 0,
      monthLimit: 0,
      coCount: '',
      // 担保
      money:  0,
      money0: '',
      money1: '',
      money2: '',
      money3: '',
      m10: '',
      r10: '',
      bankId: this.$route.query.bankId,
      passAffirm: this.$route.query.s || false,
      check: [],
      reason: '',
      id: this.$route.query.id,
      money: [],
      // 新增利率
      months: '',
      rateValue: '',
      // 担保类型
      warrantType: 0,
      creditData: {},
      // 保证金
      warrantList: {}
    }
  },
  components: {
    brand,
    company
  },
  mounted () {
    this.getDatas()
    this.getRates()
    this.getCredit()
    this.getWarrant()
    // console.log('llll',this.warrantList)
    
  },
  // computed: {
  //   ...mapGetters(
  //     ['bankNames']
  //   )
  // },
  watch: {
    check: function (val, oldVal) {
      this.reason = val.join(',')
      // console.log(this.reason)
    },
    money: function (val, oldVal) {
      this.money = val
    }
  },
  methods: {
    // 获取数据
    getDatas () {
      let _this  = this
      this.$http.get('/api/tradecompany/findOne?id=' + this.$route.query.id)
        .then(res => {
          console.log(res.data.result)
          _this.pDatas = res.data.result.companyInfo
          _this.idCards = res.data.result.companyInfo.idCard.split(',')
        })
    },
    // 审核通过
    auditingYes () {
      let _this = this
      let params = {
        'id': this.id,
        'status': 1,
        'reason': this.reason || ''
      }
      this.$http.post('/api/ooway/tradecompany/validate', params)
        .then(res => {
          if (res.data.status === 200) {
            _this.$message({
              type: 'success',
              message: '审核通过成功!'
            })
          } else {
            _this.$message({
              type: 'success',
              message: '审核通过不成功!'
            })
          }
        })
        // 审核通过后显示设置授信div
        this.passAffirm = true
    },
    // 审核不通过
    auditNo () {
      this.dialogVisible = true
    },
    // 审核不通过接口
    getReson (reson) {
      let _this = this
      let params = {
        'id': _this.$route.query.id,
        'status': 2,
        'reason': this.reason
      }

      this.$http.post('/api/ooway/tradecompany/validate', params)
        .then(res => {
          if (res.data.status === 200) {
            _this.$message({
              type: 'success',
              message: '审核未通过，操作成功!'
            })
             this.$router.push({
                name: 'outCompanyList'
              })
          }
        })
        this.dialogVisible = false
    },
    // 弹窗
    handleClose(done) {
      let _this = this
        this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      },
    // 获取授信额度
    getCredit () {
      let _this = this
      this.$http.get('/api/tradecompany/credit/detail?tradeId=' + this.$route.query.id)
        .then(res => {
          if (res.data.status === 200 && res.data.result) {
            _this.creditData = res.data.result
            _this.yearLimit = res.data.result.yearLimit
            _this.monthLimit = res.data.result.monthLimit
            _this.coCount = res.data.result.coCount
          } else {
            // _this.$message({
            //   type: 'success',
            //   message: res.data.msg
            // })
          }
        })
    },
    // 获取基础利率
    getRates () {
      this.$http.get('/api/rate/base/select?bankId=' + this.$route.query.bankId)
        .then(res => {
          console.log(' 利率',res.data)
          this.ratelists = res.data.rateList
        })
    },
     // 获取保证金
    getWarrant () {
      this.$http.get('api/tradecompany/warrant/detail?tradeId='+this.$route.query.id)
        .then(res => {
          
          this.warrantList = res.data.result[0]
          this.money = this.warrantList ? this.warrantList.warrantType : 0
           this.warrantList ? $('.ratesMain input.money').eq(this.money).val(this.warrantList.warrantValue) : 0
        })
    },
    // 新增利率
    addRate () {
      let _this = this
      let html = `<dl>
              <dt><span class="red">定制利率为：</span>最长<span>${_this.m10}</span>个月，年利率：</dt>
              <dd>${_this.r10} <span>%</span></dd>
            </dl>
           `
           $('.rates').append(html)
           _this.addRateShow = false
      // 新增定制利率的接口
      // this.$http.post('/api/rate/custom/add', {'bankId': _this.bankId, 'objId': _this.id, 'months': _this.m10, 'rateValue': _this.r10, 'objType': 0})
      //   .then(res => {
      //     console.log(res)
      //     if (res.data.status === 200) {
      //       this.getRates(_this.bankId)
      //     }
      //   })
      // 查询定制利率的接口
      this.$http.get('/api/rate/custom/select?bankId=' + _this.bankId + '&&objId=' +  _this.objId)
        .then(res => {
          console.log(res)
          if (res.data.status === 200) {
            this.getRates(_this.bankId)
          }
        })
    },
    // 提交
    submitCompany () {
      let _this = this
      // 设置担保
      let typeVal = $('.ratesMain input.money').eq(this.money).val()
      let params = {
        'entId': this.pDatas.id,
        'warrantType': this.money,
        'warrantValue': typeVal
      }
      console.log('params', params)
      this.$http.post('/api/ooway/warrant/add', params)
        .then(res => {
          console.log('resaaaaa', res.data)
        })
      // 设置授信额度
      let paramsCredit = {
        'tradeserviceId': this.pDatas.id,
        'yearLimit': this.yearLimit,
        'monthLimit': this.monthLimit,
        'coCount': this.coCount
      }
      this.$http.post('/api/ooway/creditlimit/add', paramsCredit)
        .then(res => {
          if (res.data.status === 200) {
            _this.$message({
              type: 'success',
              message: '设置成功!'
            })
          } else {
            _this.$alert(res.data.msg, '提示框', {
              confirmButtonText: '确定'
            })
          }
          console.log(res)
        })
      if (this.m10 !== '' &&this.r10 !== '') {
        // 设置定制利率
        let paramsRate = {
          'objId': this.pDatas.id,
          'objType': 1,
          'bankId': this.$route.query.bankId,
          'months': this.m10,
          'rateValue': this.r10
        }
        this.$http.post('/api/rate/custom/add', paramsRate)
          .then(res => {
            if (res.data.status === 200) {
              console.log('定制利率', res.data)
            }
          })
        }
      // 跳转页面
      this.$router.push({
        name: 'outCompanyList'
      })
    }
  }
})
</script>
<style type="text/css">
  .dialog-int h2{
    font-weight:bold;
    font-size:14px;
    clear:both;
    overflow: hidden;
    padding-top:16px;
    padding-bottom:12px;
  }
  .dialog-int label{
    display: inline-block;
    float:left;
    width:160px;
    margin:0px 15px 15px 0;
  }
  .el-dialog__body{
    padding-top:0;
  }
  .el-dialog{
    width:49%!important;
  }
  .dialog-int{
    height:100%!important;
    padding-bottom:50px;
  }
  .company-inof2 dt{
    line-height: 36px!important;
  }
</style>
