<template>
 <div>
  <!--基本信息-->
   <div class="bgwhite">
    <h2 class="title">企业基本信息</h2>
    <div class="bg-hui-info">
     <div class="company-info">
       <dl>
        <dt><span class="red">* </span>企业名称：</dt>
        <dd><input type="text" name="" v-model="entName"></dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>所在省份：</dt>
        <dd><input type="text" name="" v-model="province"></dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>所在城市：</dt>
        <dd><input type="text" name="" v-model="city"></dd>
       </dl>
      </div>
      <div class="company-info">
        <dl>
        <dt><span class="red">* </span>企业性质：</dt>
        <dd><input type="text" name="" v-model="sile"></dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>上一年度出口金额：</dt>
        <dd><input type="text" name="" v-model="exportScale"> 美元</dd>
       </dl>
       <dl>
        <dt><span class="red">* </span>上一年退税金额：</dt>
        <dd><input type="text" name="" v-model="refundTax"></dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt><span class="red">* </span>成立时间：</dt>
        <dd><input type="date" name="" v-model="foundTime"></dd>
       </dl>
       <dl>
        <dt>&nbsp;</dt>
        <dd>&nbsp;</dd>
       </dl>
       <dl>
        <dt>&nbsp;</dt>
        <dd>&nbsp;</dd>
       </dl>
      </div>
      <div style="margin-left:13px; margin-top:10px;"><span class="bold"><span class="red">* </span>出口产品：</span>
        <textarea v-model="mainProduct">
          
        </textarea>
      </div>
    </div>
    <p class="pop">以下为非必填信息，但为了您公司的展示形象，希望填写完整</p>
   </div>
   <!--资质信息-->
   <div class="bgwhite">
    <h2 class="title">
     上传图片信息
    </h2>
    <div class="bg-hui-info">
      <div class="piaoju">
       <dl>
         <dt>产品图片</dt>
         <dd>
          <div class="pic1 f-pic1"><img :src="imgsSrc1"></div>
          <!-- <div class="btn-fil">
            <div class="btn-zi float-right mt40">点击上传</div>
          </div> -->
          <upload-img @imgSrcP="imgSrc1"><slot>点击上传</slot></upload-img>
        </dd>
       </dl>
      </div>
    </div>
    <div class="bg-hui-info">
      <div class="piaoju">
       <dl>
         <dt>工厂内景照片</dt>
         <dd>
          <div class="pic1 f-pic1"><img :src="imgsSrc2"></div>
          <!-- <div class="btn-fil">
            <div class="btn-zi float-right mt40">点击上传</div>
          </div> -->
          <upload-img @imgSrcP="imgSrc2"><slot>点击上传</slot></upload-img>
        </dd>
       </dl>
      </div>
    </div>
    <div class="bg-hui-info">
      <div class="piaoju">
       <dl>
         <dt>生产设备照片</dt>
         <dd>
          <div class="pic1 f-pic1"><img :src="imgsSrc3"></div>
          <!-- <div class="btn-fil">
            <div class="btn-zi float-right mt40">点击上传</div>
          </div> -->
          <upload-img @imgSrcP="imgSrc3"><slot>点击上传</slot></upload-img>
        </dd>
       </dl>
      </div>
    </div>
    <!--图片结束-->
   </div>
   <!--主要装备-->
   <div class="bgwhite">
     <h2 class="title">主要装备能力情况</h2>
      <div class="bg-hui-info">
       <div class="company-info">
         <dl>
          <dt>设备名称：</dt>
          <dd><input type="text" name="" v-model="deviceName"></dd>
         </dl>
         <dl>
          <dt>规格型号：</dt>
          <dd><input type="text" name=""  v-model="productModel"></dd>
         </dl>
         <dl>
          <dt>数量：</dt>
          <dd><input type="text" name=""  v-model="quantity"></dd>
         </dl>
        </div>
        <div class="company-info">
         <dl>
          <dt>性能说明：</dt>
          <dd><input type="text" name="" v-model="performance"></dd>
         </dl>
         <dl>
          <dt>制造厂：</dt>
          <dd><input type="text" name=""  v-model="manufacturer"></dd>
         </dl>
         <dl>
          <dt>投入使用时间：</dt>
          <dd><input type="date" name=""  v-model="engagedTime"></dd>
         </dl>
        </div>
        <div class="company-info">
         <dl>
          <dt>产能情况：</dt>
          <dd><input type="text" name="" v-model="capacity"></dd>
         </dl>
 <!--        <div style="margin-left:10px; margin-top:10px;">备注：
          <textarea v-model="remarks">
            备份
          </textarea>
        </div> -->
         <dl>
          <dt>&nbsp;</dt>
          <dd>&nbsp;</dd>
         </dl>
         <dl>
          <dt>&nbsp;</dt>
          <dd>&nbsp;</dd>
         </dl>
        </div>
      </div>
   </div>
   <!--主要原材料采购渠道情况-->
   <div class="bgwhite">
     <h2 class="title">主要原材料采购渠道情况</h2>
      <div class="bg-hui-info">
       <div class="company-info">
         <dl>
          <dt>原材料名称：</dt>
          <dd><input type="text" name="" v-model="materialName"></dd>
         </dl>
         <dl>
          <dt>规格型号及主要技术：</dt>
          <dd><input type="text" name="" v-model="productModel1"></dd>
         </dl>
         <dl>
          <dt>供应商名称：</dt>
          <dd><input type="text" name="" v-model="supplierName"></dd>
         </dl>
        </div>
         <div class="company-info">
         <dl>
          <dt>供应商类型：</dt>
          <dd><input type="text" name="" v-model="supplierType"></dd>
         </dl>
         <dl>
          <dt>年供货金额（万）：</dt>
          <dd><input type="text" name="" v-model="annualAmount"></dd>
         </dl>
         <dl>
          <dt>年采购总额比：</dt>
          <dd><input type="text" name="" v-model="materialRatio"></dd>
         </dl>
        </div>
        <div style="margin-left:10px; margin-top:10px;">备注：
          <textarea v-model="remarks">
            备份
          </textarea>
        </div>
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
        <img :src="imgsSrc4" id="shenfImg1">
        <!-- <div class="file">
          <div class="file-up"><input type="file" name="" id="shenf1" @change="setIdCard($event, 'shenf1','shenfImg1')"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc4"><slot>点击上传</slot></upload-img>
       </dd>
      </dl>
      <dl>
       <dt>身份证反面</dt>
       <dd>
        <img :src="imgsSrc5">
        <!-- <div class="file">
          <div class="file-up"><input type="file" name="" id="shenf1"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc5"><slot>点击上传</slot></upload-img>
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
        <img :src="imgsSrc6">
        <!-- <div class="file">
          <div class="file-up"><input type="file" name="" id="shenf1"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc6"><slot>点击上传</slot></upload-img>
      </dd>
     </dl>
     <dl>
      <dt>海关注册登记证照片</dt>
      <dd>
        <img :src="imgsSrc7">
        <!-- <div class="file">
          <div class="file-up"><input type="file" name="" id="shenf1"></div>
          <div class="btn-zi btn-zi-big float-right">点击上传</div>
        </div> -->
        <upload-img @imgSrcP="imgSrc7"><slot>点击上传</slot></upload-img>
      </dd>
     </dl>
    </div>
   </div>
   <div class="bgwhite">
    <h2 class="title">
     企业其它补充信息
    </h2>
    <div class="bg-hui-info">
     暂无
    </div>
   </div>
   <div class="center">
    <button class="btn btn-zi-big" @click="submitUser()">提 &nbsp; 交</button>
   </div>

<!--倩倩的
<img :src="policyurl">
<input type="file" @change="onFileChange($event)" multiple="multiple"  id="shangch" style="display: none">
<input type="text" class="sck" :value="iSrc">
<label for="shangch" class="sc">上传</label>
-->
<!-- <input type="text" class="sck" :value="iSrc"> -->
<!-- <img :src="policyurl">
<input type="file" @change="onFileChange($event)" multiple="multiple"  id="shangch" style="display: none">

<label for="shangch" class="sc">上传</label>-->
<!-- <div><img :src="imgsSrc5"></div> 
<upload-img @imgSrcP="imgSrc5">上传</upload-img> -->

 </div>
</template>
<script type="text/javascript">
import uploadImg from '../base/uploadImg'
export default({
  data () {
    return {
      // companyData: JSON.parse(window.localStorage.getItem('companys')),
      // rootCompanyData: JSON.parse(window.localStorage.getItem('rootCompanys')),
      submitTrue: true,
      // 省
      province: '' ,
      // 市
      city: '',
      // 企业性质
      sile: '',
      // 工厂名
      entName: '',
      // 上一年出口规模 |
      exportScale: '',
      // 上一年退税金额 |
      refundTax: '',
      // 成立时间 |
      foundTime: '', 
      // 主营产品 |
      mainProduct: '',
      // 工厂主营产品图片
      productImg: '',
      // 法人代表身份证 |
      idCard: '',   
      // | 公司营业执照
      businessLicence: '',
      // 工厂设备
      // 工厂设备
      factoryInside: '',
      productPhoto: '',
      deviceName: '',
      productModel1: '',
      quantity: '',
      performance: '',
      manufacturer: '',
      engagedTime: '',
      capacity: '',
      // 工厂原材料
      // 工厂原材料
      materialName: '',
      productModel: '',
      supplierName: '',
      supplierType: '',
      annualAmount: '',
      materialRatio: '',
      remarks: '',
      customsRegister: '',
      // materialName1: '',
      // productModel1: '',
      // supplierName1: '',
      // supplierType1: '',
      // annualAmount1: '',
      // materialRatio1: '',
      // remarks1: '',
      // 新增后返回来的id
      newId: '',
      policyurl: '',
      iSrc: '',
      // 图片路径
      imgsSrc1: '',
      imgsSrc2: '',
      imgsSrc3: '',
      imgsSrc4: '',
      imgsSrc5: '',
      imgsSrc6: '',
      imgsSrc7: ''
    }
  },
  components: {
    uploadImg
  },
  mounted () {
  },
  methods: {
    // 提交按钮
    submitUser (datas) {
      // this.$emit('factoryInfo', datas)
      // 调编辑企业信息接口
      let parames = {
        'province': this.province || '' ,
        'sile': this.sile || '',
        // 市
        'city': this.city || '',
        // 工厂名
        'entName': this.entName || '',
        // 上一年出口规模 |
        'exportScale': this.exportScale || '',
        // 上一年退税金额 |
        'refundTax': this.refundTax || '',
        // 成立时间 |
        'foundTime': this.foundTime || '', 
        // 主营产品 |
        'mainProduct': this.mainProduct || '',
        // 工厂主营产品图片
        'productImg': this.imgsSrc1 || '',
        // 法人代表身份证 |
        'idCard': this.imgsSrc4 + ',' + this.imgsSrc5 || '',   
        // | 公司营业执照
        'businessLicence': this.imgsSrc6 || '',
        'customsRegister': this.imgsSrc7 || ''
      }
      let parames1 ={
        'factoryInside': this.imgsSrc2 || '',
        'productPhoto': this.imgsSrc3 || '',
        'deviceName': this.deviceName || '',
        'productModel': this.productModel || '',
        'quantity': this.quantity || '',
        'performance': this.performance || '',
        'manufacturer': this.manufacturer || '',
        'engagedTime': this.engagedTime || '',
        'capacity': this.capacity || ''
      }
      let parames2 = {
        'materialName': this.materialName || '',
        'productModel': this.productModel1 || '',
        'supplierName': this.supplierName || '',
        'supplierType': this.supplierType || '',
        'annualAmount': this.annualAmount || '',
        'materialRatio': this.materialRatio || '',
        'remarks': this.remarks || ''
      }
      // console.log(parames, parames1, parames2);
      // let paramesAll = Object.assign(parames, parames1, parames2)
      // this.outsideUser = window.localStorage.setItem('outsideUser', paramesAll ) 
      // 条件判断
      if (this.entName === '') {
        this.$alert('公司名称不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.entNature === '') {
        this.$alert('企业性质不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.foundTime === '') {
        this.$alert('成立时间不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.engagedTime == null) {
        this.$alert('投入时间不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.mainProduct === '') {
        this.$alert('主营产品不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.imgsSrc1 === '') {
        this.$alert('主营产品图片不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.exportRank === '') {
        this.$alert('海关出口等级不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.city === '') {
        this.$alert('所在城市不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.sile === '') {
        this.$alert('企业性质不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.refundTaxRank === '') {
        this.$alert('退税等级不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.refundTax === '') {
        this.$alert('退税金额不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.exportScale === '') {
        this.$alert('上一年出口规模不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.imgsSrc4 === '') {
        this.$alert('身份证正面信息不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.imgsSrc5 === '') {
        this.$alert('身份证反面信息不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      if (this.imgsSrc6 === '') {
        this.$alert('公司营业执照不能为空', '提示信息', {
          confirmButtonText: '确定'
        })
      }
      // 条件end
      // 新增客户
      this.$http.post('/api/relation/add/owncus', {'factoryInfo': parames, 'factoryEquipment': parames1, 'factoryMaterial': parames2})
        .then(res => {
          if (res.data.status==200) {
            // 获取客户关系
            this.$http.get('/api/relation/add/owncusrelation?id=' + res.data.id)
              .then(res => {
                console.log('777',res)
                // setTimeout(function(){
                  this.$router.push({
                    name: 'myUser'
                  })
                // },1000)
              })
          }
        })
    },
    // 上传
    imgSrc (_imgSrc) {
      this.imgsSrc = _imgSrc
      console.log('mmk', this.imgSrc)
    },
    // 上传身份证正面
    //上传
    // 倩倩写的start
    // onFileChange(e) {
    //   let _this = this
    //   var fs = e.target.files || e.dataTransfer.files;
    //   this.iSrc = fs[0].name;
    //   if (fs && fs.length > 0) {
    //     // 获取目前上传的文件
    //     var file = fs[0]; // 文件大小校验的动作
    //     if (file.size > 1024 * 1024 * 2) {
    //       alert("文件已超过2M！上传失败！");
    //     } else {
    //       var zipFormData = new FormData();
    //       zipFormData.append("files", file); //filename是键，file是值，就是要传的文件，test.zip是要传的文件名
    //       console.log(zipFormData);
    //       //发送请求上传--图片
    //       this.$http.post("/api/auth/upload/image",zipFormData)
    //       //{headers: { "Content-Type": "multipart/form-data" }}
    //         .then(function(res) {
    //           console.log(res);
    //           if (res != null) {
    //             // 获取文件的路径地址
    //             let policyurla = res.data.data;
    //             _this.policyurl = policyurla;
    //           } else {
    //             alert("上传失败");
    //           }
    //         });
    //     }
    //   }
    // },
    // 倩倩写的end
    // setIdCard (e, id, imgId) {
    //   let _this = this
    //   // var inputBox = document.getElementById(id)
    //   // var img = document.getElementById(imgId);
    //   //   var reader = new FileReader();
    //   //   reader.readAsDataURL(inputBox.files[0]);//发起异步请求
    //   //   reader.onload = function(){
    //   //     //读取完成后，将结果赋值给img的src
    //   //     img.src = this.result
    //   //     _this.upFile(this.result)
    //   //   }
    //   // this.idCard = e.target.files
    //   this.idCard = e.target.files[0]
    //   console.log('e', this.idCard)
    //   // let files = e.target.files[0]
    //   // let reader = new FileReader()
    //   // reader.readAsDataURL(files)
    //   // reader.onload = function (e) {
    //   //   var result = document.getElementById(id)
    //   //   // 显示文件
    //   //   result.innerHTML = '<img src="' + this.result + '" class="img-size" width="260" height="147"/>'
    //   // }
    //   this.$http.post('/api/auth/upload/image', {'idenimg': _this.idCard})
    //     .then(res => {
    //       console.log(res)
    //     })
    // },
    upFile (src) {
      let url = ''
      this.$http.post('/api/auth/upload/image/', {idenimg: src})
        .then(function (res) {
          console.log(res)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    // imgSrc
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
     // 上传付款水单
    imgSrc5 (_imgSrc) {
      this.imgsSrc5 = _imgSrc
    },
    // 上传收汇凭证
    imgSrc6 (_imgSrc) {
      this.imgsSrc6 = _imgSrc
    },
    // 上传结汇凭证
    imgSrc7 (_imgSrc) {
      this.imgsSrc7 = _imgSrc
    }
  }
})
</script>
<style type="text/css">
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
  .btn-file{
    float:none;
  }
  .pic1{
    min-height:170px;
  }
  .company-info dl dd{
    width:49%;
  }
  .file-up2 input[type='file']{
    left:480px;
  }
  .shenfen .file-up3 input[type='file']{
    left:117px;
  }
</style>
