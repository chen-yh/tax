<template>
 <div>
  <!--基本信息-->
   <div class="bgwhite">
    <h2 class="title">企业基本信息</h2>
    <div class="bg-hui-info">
     <div class="company-info">
       <dl>
        <dt>企业名称：</dt>
        <dd><input type="text" name="" v-model="entName"></dd>
       </dl>
       <dl>
        <dt>企业性质：</dt>
        <dd><input type="text" name="" v-model="entNature"></dd>
       </dl>
       <dl>
        <dt>出口退税开户行：</dt>
        <dd><input type="text" name="" v-model="bankName"></dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt>所在省份：</dt>
        <dd><input type="text" name="" v-model="province"></dd>
       </dl>
       <dl>
        <dt>海关出口等级：</dt>
        <dd><input type="text" name="" v-model="exportRank"></dd>
       </dl>
       <dl>
        <dt>出口退税银行账户：</dt>
        <dd><input type="text" name="" v-model="bankNumber"></dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt>所在城市：</dt>
        <dd><input type="text" name="" v-model="city"></dd>
       </dl>
       <dl>
        <dt>税务局退税等级：</dt>
        <dd><input type="text" name="" v-model="refundTaxRank"></dd>
       </dl>
       <dl>
        <dt>上一年退税金额：</dt>
        <dd><input type="text" name="" v-model="refundTax"></dd>
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
        <dt>上一年出口规模：</dt>
        <dd><input type="text" name="" v-model="exportScale"> 美元</dd>
       </dl>
      </div>
    </div>
   </div>
   <!--资质信息-->
   <div class="bgwhite">
    <h2 class="title">
     企业资质情况
    </h2>
    <div class="bg-hui-info">
     <p>
      <textarea  v-model="entAptitude"></textarea>
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
       <dt>身份证正面</dt>
       <dd>
        <div id="shenf1">
          <img :src="imgsSrc1">
        </div>
        <!-- <div class="file">
          <div class="file-up"><input type="file" ref="shenf1" @change="setIdCard($event,'shenf1')" name="" id="shenf1" style="left:83px; top:-5px;"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc1"><slot>更改 点击上传</slot></upload-img>
       </dd>
      </dl>
      <dl>
       <dt>身份证反面</dt>
       <dd>
        <div id="shenf2"><img :src="imgsSrc2"></div>
        <!-- <div class="file">
          <div class="file-up"><input type="file" name="" id="shenf2" style="left:83px; top:-5px;" @change="setIdCard($event,'shenf2')"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc2"><slot>更改 点击上传</slot></upload-img>
       </dd>
      </dl>
     </div>
   </div>
   <!--企业营业执照及海关注册登记证-->
   <div class="bgwhite">
    <h2 class="title">企业营业执照及海关注册登记证</h2>
    <div class="shenfen">
     <dl>
      <dt>营业执照</dt>
      <dd>
        <div id="yingye1"><img :src="imgsSrc3"></div>
        <!-- <div class="file">
          <div class="file-up"><input type="file" name="" id="yingye" @change="setIdCard($event,'yingye1')"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc3"><slot>更改 点击上传</slot></upload-img>
      </dd>
     </dl>
     <dl>
      <dt>海关注册登记证照片</dt>
      <dd>
        <div id="yingye2"><img :src="imgsSrc4"></div>
        <!-- <div class="file">
          <div class="file-up"><input type="file" name="" id="outside" @change="setIdCard($event,'yingye2')"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc4"><slot>更改 点击上传</slot></upload-img>
      </dd>
     </dl>
     <dl>
      <dt>进出口企业登记证</dt>
      <dd>
        <div id="yingye3"><img :src="imgsSrc5"></div>
        <!-- <div class="file">
          <div class="file-up">
            <input type="file" @change="upFile" />
          </div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc5"><slot>更改 点击上传</slot></upload-img>
      </dd>
     </dl>
    </div>
   </div>
   <div class="bgwhite">
    <h2 class="title">
     企业其它补充信息
    </h2>
    <div class="bg-hui-info">
      <textarea v-model="otherInfo"></textarea>
    </div>
   </div>
   <div class="bgwhite">
    <div class="btn btn-zi-big mcenter" @click="submitUser()">提 &nbsp; 交</div>
   </div>

 </div>
</template>
<script type="text/javascript">
import uploadImg from '../base/uploadImg'
export default({
  //   rootCompanyData: {
  //     type: Object
  //   },
  //   companyData: {
  //     type: Object
  //   }
  // },
  data () {
    return {
      // companyData: JSON.parse(window.localStorage.getItem('companys')),
      // rootCompanyData: JSON.parse(window.localStorage.getItem('rootCompanys')),
      submitTrue: true,
      // 企业名称
      entName: this.companyData || '',
      // 企业性质
      entNature: this.companyData || '',
      // 出口退税开户行
      bankName: this.companyData || '',
      // 出口退税账户
      bankNumber: this.companyData || '',
      // 所在省份：
      province: this.rootCompanyData || '',
      // 海关出口等级
      exportRank: this.companyData || '',
      // 所在城市
      city: this.rootCompanyData || '',
      // 退税等级
      refundTaxRank: this.companyData || '',
      // 退税金额
      refundTax: this.companyData || 0,
      // 上一年出口规模
      exportScale: this.companyData || 0,
      // 企业资质
      entAptitude: this.companyData || '',
      // 其它
      otherInfo: this.companyData || '',
      // 身份证信息
      idCard: this.companyData || '',
      // 公司营业执照，照片
      businessLicence: this.companyData || '',
      // 海关登记
      customsRegister: this.companyData || '',
      // 进出口企业登记证；照片
      entRegister: this.companyData || '',
      // 上传身份证正面
      shenf1: '',
      imgsSrc1: '',
      imgsSrc2: '',
      imgsSrc3: '',
      imgsSrc4: '',
      imgsSrc5: ''
    }
  },
  components: {
    uploadImg
  },
  created () {
    // this.companyData = JSON.parse(window.localStorage.getItem('companys'))
    // this.rootCompanyData = JSON.parse(window.localStorage.getItem('rootCompanys'))
    console.log('aaaaa', this.companyData.entName, this.rootCompanyData)
  },
  mounted () {
    // this.getCompany()
    
  },
  methods: {
    getCompany () {
      let _this = this
      let params = {
        'id': this.$route.query.id,
        'entName': this.entName,
        // 企业性质
        'entNature': this.entNature,
        // 出口退税开户行
        'bankName': this.bankName,
        // 出口退税账户
        'bankNumber': this.bankNumber,
        // 所在省份：
        'province': this.province,
        // 海关出口等级
        'exportRank': this.exportRank,
        // 所在城市
        'city': this.city,
        // 退税等级
        'refundTaxRank': this.refundTaxRank,
        // 退税金额
        'refundTax': this.refundTax,
        // 上一年出口规模
        'exportScale': this.exportScale,
        // 企业资质
        'entAptitude': this.entAptitude,
        // 其它
        'otherInfo': this.otherInfo,
        // 身份证信息
        'idCard': this.idCard,
        // 公司营业执照，照片
        'businessLicence': this.businessLicence,
        // 海关登记
        'customsRegister': this.customsRegister,
        // 进出口企业登记证；照片
        'entRegister': this.entRegister
      }
      // 条件判断
      if (this.entName === '' || this.pDatas.entName === '') {
        this.$alert('提示信息', '公司名称不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.entNature === '') {
        this.$alert('提示信息', '企业性质不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.bankName === '') {
        this.$alert('提示信息', '出口退税开户行不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.bankNumber === '') {
        this.$alert('提示信息', '出口退税账户不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.province === '') {
        this.$alert('提示信息', '所在省份不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.exportRank === '') {
        this.$alert('提示信息', '海关出口等级不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.city === '') {
        this.$alert('提示信息', '所在城市不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.refundTaxRank === '') {
        this.$alert('提示信息', '退税等级不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.refundTax === '') {
        this.$alert('提示信息', '退税金额不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.exportScale === '') {
        this.$alert('提示信息', '上一年出口规模不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.idCard === '') {
        this.$alert('提示信息', '身份证信息不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.businessLicence === '') {
        this.$alert('提示信息', '公司营业执照不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.customsRegister === '') {
        this.$alert('提示信息', '海关登记证不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (this.entRegister === '') {
        this.$alert('提示信息', '进出口企业登记证不能为空', {
          confirmButtonText: '确定'
        })
      }
      // 条件end
      this.$http.post('/api/tradecompany/edit', params)
        .then((res) => {
          console.log('res', res)
          if (res.data.status === 200) {
            this.$message({
              message: '恭喜你，公司信息提交成功',
              type: 'success'
            })
          }
          setTimeout(function () {
            _this.$router.push({
              name: 'outhome'
            })
          }, 2000)
        })
    },
    // 提交按钮
    submitUser () {
      // 调编辑企业信息接口
      this.getCompany()
    },
    // 上传身份证正面
    setIdCard (e, id) {
      // this.idCard = e.target.files
      console.log('e', e.target.files[0])
      let files = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(files)
      reader.onload = function (e) {
        var result = document.getElementById(id)
        // 显示文件
        result.innerHTML = '<img src="' + this.result + '" class="img-size" width="260" height="147"/>'
      }
      this.$http.post('/api/auth/upload/image', {idenimg: this.result})
        .then(res => {
          console.log(res)
        })
    },
    upFile () {
      let url = ''
      this.$http.post('/api/auth/upload/image/', {idenimg: url})
        .then(function (res) {
          console.log(res)
        })
        .catch(function (err) {
          console.log(err)
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
    },
    // 上传发票
    imgSrc5 (_imgSrc) {
      this.imgsSrc5 = _imgSrc
    }
  }
})
</script>
<style type="text/css" scoped>
 @import '../../assets/css/detail.css';
 .company-info dl dt{
    width:46%;
  }
  .company-info input[type='text']{
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
  input[type="text"]{
    color:#999;
  }
</style>
