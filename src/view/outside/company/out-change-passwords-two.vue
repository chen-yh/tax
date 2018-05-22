<template>
  <div class="details">
   <div class="hearder">
    <p> 首页 > 修改密码 </p>
     <div class="contentBack">
       <div class="contentTitle">
        <h1 id="contentTiLabel"> 修改密码</h1><hr/>
            <div class="forget-content">
                <ul>
                    <li><span class="num active">1</span><span class="dd active">获取验证码</span></li>
                    <li><span class="num active">2</span><span class="dd active">设置新密码</span></li>
                    <li><span class="num">3</span><span class="dd">设置完成</span></li>
                </ul>

                <div class="verification">
                    <input type="password" placeholder=请输入新密码 class="password1">
                    <input type="password" placeholder=重新输入新密码 class="password2">
                    <span class="tips"></span>
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
export default({
  data () {
    return {}
  },
  components: {
    tablesTitMore
  },
  mounted () {
    // this.searchAllUserList()
    // this.getAllDept ()
    // this.departmentSelect()
    // this.roleSelect()
  },
  methods: {
    nextSecond () {
      let phone = this.$route.query.mobile
      let password1 = $('.password1').val()
      let password2 = $('.password2').val()
      var _this = this
      if (password1 === password2 && password1 != null && password1.length != 0) {
          _this.registerRequest ()
      }else {
        alert('请保证两次密码输入一致且不能为空')
      }
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
    registerRequest () {
      let phone = this.$route.query.mobile
      let password = $('.password1').val()
      var _this = this
      this.$http.post('/api/user/forget', {
        mobile: phone,
        passWord: password
      }).then(function (res) {
        if (res.data.msg === '密码修改成功') {
            _this.$router.push({name: 'outChangePasswordsThree'})
        }else {
          alert(res.data.msg)
        }
      }).catch(function (error) {
        alert('发送失败')
      })
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
.contentBack {
  background-color: #FFFFFF;
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
#changePasswordsLabel{
  color: #FF0000;
}
#trueIgView{
  margin-top: 20px;
}
.contenMessage table{
  margin-top: 40px;
  margin-left: 50px;
}
#loginInPasswords {
  margin-left: 10px;
  width: 200px;
  height: 30px;
}
#loginInPasswordsAgain{
  margin-left: 10px;
  width: 200px;
  height: 30px;
}
#nextButton {
  width: 300px;
  height: 40px;
  background-color: #e79c41;
  color: #FFFFFF;
  margin-top: 100px;
}
.forget-cont {
    background: #f7f7f7;
    height: 490px;
    margin-top: 20px;
    margin-bottom: 100px;
    padding: 0 30px;
    box-sizing: border-box;
}
.forget-title {
    border-bottom: 1px solid #ccc;
    padding: 30px 0 15px 0;
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
.sureBtn>a:hover {
    color: #fff;
}
.password2 {
  margin-top: 20px;
}

</style>
