<template>
 <div>
  <!--基本信息-->
   <div class="bgwhite">
    <h2 class="title">企业基本信息</h2>
    <div class="bg-hui-info">
     <div class="company-info">
       <dl>
        <dt><span class="red">*</span> 企业名称：</dt>
        <dd>
         {{entName}}
        </dd>
       </dl>
       <dl>
        <dt><span class="red">*</span> 企业性质：</dt>
        <dd><input type="text" name="" v-model="pDatas.entNature" :placeholder="pDatas.entNature">
          <div><span v-if="pDatas.entNature==''">企业性质不能为空</span></div>
          </dd>
       </dl>
       <dl>
        <dt><span class="red">*</span> 出口退税开户行：</dt>
        <!-- <dd><input type="text" name="" v-model="pDatas.bankName" :placeholder="pDatas.bankName">
          <div>
            <span v-if="pDatas.bankName==''">出口退税开户行不能为空</span>
          </div>
        </dd> -->
        <dd>
          <select v-model="selectBank">
            <option selected="selected" value="0" id="0"> 请选择银行 </option>
            <option v-for="b in banklist" :value="b.name">{{b.name}}</option>
          </select>
        </dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt><span class="red">*</span> 所在省份：</dt>
        <dd><input type="text" name="" v-model="pDatas.province" :placeholder="pDatas.province">
          <div>
            <span v-if="pDatas.province==''">所在省份不能为空</span>
          </div>
        </dd>
       </dl>
       <dl>
        <dt><span class="red">*</span> 海关出口等级：</dt>
        <dd><input type="text" name="" v-model="pDatas.exportRank" :placeholder="pDatas.exportRank">
          <div>
              <span v-if="pDatas.exportRank==''">海关出口等级不能为空</span>
          </div>
        </dd>
       </dl>
       <dl>
        <dt><span class="red">*</span> 出口退税银行账户：</dt>
        <dd><input type="text" name="" v-model="pDatas.bankNumber" :placeholder="pDatas.bankNumber">
          <div>
            <span v-if="pDatas.bankNumber==''">出口退税银行账户不能为空</span>
          </div>
        </dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt><span class="red">*</span> 所在城市：</dt>
        <dd><input type="text" name="" v-model="pDatas.city" :placeholder="pDatas.city">
          <div>
            <span v-if="pDatas.city==''">所在城市不能为空</span>
          </div>
        </dd>
       </dl>
       <dl>
        <dt><span class="red">*</span> 税务局退税等级：</dt>
        <dd><input type="text" name="" v-model="pDatas.refundTaxRank" :placeholder="pDatas.refundTaxRank">
          <div>
            <span v-if="pDatas.refundTaxRank==''">税务局退税等级不能为空</span>
          </div>
        </dd>
       </dl>
       <dl>
        <dt><span class="red">*</span> 上一年退税金额：</dt>
        <dd><input type="text" name="" v-model="pDatas.refundTax" :placeholder="pDatas.refundTax" style="width:84px;">  元
          <div>
            <span v-if="pDatas.refundTax==''">上一年退税金额不能为空</span>
            <span v-else-if="!/^[0-9].*$/.test(pDatas.refundTax)">请输入数字格式</span>
          </div>
        </dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt>&nbsp;</dt>
        <dd>&nbsp;</dd>
       </dl>
       <dl>
        <dt>&nbsp;</dt>
        <dd>&nbsp;</dd>
       </dl>
       <dl>
        <dt><span class="red">*</span> 上一年出口规模：</dt>
        <dd><input type="text" name="" v-model="pDatas.exportScale" :placeholder="pDatas.exportScale" style="width:84px;">  美元
          <div>
            <span v-if="pDatas.exportScale==''">上一年退税金额不能为空</span>
            <span v-else-if="!/^[0-9].*$/.test(pDatas.exportScale)">请输入数字格式</span>
          </div>
        </dd>
       </dl>
      </div>
    </div>
   </div>
   <div class="red">提示信息</div>
   <!--资质信息-->
   <div class="bgwhite">
    <h2 class="title">
     企业资质情况
    </h2>
    <div class="bg-hui-info">
     <p>
      <textarea  v-model="pDatas.entAptitude" :placeholder="pDatas.entName"></textarea>
      </p>
    </div>
   </div>
   <!--身份证-->
   <div class="bgwhite">
     <h2 class="title">
      法人代表或实际控制人信息
     </h2>
     <div class="shenfen">
      <dl>
       <dt><span class="red">*</span> 身份证正面</dt>
       <dd class="file1">
        <div id="shenf1">
          <img :src="pDatas.idCard?pDatas.idCard.split(',')[0]:''  || '/static/img/def_1.png'">
        </div>
        <upload-img @imgSrcP="imgSrc1"><slot>点击上传</slot></upload-img>
       </dd>
      </dl>
      <dl>
       <dt><span class="red">*</span> 身份证反面</dt>
       <dd class="file1">
        <div id="shenf2">
          <img :src="pDatas.idCard?pDatas.idCard.split(',')[1]:'' || '/static/img/def_2.png'">
        </div>
        <upload-img @imgSrcP="imgSrc2"><slot>点击上传</slot></upload-img>
       </dd>
      </dl>
     </div>
   </div>
   <!--企业营业执照及海关注册登记证-->
   <div class="bgwhite">
    <h2 class="title">企业营业执照及海关注册登记证</h2>
    <div class="shenfen">
     <dl>
      <dt><span class="red">*</span> 营业执照</dt>
      <dd>
        <div id="yingye1"><img :src="pDatas.businessLicence || '/static/img/def_3.png'"></div>
        <!-- <div class="file">
          <div class="file-up"><input type="file" name="" id="yingye" @change="setIdCard($event,'yingye1')"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc3"><slot>点击上传</slot></upload-img>
      </dd>
     </dl>
     <dl>
      <dt><span class="red">*</span> 海关注册登记证照片</dt>
      <dd>
        <div id="yingye2"><img :src="pDatas.customsRegister || '/static/img/def_4.png'"></div>
        <!-- <div class="file">
          <div class="file-up"><input type="file" name="" id="outside" @change="setIdCard($event,'yingye2')"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc4"><slot>点击上传</slot></upload-img>
      </dd>
     </dl>
     <dl>
      <dt><span class="red">*</span> 进出口企业登记证</dt>
      <dd>
        <div id="yingye3"><img :src="pDatas.entRegister || '/static/img/def_5.png'"></div>
        <!-- <div class="file">
          <div class="file-up">
            <input type="file" @change="upFile" />
          </div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc5"><slot>点击上传</slot></upload-img>
      </dd>
     </dl>
    </div>
   </div>
   <div class="bgwhite">
    <h2 class="title">
     企业其它补充信息
    </h2>
    <div >
      <textarea v-model="pDatas.otherInfo"></textarea>
    </div>
   </div>
   <div class="bgwhite">
   <!-- <span @click="clickA()">aaaa</span>  -->
   <div class="btn btn-zi-big mcenter" @click="submitUser()">提 &nbsp; 交</div>
   </div>
 </div>
</template>
<script type="text/javascript">
import uploadImg from '../base/uploadImg'
export default({
  props: ['rootDatas', 'pDatas', 'idCards'],
  data () {
    return {
      // companyData: JSON.parse(window.localStorage.getItem('companys')),
      // rootCompanyData: JSON.parse(window.localStorage.getItem('rootCompanys')),
      submitTrue: true,
      // 企业名称
      entName: JSON.parse(window.localStorage.getItem('outsideUserLoginMsg')).entName || '',
      // 企业性质
      // entNature:  this.pDatas.entNature || '',
      // // 出口退税开户行
      // bankName: this.pDatas.bankName || '',    // 出口退税账户
      // bankNumber: this.pDatas.bankNumber || '',
      // // 所在省份：
      // province: this.pDatas.province || '',
      // // 海关出口等级
      // exportRank: this.pDatas.exportRank || '',
      // // 所在城市
      // city: this.pDatas.city || '',
      // // 退税等级
      // refundTaxRank: this.pDatas.refundTaxRank || '',
      // // 退税金额
      // refundTax: this.pDatas.refundTax || 0,
      // // 上一年出口规模
      // exportScale: this.pDatas.exportScale || 0,
      // // 企业资质
      // entAptitude: this.pDatas.entAptitude || '',
      // // 其它
      // 身份证信息
      idCard: this.pDatas.idCard ? this.pDatas.idCard : '',
      // 公司营业执照，照片
      businessLicence: this.pDatas.businessLicence? this.pDatas.businessLicence: '',
      // 海关登记
      customsRegister: this.pDatas.customsRegister ? this.pDatas.customsRegister : '',
      // 进出口企业登记证；照片
      entRegister: this.pDatas.entRegister ? this.pDatas.entRegister : '',
      // 上传身份证正面
      shenf1: this.pDatas.shenf1 ? this.pDatas.shenf1 : '',
      imgsSrc1: '',
      imgsSrc2: '',
      // imgsSrc3: '',
      // imgsSrc4: '',
      // imgsSrc5: ''
      // select选择银行
      selectBank: this.$route.query.bankName || 0,
      // 全部银行列表
      banklist: []
    }
  },
  components: {
    uploadImg
  },
  // beforeCreate () {
  //   console.log('this.pDatas3333', this.pDatas)
  // },
  created () {
    console.log('this.pDatas3333', this.pDatas)
  },
  // watch: {
  //  'pDatas.entName': function (n, o) {
  //   console.log('this.pDatas3333', this.pDatas)
  //  }
  // },
  mounted () {
    console.log('this.pDatas3333', this.pDatas)
    this.getBanks()
  },
  watch: {
    selectBank: function (val, oldval) {
      console.log(val, oldval)
      // this.getRates(val)
      this.selectBank = val
      this.showRateAdd = true
    }
  },
  methods: {
    // 获取银行接口
    getBanks () {
      let _this = this
      this.$http.get('/api/bank/select')
        .then(res => {
          if (res.data.status === 200 && res.data.bankList) {
            console.log('res.data', res.data)
            _this.banklist = res.data.bankList
          }
        })
    },
    // 提交按钮
    getCompany () {
      let _this = this
      this.idCard = $('#shenf1 img').attr('src')+','+$('#shenf2 img').attr('src')
      let params = {
        'id': this.$route.query.id || '',
        'entName': this.entName,
        // 企业性质
        'entNature': this.pDatas.entNature || '',
        // 出口退税开户行
        'bankName': this.selectBank || '',
        // 出口退税账户
        'bankNumber': this.pDatas.bankNumber || '',
        // 所在省份：
        'province': this.pDatas.province || '',
        // 海关出口等级
        'exportRank': this.pDatas.exportRank || '',
        // 所在城市
        'city': this.pDatas.city || '',
        // 退税等级
        'refundTaxRank': this.pDatas.refundTaxRank || '',
        // 退税金额
        'refundTax': this.pDatas.refundTax || '',
        // 上一年出口规模
        'exportScale': this.pDatas.exportScale || '',
        // 企业资质
        'entAptitude': this.pDatas.entAptitude || '',
        // 其它
        'otherInfo': this.pDatas.otherInfo || '',
        // 身份证信息
        'idCard': this.pDatas.idCard || this.idCard,
        // 公司营业执照，照片
        'businessLicence': this.pDatas.businessLicence || this.businessLicence,
        // 海关登记
        'customsRegister': this.pDatas.customsRegister || this.customsRegister,
        // 进出口企业登记证；照片
        'entRegister': this.pDatas.entRegister || this.entRegister
      }
      console.log('aaaaksjdf', params)
      // 条件判断
      if (this.entName === '' || this.pDatas.entName === '') {
        this.$alert('公司名称不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      } else if (this.pDatas.entNature === '') {
        this.$alert('企业性质不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.bankNumber === '') {
        this.$alert('出口退税账户不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.province === '') {
        this.$alert('所在省份不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.exportRank === '') {
        this.$alert('海关出口等级不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.city === '') {
        this.$alert('所在城市不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.refundTaxRank === '') {
        this.$alert('退税等级不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.refundTax === '') {
        this.$alert('退税金额不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.exportScale === '') {
        this.$alert('上一年出口规模不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.idCard === '') {
        this.$alert('身份证信息不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.businessLicence === '') {
        this.$alert('公司营业执照不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.customsRegister === '') {
        this.$alert('海关登记证不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      else if (this.pDatas.entRegister === '') {
        this.$alert('进出口企业登记证不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      // 条件end
      // if (res.data.status === 200) {
      else if (this.selectBank == '' || this.selectBank == 0) {
        this.$alert('出口退税开户行不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      } else {
        this.$http.post('/api/tradecompany/edit', params)
        .then((res) => {
          if (res.data.status === 200) {
            this.$message({
              message: '恭喜您，提交成功',
              type: 'success'
            })
            setTimeout(function () {
            // _this.$router.push({
            //   name: 'outCompany'
            // })
            _this.$router.go(-1)
          }, 2000)
          } else {
            _this.$alert(res.data.msg, '提示信息', {
            confirmButtonText: '确定'
        })
          }
        })
      }
      // }
    },
    // clickA () {
    //   this.idCard = $('#shenf1 img').attr('src')+','+$('#shenf2 img').attr('src')
    //   alert(this.idCard)
    // },
    submitUser () {
      // 调编辑企业信息接口
      this.getCompany()
    },
    upFile () {
      let url = ''
      this.$http.post('/api/auth/upload/image/', {idenimg: url})
        .then(function (res) {
          if( res.data.status === 200) {
            console.log(res.data)
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
     // 上传付款水单
    imgSrc1 (_imgSrc) {
      if (this.pDatas.idCard) {
        this.pDatas.idCard.split(',')[0] = _imgSrc
      } else {
        $('#shenf1 img').attr('src', _imgSrc)
      }
    },
    // 上传收汇凭证
    imgSrc2 (_imgSrc) {
      if (this.pDatas.idCard) {
        this.pDatas.idCard.split(',')[1] = _imgSrc
      } else {
        $('#shenf2 img').attr('src', _imgSrc)
      }
    },
    // 上传结汇凭证
    imgSrc3 (_imgSrc) {
      if (this.pDatas.businessLicence) {
        this.pDatas.businessLicence = _imgSrc
      } else {
        $('#yingye1>img').attr('src', _imgSrc)
        this.businessLicence = _imgSrc
      }
    },
    // 上传发票
    imgSrc4 (_imgSrc) {
      if (this.pDatas.customsRegister) {
        this.pDatas.customsRegister = _imgSrc
      } else {
        $('#yingye2>img').attr('src', _imgSrc)
        this.customsRegister = _imgSrc
      }
    },
    // 上传发票
    imgSrc5 (_imgSrc) {
      if (this.pDatas.entRegister) {
        this.pDatas.entRegister = _imgSrc
      } else {
        $('#yingye3>img').attr('src', _imgSrc)
        this.entRegister = _imgSrc
      }
    }
  }
})
</script>
<style type="text/css">
 @import '../../assets/css/detail.css';
 .company-info dl dt{
    width:46%;
    line-height: 35px;
    font-size:12px;
  }
  .company-info input[type="text"]{
    width:140px;
  }
  .mcenter{
    margin:0 auto;
  }
  textarea{
    width:97%;
    padding:10px;
    font-size:14px;
    line-height:22px;
  }
  .btn-file div.file-up2{
    background: #000
}
.shenfen .btn-file{
  float:none;
}
  input[type="text"]{
    color:#999;
  }
  .company-info dl dd{
    width:52%;
    line-height: 36px;
  }
  .company-info input[type="text"]{
    height:23px;
  }
.company-info dd div{
  display: block;
  line-height:14px;
  height: 14px;
  color:red;
  font-size:12px;
}
.company-info select{
  width:159px;
}
.file1 input[type="file"]{
  left:115px;
}
</style>
