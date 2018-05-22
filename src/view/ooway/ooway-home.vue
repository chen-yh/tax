<template>
 <div>
  <brand></brand>
      <div>
        <div class="bgwhite">
            <!--企业名称及授信额度-->
            <!---->
          <div class="tit">
            <h2>待审核企业入驻资料</h2>
          </div>
            <div class="homeData">
              <div>外综服企业最新入驻申请<span><router-link :to="{name: 'outCompanyList'}" class="link-blue">( {{count.tsize}} 笔 )</router-link></span></div>
              <div>出口企业最新入驻申请<span class="link-blue">( {{count.fsize}} 笔 )</span></div>
            </div>
        </div>
        <div class="bgwhite">
          <!--待业务部门处理融资申请-->
          <tables-tit-more :tablesData="repaymentTit">
           <div slot="tables-tit">待业务部门处理融资申请
             <span class="more" @click="goMoreRefund()" v-show="mainData">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData" class="pop-center">暂无数据</div>
           <div slot="datas"  class="link-blue" v-show="mainData">
             <dd v-for="(d,index) in data1" :key="index" @click="goPage(d.refundApply.id)">
               <div>{{d.refundApply.contract?d.refundApply.contract:'合同号'}}</div>
               <div>
                 <span v-if="d.refundApply.financingProject==1">退税融资</span>
               </div>
               <div>{{d.entName}}</div>
               <div>{{d.refundApply.financing}} 元</div>
               <div>{{d.refundApply.loanPeriod}} 个月</div>
               <div>{{d.refundApply.createTime | dateFormate}}</div>
             </dd>
           </div>
         </tables-tit-more>
         <!--待财务部门放款列表-->
         <tables-tit-more :tablesData="repaymentTit2">
           <div slot="tables-tit">待财务部门放款列表
             <span class="more" @click="goMoreLoan()" v-show="mainData2">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
           <div slot="datas"  class="link-blue" v-show="mainData2">
             <dd v-for="(d,index) in data2" :key="index" @click="goPage2(d,d.refundApply.id,d.refundApply.refundTax)">
               <div>{{d.refundApply.contract?d.refundApply.contract:'合同号'}}</div>
               <div>
                 <span v-if="d.refundApply.financingProject==1">退税融资</span>
               </div>
               <div>{{d.entName}}</div>
               <div>{{d.refundApply.financing}}  元</div>
               <div>{{d.refundApply.loanPeriod}} 个月</div>
               <div>{{d.refundApply.createTime | dateFormate}}</div>
               <div>{{d.monthBalance}} 元</div>
             </dd>
           </div>
         </tables-tit-more>
        <!--逾期还款列表-->
         <tables-tit-more :tablesData="overdueTit">
           <div slot="tables-tit">逾期还款列表
             <span class="more" @click="goMoreYuqi()" v-show="mainData3">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData3" class="pop-center">暂无数据</div>
           <div slot="datas"  class="link-blue" v-show="mainData3">
             <dd v-for="(d,index) in data3" :key="index" @click="goPage(d.repayment.applyId)">
              <!-- <div>{{d.contract}}</div> -->
               <div>
                 <span v-if="d.refundApply.financingProject==1">退税融资</span>
               </div>

               <div>{{d.entName}}</div>
               <div>{{d.expireTime | dateFormate}}</div>
               <div>{{d.overDays}} 天</div>
               <div>{{d.amount}} 元</div>
               <div>{{d.periodInterest}}</div>
               <div>{{d.periodInterest + d.overTimeInterest}}</div>
               <div>{{d.refundApply.costPlatform }} 元</div>
             </dd>
           </div>
         </tables-tit-more>
        <!--本周放款 / 还款汇总-->
         <tables-tit-more :tablesData="homeTit">
           <div slot="tables-tit">本周放款 / 还款汇总
             <span class="more" @click="goMore(2)" v-show="mainData4">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData4" class="pop-center">暂无数据</div>
           <div slot="datas"  class="link-blue" v-show="mainData4">
             <dd @click="goMore(2)">
               <div>
                 <span v-if="data4.financingProject==1">退税融资</span>
               </div>
               <div>{{data4.financingCount}} 笔</div>
               <div>{{data4.financingMoney}}  元</div>
               <div>{{data4.paymentCount}} 笔</div>
               <div>{{data4.inTimeCount}}</div>
               <div>{{data4.overTimeCount}}</div>
             </dd>
           </div>
         </tables-tit-more>
        <!--本月放款 / 还款汇总--> 
         <tables-tit-more :tablesData="homeTit">
           <div slot="tables-tit">本月放款 / 还款汇总
             <span class="more" @click="goMore(3)" v-show="mainData4">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData4" class="pop-center">暂无数据</div>
           <div slot="datas"  class="link-blue" v-show="mainData4">
             <dd @click="goMore(3)">
               <div>
                 <span v-if="data4.financingProject==1">退税融资</span>
               </div>
               <div>{{data5.financingCount}} 笔</div>
               <div>{{data5.financingMoney}} 元</div>
               <div>{{data5.paymentCount}} 笔</div>
               <div>{{data5.inTimeCount}}</div>
               <div>{{data5.overTimeCount}}</div>
             </dd>
           </div>
         </tables-tit-more>
         <!--本年放款 / 还款汇总-->
         <tables-tit-more :tablesData="homeTit">
           <div slot="tables-tit">本年放款 / 还款汇总
             <span class="more" @click="goMore(4)" v-show="mainData4">查看更多 ></span>
           </div>
           <div slot="datas"  v-show="popData4" class="pop-center">暂无数据</div>
           <div slot="datas"  class="link-blue" v-show="mainData4">
             <dd @click="goMore(4)">
               <div>
                 <span v-if="data4.financingProject==1">退税融资</span>
               </div>
               <div>{{data6.financingCount}} 笔</div>
               <div>{{data6.financingMoney}}  元</div>
               <div>{{data6.paymentCount}} 笔</div>
               <div>{{data6.inTimeCount}}</div>
               <div>{{data6.overTimeCount}}</div>
             </dd>
           </div>
         </tables-tit-more>
        </div>
      </div>
 </div>
</template>
<script type="text/javascript">
// 面包屑
import brand from '../../components/base/brand'
// 引用企业名称
import homeCompany from '../../components/common/home-company'
// 引用表格
import tablesTitMore from '../../components/common/tables-tit-more'
import {mapMutations} from 'vuex'
export default({
  data () {
    return {
      repaymentTit: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '融资企业'},
          {title: '融资金额'},
          {title: '融资周期'},
          {title: '融资申请日期'}
        ],
        url: 'loanDetailInfo'
      },
      repaymentTit2: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '融资企业'},
          {title: '融资金额'},
          {title: '融资周期'},
          {title: '融资申请日期'},
          {title: '剩余授信额度'}
        ],
        url: 'loanDetailInfo'
      },
      overdueTit: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '融资企业'},
          {title: '还款到期时间'},
          {title: '延迟天数'},
          {title: '本金'},
          {title: '期限内利息'},
          {title: '当前时间利息'},
          {title: '平台服务费'}
        ],
        url: 'loanDetailInfo'
      },
      homeTit: {
        data: [
          {title: '融资项目'},
          {title: '融资笔数'},
          {title: '融资金额'},
          {title: '已偿还(笔)'},
          {title: '融资未到期(笔)'},
          {title: '到期应还款(笔)'}
        ],
        url: 'loanDetailInfo'
      },
      // 笔数
      count: 0,
      ywApply: [],
      // 暂无数据
      popData: false,
      mainData: true,
      // 暂无数据
      popData2: false,
      mainData2: true,
      // 暂无数据
      popData3: false,
      mainData3: true,
      // 暂无数据
      popData4: false,
      mainData4: true,
      // 暂无数据
      popData5: false,
      mainData5: true,
      // 暂无数据
      popData6: false,
      mainData6: true,
      // 返回数据
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: []
    }
  },
  components: {
    homeCompany,
    tablesTitMore,
    brand
  },
  mounted () {
    // this.getMessageData ()
    this.getCount()
    this.datas1()
    this.datas2()
    this.datas3()
    this.datas4()
    this.datas5()
    this.datas6()
  },
  methods: {
    ...mapMutations({
      setLoanInfo: 'SET_LOANINFO'
    }),
    //登录判断
    getMessageData () {
      var _this = this
      var data = localStorage.getItem('oowayUserLoginMsg')
      console.log ('44444',data)
      if (data == null || data.length == 0) {
          _this.$router.push({path: '/'})
      }
    },
    // 获取入驻申请笔数接口
    getCount () {
      this.$http.get('/api/ooway/index/apply')
        .then(res => {
          this.count = res.data
        })
    },
    // 获取待业务部处理的融资申请接口
    datas1 () {
      let _this = this
      this.$http.get('/api/ooway/refundapply/factory/select?verifyObj=2&&verifyState=1')
        .then(res => {
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
            this.data1 = res.data.result.rows
          } else {
            _this.popData = true
            _this.mainData = false
          }
        })
    },
    // 待放款
    datas2 () {
      let _this = this
      this.$http.get('/api/ooway/loan/refundapply/select')
        .then(res => {
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
            _this.data2 = res.data.result.rows
          } else{
            _this.popData2 = true
            _this.mainData2 = false
          }
        })
    },
    // 逾期还款
    datas3 () {
      let _this = this
      this.$http.get('/api/ooway/index/overduerepply')
        .then(res => {
          // console.log('逾期', res)
          if (res.data.status === 200 && res.data.result.rows.length > 0) {
            _this.data3 = res.data.result.rows
          } else{
            _this.popData3 = true
            _this.mainData3 = false
          }
        })
    },
    // 本周放款还款
    datas4 () {
      let _this = this
      this.$http.get('/api/ooway/index/loanrepaymentsummary?searchTime=2')
        .then(res => {
          // console.log('放款', res)
          if (res.data.status === 200) {
            _this.data4 = res.data.result
          } else{
            _this.popData4 = true
            _this.mainData4 = false
          }
        })
    },
    // 本月放款还款
    datas5 () {
      let _this = this
      this.$http.get('/api/ooway/index/loanrepaymentsummary?searchTime=3')
        .then(res => {
          // console.log(res)
          if (res.data.status === 200) {
            this.data5 = res.data.result
          } else{
            _this.popData5 = true
            _this.mainData5 = false
          }
        })
    },
    // 本年放款还款
    datas6 () {
      let _this = this
      this.$http.get('/api/ooway/index/loanrepaymentsummary?searchTime=4')
        .then(res => {
          // console.log(res)
          if (res.data.status === 200) {
            this.data6 = res.data.result
          } else{
            _this.popData6 = true
            _this.mainData6 = false
          }
        })
    },
    // 跳转页面
    goPage (_id) {
      this.$router.push({
         name: 'outTaxInfo',
         query: {
          'id': _id
         }
      })
    },
    // 待放款
    goPage2 (d, _id, _num) {
      this.setLoanInfo(d)
      console.log('aaaa',d.refundApply.tradeserviceId)
      this.$router.push({
        name: 'goLoan',
        query: {
          'id': _id,
          'num': _num,
          'tradeserviceId': d.refundApply.tradeserviceId
        }
      })
    },
    // 进入逾期更多页面
    goMoreYuqi () {
      this.$router.push({
        name: 'oLoanDetail',
        query: {
          'overdueState': 1
        }
      })
    },
    // 待业务部门审核融资申请
    goMoreRefund () {
      this.$router.push({
        name: 'outTaxList',
        query: {
          'verifyState': 1
        }
      })
    },
    // 待放款列表 
    // 进入更多页面
    goMoreLoan () {
      this.$router.push({
        name: 'loanList'
      })
    },
    // 进入本周本月本年更多页面
    goMore (_num) {
      this.$router.push({
        name: 'oLoanDetail',
        query: {
          'searchTime': _num
        }
      })
    },
  }
})
</script>
