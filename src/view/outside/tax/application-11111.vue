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
             <dl>
               <dt>2</dt>
               <dd>选择融资金额及期限</dd>
             </dl>
             <dl>
               <dt>3</dt>
               <dd>确认融资</dd>
             </dl>
           </div>
           <div class="pop">
            <span>
              您年授信额度：{{credit?credit.yearLimit:0}} 
            </span>
            <span>
              您本月授信额度：{{credit?credit.monthLimit:0}} 
            </span>
            <span>
              可使用最大融资额：{{credit?credit.monthBalance:0}} 
            </span>
            <p>为确保融资正常，请及时去银行交纳保证金，提高授信额度。</p>
           </div>
         </div>
         <!--报关信息-->
         <h2 class="tit-hui">
           报关单信息
         </h2>
         <div class="goods-form">
           <div class="company-info">
             <dl>
               <dt><span class="red">*</span> 合同号：</dt>
               <dd><input type="text" name="" v-model="contract" @focus="textFocus()">
               <div>
                 <span v-if="contract==''">不能为空</span>
               </div>
               </dd>
             </dl>
             <dl>
               <dt><span class="red">*</span> 报关单号：</dt>
               <dd><input type="text" name="" v-model="customsDecl">
                 <div>
                   <span v-if="customsDecl==''">不能为空</span>
                 </div>
               </dd>
             </dl>
           </div>
           <div class="company-info">
             <dl>
               <dt><span class="red">*</span> 海关放行状态：</dt>
               <dd><input type="text" name="" v-model="passState">
                <div>
                   <span v-if="passState==''">不能为空</span>
                 </div>
               </dd>
             </dl>
             <dl>
               <dt><span class="red">*</span> 出口申报日期：</dt>
               <dd><input type="date" name="" v-model="declareTime">
                <div>
                   <span v-if="declareTime==''">不能为空</span>
                 </div>
               </dd>
             </dl>
           </div>
           <div class="company-info">
            <dl>
               <dt><span class="red">*</span> <label><input type="radio" v-model="userType" name="userType" value="0" style="width:auto"> 平台推荐出口企业：</label></dt>
               <dd>
                <select v-model="loanEntName">
                  <option value="0">请选择平台推荐</option>
                  <option v-for="s in factoryAll" :value="s.id">{{s.entName}}</option>
                   <!-- @change="changeFactory()" -->
                </select>
                <span @click="goHome()" class="textUser">{{textUser1}}</span>
              </dd>
             </dl>
             <dl>
               <dt><span class="red">*</span> 报关单金额：</dt>
               <dd><input type="text" name="" v-model="declareSum" style="width:115px;"> 美元<span ></span>
                <div>
                  <span v-if="!/^[0-9].*$/.test(declareSum)">请输入数字格式</span>
                  <span v-else-if="declareSum==''">不能为空</span>
                 </div>
               </dd>
             </dl>
           </div>
           <div class="company-info">
            <dl>
               <dt><label><input type="radio" v-model="userType" name="userType" value="1"  style="width:auto"> 自有出口企业：</label></dt>
               <dd>
                <select v-model="outEntName">
                  <option value="0">请选择自有用户</option>
                  <option v-for="s in myUserDatas" :value="s.id">{{s.entName}}</option>
                  
                   <!-- @change="changeFactory()" -->
                </select>
                <span @click="goAddMyUser()" class="textUser">{{textUser}}</span>
              </dd>
             </dl>
             <dl>
               <dt>&nbsp;</dt>
               <dd>&nbsp;</dd>
             </dl>
           </div>
         </div>
         <!--报关商品-->
         <div id="goods">
             <div>
               <div class="tit2">
                  <h3><span class="red">*</span> 报关单商品</h3>
                  <div class="icon-arrow"></div>
               </div>
               <div class="goods1">
                 <div class="company-info">
                   <dl>
                     <dt><span class="red">*</span> 出口商品名称：</dt>
                     <dd><input type="text" name="" v-model="productName">
                      <div>
                         <span v-if="productName==''">不能为空</span>
                       </div>
                     </dd>
                   </dl>
                   <dl>
                     <dt><span class="red">*</span> 出口商品SH编码：</dt>
                     <dd><input type="text" name="" v-model="hsNumber">
                      <div>
                       <span v-if="hsNumber==''">不能为空</span>
                     </div>
                     </dd>
                   </dl>
                 </div>
                 <div class="company-info">
                   <dl>
                     <dt><span class="red">*</span> 商品单价：</dt>
                     <dd><input type="text" name="" v-model="price" @focus="textFocus()"> 美元
                      <div>
                        <span v-if="!/^[0-9].*$/.test(price)">请输入数字格式</span>
                         <span v-else-if="price==''">不能为空</span>
                       </div>
                     </dd>
                   </dl>
                   <dl>
                     <dt><span class="red">*</span> 退税率：</dt>
                     <dd><input type="text" name="" v-model="rate"> %
                      <div>
                        <span v-if="!/^[0-9].*$/.test(rate)">请输入数字格式</span>
                         <span v-else-if="rate==''">不能为空</span>
                       </div>
                     </dd>
                   </dl>
                 </div>
                 <div class="company-info">
                   <dl>
                     <dt><span class="red">*</span> 商品数量：</dt>
                     <dd><input type="text" name="" v-model="quantity">
                      <div>
                        <span v-if="!/^[0-9].*$/.test(quantity)">请输入数字格式</span>
                       <span v-else-if="quantity==''">不能为空</span>
                     </div>
                     </dd>
                   </dl>
                   <dl>
                     <dt> </dt>
                     <dd> </dd>
                   </dl>
                 </div>
                 <div class="company-info">
                   <dl>
                     <dt>商品总价：</dt>
                     <dd><span class="red" style="line-height:40px;" id="totalPrice">{{totalPrice}} 美元</span>
                     </dd>
                   </dl>
                   <dl>
                     <dt> </dt>
                     <dd> </dd>
                   </dl>
                 </div>
               </div>
             </div>
             <div class="company-info add-goods">
               <dl>
                 <dt> &nbsp; </dt>
                 <dd><div class="btn-zi" @click="addGoods()">新增商品</div> </dd>
               </dl>
               <dl>
                 <dt> </dt>
                 <dd> </dd>
               </dl>
             </div>
         </div>
         <!--结汇收汇信息-->
         <h2 class="tit-hui">
           收汇结汇信息
         </h2>
         <div class="company-info">
           <dl>
             <dt><span class="red">*</span> 收汇金额：</dt>
             <dd><input type="text" name="" v-model="earnings"> 美元<img src="../../../assets/img/icon-del.png" class="icon" @click="delVal()">
              <div>
                <span v-if="!/^[0-9].*$/.test(earnings)">请输入数字格式</span>
                 <span v-else-if="earnings==''">不能为空</span>
               </div>
             </dd>
           </dl>
           <dl>
             <dt><span class="red">*</span> 收汇余额：</dt>
             <dd class="yuer" style="line-height:38px;">{{earningsV}} 美元  <span class="pop" v-show="earningsVtit">提示：<i class="red">收汇余额不足</i>，请增加收汇金额及收汇凭证</span>

             </dd>
           </dl>
         </div>
         <div class="company-info">
           <dl>
             <dt><span class="red">*</span> 结汇金额：</dt>
             <dd><input type="text" name="" v-model="settlement"> 元
              <div>
                <span v-if="!/^[0-9].*$/.test(settlement)">请输入数字格式</span>
                 <span v-else-if="settlement==''">不能为空</span>
               </div>
             </dd>
           </dl>
           <dl>
             <dt><span class="red">*</span> 汇率：</dt>
             <dd><input type="text" name="" v-model="huilv">
             <div>
                <span v-if="!/^[0-9].*$/.test(huilv)">请输入数字格式</span>
                 <span v-else-if="huilv==''">不能为空</span>
               </div>
             </dd>
           </dl>  
         </div>
         
         <div class="company-info">
          <dl>
             <dt ><span class="red">*</span> <span class="red">最大退税融资金额：</span></dt>
             <dd style="line-height:38px; font-weight:bold;"><span class="red">{{totalFin}} 元</span></dd>
           </dl>
           <dl>
             <dt>&nbsp;</dt>
             <dd>&nbsp;</dd>
           </dl>
         </div>
         <!--发票信息-->
         <h2 class="tit-hui">
           发票信息
         </h2>
         <div class="company-info">
           <dl>
             <dt><span class="red">*</span> 发票代码：</dt>
             <dd><input type="text" name="" v-model="invoiceCode"></dd>
           </dl>
           <dl>
             <dt>&nbsp;</dt>
             <dd>&nbsp;</dd>
           </dl>
         </div>
         <div id="addFapiaos" class="add-fapiao">

         </div>
         <div class="add-fapiao">
           <div>
            <span class="red">*</span> 开票日期：<input type="date" name="" v-model="createTime"> &nbsp; &nbsp;
              <span class="red">*</span> 发票号码：<input type="text" name="" v-model="invoiceNumber">&nbsp; &nbsp;<span class="red">*</span> 发票金额：<input type="text" name="" v-model="invoiceMoney" class="fapiao">
           </div>
           <div class="btn-orange-small" id="add-fapiao" @click="addFapiao()" style="width:170px;">新增发票号码及金额</div>
         </div>
         <div class="company-info">
           <dl>
             <dt>
              <span class="red">*</span> 发票数量：
            </dt>
             <dd style="line-height:38px;">{{invoiceQuantity}}</dd>
           </dl>
           <dl>
             <dt> <span class="red">*</span> 发票总金额： </dt>
             <dd style="line-height:38px;">{{totalInvoice}} </dd>
           </dl>
         </div>
         <!--票据信息-->
          <h2 class="tit-hui">
           票据信息
         </h2>
         <div class="piaoju" style="position: relative;">
          <dl>
           <dt><span class="red">*</span> 报关单：</dt>
           <dd>
            <div class="pic1"><a :href="imgsSrc1" target="_blank"><img :src="imgsSrc1 ||  '/static/img/def_7.png'"></a></div>
            <upload-img @imgSrcP="imgSrc1"><slot>点击上传付款水单</slot></upload-img>
           </dd>
          </dl>
          <dl>
           <dt><span class="red">*</span> 收汇凭证：</dt>
           <dd>
            <div class="pic-shouhui">
              <!--v-if="showImg1"-->
              <a :href="imgsSrc2"><img :src="imgsSrc2 || '/static/img/def_7.png'" ></a>
              <a :href="earningsVal.earningsImg"><img :src="earningsVal.earningsImg ||  '/static/img/def_7.png'" v-if="showImg2"></a></div>
            <!-- <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">点击上传收汇凭证</div>
              <p>图片格式要求：jpg/png/pdf</p>
              <div class="file-up2"><input type="file" name=""></div>
            </div> -->
            <upload-img @imgSrcP="imgSrc2"><slot>点击上传收汇凭证</slot></upload-img>
           </dd>
          </dl>
          <dl>
           <dt><span class="red">*</span> 结汇凭证：</dt>
           <dd>
            <div class="pic2">
              <a :href="imgsSrc3 || '/static/img/def_7.png'"><img :src="imgsSrc3 || '/static/img/def_7.png'"></a>
            </div>
            <!-- <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">点击上传结汇凭证</div>
              <p>图片格式要求：jpg/png/pdf</p>
              <div class="file-up2"><input type="file" name=""></div>
            </div> -->
            <upload-img @imgSrcP="imgSrc3"><slot>点击上传结汇凭证</slot></upload-img>
           </dd>
          </dl>
          <dl>
           <dt><span class="red">*</span> 发票：</dt>
           <dd class="fapiao voice">
            <div class="pic3">
              <img src="/static/img/def_7.png">
            </div>
            <upload-img @imgSrcP="imgSrc4"><slot>点击上传发票</slot></upload-img>
           </dd>
          </dl>
         </div>
         <div class="operate">
           <div class="btn-no" @click="save()">保存</div>
           <div class="btn-true" @click="goApp2()">下一步</div>
         </div>
       </div>
    </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import uploadImg from '../../../components/base/uploadImg'
import $ from 'jquery'
// import {mapMutations, mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
export default({
  data () {
    return {
      // 新增'',   
      hsNumber: window.localStorage.getItem('products') ? JSON.parse(window.localStorage.getItem('products')).hsNumber : '',
      price: window.localStorage.getItem('products')? JSON.parse(window.localStorage.getItem('products')).price : 0,  
      rate: window.localStorage.getItem('products')?JSON.parse(window.localStorage.getItem('products')).rate : 0,
      quantity: window.localStorage.getItem('products')?JSON.parse(window.localStorage.getItem('products')).price : 0,
      // 新增商品字段end
      invoiceQuantity: 0,
      fNum: 1,
      invoiceMoney: window.localStorage.getItem('invoice') ? JSON.parse(window.localStorage.getItem('invoice')).invoiceMoney : 0,
      allInfo: {},
      contract: this.$route.query.refundApply ? this.$route.query.refundApply.contract : '',
      customsDecl: this.$route.query.refundApply ? this.$route.query.refundApply.customsDecl : '',
      declareSum: this.$route.query.refundApply ? this.$route.query.refundApply.declareSum : '',
      passState: this.$route.query.refundApply ? this.$route.query.refundApply.passState : '',
      declareTime: this.$route.query.refundApply ? this.$route.query.refundApply.declareTime : '',
      entName: this.$route.query.refundApply ? this.$route.query.factoryInfo.entName : '',
      loanEntName: this.$route.query.refundApply ? this.$route.query.factoryInfo.entName : '0',
      outEntName: this.$route.query.refundApply ? this.$route.query.factoryInfo.entName : '0',
      prodectName: '',
      productName: window.localStorage.getItem('products') ? JSON.parse(window.localStorage.getItem('products')).name : '',
      shNum: '',
      productPrice: '',
      taxR: '',
      // 收汇字段
      productNum: this.$route.query.refundApply ? this.$route.query.refundApply.productNum:  '',
      settlement: this.$route.query.refundApply ? this.$route.query.refundApply.settlement:  0,
      earnings: this.$route.query.refundApply ? this.$route.query.refundApply.earnings: this.earningsVal,
      huilv: 0,
      // 发票号码字段
      invoiceCode:  this.$route.query.refundApply ? this.$route.query.refundApply.invoiceCode: '',
      createTime: window.localStorage.getItem('invoice') ? JSON.parse(window.localStorage.getItem('invoice')).createTime : '',
      invoiceNumber: window.localStorage.getItem('invoice') ? JSON.parse(window.localStorage.getItem('invoice')).invoiceNumber : '',
      fapiao: '',
      // invoiceQuantity: '',
      // 总发票
      totalInvoice: 0,
      // 全部工厂
      factoryAll: [],
      // 选择企业的单选框
      userType: 0,
      // 全部自有客户
      myUserDatas: [],
      // 授信额度
      credit: {},
      // 商品是否显示
      goodShow: false,
      // 新增商品数据
      addGoodsData: {},
      // 总价
      totalPrice: this.price * this.quantity || 0,
      // 最大融资额
      totalFin: 0,
      //增加发票返回来的数据
      invoiceDatas: {},
      // 工厂id
      factoryId: '',
      // 收汇结余对象
      earningsVal: {},
      // 收汇余额
      earningsV: 0,
      // 收汇余额不够进行提示
      earningsVtit: false,
      // 图片是否显示
      showImg1: false,
      showImg2: false,
      // 商品id
      ids: '',
      // 商品id数组
      idsArr: [],
      // 发票ids
      invoiceIds: [],
      invoiceIdsString: '',
      // 商品index
      idsIndex: 0,
      // 发票index
      invoiceIndex: 0,
      // 申请id
      id: '',
      // 外综服id
      tradeserviceId: '',
      imgsSrc1: '',
      imgsSrc2: '',
      imgsSrc3: '',
      imgsSrc4: '',
      // 图片
      // customsDeclImg: '',
      // earningsImg: '',
      // transferImg: '',
      // receiptImg: ''
      textUser1: '',
      textUser: '',
      imgsSrc4File: '',
      id: '',
      // 待提交
      saveR: {},
      saveF: {},
      saveD: {},
      products: {},
      arrss: []
    }
  },
  // computed: {
  //   ...mapGetters(['taxAllInfo'])
  // },
  components: {
    brand,
    uploadImg
  },
  created () {
    // this.entName = this.factoryAll[0].id
    if (this.$route.query.id === undefined) {
    
       window.localStorage.removeItem('products')
    }
    if (this.$route.query.id === undefined) {
     
      window.localStorage.removeItem('invoice')
    }
  },
  watch: {
    // 监测商品总价
    price: function () {
      return this.totalPrice = this.price * this.quantity
    },
    rate: function () {
      return this.totalPrice = this.price * this.quantity
    },
    quantity: function () {
      return this.totalPrice = this.price * this.quantity
    },
    // 监测最大退税融资
    declareSum: function () {
      this.tit()
      this.totalFin = this.declareSum * this.rate * this.huilv * .01
    },
    rate: function () {
      this.totalFin = this.declareSum * this.rate * this.huilv * .01
    },
    huilv: function () {
      this.totalFin = this.declareSum * this.rate * this.huilv * .01
    },
    // 监测是平台客户还是自有客户
    userType: function (val, oldval) {
      this.getFactoryId()
      this.userType = val
      console.log('userType', val)
    },
    // 监测平台推荐的
    loanEntName: function (val, oldval) {
      console.log('loanEntName', val)
      this.loanEntName = val
      this.getFactoryId()
    },
    // 监测自有客户
    outEntName: function (val, oldval) {
      console.log('outEntName', val)
      this.outEntName = val
      this.getFactoryId()
    },
    // 检测数字格式
    // declareSum: function (val, oldval) {
    //  ' ^[0-9]*$'
    // }
  },
  mounted () {
    let _this = this
    this.getSave()
    // 折叠展开商品
    $('#goods').delegate('div>.icon-arrow', 'click', function () {
      $(this).parent().siblings().toggle()
    })
    // 发票金额
    this.taxAllInfo = window.localStorage.getItem('refundInfo')
    // 获取全部工厂
    this.getFactory()
    // 监测余额
    this.tit()
    // 获取全部自有客户
    this.getMyUser()
    // 授信额度
    this.getCredit()
    // 新增产品
    // this.addGoods()
    // 商品删除
    $('#goods').delegate('h3>.icon-del', 'click', function () {
      _this.idsIndex = $(this).parent().parent().index()
      if (_this.idsIndex) {
        _this.idsIndex -= 2
      }
      let goodsId = $(this).next().val()
      _this.$http.get('/api/product/delete?id=' + goodsId)
        .then(res => {
          if (res.data.status === 200) {
            let $parent = $(this).parent().parent()
            $parent.next().remove()
            $parent.remove()
            _this.idsArr.splice(_this.idsIndex, 1)
            _this.ids = _this.idsArr.join(',')
            console.log('_this.invoiceIdsString11111', _this.ids)
          } else {
            _this.$alert(res.data.msg, '提示框', {
              confirmButtonText: '确定'
            })
          }
        })
    })
    // 删除发票
    $('.add-fapiao').delegate('.icon-del', 'click', function () {
      let invoiceId = $(this).next().val()
      _this.$http.get('/api/invoice/delete?id=' + invoiceId)
        .then(res => {
          if (res.data.status === 200) {
            _this.invoiceIndex = $(this).parent().index()
            $(this).parent().remove()
            // 计算发票总金额
            _this.totalInvoice += Number(_this.invoiceMoney)
            // 计算发票数量
            _this.invoiceQuantity = $('#addFapiaos>div').length
            // 获取index
            
            // 删除数组
            _this.invoiceIds.splice(_this.invoiceIndex, 1)
            // 转换字符串
            _this.invoiceIdsString = _this.invoiceIds.join(',')
            console.log('_this.invoiceIdsString', _this.invoiceIdsString)
          }
        })
    })

   // 删除发票凭证
    $('.pic3').delegate('span.del', 'click', function () {
        console.log($('.pic3 span.del').index(this))
        let index = $('.pic3 span.del').index(this)
        // _this.imgsSrc4File -= _this.imgsSrc4
        console.log(';;;;', _this.imgsSrc4File)
        let arr = []
        arr = _this.imgsSrc4File.split(',')
        console.log('....', arr)
        
        arr.splice(index, 1)
        console.log('lllll', arr)

        $(this).prev().remove()
        $(this).remove()
        
        _this.imgsSrc4File = arr.join(',')
        console.log('mmm', _this.imgsSrc4File)

    })
    // 获取工厂id
    this.getFactoryId()
    // 收汇结余
    this.shouhui()
    // 获取信息
    this.getDatasInfo()
    this.getProduct()
  },
  methods: {
    ...mapMutations({
      // setTaxAllInfo: 'SET_TAX_ALLINFO',
      setFormInfo: 'SET_FORMINFO'
    }),
    // 新增自有客户
    addUser () {
      let params = {
        'name': '',   
        'hsNumber': '',
        'price': '',  
        'rate': '',
        'quantity': '',
        'totalPrice': ''
      }
      this.$http.post('/api/product/add',params)
        .then(res => {
          console.log(res)
        })
      // let html1 = `
      //   <div class="company-info">
      //     <dl>
      //        <dt>我的自有出口企业：</dt>
      //        <dd>
      //         <input type="text" name="" id="myUser">
      //         <img src="static/img/msg_3.png" class="icon-del" @click="delUser()">
      //       </dd>
      //      </dl>
      //      <dl>
      //        <dt>&nbsp;</dt>
      //        <dd>&nbsp;</dd>
      //      </dl>
      //    </div>
      // `
      // $('#addUsers').before(html1)
    },
    // 获取商品
    getProduct () {
      this.products = JSON.parse(window.localStorage.getItem('products'))
      console.log('000', this.products)
    },
    // 新增商品
    addGoods () {
      let _this = this
      // 调添加商品的接口
      this.$http.post('/api/product/add', {'name': _this.productName, 'hsNumber': _this.hsNumber, 'price': _this.price, 'rate': _this.rate, 'quantity': _this.quantity, 'totalPrice': _this.totalPrice})
        .then(res => {
          console.log('aaaa', res)
          if (res.data.status === 200) {
            _this.addGoodsData = res.data.result
              window.localStorage.setItem('products', JSON.stringify(_this.addGoodsData))
            
            let addGoodsData = _this.addGoodsData
            $('.goods-pubed').css('display', 'block')
            let totalPrice = _this.totalPrice
        // 添加标题
          let htmlImg = `<img src="static/img/msg_3.png" class="icon-del"> <input type="hidden" value="${addGoodsData.id}"/>`
          $('.goods1').prev().find('h3').append(htmlImg)
          // 添加商品的显示数据
          var html3 = `<div class="goods-pubed">
             <div class="company-info company-info1">
               <dl>
                 <dt>出口商品名称：</dt>
                 <dd>${addGoodsData.name}</dd>
               </dl>
               <dl>
                 <dt>出口商品SH编码：</dt>
                 <dd>${addGoodsData.hsNumber}</dd>
               </dl>
             </div>
             <div class="company-info company-info2">
               <dl>
                 <dt>商品单价：</dt>
                 <dd>${addGoodsData.price} 美元</dd>
               </dl>
               <dl>
                 <dt>退税率：</dt>
                 <dd>${addGoodsData.rate} %</dd>
               </dl>
             </div>
             <div class="company-info company-info2">
               <dl>
                 <dt>商品数量：</dt>
                 <dd>${addGoodsData.quantity}</dd>
               </dl>
               <dl>
                 <dt> </dt>
                 <dd> </dd>
               </dl>
             </div>
             <div class="company-info company-info2">
               <dl>
                 <dt>商品总价：</dt>
                 <dd><span class="red">${totalPrice} 美元</span></dd>
               </dl>
               <dl>
                 <dt> </dt>
                 <dd> </dd>
               </dl>
             </div>
           </div>
          `
          $('.goods1').before(html3)
          let html2 = `
                 <div class="tit2">
                    <h3>报关单商品</h3>
                    <div class="icon-arrow"></div>
                 </div>
               `
          $('.goods1').before(html2)
          // 设置空数组保存商品id
          _this.idsArr.push(addGoodsData.id)
          _this.ids = _this.idsArr.join(',')
          console.log('idsArr', _this.ids)
          // 清空input的值
          $('.goods1 input').val('')
          // 清空总价格
          $('#totalPrice').text('0')
          } else {
            _this.$alert(res.data.msg, '提示框', {
              confirmButtonText: '确定'
            })
          }
        })    
    },
    // 删除新增商品
    delGoods () {
      alert(0)
      let _id = $('input:hidden').val()
      this.$http.get('/api/product/delete?id=' + _id)
        .then(res => {
          if (res.data.status === 200) {

          }
        })
      $('#goods').delegate('h3>.icon-del', 'click', function () {
        let $parent = $(this).parent().parent()
        $parent.next().remove()
        $parent.remove()
      })
    },
    // 清除收汇金额
    delVal () {
      this.earnings = ''
    },
    // 新增发票号码及金额
    addFapiao () {
      let _this = this
      let params = {
        'invoiceNumber': this.invoiceNumber,
        'createTime': this.createTime,
        'invoiceMoney': this.invoiceMoney
      }
      if (this.invoiceMoney && !isNaN(this.invoiceMoney)) {
        this.$http.post('/api/invoice/add', params)
        .then(res => {
          if (res.data.status === 200) {
            _this.invoiceDatas = res.data.result
           
              window.localStorage.setItem('invoice', JSON.stringify(_this.invoiceDatas))
              console.log('_this.invoiceDatas', _this.invoiceDatas)
           
            var invoiceDatas2 = _this.invoiceDatas
            let html3 = `
            <div>
              发票号码：${invoiceDatas2.invoiceNumber}&nbsp; &nbsp;发票金额：${invoiceDatas2.invoiceMoney} <img src="static/img/msg_3.png" class="icon-del"><input type="hidden" value="${invoiceDatas2.id}">
            </div>
          `
            $('#addFapiaos').append(html3)
            // 增加的发票id
            _this.invoiceIds.push(_this.invoiceDatas.id)
            _this.invoiceIdsString = _this.invoiceIds.join(',')
            console.log('invoiceIdsString', _this.invoiceIdsString)
            // 计算发票总金额
            _this.totalInvoice += Number(_this.invoiceMoney)
            // 计算发票数量
            _this.invoiceQuantity = $('#addFapiaos>div').length
            // 发票内容清空
            _this.invoiceNumber = ''
            _this.createTime = ''
            _this.invoiceMoney = 0
            // _this.totalInvoice += _this.invoiceMoney
          } else {
            _this.$alert(res.data.msg, '提示框', {
              confirmButtonText: '确定'
            })
          }
        }) 
      } else {
        _this.$alert('发票金额不能为0 或 格式不对', '提示框', {
          confirmButtonText: '确定'
        })
      }
      
    },
    // 下一步
    goApp2 () {
      let _this = this
      // if (this.contract === '' || this.customsDecl === '' || this.passState === '' || this.declareTime === '' || this.totalFin === '' || this.declareSum === '' || this.factoryId === '' || this.settlement === '' || this.earnings === '' || this.invoiceCode === '' || this.invoiceQuantity === '' || this.totalInvoice === '') {
      //   _this.$alert('数据不能为空', '提示框', {
      //     confirmButtonText: '确定'
      //   })
      // } else {

        _this.allInfos()
        // 保存图片信息
        this.setFormInfo(this.allInfos)
        let params = {
          'refundApply': _this.allInfo,
          'ids': _this.ids,
          'invoice': _this.invoiceIdsString,
          'balance': parseInt(_this.earningsV) + parseInt(_this.allInfo.earnings)
        }
        // 条件判断
      
      // 条件end

        // this.$http.post('/api/refundapply/add?ids=' + _this.ids + '&&invoice=' + _this.invoiceIdsString + '&&balance=' + _this.earningsV, _this.allInfo)
        if(_this.ids !== '' && _this.invoiceIdsString !== '' && parseInt(_this.earningsV) + parseInt(_this.allInfo.earnings) !== '') {
        this.$http.post('/api/refundapply/add', params)
          .then(res => {
            if (res.data.status === 200) {
              _this.tradeserviceId = res.data.result.tradeserviceId
              _this.id = res.data.result.id
              console.log('9992',res.data)
              _this.$message({
                type: 'success',
                message: '退税融资申请成功!'
              })
              this.$router.push({
                name: 'outApplication2',
                query: {'id': _this.id, 
                'financing': _this.totalFin,
                'tradeserviceId': _this.tradeserviceId
              }
              })
            } else {
              _this.$alert(res.data.msg, '提示框', {
                confirmButtonText: '确定'
              })
            }
          })
          .catch(err => {
            alert('请填写所有*号必填信息')
          })
      } else {
        alert('票据信息图片不能为空')
      }
    },
    //
    allInfos () {
      this.allInfo = {
          'id': this.id ? this.id : '',
          'contract': this.contract,
          'customsDecl' : this.customsDecl,
          'passState': this.passState,
          'declareTime': this.declareTime,
          'refundTax': this.totalFin,
          'declareSum': this.declareSum,
          'factoryId': parseInt(this.factoryId),
          'settlement': this.settlement,
          'earnings': this.earnings,
          'invoiceCode': this.invoiceCode,
          'invoiceQuantity': this.invoiceQuantity,
          'totalInvoice' : this.totalInvoice,
          'customsDeclImg': this.imgsSrc1,
          'earningsImg': this.imgsSrc2,
          'transferImg': this.imgsSrc3,
          'receiptImg': this.imgsSrc4File,
          'saveState': this.saveState || '0'
      }
      return this.allInfo
      window.localStorage.setItem('refundInfo', JSON.stringify(this.allInfo))
    },
    // 保存信息
    save () {
      this.allInfos()
      let _this = this
      this.saveState = 0
      let params = {
          'refundApply': _this.allInfo,
          'ids': _this.ids,
          'invoice': _this.invoiceIdsString,
          'balance': _this.earningsV
        }
        this.$http.post('/api/refundapply/add', params)
        .then(res => {
          if (res.data.status === 200 && res.data.result) {
            this.id = res.data.result.id
            _this.$message({
                type: 'success',
                message: '保存成功!'
              })
          } else {
            _this.$alert(res.data.msg, '提示框', {
              confirmButtonText: '确定'
            })
          }
        })
    },
    // 调接口
    // 获取推荐工厂
    getFactory () {
      this.$http.get('/api/factory/selectall?type=1')
        .then(res => {
          if (res.data.status === 200 && res.data.factoryInfo && res.data.factoryInfo.length > 0) {
            this.factoryAll = res.data.factoryInfo
            console.log('this.factoryAll', this.factoryAll)
          } else {
            // alert('还没有出口企业，请先去首页添加客户，或添加自有客户')
            this.textUser1 = '暂无推荐客户，去添加'
          }
        })
    },
    // 获取自有的客户
    getMyUser () {
      let _this = this
      this.$http.get('/api/factory/selectall?type=2')
        .then(res => {
          if (res.data.status === 200 && res.data.factoryInfo && res.data.factoryInfo.length > 0) {
            _this.myUserDatas = res.data.factoryInfo
          } else {
            this.textUser = '暂无自有客户，去添加'
          }
          // console.log('this.myUserDatas', _this.myUserDatas)
        })
    },
    // select选择工厂
    changeFactory () {
      this.entName = this.factoryAll
      cosole.log(this.entName)
    },
    // 获取授信额度
    getCredit () {
      this.$http.get('/api/tradecompany/credit/detail')
        .then(res => {
          if(res.data.status === 200 && res.data.result) {
            this.credit = res.data.result
          }
          
        })
    },
    // 折叠展开商品
    toggleGoods () {
      $('#goods').delegate('div>.icon-arrow', 'click', function () {
        $(this).parent().siblings().toggle()
      })
    }, 
    // 删除发票
    delFapiao () {
      let _this = this
      $('.add-fapiao').delegate('.icon-del', 'click', function () {
        $(this).parent().remove()
        _this.invoiceIndex = $(this).parent().index()
        _this.invoiceIds.splice(_this.invoiceIndex, 1)
        _this.invoiceIdsString = _this.invoiceIds.join(',')
        console.log('_this.invoiceIdsString', _this.invoiceIdsString)
      })
    },
    // 调收汇结余接口
    shouhui () {
      let _this = this
      // let factoryId = 1 // _this.factoryId
      this.$http.get('/api/refundsurplus/query?objId=' + _this.factoryId)
        .then(res => {
          if (res.data.result) {
            this.earningsVal = res.data.result
            if (res.data.result.earningsImg) {
              _this.showImg1 = false
              _this.showImg2 = true
            }
            this.earningsV = res.data.result.Balance
          } else {
            this.earningsV = 0
            _this.showImg1 = true
            _this.showImg2 = false
          }
        })
    },
    // 收汇余额不足提示
    tit () {
      if (this.earningsV !== 0) {
        if (this.earningsV < parseInt(this.declareSum) * 0.9) {
          this.earningsVtit = true
        } else {
          this.earningsVtit = false
        }
      } else {
        if ((parseInt(this.earningsV) + parseInt(this.earnings)) < parseInt(this.declareSum) * 0.9) {
          this.earningsVtit = true
        } else {
          this.earningsVtit = false
        }
      }
    },
    // 获取工厂id
    getFactoryId () {
      if (this.userType === 0) {
        this.factoryId = this.loanEntName
        console.log('this.factoryId1', this.factoryId)
      } else {
        this.factoryId = this.outEntName
        console.log('this.factoryId2', this.factoryId)
      }
    },
    // 获取商品列表
    getGoodsList () {
      this.$http.get('/aip/product/select')
        .then(res => {
          console.log('res', res)
        })
    },
    // 上传付款水单
    imgSrc1 (_imgSrc) {
      this.imgsSrc1 = _imgSrc
    },
    // 上传收汇凭证
    imgSrc2 (_imgSrc) {
      this.imgsSrc2 = _imgSrc
    },
    // 上传结汇凭证
    imgSrc3 (_imgSrc) {
      this.imgsSrc3 = _imgSrc
    },
    // 上传发票
    imgSrc4 (_imgSrc) {
      this.imgsSrc4 = _imgSrc
      let src = `<img src="${this.imgsSrc4}"> <span class="del"> X </span>`
      console.log($('.pic3'))
      if ($('.pic3 img').attr('src') === '/static/img/def_7.png') {
        $('.pic3 img').remove()
        $('.pic3').append(src)
      } else {
        $('.pic3').append(src)
      }
      this.arrss.push(this.imgsSrc4)
      this.imgsSrc4File = this.arrss.join(',')
    },
    // 去增加自有客户
    goAddMyUser () {
      this.$router.push({
        name: 'addMyUser'
      })
    },
    // 聚焦
    textFocus () {
      console.log('aaaa')
      console.log('c',$(this).value)
      // if ($(this).val() === '' || 0) {
      //   $(this).val('')
      // } else {
      //   $(this).val(this.attr(v-model))
      // }
    },
    // 获取信息
    getDatasInfo () {

      let _this = this
      let id = this.$route.query.refundApply?this.$route.query.id: ''
      
      this.$http.get('/api/refundapply/select/bycondition?id=' + id)
        .then(res => {
          if (res.data.status === 200 && res.data.refundApply && res.data.refundApply.receiptImg) {
            _this.taxAllInfoAll = res.data
            _this.taxAllInfo2 = res.data.refundApply
            _this.taxFactory = res.data.factoryInfo
            _this.receiptImg = _this.taxAllInfo2.receiptImg
            _this.receiptImgss = _this.receiptImg.split(',')
          }
        })
    },
    // 待提交
    getSave () {
      console.log('...', this.$route.query.refundApply)
      this.saveR = this.$route.query.refundApply
      console.log('uuu', this.saveR)
      // this.saveF = this.$route.query.factoryInfo
      // this.saveD = this.$route.query.d
      // console.log('p000', this.saveR)
      this.saveInvoice = window.localStorage.getItem('invoice')
    }
  }
})
</script>
<style type="text/css">
  @import '../../../assets/css/detail.css';
  .company-info input[type="text"]{
    width:200px;
  }
  .company-info input[type="radios"]{
    width:auto;
  }
  #addFapiaos{
    clear:both;
    overflow: hidden;
  }
  #addFapiaos>div{
    float:left;
    margin:10px 40px 0px 0;
    width:330px;
  }
  .yuer{position: relative;}
  .yuer span{
    position: absolute;
    width:310px;
    left:-78px;
    top:10px;
    color:#999;
  }
  .company-info dl{
    padding:0 1px;
  }
  .company-info dl dt{
    width:38%;
  }
  .textUser{
    display: block;
    color:red;
    cursor: pointer
  }
  .company-info dl dd{
    height:56px;
    /*line-height: 16px;*/
  }
  .company-info1{
    margin-top:20px;
  }
  .company-info1 dl dd{
    height:26px;
    /*line-height: 16px;*/
  }
  .company-info dl dd div.btn-zi{
    font-size:16px;
    line-height: 40px;
    height:40px;
  }
  .company-info dl dd div{
    color:#ccc;
    line-height: 16px;
    font-size:12px;
  }
  .company-info dl dt{line-height: 34px;}

  .goods1{
    margin-top:20px;
  }
  .add-fapiao{
    padding-top:2px;
    padding-left:61px!important;
  }
  .company-info2 dl dd{
    height:26px;
    /*line-height: 16px;*/
  }
  #addFapiaos>div{
    margin-top:0;
  }
</style>
