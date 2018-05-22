<template>
 <div>
  <brand :menuName="menuName1"></brand>
      <div>
        <div class="bgwhite">
          <div><span class="bold">{{companyInfo.entName}}</span> 欢迎回来</div>
          <div class="bg-hui-info" v-if="state==9" v-cloak>
            需要<span class="blueCursor point" @click="goPage()">认证并完善企业信息</span>后，大路平台进行审核，审核成功后即可享受您应用的特权。
          </div>
          <div class="bg-hui-info" v-if="state==0" v-cloak>
            <span class="red">正在认证中，认证需要1-2个工作日完成，请奈心等待……</span>
          </div>
          <div class="bg-hui-info" v-if="state==2" v-cloak>
            <span class="red">抱歉，未认证通过，请重新认证并完善公司信息</span>
            <p>未通过原因：<span class="red">{{reason}}</span></p>
          </div>
          <!--企业名称及授信额度-->
          <home-company v-if="state==1" :companyName="companyName">
            <div class="company-name">
                <dl>
                    <dt><span><i class="cirecle"></i> 您的授信额度上限：</span>{{creditData.yearLimit || 0
}}人民币</dt>
                    <dd><span>已使用：</span>{{usedYearData || 0}} 元人民币</dd>
                </dl>
                <dl>
                    <dt><span><i class="cirecle"></i> 您的本月授信额度上限：</span>{{creditData.monthLimit || 0
}} 人民币</dt>
                    <dd><span>已使用：</span>{{usedMonthData || 0}} 元人民币</dd>
                </dl>
                <dl>
                    <dt><span><i class="cirecle"></i> 退税融资共管账户：</span>{{creditData.coCount || ''}} </dt>
                    <dd><span>已缴纳保证金：</span>{{wValue || 0}}元人民币</dd>
                </dl>
            </div>
          </home-company>
          <!---->
        </div>
        <div class="bgwhite" v-if="state==1"  style="width:96%; overflow:auto">
            <tables-tit-more :tablesData="repaymentTit" class="w160" style="width:100%;">
                <div slot="tables-tit">还款待平台确认
                    <span class="more" @click="goDaiMore()">查看更多 ></span></div>
                     <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
                    <dd slot="datas" v-for="d in repaymentDatas"  class="link-blue" v-if="mainData2">
                      <!--合同号-->
                      <div>{{d.refundApply.contract}}</div>
                      <div>
                        <span v-if="d.refundApply.financingProject==1">退税融资</span>
                        <span v-if="d.refundApply.financingProject==2">结汇融资</span>
                        <span v-if="d.refundApply.financingProject==3">信保融资</span>
                      </div>
                      <!--委托企业名称-->
                      <div>{{d.factoryInfo.entName}}</div>
                      <!--出口金额-->
                      <div>{{d.refundApply.declareSum || 0}} 元</div>
                      <!--融资金额-->
                      <div>{{d.refundApply.financing || 0}} 元</div>
                      <!--贷款周期-->
                      <div>{{d.refundApply.loanPeriod}} 个月</div>
                      <!--贷款开始时间-->
                      <div>{{d.loan.loanTime | dateFormate}}</div>
                      <!--贷款到期时间-->
                      <div>{{d.loan.expireTime | dateFormate}}</div>
                      <!--还款状态-->
                      <div>
                        <span v-if="d.refundApply.repayState==0">未还</span>
                        <span v-if="d.refundApply.repayState==1">完成还款</span>
                        <span v-if="d.refundApply.repayState==2">未还清</span>
                        <span v-if="d.refundApply.repayState==3">已还未确认</span>
                      </div>
                      <!--还款倒计时-->
                      <div>{{d.deadDays}} 天</div>
                      <!--平台服务费-->
                      <div>{{d.serverCost }} 元</div>
                    </dd>
            </tables-tit-more>
            <tables-tit-more :tablesData="homeTit">
                <div slot="tables-tit">本周融资 / 还款汇总
                    <span class="more" @click="goMore(3)"> 查看更多 > </span>
                </div>
                <dd slot="datas" @click="goMore(3)" class="link-blue">
                  <div>
                    <span v-if="financGatherW.financingProject==1">退税融资</span></div>
                  <!--融资笔数-->
                  <div>{{financGatherW.financNum}} 笔</div>
                  <!--融资金额-->
                  <div>{{financGatherW.financSum || 0}} 元</div>
                  <!--还款笔数-->
                  <div>{{financGatherW.repayNum}} 笔</div>
                  <!--还款金额-->
                  <div>{{financGatherW.expireNum || 0}} 元</div>
                  <!--到期应还款笔数-->
                  <div>{{financGatherW.financNum}} 笔</div>
                  <!--到期应还金额-->
                  <div>{{financGatherW.financSum || 0}} 元</div>
                  <!--逾期还款笔数-->
                  <div>{{financGatherW.overdueNum}} 笔</div>
                  <!--逾期还款金额-->
                  <div>{{financGatherW.overdueSum || 0}} 元</div>
                </dd>
            </tables-tit-more>
            <tables-tit-more :tablesData="homeTit">
                <div slot="tables-tit">本月融资 / 还款汇总
                    <span class="more"  @click="goMore(4)">查看更多 ></span>
                </div>
                <dd slot="datas" @click="goMore(4)" class="link-blue">
                  <div>
                    <span v-if="financGatherM.financingProject==1">退税融资</span></div>
                  <!--融资笔数-->
                  <div>{{financGatherM.financNum}} 笔</div>
                  <!--融资金额-->
                  <div>{{financGatherM.financSum || 0}} 元</div>
                  <!--还款笔数-->
                  <div>{{financGatherM.repayNum}} 笔</div>
                  <!--还款金额-->
                  <div>{{financGatherM.expireNum || 0}} 元</div>
                  <!--到期应还款笔数-->
                  <div>{{financGatherM.financNum}} 笔</div>
                  <!--到期应还金额-->
                  <div>{{financGatherM.financSum || 0}} 元</div>
                  <!--逾期还款笔数-->
                  <div>{{financGatherM.overdueNum}} 笔</div>
                  <!--逾期还款金额-->
                  <div>{{financGatherM.overdueSum || 0}} 元</div>
                </dd>
            </tables-tit-more>
            <tables-tit-more :tablesData="homeTit">
                <div slot="tables-tit">本年融资 / 还款汇总
                    <span class="more" @click="goMore(5)">查看更多 ></span>
                </div>
                <dd slot="datas" @click="goMore(5)" class="link-blue">
                  <div>
                    <span v-if="financGatherY.financingProject==1">退税融资</span></div>
                  <!--融资笔数-->
                  <div>{{financGatherY.financNum}} 笔</div>
                  <!--融资金额-->
                  <div>{{financGatherY.financSum || 0}} 元</div>
                  <!--还款笔数-->
                  <div>{{financGatherY.repayNum}} 笔</div>
                  <!--还款金额-->
                  <div>{{financGatherY.expireNum || 0}} 元</div>
                  <!--到期应还款笔数-->
                  <div>{{financGatherY.financNum}} 笔</div>
                  <!--到期应还金额-->
                  <div>{{financGatherY.financSum || 0}} 元</div>
                  <!--逾期还款笔数-->
                  <div>{{financGatherY.overdueNum}} 笔</div>
                  <!--逾期还款金额-->
                  <div>{{financGatherY.overdueSum || 0}} 元</div>
                </dd>
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
export default({
  data () {
    return {
      // 选中的菜单名称
      menuName1: '',
      repaymentTit: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '委托企业名称'},
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '贷款周期'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '还款状态'},
          {title: '还款倒计时'},
          {title: '平台服务费'}
        ],
        url: 'loanDetailInfo'
      },
      homeTit: {
        data: [
          {title: '融资项目'},
          {title: '融资笔数'},
          {title: '融资金额'},
          {title: '已还款'},
          {title: '还款金额'},
          {title: '到期应还笔数'},
          {title: '到期应还金额'},
          {title: '逾期还款笔数'},
          {title: '逾期还款金额'}
        ],
        url: 'loanDetailInfo'
      },
      // 授信额度
      creditData: {},
      // 已使用额度
      usedYearData: 0,
      usedMonthData: 0,
      // 担保额
      wValue: 0,
      // 待还款数据
      repaymentDatas: [],
      // 本周汇总数据
      financGatherW: {},
      // 本月汇总数据
      financGatherM: {},
      // 本年汇总数据
      financGatherY: {},
      // 企业是否认证
      entinfoId: 0,
      // 企业信息状态
      state: 'pp',
      // 未通过原因
      reason: '',
      companyInfo: {},
      onece: true,
      // 外综服id
      trandId: '',
      // 公司名称
      companyName: '',
      // 暂无数据
      popData2: false,
      mainData2: true
    }
  },
  components: {
    homeCompany,
    tablesTitMore,
    brand
  },
  watch: {
    state: function (val, oldVal) {
      this.state = val
    }
  },
  mounted () {
    let _this = this
    this.getDatas()
    this.getCompany()
    this.onece = this.state!=0&&this.state!=1&&this.state!=2&&this.state!==3
    console.log('this.onece', this.onece)
    // this.getMessageData()
  },
  methods: {
    // getMessageData () {
    //   var _this = this
    //   var data = localStorage.getItem('outsideUserLoginMsg')
    //   if (data == null) {
    //       _this.$router.push({path: '/'})
    //   }
    // },
    // 获取公司信息
    getCompany () {
      let _this = this
      this.$http.get('/api/tradecompany/findOne')
        .then(res => {
          // console.log('uyyyyyyyy',res.data)
          if (res.data.status === 200 && res.data.result) {
            _this.companyInfo = res.data.result.companyInfo
            _this.state = res.data.result.companyInfo.status
            _this.trandId = res.data.result.companyInfo.id
            _this.companyName = res.data.result.companyInfo.entName
            console.log('_this.state', _this.state)
          } else {
            _this.state = 9
          }
        })
    },
    // 获取授信额度
    getDatas () {
      var _this = this
      // 1、请求授信额度接口
      this.$http.get('/api/tradecompany/credit/detail?trandId' + _this.trandId)
        .then(function (res) {
          if (res.data.status === 200 && res.data.result) {
              console.log('授信额度', res.data.result)
              _this.creditData = res.data.result
              // 年使用额度
              _this.usedYearData = parseInt(_this.creditData.yearLimit) - parseInt(_this.creditData.yearBalance)
              // 月使用额度
              _this.usedMonthData = parseInt(_this.creditData.monthLimit) - parseInt(_this.creditData.monthBalance)
          }
      }).catch(function (error) {
        console.log(error)
      })
      // 2、请求担保方式接口
      this.$http.post('/api/tradecompany/warrant/detail', {})
        .then(function (res) {
          _this.wValue = res.data.result[0].warrantValue
        }).catch(function (error) {
          console.log(error)
        })
      // 3、请求还款待平台确认接口
      this.$http.get('/api/tradecompany/detail/list?repayStatus=3&&page=1&&loanStatus=2')
        .then(function (res) {
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
            _this.repaymentDatas = res.data.result.rows
            console.log('mmmmm', _this.repaymentDatas)
          } else {
            _this.popData2 = true
            _this.mainData2 = false
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      // 4、请求本周本月本年还款数据接口
      this.$http.post('/api/tradecompany/financ/gather', {loanTime: 3})
        .then(function (res) {
          _this.financGatherW = res.data.result
          // console.log('fffff', res.data.result)
        })
        .catch(function (error) {
          console.log(error)
        })
      // 4、请求本周本月本年还款数据接口
      this.$http.post('/api/tradecompany/financ/gather', {loanTime: 4})
        .then(function (res) {
          _this.financGatherM = res.data.result
          // console.log('fffff', res.data.result)
        })
        .catch(function (error) {
          console.log(error)
        })
      // 4、请求本周本月本年还款数据接口
      this.$http.post('/api/tradecompany/financ/gather', {loanTime: 5})
        .then(function (res) {
          _this.financGatherY = res.data.result
          // console.log('fffff', res.data.result)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 还款待平台确认
    goDaiMore () {
      this.$router.push({
        name: 'outLoanDetail',
        query: {
          'refundStatus': 3
        }
      })
    },
    goPage () {
      this.$router.push({
        name: 'outCompanyEdit'
      })
    },
    //登录判断
    getMessageData () {
      var _this = this
      var data = localStorage.getItem('outsideUserLoginMsg')
      // console.log ('11144444',data)
      if (data == null) {
          _this.$router.push({path: '/'})
      }
    },
    goMore (_time) {
      this.$router.push({
        name: 'outLoanDetail',
        query: {
          'loanTime': _time
        }
      })
    }
  },
  filters: {
    dateFormate (_date) {
      let date2 = new Date(_date)
      let y1 = date2.getFullYear()
      // 获取完整的年份4位, 1970 - ????
      let m1 = date2.getMonth() + 1
      // 获取当前月份( 0 - 11, 0代表1月 )
      // 所以获取当前月份是myDate.getMonth () + 1
      let d1 = date2.getDate()
      // 获取当前日1 31
      let dateM = y1 + '-' + m1 + '-' + d1
      return dateM
    }
  }
})
</script>
<style type="text/css">
  @import '../../assets/css/common.css';
  .more{
    cursor: pointer;
  }
  .more:hover{
    color:#287df2;
  }
</style>
