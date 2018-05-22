<template>
 <div class="detail">
  <brand><router-link to="/"></router-link></brand>
  <div class="bgwhite">
    <!--贷款还款明细-->
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="dRepayData">
      <div slot="tables-tit">待还款列表
      </div>
      <div slot="datas"  v-show="dpopData" class="pop-center">暂无数据</div>
      <div slot="datas" v-for="(r,index) in repayDatas" :key="index" v-show="dmainData" id="tables">
        <dd @click="goRefund(r.refundApply.id)" class="link-blue">
          <div>{{r.refundApply.contract}}</div>
          <div>
            <span v-if="r.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{r.factoryInfo.entName}}</div>
          <div>${{r.refundApply.declareSum}}美元</div>
          <div>{{r.refundApply.financing}}元</div>
          <div>{{r.loan.amount}}元</div>
          <div>{{r.refundApply.remainPayments}}元</div>
          <div>{{r.refundApply.loanPeriod}}个月</div>
          <div>{{r.loan.loanTime | dateFormate}}</div>
          <div>{{r.loan.expireTime | dateFormate}}</div>
          <div>
            <span v-if="r.refundApply.repayState==0" class="red">未还</span>
            <span v-if="r.refundApply.repayState==1" class="red" >完成还款</span>
            <span v-if="r.refundApply.repayState==2" class="red">未还清</span>
            <span v-if="r.refundApply.repayState==3" class="red">已还未确认</span>
          </div>
          <div>{{r.deadDays}} 天</div>
          <div>{{r.serverCost }} 元</div>
        </dd>
      </div>
    </tables-tit-more>
    <div class="bg-hui-info">
      <div class="company-info">
       <dl>
        <dt>还款金额：</dt>
        <dd><span class="big-orange"><input type="text" v-model="money"> 元</span></dd>
       </dl>
       <dl>
        <dt>还款日期：</dt>
        <dd><input type="date" name="" v-model="repayTime"></dd>
       </dl>
      </div>
    </div>
    </div>
    <div class="bgwhite">
      <div class="piaoju">
        <dl>
         <dt>提交银行付款水单：</dt>
         <dd>
          <div class="pic1 pic-big1">
            <a :href="imgsSrc" target="_blank">
              <img :src="imgsSrc">
            </a>
          </div>
          <!-- <div class="btn-file" style="margin-top:-160px">
            <div class="btn-zi-big float-right btn-orange">点击上传付款水单</div>
            <p>图片格式要求：jpg/png/pdf</p>
          </div> -->
          <upload-img @imgSrcP="imgSrc"><slot>点击上传付款水单</slot></upload-img>
         </dd>
        </dl>
      </div>
      <div class="operate">
        <div class="btn-zi btn-zi-big float-right" @click="repayOper()">还 款</div>
      </div>
    </div>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import uploadImg from '../../../components/base/uploadImg'
import tablesTitMore from '../../../components/common/tables-tit-more'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: '合同号'},
          {title: '委托企业'},
          {title: '融资项目'},
          {title: '出口金额'},
          {title: '融资金额'},
          {title: '放款金额'},
          {title: '剩余还款'},
          {title: '贷款周期'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '还款状态'},
          {title: '还款倒计时'},
          {title: '平台服务费'}
        ],
        url: ''
      },
      repayOperate: '',
       // 还款待确认提示无数据
      popData: false,
      // 还款待确认主要数据
      mainData: true,
      // 待还款的提示无数据
      dpopData: false,
      // 待还款主要数据
      dmainData: true,
      repayDatas: [],
      paymentImg: '',
      applyIds: '',
      applyIdsArr: [],
      repayTime: '',
      money: this.$route.query.amount || 0,
      imgsSrc: ''
    }
  },
  components: {
    brand,
    uploadImg,
    tablesTitMore
  },
  mounted () {
    this.getRepay()
  },
  methods: {
    // 获取选中的还款记录列表
    getRepay () {
      let _this = this
      this.$http.get('/api/repayment/repay/list?amount=' + this.$route.query.amount + 
          '&&loanIds=' + this.$route.query.loanIds)
        .then(res => {
          console.log(res.data)
          _this.repayDatas = res.data.result
          _this.paymentImg = res.data.result[0].paymentImg
          // 获取id
          _this.repayDatas.forEach(function(item, index) {
            console.log('5555', item.loan.applyId)
            _this.applyIdsArr.push(item.loan.applyId)
            _this.applyIds = _this.applyIdsArr.join(',')
          })
          // console.log('yyuuuuuuuuu', _this.repayDatas)
          //   console.log('*****', _this.repayDatas.applyId)
          //   _this.applyIdsArr.push(item.applyId)
          //   _this.applyIds = _this.applyIdsArr.join(',')
          // console.log('uyyy', _this.applyIds)
        })
    },
    // 获取id
    getId () {
      this.repayDatas.forEach(function (item, index) {
        this.applyIdsArr.push(item.applyId)
        this.applyIds = this.applyIdsArr.join(',')
      })
      console.log('uyyy', this.applyIds)
      return this.applyIds
    },
    // 还款操作成功接口
    repayOper () {
      let _this = this
      let params = {
        'amount': this.money,
        'applyId': this.applyIds,
        'paymentImg': this.imgsSrc,
        'repayTime': this.repayTime
      }
      if (this.money !== '' && this.imgsSrc !== '' && this.repayTime !== '') {
        this.$http.post('/api/repayment/goRepay', params)
        .then(res => {
          console.log('还款操作', res)
          if (res.data.status === 200) {
            _this.$router.push({
              name: 'outRepayment'
            })
            _this.$message({
              dangerouslyUseHTMLString: true,
              message: res.data.msg
            })
          }
        })
      } else {
        _this.$alert('还款金额不能为空或还款日期不能为空或水单不能为空', '提示框', {
          confirmButtonText: '确定'
        })
      }
    },
    // 上传付款水单
    imgSrc (_imgSrc) {
      this.imgsSrc = _imgSrc
    },
    // 
    goRefund (_id) {
      this.$router.push({
        name: 'outApplicationInfo',
        query: {
          'id': _id
        }
      })
    }
  }
})
</script>
<style type="text/css">
 @import '../../../assets/css/detail.css';
.company-info dl dt{
  font-weight:bold;
  font-size:16px;
}
.pic1.pic-big1 img{
  width:400px;
}
</style>
