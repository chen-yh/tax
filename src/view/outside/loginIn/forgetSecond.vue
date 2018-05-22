<template>
    <div class="forget">
        <!-- 忘记密码 -->
        <div class="forget-cont c-w1200">
            <div class="forget-title">
                忘记密码
            </div>
            <div class="forget-content">
                <ul>
                    <li><span class="num active">1</span><span class="dd active">输入账户名</span></li>
                    <li><span class="num active">2</span><span class="dd active">获取验证码</span></li>
                    <li><span class="num">3</span><span class="dd">设置新密码</span></li>
                    <li><span class="num">4</span><span class="dd">设置完成</span></li>
                </ul>

                <div class="verification">
                    <input type="password" placeholder=请输入验证码 class="password">
                    <span class="getCode" @click="getCode()">获取验证码</span>
                </div>
                <a class="sureBtn" @click="nextSecond()">下一步</a>
            </div>
        </div>
    </div>
</template>
<script>
import vFooter from '@/components/v-footer'
import $ from 'jquery'
export default {
  name: 'userlogin',
  data () {
    return {
      countdown: 60
    }
  },
  components: {
    vFooter
  },
  methods: {
    getCode () {
      let timer = null
      let that = this
      let phone = this.$route.query.username
      // if (this.countdown === 0) {
      //   $('.getCode').attr('disabled', false)
      //   $('.getCode').text('获取验证码')
      //   this.countdown = 60
      // } else {
      //   $('.getCode').attr('disabled', true)  
      //   $('.getCode').text('重新发送(' + this.countdown + ')')
      //   this.countdown--  
      //   timer = setTimeout(function () {  
      //     that.getCode($('.getCode'))  
      //   },1000)
        var _this = this
        // 1、请求授信额度接口
        this.$http.get('/api/user/chit?phone=' + phone, {
        }).then(function (res) {
          // if (res.body.code == 200) {
          alert('发送成功')
          // }
          }).catch(function (error) {
            alert('发送失败')
          })
        // clearInterval(timer)
        return true;
      }
    },
    nextSecond () {
      let phone = this.$route.query.username
      let verification = $('.password').val()
      var _this = this
      // 1、请求授信额度接口
      this.$http.get('/api/user/inspect?phone=' + phone + '&verification=' + verification, {
      }).then(function (res) {
      // if (res.body.code == 200) {
      // alert(res.data.msg)
      _this.$router.push({name: 'outForgetPasswordThree', query: {mobile: phone}})
      // }
      }).catch(function (error) {
        alert('发送失败')
      })
    }
}
</script>
<style>
.forget {
    width: 100%;
    height: 100%;
    
}
.forget-cont {
    background: #f7f7f7;
    height: 490px;
    margin:0 auto;
    margin-top: 20px;
    margin-bottom: 100px;
    padding: 0 30px;
    box-sizing: border-box;
    width:684px;
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
.getCode {
    width: 20%;
    height: 42px;
    line-height: 42px;
    text-align: center;
    background: #70419f;
    color: #fff;
    display: inline-block;
    margin-left: 20px;
    border-radius: 5px;
}

.tips {
    display: block;
    color: #f6ad44;
    text-align: left;
    width: 85%;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
}
</style>