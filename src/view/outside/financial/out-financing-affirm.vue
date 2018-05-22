<template>
    <div>
       <brand>退税融资申请</brand>
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
            <dd>{{taxAllInfo2.customsDecl}}</dd>
           </dl>
           <dl>
            <dt>报关单金额：</dt>
            <dd>{{taxAllInfo2.declareSum}}</dd>
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
           <div v-for="d in taxAllInfoAll.products"  class="bg-hui-info">
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
                <dd>{{d.price}}</dd>
               </dl>
               <dl>
                <dt>商品数量：</dt>
                <dd>{{d.quantity}}</dd>
               </dl>
               <dl>
                <dt>商品总价：</dt>
                <dd>{{d.totalPrice}}</dd>
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
            <dd>{{taxAllInfo2.settlement}}</dd>
           </dl>
           <dl>
            <dt>收汇金额：</dt>
            <dd>{{taxAllInfo2.earnings}}</dd>
           </dl>
           <dl>
            <dt>退税总金额：</dt>
            <dd>{{taxAllInfo2.refundTax}}</dd>
           </dl>
         </div>
        <!--发票信息-->
         <h2 class="tit-hui">
           发票信息
         </h2>
         <div class="bg-hui-info">
            <div class="company-info" v-for="v in taxAllInfoAll.invoiceInfos
">
             
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
            <div class="pic1"><img :src="taxAllInfo2.customsDeclImg"></div>
            <!-- <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
            </div> -->
            <upload-img @imgSrcP="imgSrc1"><slot>更改 点击上传</slot></upload-img>
           </dd>
          </dl>
          <dl>
           <dt>收汇凭证：</dt>
           <dd>
            <div class="pic2"><img :src="taxAllInfo2.earningsImg"></div>
            <!-- <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
            </div> -->
            <upload-img @imgSrcP="imgSrc2"><slot>更改 点击上传</slot></upload-img>
           </dd>
          </dl>
          <dl>
           <dt>结汇凭证：</dt>
           <dd>
            <div class="pic2"><img :src="taxAllInfo2.transferImg"></div>
            <!-- <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
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
                <img :src="i"> <span class="del2"> X </span>
              </span>
            </div>
            <!-- <div class="btn-file" style="margin-top:30px;">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
            </div> -->
            <upload-img @imgSrcP="imgSrc4"><slot>更改 点击上传</slot></upload-img>
           </dd>
          </dl>
         </div>
         <div>
           <p>数据统计信息</p>
           <tables-tit-more :tablesData="applyData">
             <div slot="datas">
               <dd>
                <div>{{taxAllInfo2.contract}}</div>
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
           <button class="btn-true" @click="submitOoway">提交</button>
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
      applyData: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          // {title: '出口企业'},
          {title: '融资金额'},
          {title: '贷款周期'},
          {title: '贷款利率'},
          {title: '融资申请时间'},
          {title: '平台服务费'}
        ],
        url: ''
      },
      // 获取数据
      taxAllInfo2: {},
      taxAllInfoAll: {},
      taxFactory: {},
      receiptImgss: [],
      receiptImg: {},
      arrss: []
      // imgsSrc1: '',
      // imgsSrc2: '',
      // imgsSrc3: '',
      // imgsSrc4: ''
    }
  },
  components: {
    brand,
    uploadImg,
    tablesTitMore
  },
  mounted () {
    this.getDefaultDatas()
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
    getDefaultDatas () {
      let _this = this
      let applyId = this.$route.query.applyId
      this.$http.get('/api/financ/detail/one?applyId=' + applyId)
        .then(res => {
          console.log('融资确认详情', res.data)
          _this.taxAllInfoAll = res.data.result
          _this.taxAllInfo2 = res.data.result.refundApply
          _this.taxFactory = res.data.result.factoryInfo
          _this.receiptImg = _this.taxAllInfo2.receiptImg
          _this.receiptImgss = _this.receiptImg.split(',')
        })
    },
    // 财务提交给大路平台
    submitOoway () {
      let params = {
        //融资申请id
        'id': this.$route.query.applyId,
        'customsDeclImg': this.taxAllInfo2.customsDeclImg,
        'earningsImg': this.taxAllInfo2.earningsImg,
        'transferImg': this.taxAllInfo2.transferImg,
        'receiptImg': this.taxAllInfo2.receiptImg
      }
      let _this = this
      this.$http.post('/api/financ/confirm/put', params)
        .then(res => {
          console.log('res.data', res.data)
          if (res.data.status == 200) {
            _this.$message({
              type: 'success',
              message: '恭喜您，退税融资申请成功!'
            })
            this.$router.push({name: 'financingAffirmList'})
          }
        })
    },
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
      this.taxAllInfo2.transferImg = _imgSrc
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
    line-height: 34px;
   }
</style>
