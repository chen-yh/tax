<template>
    <div>
       <brand></brand>
       <div class="bgwhite">
         <div class="bg-hui-info">
           <div class="path">
             <dl class="active">
               <dt>1</dt>
               <dd>单据上传及信息确认</dd>
             </dl>
             <dl class="active">
               <dt>2</dt>
               <dd>选择融资金额及期限</dd>
             </dl>
             <dl class="active">
               <dt>3</dt>
               <dd>确认融资</dd>
             </dl>
           </div>
         </div>
         <!--报关信息-->
         <h2 class="tit-hui">
           报关单信息
         </h2>
         <div class="company-info">
           <dl>
            <dt>合同号：</dt>
            <dd>{{taxAllInfo2.contract}}</dd>
           </dl>
           <dl>
            <dt>报关单号：</dt>
            <dd>{{taxAllInfo2.contract}}</dd>
           </dl>
           <dl>
            <dt>报关单金额：</dt>
            <dd>{{taxAllInfo2.declareSum}} 美元</dd>
           </dl>

          </div>
          <div class="company-info">
           <dl>
            <dt>海关放行状态：</dt>
            <dd>{{taxAllInfo2.passState}}</dd>
           </dl>
           <dl>
            <dt>出口申报日期：</dt>
            <dd>{{taxAllInfo2.declareTime | dateFormate}}</dd>
           </dl>
           <dl>
            <dt>委托出口企业名称：</dt>
            <dd>{{taxFactory.entName}} </dd>
           </dl>
          </div>
         <!--报关商品-->
         <h2 class="tit-hui">
           报关商品信息
         </h2>
           <div v-for="d in taxAllInfoAll.ProductList"  class="bg-hui-info">
             <div class="company-info">
               <dl>
                <dt>出口商品名称：</dt>
                <dd>{{d.name}}</dd>
               </dl>
               <dl>
                <dt>出口商品HS编码：</dt>
                <dd>{{d.hsNumber}}</dd>
               </dl>
               <dl>
                <dt>退税率：</dt>
                <dd>{{d.rate}}%</dd>
               </dl>
              </div>
              <div class="company-info">
               <dl>
                <dt>商品单价：</dt>
                <dd>{{d.price}} 美元</dd>
               </dl>
               <dl>
                <dt>商品数量：</dt>
                <dd>{{d.quantity}}</dd>
               </dl>
               <dl>
                <dt>商品总价：</dt>
                <dd>{{d.totalPrice}} 美元</dd>
               </dl>
              </div>
           </div>
         <!--结汇收汇信息-->
         <h2 class="tit-hui">
           结汇收汇信息
         </h2>
         <div class="company-info">
           <dl>
            <dt>结汇金额：</dt>
            <dd>{{taxAllInfo2.settlement}}元</dd>
           </dl>
           <dl>
            <dt>收汇金额：</dt>
            <dd>{{taxAllInfo2.earnings}} 美元</dd>
           </dl>
           <dl>
            <dt>退税总金额：</dt>
            <dd>{{taxAllInfo2.refundTax}} 元</dd>
           </dl>
         </div>
         <!--发票信息-->
         <h2 class="tit-hui">
           发票信息
         </h2>
         <div class="bg-hui-info">
            <div class="company-info" v-for="v in taxAllInfoAll.InvoiceInfoList">
             
             <dl>
              <dt>开票日期：</dt>
              <dd>{{v.createTime | dateFormate}}</dd>
             </dl>
             <dl>
              <dt>发票号码：</dt>
              <dd>{{v.invoiceNumber}}</dd>
             </dl>
             <dl>
              <dt>发票金额：</dt>
              <dd>{{v.invoiceMoney}}</dd>
             </dl>
            </div>
        </div>
        <div class="bg-hui-info">
            <div class="company-info">
              <dl>
              <dt>发票代码：</dt>
              <dd>{{taxAllInfo2.invoiceCode}}</dd>
             </dl>
              <dl>
              <dt>发票数量：</dt>
              <dd>{{taxAllInfo2.invoiceQuantity}}</dd>
             </dl>
             <dl>
              <dt>发票总金额：</dt>
              <dd>{{taxAllInfo2.totalInvoice}}</dd>
             </dl>
            </div>
          </div>
          <!--票据信息-->
         <h2 class="tit-hui">
           票据信息
         </h2>
         <div class="piaoju">
          <dl>
           <dt>报关单：</dt>
           <dd>
            <div class="pic1"><a :href="taxAllInfo2.customsDeclImg" target="_blank"><img :src="taxAllInfo2.customsDeclImg"></a></div>
            <!-- <div class="pic1"><img src="../../../assets/img/shuidan.png"></div>
            <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
              <div class="file-up2"><input type="file" name=""></div>
            </div> -->
            <upload-img @imgSrcP="imgSrc1"><slot>更改 点击上传</slot></upload-img>
           </dd>
          </dl>
          <dl>
           <dt>收汇凭证：</dt>
           <dd>
            <div class="pic2"><a :href="taxAllInfo2.earningsImg" target="_blank"><img :src="taxAllInfo2.earningsImg"></a></div>
            <!-- <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
              <div class="file-up2"><input type="file" name=""></div>
            </div> -->
            <upload-img @imgSrcP="imgSrc2"><slot>更改 点击上传</slot></upload-img>
           </dd>
          </dl>
          <dl>
           <dt>结汇凭证：</dt>
           <dd>
             <div class="pic2"><a :href="taxAllInfo2.transferImg" target="_blank"><img :src="taxAllInfo2.transferImg"></a></div>
            <!--<div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
              <div class="file-up2"><input type="file" name=""></div>
            </div> -->
            <upload-img @imgSrcP="imgSrc3"><slot>更改 点击上传</slot></upload-img>
           </dd>
          </dl>
          <dl>
           <dt>发票：</dt>
           <dd class="fapiao">
            <div class="pic3">
              <!-- <img :src="taxAllInfo2.receiptImg"> -->
              <span  v-for="i in receiptImgss">
                <a :href="i" target="_blank"><img :src="i"> </a><span class="del2"> X </span>
              </span>
            </div>
            <upload-img @imgSrcP="imgSrc4"><slot>更改 点击上传</slot></upload-img>
           </dd>
          </dl>
         </div>
         <div>
           <p>数据统计信息</p>
           <tables-tit-more :tablesData="applyData">
             <div slot="datas">
               <dd>
                 <div>
                  <span v-if="taxAllInfo2.financingProject==1">退税融资</span>
                </div>
                <div>{{taxAllInfo2.financing}} 元</div>
                <div>{{taxAllInfo2.loanPeriod}} 个月</div>
                <div>{{taxAllInfo2.rate}} %</div>
                <div>{{taxAllInfo2.createTime | dateFormate}}</div>
                <div>{{taxAllInfo2.costPlatform }} 元</div>

               </dd>
             </div>
           </tables-tit-more>
         </div>
         <div class="operate">
           <div class="btn-no" @click="goPrev()">上一步</div>
           <div class="btn-true" @click="goInfo()">提交并待财务审核</div>
         </div>
       </div>
    </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import uploadImg from '../../../components/base/uploadImg'
import tablesTitMore from '../../../components/common/tables-tit-more'
import {mapGetters} from 'vuex'
export default({
  data () {
    return {
      applyData: {
        data: [
          {title: '融资项目'},
          {title: '融资金额'},
          {title: '贷款周期'},
          {title: '利率'},
          {title: '融资申请时间'},
          {title: '平台服务费'}
        ],
        url: ''
      },
      taxAllInfo2: {},
      taxAllInfoAll: {},
      taxFactory: {},
      // imgsSrc1: '',
      // imgsSrc2: '',
      // imgsSrc3: '',
      // imgsSrc4: '',
      receiptImgss: [],
      receiptImg: {},
      imgsSrc4File: '',
      arr: []
    }
  },
  components: {
    brand,
    tablesTitMore,
    uploadImg
  },
  // computed: {
  //   ...mapGetters(['taxAllInfo2'])
  // },
  mounted () {
    this.getDatas()
    // 删除发票凭证
    let _this = this
    $('.pic3').delegate('span.del2', 'click', function () {
        let indexs = $('.pic3 span.del2').index(this)
        // _this.imgsSrc4File -= _this.imgsSrc4
        // console.log(';;;;', this.imgsSrc4File)
        // let arr = []
        // arr = this.imgsSrc4File.split(',')
        // console.log('....', arr)
        
        // arr.splice(index, 1)
        // console.log('lllll', arr)
        let arr = _this.receiptImgss
        // arr.splice(indexs, 1)
        $(this).prev().remove()
        $(this).remove()
       
       console.log('iii',_this.receiptImgss)
        
        // this.imgsSrc4File = arr.join(',')
        console.log('mmm', this.receiptImgss)
    })
    // 新增删除发票凭证
    $('.pic3').delegate('span.del', 'click', function () {
        console.log($('.pic3 span.del').index(this))
        let index = $('.pic3 span.del').index(this)
        // _this.imgsSrc4File -= _this.imgsSrc4
        console.log(';;;;', _this.imgsSrc4File)
        let arr = []
        arr = _this.imgsSrc4File.split(',')
        console.log('....', arr)
        
        // arr.splice(index, 1)
        console.log('lllll', arr)

        $(this).prev().remove()
        $(this).remove()
        
        _this.imgsSrc4File = arr.join(',')
        console.log('mmm', _this.imgsSrc4File)

    })
  },
  methods: {
    goPrev () {
      this.$router.push({
        name: 'outApplication2',
        query: {
          'id': this.taxAllInfo2.id,
          'financing': this.taxAllInfo2.refundTax,
          'tradeserviceId': this.taxAllInfo2.tradeserviceId
        }
      })

    },
    // 获取信息
    getDatas () {
      let _this = this
      this.$http.get('/api/refundapply/select/bycondition?id=' + this.$route.query.applyId)
        .then(res => {
          console.log('9999',res)
          if (res.data.status === 200 && res.data.refundApply && res.data.refundApply.receiptImg) {
            _this.taxAllInfoAll = res.data
            _this.taxAllInfo2 = res.data.refundApply
            _this.taxFactory = res.data.factoryInfo
            _this.receiptImg = _this.taxAllInfo2.receiptImg
            _this.receiptImgss = _this.receiptImg.split(',')
          }
        })
    },
    // 提交给财务
    goInfo () {
      let _this = this
      let params = {
        //融资申请id
        'id': this.$route.query.applyId,
        'customsDeclImg': this.taxAllInfo2.customsDeclImg,
        'earningsImg': this.taxAllInfo2.earningsImg,
        'transferImg': this.taxAllInfo2.transferImg,
        'receiptImg': this.imgsSrc4File?(this.taxAllInfo2.receiptImg + ',' +this.imgsSrc4File):this.taxAllInfo2.receiptImg
      }
      console.log(this.taxAllInfo2.receiptImg,'====',this.imgsSrc4File)
      // this.$http.get('/api/refund/putbytra?applyId='+ _this.$route.query.applyId)
      this.$http.post('/api/refund/putbytra?applyId', params)
        .then(res => {
          console.log('res.data', res.data)
          if (res.data.status == 200) {
            _this.$message({
              type: 'success',
              message: '恭喜您，退税融资申请成功!'
            })
            this.$router.push({name: 'taxRefund'})
          }
        })
    },
    // 获取local中的申请数据
    // getDatas () {
    //   this.taxAllInfo2 = JSON.parse(window.localStorage.getItem('taxAllInfo2'))
    //   console.log('this.taxAllInfo2', this.taxAllInfo2)
    // }
    // 上传付款水单
    imgSrc1 (_imgSrc) {
      this.taxAllInfo2.customsDeclImg = _imgSrc
    },
    // 上传收汇凭证
    imgSrc2 (_imgSrc) {
      this.taxAllInfo2.earningsImg = _imgSrc
    },
    // 上传结汇凭证
    imgSrc3 (_imgSrc) {
      this.taxAllInfo2.transferIm = _imgSrc
    },
    // 上传发票
    // imgSrc4 (_imgSrc) {
    //   this.taxAllInfo2.receiptImg = _imgSrc
    // }
    // 上传发票
    imgSrc4 (_imgSrc) {
      let _this = this
      this.imgsSrc4 = _imgSrc
      let src = `<img src="${this.imgsSrc4}"> <span class="del"> X </span>`
      console.log($('.pic3'))
      if ($('.pic3 img').attr('src') === '/static/img/def_7.png') {
        $('.pic3 img').remove()
        $('.pic3').append(src)
      } else {
        $('.pic3').append(src)
      }
      _this.arrss.push(this.imgsSrc4)
      this.imgsSrc4File = _this.arrss.join(',')
      console.log('ddddd', this.imgsSrc4File)
    },
    // 删除发票
    delFapiao () {
      let _this = this
      $('.add-fapiao').delegate('.icon-del', 'click', function () {
        $(this).parent().remove()
        _this.invoiceIndex = $(this).parent().index()
        // _this.invoiceIds.splice(_this.invoiceIndex, 1)
        // _this.invoiceIdsString = _this.invoiceIds.join(',')
        _this.arr.remove(index);
        _this.invoiceIdsString = _this.arr.join(',')
        console.log('_this.invoiceIdsString', _this.invoiceIdsString)
      })
    }
  }
})
</script>
<style type="text/css">
  @import '../../../assets/css/detail.css';
  .company-info dl dt{
    line-height: 35px;
  }
</style>
