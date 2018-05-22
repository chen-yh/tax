<template>
  <div class="details">
   <div class="hearder">
     <p> 首页 > 修改密码 </p>
     <div class="contentBack">
       <div class="contentTitle">
         <p id="contentTiLabel"> 修改密码 </p><hr/>
           <div class="contentType">
            <div class="forget-content">
              <ul>
               <li><span class="num active">1</span><span class="dd active">获取验证码</span></li>
               <li><span class="num active">2</span><span class="dd active">设置新密码</span></li>
               <li><span class="num active">3</span><span class="dd active">设置完成</span></li>
              </ul>
              <div class="verification">
               <p class="happy">
                 <span>新密码设置成功</span>
                 <span>请您牢记新密码</span>
               </p>
              </div>
               <router-link to="/" class="sureBtn">返回首页</router-link>
           </div>
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
#trueLabel{
  color: #FF0000;
}
#footMessage {
  margin-left: 40px;
  margin-top: 70px;
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
</style>
