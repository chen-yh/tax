<template>
  <div class="details">
   <div class="hearder">
     <h1> 首页 > 修改主账户密码 </h1>
     <div class="contentBack">
       <div class="contentTitle">
         <h1 id="contentTiLabel"> 修改主账户密码 </h1><hr/>
          <div class="forget-content">
                <ul>
                    <li><span class="num active">1</span><span class="dd active">获取验证码</span></li>
                    <li><span class="num">2</span><span class="dd">设置新密码</span></li>
                    <li><span class="num">3</span><span class="dd">设置完成</span></li>
                </ul>
                <div class="verification">
                    <p style="text-align: left; padding-left: 80px; padding-bottom: 40px"> {{phoneNumber}}</p>
                    <p><input type="password" placeholder=请输入验证码 class="password">
                    <button class="getCode" @click="getCode()"> 获取验证码 </button></p>
                </div>
                <a class="sureBtn" @click="nextSecond()">下一步</a>
            </div>
       </div>
     </div>
   </div>
  </div>
</template>
<script type="text/javascript">
import tablesTitMore from '../../../components/common/tables-tit-more'
import $ from 'jquery'
export default({
  data () {
    return {
      phoneNumber: '',
      countdown: 60
    }
  },
  components: {
    tablesTitMore
  },
  mounted () {
    // this.searchAllUserList()
    // this.getAllDept ()
    // this.departmentSelect()
    // this.roleSelect()
    this.getPhoneNumber()
  },
  methods: {
     getCode () {
      let timer = null
      let that = this
      let phone = this.$route.query.username
      if (this.countdown === 0) {
        $('.getCode').attr('disabled', false)
        $('.getCode').text('获取验证码')
        this.countdown = 60
      } else {
        $('.getCode').attr('disabled', true)  
        $('.getCode').text('重新发送(' + this.countdown + ')')
        this.countdown--  
        timer = setTimeout(function () {  
          that.getCode($('.getCode'))  
        },1000)
        var _this = this
        // 1、请求授信额度接口
        this.$http.get('/api/user/chit?phone=' + phone, {
        }).then(function (res) {
          // if (res.body.code == 200) {
            // alert('发送成功')
            clearInterval(timer)
          // }
          }).catch(function (error) {
            // alert('发送失败')
            clearInterval(timer)
          })
        return true;
      }
    },
    getPhoneNumber () {
      var obj = JSON.parse(localStorage.getItem('outsideUserLoginMsg'))
      this.phoneNumber = obj.mobile
    },
    userf () {
      $('.username').val()
    },
    password () {
      $('.password').val()
    },
    realName () {
      $('.realName').val()
    },
    nextSecond () {
      let phone = this.phoneNumber
      let verification = $('.password').val()
      var _this = this
      if (verification == null || verification === '请输入验证码' || verification.length == 0) {
         alert('请输入正确验证码')
      }else {
        _this.$router.push({name: 'outChangePasswordsTwo', query: {mobile: phone}})
      }
    }
  }
})
</script>
<style type="text/css" scoped>
.hearder {
  margin-left: 10px;
}
.contentBack{
  margin-left: 10px;
  background-color: #FFFFFF;
  height: 700px;
}
.contentTitle {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
#contentTiLabel{
  padding-top: 20px;
}
#authenticateIgView{
  margin-top: 20px;
}
#authenticateLabel{
  color: #FF0000;
}
#changePasswordsIgView{
  margin-top: 20px;
}
#trueIgView{
  margin-top: 20px;
}
.contenMessage table{
  margin-top: 40px;
  margin-left: 50px;
}
#phoneNumber {
  color: #FF0000;
}
#igVerificationCode{
  width: 150px;
  height: 30px;
  margin-left: 10px;
}
#igVerificationCodeImage{
  vertical-align: middle;
  margin-left: 10px;
}
#getIgVerificationCodeButton{
  width: 100px;
  height: 30px;
  margin-left: 10px;
}
#graphicVerificationCode{
  width: 150px;
  height: 30px;
  margin-left: 10px;
  margin-top: 10px;
  vertical-align: middle;
}
#nextButton {
  width: 300px;
  height: 40px;
  background-color: #e79c41;
  color: #FFFFFF;
  margin-top: 100px;
}
.forget-content {
    width: 60%;
    padding: 40px 0;
    margin: auto;
}
.forget-content ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.forget-content ul li {
    width: 25%;
    text-align: center;
}
.forget-content ul li span {
    color: #ccc;
}
.forget-content ul li span.num {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: #ccc;
    color: #fff;
    display: block;
    border-radius: 15px;
    margin: 0 auto; 
}
.forget-content ul li span.num.active {
    background: #70419f;
}
.forget-content ul li span.dd {
    display: block;
    padding-top: 10px;
}
.forget-content ul li span.dd.active {
    color: #70419f;
}
.verification {
    text-align: center;
    padding-top: 60px;
}
.verification input {
    width: 60%;
    height: 44px;
    line-height: 44px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding-left: 10px;
}
.sureBtn {
    width: 85%;
    height: 42px;
    line-height: 42px;
    text-align: center;
    color: #fff;
    background: #70419f;
    display: block;
    margin: 50px auto;
    cursor: pointer;
}
.getCode {
    width: 100px;
    height: 42px;
    color: #fff;
    background: #70419f;
}
.sureBtn>a:hover {
    color: #fff;
}

</style>
