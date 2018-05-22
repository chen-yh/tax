<template>
  <div class="detail">
    <brand><router-link to="/">我要还款</router-link></brand>
    <div class="bgwhite">
    <!--贷款还款总计-->

    <tables-tit-more :tablesData="dRepayData" :mainData="mainData">
      <div slot="tables-tit">已还款待平台确认
      </div>
      <div slot="datas"  v-show="popData" class="pop-center">暂无数据</div>
      <div slot="datas" v-for="(r,index) in dRepayDatas" :key="index" v-show="mainData">
        <dd v-for="(d,index) in r.loanDetails" :key="index" @click="goDaiDefault()">
          <div>{{d.refundApply.contract ? d.refundApply.contract : ''}}</div>
          <div>
            <span v-if="d.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{d.factoryInfo.entName ? d.factoryInfo.entName : ''}}</div>
          <div>{{d.refundApply.declareSum ? d.refundApply.declareSum : ''}}</div>
          <div>{{d.refundApply.financing ? d.refundApply.financing : ''}}</div>
          <div>{{d.refundApply.entName ? d.refundApply.loanPeriod : ''}}</div>
          <div>{{d.refundApply.loanTime ? d.refundApply.loanTime : ''}}</div>
          <div>{{d.refundApply.expireTime ? d.refundApply.expireTime : ''}}</div>
          <div>
            <span v-if="d.refundApply.repayState==0" class="red">未还</span>
            <span v-if="d.refundApply.repayState==1" class="red" >完成还款</span>
            <span v-if="d.refundApply.repayState==2" class="red">未还清</span>
            <span v-if="d.refundApply.repayState==3" class="red">已还未确认</span>
          </div>
          <div>{{d.refundApply.expireTime ? d.refundApply.deadDays : ''}}</div>
          <div>{{d.serverCost ? d.serverCost : ''}}</div>
        </dd>
        <dd slot="countData">
          <div class="countData">
            <div class="f16">总还款：{{r.repayment.amount}}  元</div>
            <div><router-link to="outRepaymentInfo" class="blueCursor">查看详情 >> </router-link></div>
          </div>
        </dd>
      </div>
    </tables-tit-more>
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="repayList">
      <div slot="tables-tit">待还款列表
      </div>
      <div slot="datas"  v-show="dpopData" class="pop-center">暂无数据</div>
      <div slot="datas" v-for="(r,index) in repayDatas" :key="index" v-show="dmainData" id="tables">
        <dd>
          <div><input type="checkbox" :value="r.refundApply.id?r.refundApply.id:''" @click="oneCheckbox()"></div>
          <div>{{r.refundApply.contract}}</div>
          <div>
            <span v-if="r.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{r.factoryInfo.entName}}</div>
          <div>{{r.refundApply.declareSum}}</div>
          <div>{{r.refundApply.financing}}</div>
          <div>{{r.loan.amount}}</div>
          <div>{{r.refundApply.loanPeriod}}</div>
          <div>{{r.loan.loanTime | dateFormate}}</div>
          <div>{{r.loan.expireTime | dateFormate}}</div>
          <div>
            <span v-if="r.refundApply.repayState==0" class="red">未还</span>
            <span v-if="r.refundApply.repayState==1" class="red" >完成还款</span>
            <span v-if="r.refundApply.repayState==2" class="red">未还清</span>
            <span v-if="r.refundApply.repayState==3" class="red">已还未确认</span>
          </div>
          <div>{{r.deadDays}}</div>
          <div>{{r.serverCost}}</div>
        </dd>
      </div>
    </tables-tit-more>
    <!--统计-->
      <div class="bordm" slot="countData">
        <div class="repay-right bg-yellow">
          <!-- <span>出口总金额：￥{{countOut}}  元</span>
          <span>融资总金额：￥{{countFinancing?countFinancing:0}}  元</span>
          <span>平台服务费：￥{{countServerCost}} 元</span> -->
          <span>出口总金额：￥{{countDatas.export}}  元</span>
          <span>融资总金额：￥{{countDatas.financ ? countData.financ : 0}}  元</span>
          <span>平台服务费：￥{{countDatas.server}} 元</span>
        </div>
      </div>
      <!--还款-->
      <div class="bg-hui clear">
        <div class="check">
          <label><input type="checkbox" name="" @click="checkedAlls()" id="all"> &nbsp;全选</label>
          已选融资还款项 <span id="len"></span> 项
        </div>
        <div class="go-repayment">
          合计：<span id="repayMoney">{{totalMoney}}</span>
          <div class="btn-gorepay" @click="goRepay()">去还款</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
import checkboxData from '../../../components/common/checkbox-data'
import $ from 'jquery'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '委托企业'},
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '贷款周期'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '还款状态'},
          {title: '还款倒计时'},
          {title: '平台服务费'}
        ],
        url: 'outRepaymentInfo'
      },
      repayList: {
        data: [
          {title: ''},
          {title: '合同号'},
          {title: '融资项目'},
          {title: '委托企业'},
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '放款金额'},
          {title: '贷款周期'},
          {title: '贷款开始'},
          {title: '贷款到期'},
          {title: '还款状态'},
          {title: '还款倒计时'},
          {title: '平台服务费'}
        ],
        url: 'outRepaymentInfo'
      },
      dRepayDatas: [],
      repayDatas: [],
      // 出口总额
      countOut: 0,
      // 融资总额
      countFinancing: 0,
      // 平台服务费
      countServerCost: 0,
      // 还款待确认提示无数据
      popData: false,
      // 还款待确认主要数据
      mainData: true,
      // 待还款的提示无数据
      dpopData: false,
      // 待还款主要数据
      dmainData: true,
      // 还款复选框
      repayBox: [],
      lens: 0,
      countDatas: {},
      // 总金额
      totalMoney: 0,
      repayDataAll: 0
    }
  },
  components: {
    brand,
    tablesTitMore,
    checkboxData
  },
  mounted () {
    this.getDatas1()
    this.getDatas2()
    this.countRepay()
  },
  methods: {
    getDatas1 () {
      // 已还款待平台确认接口
      this.$http.post('/api/repayment/repay/apply/list', {page: 1, repayStatus: 0})
        .then(res => {
          if (res.data.status === 200) {
            this.dRepayDatas = res.data.result.rows
          } else {
            this.popData = true
            this.mainData = false
          }
        })
    },
    // 待还款接口
    getDatas2 () {
      this.$http.post('/api/tradecompany/detail/list?page=1&&repayStatus=4')
        .then(res => {
          if (res.data.status === 200) {
            // 待还款数据
            this.repayDataAll = res.data.result
            this.repayDatas = res.data.result.rows
            let len = res.data.result.rows.length
            for (let i = 0; i < len; i++) {
              // 计算出口总额
              this.countOut += res.data.result.rows[i].refundApply.declareSum
              // 计算融资总金额
              this.countFinancing += res.data.result.rows[i].refundApply.financing
              // 计算平台服务费
              this.countServerCost += res.data.result.rows[i].serverCost
            }
          } else {
            this.dpopData = true
            this.dmainData = false
          }
        })
    },
    // 待还款的统计接口
    countRepay () {
      this.$http.post('/api/tradecompany/financ/statistic?repayStatus=4')
        .then(res => {
          console.log('res000000', res)
          // this.countDatas = res.data.result
        })
    },
    // 选中后去还款
    // 去还款接口
    goRepay () {
      this.$http.get('/api/repayment/repay/list?loadId=' + 1)
        .then(res => {
          console.log('还款', res)
        })
      this.$router.push({name: 'goRepayment'})
    },
    // 全选
    checkedAlls: function () {
      this.checked = !this.checked
      console.log($('#all').prop("checked"))
      let int = $('input').not('#all')
      // checkob除了全选的个数
      let checkLen = $('input:checkbox').not('input#all').length
      for (let i = 0; i < checkLen; i++) {
        int[i].checked = this.checked
      }
      this.lens = $('input:checked').not('#all').length
      $('#len').text(this.lens)
      // $('#tables input').each(function () {
      //   $(this).checked = _this.checked
      //   alert($(this).checked)
      // })
      // this.repayBox = []
      // console.log('kk', _this.repayBox);
      // if (this.checkedAll == true) {//实现反选
      //   this.repayDatas.forEach((value, index) => {
      //     this.repayBox.push(values.refundApply.id)
      //   })
      // }
    },
    // 单个复选框
    oneCheckbox () {
      let _this = this
      let totalM = 0
      _this.lens = $('input:checkbox:checked').not('#all').length
      $('#len').text(_this.lens)
      console.log('lens', _this.lens)
      // 还款数额
      $('#repayMoney').text()
      this.repayDatas.forEach(function(item, index){
        console.log('item', item, index)
        totalM += item.loan.amount
        console.log(totalM)
      })
    }
  },
  // watch: {
  //   repayBox: {
  //     handler () {
  //       if (this.repayBox.length === this.repayDatas.length) {
  //         this.checkedAll = true
  //       } else {
  //         this.checkedAll = false
  //       }
  //     },
  //     deep: true
  //   }
  // }
  // 进入还款详情
  goDaiDefault (_id) {
    this.$http.get('/api/')
      .then(res => {
        this.detailDatas = res.data
      })
  }
})
</script>
<style type="text/css" scoped>
@import '../../../assets/css/detail.css';
.filter{
  clear:both;
  overflow: hidden;
}
.filter dl{
 float:left;
  margin:10px 20px;
}
.filter dl dt,.filter dl dd{
  float:left;
}
.filter dl dt{
  margin-right:10px;
  color:#333;
}
.bordm{
  clear:both;
  overflow: hidden;
  border-bottom:solid 1px #ccc;
  padding-bottom:15px;
}
.repay-right{
  width:600px;
  float:right;
  margin-bottom:;
}
.repay-right span{
  display: inline-block;
  padding:0px 20px;
}
.check{
  float:left;
  line-height: 44px;
}
.check label{
  display: inline-block;
  margin-right:40px;
}
.bg-hui{
  background: #f8f8f8;
  padding: 0px 0px 0 10px;
  margin: 10px 0;
}
.go-repayment{
  float:right;
}
.go-repayment span{
  color:#f0830f;
  font-size:16px;
}
.btn-gorepay{
  display: inline-block;
  width:100px;
  height:48px;
  line-height: 47px;
  background: #f0830f;
  color:#fff;
  text-align: center;
  margin-left:20px;
  cursor:pointer;
}
.countData div{
  float:right;
  margin:10px;
  width:150px;
  flex:none;
  justify-content:flex-end;
}
</style>
