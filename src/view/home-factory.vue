<template>
    <div class="wrap">
        <div class="view">
            <div class="view-logo">
                <router-link to="/" class="back">返回首页</router-link>
                <div class="logo-left">
                </div>
                <div class="logo-right">
                    <h2>Welcome</h2>
                    <div class="choose">
                        <input type="text" class="select" v-model="defaultType" readonly>
                        <span class="arrow" @click="sellistToggle()"></span>
                        <ul class="sel-list" v-if="sellist">
                            <li @click="chooseLoginStatus()">出口企业</li>
                            <li @click="chooseLoginStatus()">进口企业</li>
                            <li @click="chooseLoginStatus()">其他企业</li>
                        </ul>
                    </div>
                    <div class="choose">
                        <input type="text" class="username" v-model="promptName" @focus="userf()">
                    </div>
                    <div class="choose">
                        <input type="password" class="password" v-model="promptPass" @focus="userP()">
                    </div>
                    <div class="choose choose-remember">
                        <form action="">
                            <input type="radio" class="remember" id="remember" name="remember" v-model="checkeds"> 
                            <label for="remember" @click="clickRemember()">记住我</label>
                        </form>
                        <router-link to="/common/forgetPassword" class="forget-password">忘记密码?</router-link>
                    </div>
                    <div class="tips"></div>
                    <div class="choose-submit">
                        <button class="login-submit" id="login-submit" @click="loginSubmit()">登录</button>
                    </div>
                    <div class="choose-submit">
                        <p><span>还没账号?</span><router-link :to="{name:'factoryRegister'}" class="immediately">立即注册</router-link></p>
                    </div>
                </div>
            </div>
        </div>
        <vFooter></vFooter>
    </div>
</template>
<script>
    import vFooter from '@/components/v-footer'
    import $ from 'jquery'
    export default {
        // name: 'userlogin',
        data () {
            return {
                sellist: false,
                defaultType: '企业信息',
                checkeds: false,
                promptName: '请输入用户名',
                promptPass: '请输入登录密码',
                userType: 0
            }
        },
        components: {
            vFooter
        },
        methods: {
            sellistToggle () {
                this.sellist = !this.sellist;
            },
            chooseLoginStatus () {
                let eventLi = $(event.currentTarget).text()
                this.defaultType = eventLi;
                this.sellist = !this.sellist;
                // console.log(this.defaultType);
                if (this.defaultType == "出口企业") {
                        this.userType = 0;
                    }else if (this.companyType == "进口企业") {
                        this.userType = 1;
                    }else {
                        this.userType = 2;
                    }
            },
            userf () {
                $('.username').val('')
                $('.tips').text('')
            },
            userP () {
                $('.password').val('')
                $('.tips').text('')
            },
            clickRemember () {
                this.promptName = $('.username').val();
                this.promptPass = $('.password').val();
            },
            loginSubmit () {
                let userName = $('.username').val();
                let passWord = $('.password').val();
                let loginStatus = $('.select').val();
                if (this.userType === 0) {
                    $('.tips').text('请选择企业类型')
                }else if(userName === '' || userName === '请输入用户名') {
                    $('.tips').text('用户名不能为空')
                } else if (passWord === '' || passWord === '请输入登录密码') {
                    $('.tips').text('密码不能为空')
                } else {
                    var _this = this
                    this.$http.post('/api/user/login', {
                        userType: this.userType,
                        userName: userName,
                        passWord: passWord,
                    }).then(function (res) {
                        if (res.data.msg === '登陆成功') {
                            localStorage.setItem('factoryUserLoginMsg', JSON.stringify(res.data.result))
                            _this.$router.push({name: 'fHome',query: {'info': res.data.result}})
                        }else {
                            alert(res.data.msg)
                        }
                        }).catch(function (error) {
                        })
                }
            }
        }
    }
</script>
<style scoped>
.wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.view {
    background: url(../../static/img/bg_denglu.jpg) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    position: relative;
}
.view-logo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

.view-logo {
    min-width: 700px;
    width: 50%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo-left {
    min-width: 400px;
    width: 60%;
    height: 100%;
    background: -webkit-linear-gradient(left, #8476a2, #3c2d68);
    background: -o-linear-gradient(left, #8476a2, #3c2d68);
    background: -moz-linear-gradient(left, #8476a2, #3c2d68);
    background: linear-gradient(left, #8476a2, #3c2d68); 
    background: url('../../static/img/bg_denglul.png');
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    background-size: 100%;
}
.logo-right {
    min-width: 360px;
    width: 40%;
    height: 100%;
    background: #fff;
    padding: 0 45px;
    box-sizing: border-box;
}
.logo-right h2 {
    font-size: 18px;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 10px;
}
.choose {
    border-bottom: 1px solid #53347d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    position: relative;
}
.sel-list {
    width: 100%;
    background: #ececec;
    height: 120px;
    position: absolute;
    left: 0;
    top: 55px;
    z-index: 100;
    overflow-y: scroll;
}
.sel-list li {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
}
.sel-list li:hover {
    background: #ccc;
}
.sel-list li:last-child {
    border: none;
}
.remember {
    margin-right: 10px;
}
.choose-remember {
    color: #666;
}
.choose-remember, .choose-submit {
    border: none;
}
.choose-submit {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 42px;
}
.login-submit {
    width: 100%;
    height: 100%;
    color: #fff;
    border: none;
    border-radius: 3px;
    line-height: 42px;
    text-align: center;
    background: #6d4c9d;
    cursor: pointer;
}
::-webkit-input-placeholder {  
    color: #999;  
}
.select, .username, .password {
    height: 100%;
    padding: 25px 0 6px 10px;
    box-sizing: border-box;
    width: 312px;
    border: none;
    outline: none;
    font-size: 14px;
    color: #999;
}
.arrow {
    width: 0;
    height: 0;
    border-top: 8px solid #6d4c9d;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    position: absolute;
    right: 0;
    bottom: 15px;
    cursor: pointer;
}
.forget-password, .immediately {
    color: #f99a00;
}
.tips {
    color: #f99a00;
    height: 15px;
}
.back {
    color: #fff;
    position: absolute;
    top: -30px;
    left: 0;
}
</style>