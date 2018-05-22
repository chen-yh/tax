<template>
 <div class="detail">
  <brand></brand>
  <div class="bgwhite">
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="dRepayData">
      <div slot="tables-tit">放款操作</div>
      <div slot="datas">
        <dd>
          <div>{{loanInfo.refundApply.contract}}</div>
          <div>
            <span v-if="loanInfo.refundApply.financingProject==1">退税融资</span>
          </div>
          <div>{{loanInfo.entName}}</div>
          <div>{{loanInfo.refundApply.financing}}  元</div>
          <div>{{loanInfo.refundApply.loanPeriod}} 个月</div>
          <div>{{loanInfo.refundApply.createTime | dateFormate}}</div>
          <div>{{loanInfo.refundApply.costPlatform }} 元</div>
        </dd>
      </div>
    </tables-tit-more>
    <div class="bg-hui-info">
      <div class="company-info">
       <dl>
        <dt>放款金额：</dt>
        <dd><span class="orange"><input type="text" value="500" v-model="amount" class="money-int"> 元</span></dd>
       </dl>
       <dl>
        <dt>放款日期：</dt>
        <dd><input type="date" name="" v-model="loanTime"></dd>
       </dl>
      </div>
      <div class="company-info">
       <dl style="width:500px; margin-top:20px;">
        <dt style="width:241px;">放款方式：</dt>
        <dd class="label-mr20 loanMain">
          <label style="margin-right:150px;">
            <input type="radio" name="" v-model="loanType" value="0">
            平台放款给外综服
          </label>
          <label>
            <input type="radio" name="" v-model="loanType" value="1">
            银行放款给外综服
          </label>
        </dd>
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
            <a :href="imgsSrc?imgsSrc:'/static/img/def_8.png'" target="_blank"><img :src="imgsSrc || '/static/img/def_8.png'"></a>
          </div>
          <!-- <div class="btn-file" >
            <div class="btn-orange btn-zi-big float-right">点击上传付款水单</div>
            <p>图片格式要求：jpg/png/pdf</p>
          </div> -->
          <upload-img @imgSrcP="imgSrc"><slot>点击上传付款水单</slot></upload-img>
         </dd>
        </dl>
      </div>
      <div class="operate">
        <div class="btn-zi btn-zi-big float-right" @click="goLoan()">放 款</div>
      </div>
    </div>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import uploadImg from '../../../components/base/uploadImg'
import tablesTitMore from '../../../components/common/tables-tit-more'
import {mapGetters} from 'vuex'
import $ from 'jquery'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '委托企业'},
          {title: '融资金额'},
          {title: '贷款周期'},
          {title: '贷款申请时间'},
          {title: '平台服务费'}
        ],
        url: ''
      },
      amount: this.$route.query.num || 0,
      loanType: 0,
      loanTime: '',
      platformLoan: 0,
      bankLoan: 0,
      imgsSrc: ''

    }
  },
  computed: {
    ...mapGetters(['loanInfo'])
  },
  watch: {
    loanType: (val, oldVal) => {
      console.log(typeof val)
      if(val === '0') {
        this.platformLoan = $('.loanMain input.loans').eq(0).val()
        console.log('this.platformLoan11', this.platformLoan)
      } else {
        this.bankLoan = $('.loanMain input.loans').eq(1).val()
      }
    }
  },
  components: {
    brand,
    uploadImg,
    tablesTitMore
  },
  mounted () {
    console.log('loan', this.loanInfo)
  },
  methods: {
    goLoan () {
      let _this = this
      let params = {
          'loan': {
            "applyId": this.$route.query.id,
            'amount': this.amount,
            'loanTime': this.loanTime,
            'loanType': this.loanType,
            // 'bankLoan': this.bankLoa
            'loanImg': this.imgsSrc
          },
          "tradeCompanyId": this.$route.query.tradeserviceId,
      }
      if (this.amount !== '' && this.loanTime !== '' && this.imgsSrc !== '') {
        this.$http.post('/api/ooway/loan/add', params)
        .then(res => {
          if (res.data.status === 200) {
            _this.$message({
              type: 'success',
              message: '放款成功!'
            })
            this.loanInof = res.data
            this.$router.push({
              name: 'loanList'
            })
          } else {
            _this.$alert(res.data.msg, '提示框', {
              confirmButtonText: '确定'
            })
          }
        })
      } else {
        _this.$alert('日期不能为空或水单不能为空', '提示框', {
          confirmButtonText: '确定'
        })
      }
    },
     // 上传水单
    imgSrc (_imgSrc) {
      this.imgsSrc = _imgSrc
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
