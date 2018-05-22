<template>
    <div class="register-main">
        <h2>注册账户</h2>
        <h3>免费注册您的账户，并帮助我们更好的了解你。您将使用此信息登录到大路网</h3>
       <!--  <div class="register-msg">
            <span class="block">注册类型 <b class="text-red">*</b> </span>
            <div class="registerType">
                <div class="p">
                    <span class="exportCompany" id="exportCompany" @click="chooseType('1')"><b></b></span>
                    <label for="exportCompany">出口企业 </label>
                </div>
                <div class="p">
                    <span class="inCompany" id="inCompany"  @click="chooseType('1')"><b></b> </span>
                    <label for="inCompany">进口企业</label>
                </div>
                <div class="p">
                    <span class="inCompany" id="otherCompany" @click="chooseType('2')"><b></b> </span>
                    <label for="inCompany">其他企业</label>
                </div>
            </div>
        </div> -->
        <div class="register-msg">
            <span class="block">用户名 <b class="text-red">*</b> </span>
            <input type="text" class="userName" @focus="userFocus()">
        </div>
        <div class="register-msg">
            <span class="block">密码 <b class="text-red">*</b> </span>
            <input type="password" class="password" @focus="passFocus()">
        </div>
        <div class="register-msg">
            <span class="block">确认密码 <b class="text-red">*</b> </span>
            <input type="password" class="sure-password" @focus="sureFocus()">
        </div>
        <div class="register-msg">
            <span class="block">企业名称 <b class="text-red">*</b> </span>
            <input type="text" class="company-name" @focus="companyFocus()">
        </div>
        <div class="register-msg">
            <span class="block">手机号码 <b class="text-red">*</b> </span>
            <div class="phone-box">
                <input type="text" class="phone" @focus="phoneFocus()">
                <span class="getCode" @click="getCode()">获取验证码</span>
            </div>
        </div>
        <div class="register-msg">
            <span class="block">验证码 <b class="text-red">*</b> </span>
            <input type="password" class="code" @blur="codeBlur()">
        </div>
        <div class="register-msg">
            <div class="tips"></div>
        </div>
        <div class="submitBtn">
            <span @click="registerSubmit()">注册</span>
        </div>
        <div class="register-msg msg-center">
            通过创建一个账户，您同意我们的<a class="text-2869f6">服务条款</a>和<a class="text-2869f6">隐私政策</a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return  {
      countdown : 60,
      companyType: '',
      userType: 0
    }
},
    mounted () {
    // this.chooseType (amount)
    },
    methods: {
      // chooseType (amount) {
      //     $('.registerType').on('click', 'span', function(){
      //         $(this).find('b').addClass('chooseActive').end();
      //         $(this).parent().siblings().find('b').removeClass('chooseActive')
      //         this.companyType = $(this).next().text();
      //         // 1、请求授信额度接口
      //         if (this.companyType == "出口企业") {
      //             this.userType = 0;
      //         }else if (this.companyType == "进口企业") {
      //             this.userType = 1;
      //         }else {
      //             this.userType = 2;
      //         }
      //     })
      // },
    userFocus () {
      $('.tips').text('');
    },
    // 密码
    passFocus () {
                $('.tips').text('');
                let userName = $('.userName').val();
                let uPattern = /^[a-zA-Z0-9_.]{6,16}$/;
                if(userName == '') {
                    $('.tips').text('用户名不能为空').addClass('text-red')
                } else {
                    $('.tips').text('正确！').removeClass('text-red').addClass('text-green')
                    return true;
                }
            },
            // 确认密码
            sureFocus () {
                $('.tips').text('');
                let uPattern = /^[a-zA-Z0-9_.]{6,16}$/;
                let password = $('.password').val();
                if(password == '') {
                    $('.tips').text('密码不能为空').addClass('text-red')
                } else {
                    $('.tips').text('正确！').removeClass('text-red').addClass('text-green')
                    return true;
                }
            },
            // 公司名称
            companyFocus () {
                $('.tips').text('');
                let password = $('.password').val();
                let surePassword = $('.sure-password').val();
                if(password == '') {
                    $('.tips').text('确认密码不能为空').addClass('text-red')
                } else if (password != surePassword) {
                    $('.tips').text('密码不一致，请重新输入').addClass('text-red')
                } else {
                    $('.tips').text('正确！').removeClass('text-red').addClass('text-green')
                    return true;
                }
            },
            // 手机号
            phoneFocus () {
                $('.tips').text('');
                let companyName = $('.company-name').val();
                let uPattern = /^[\u4e00-\u9fa5]{0,20}$/;
                if(companyName == '') {
                    $('.tips').text('企业名称不能为空').addClass('text-red')
                } else {
                    $('.tips').text('正确！').removeClass('text-red').addClass('text-green')
                    return true;
                }
            },
            // 获取验证码
            getCode () {
                $('.tips').text('');
                let phone = $('.phone').val();
                let uPattern = /^1[3,5,7,8]\d{9}$/;
                if(phone == '') {
                    $('.tips').text('手机号不能为空').addClass('text-red')
                } else if (!uPattern.test(phone)) {
                    $('.tips').text('请输入正确的的手机号').addClass('text-red')
                } else {
                    let that = this;
                    let timer = null;
                    if (this.countdown == 0) {  
                        $('.getCode').attr("disabled", false);  
                        $('.getCode').text("获取验证码")
                        this.countdown = 60;  
                    } else {  
                        $('.getCode').attr("disabled", true);  
                        this.countdown--;  
                        $('.getCode').text("重新发送(" + this.countdown + ")")
                        timer = setTimeout(function() {  
                            that.getCode($('.getCode'))  
                        },1000)
                        var _this = this
                        // 1、请求授信额度接口
                        this.$http.post('/api/user/chit?phone=' + phone, {
                        }).then(function (res) {
                            // if (res.body.code == 200) {
                                alert('发送成功');
                            // }
                        }).catch(function (error) {
                            alert('发送失败')
                        })
                        }
                    $('.tips').text('正确！').removeClass('text-red').addClass('text-green')
                    clearInterval(timer)
                    return true;
                }
            },
            // 验证码
            codeBlur () {
                $('.tips').text('');
                let code = $('.code').val();
                let uPattern = /^\d{6}$/;
                if(code == '') {
                    $('.tips').text('验证码不能为空').addClass('text-red')
                } else if (!uPattern.test(code)) {
                    $('.tips').text('请输入正确的验证码').addClass('text-red')
                } else {
                    $('.tips').text('正确！').removeClass('text-red').addClass('text-green')
                    return true;
                }
            },

            registerSubmit () {
                var userName = $('.userName').val();
                var password = $('.password').val();
                var surePassword = $('.sure-password').val();
                var companyName = $('.company-name').val();
                var phone = $('.phone').val();
                var code = $('.code').val();
                var userInfomation = {
                    companyType: this.companyType,
                    userName: userName,
                    passWord: password,
                    surePassword: surePassword,
                    companyName: companyName,
                    phone: phone,
                    code: code
                }
                // && this.getCode()
                if (this.passFocus() && this.sureFocus() && this.companyFocus() && this.phoneFocus() && this.codeBlur()) {
                    // console.log('????')
                    // localStorage.setItem('userInfomation', JSON.stringify(userInfomation))
                    // this.$router.push('/logins')
                    var _this = this
                    this.$http.post('/api/user/register', {
                        userType: 3,
                        userName: userName,
                        passWord: password,
                        entName: companyName,
                        mobile: phone,
                        verification: code
                    }).then(function (res) {
                      if (res.data.msg === '注册成功') {
                          _this.$router.push({name: 'home'})
                      }else {
                        // console.log(res)
                        // alert(res.data.msg)
                      }
                    }).catch(function (error) {

                    })
                }
            }
        }
    }
</script>
<style scoped>
.header {
    background: #70419f;
}
.register-main {
    width: 684px;
    height: 990px;
    background: #f7f7f7;
    margin: 0 auto;
    border: 1px solid #ccc;
    margin-top: 22px;
    margin-bottom: 100px;
    padding: 34px 52px;
}
.register-main h2 {
    font-size: 20px;
    padding-bottom: 20px;
    font-weight: bold;
}
.register-main h3 {
    margin-bottom: 30px;
}
.register-msg {
    width: 100%;
    margin-bottom: 15px;
    overflow: hidden;
}
.register-msg span {
    padding-bottom: 10px;
}
.register-msg input {
    width: 100%;
    height: 42px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding-left:10px;
}
.register-msg .remarks {
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
.phone-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.phone-box .phone {
    width: 70%;
}
.phone-box .getCode {
    width: 25%;
    height: 42px;
    line-height: 42px;
    background: #70419f;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    display: inline-block;
    padding-bottom: 0;
}
.register-msg .trade, .register-msg .target {
    width: 250px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
}
.register-msg .m-sg {
    width: 50%;
    float: left;
}
.register-msg p {
    padding-top: 20px;
}

.register-msg p:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.register-msg .tips {
    height: 50px;
    line-height: 50px;
}
.submitBtn {
    background: #70419f;
    height: 45px;
    text-align: center;
    line-height: 45px;
    border-radius: 5px;
}

.submitBtn span {
    color: #fff;
}

.msg-center {
    text-align: center;
    padding-top: 20px;
}
.text-2869f6 {
    color: #2869f6;
}

.registerType {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #efecf2;
    height: 48px;
}
.registerType .p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 20%;
}
.registerType .p span {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    padding-bottom: 0;
    background: #fff;
    margin-right: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.registerType .p span b {
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 3px;
}
.registerType .p span b.chooseActive {
    width: 6px;
    height: 6px;
    background: #684280;
    border-radius: 3px;
}
</style>