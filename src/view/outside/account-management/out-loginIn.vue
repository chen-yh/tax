<template>
  <div class="details">
   <div class="hearder">
     <div class="contentBack">
         <div class="contentType">
          <table width="800px" border="0" align="center">
           <tr>
            <td align="left" height="80px">
            </td>
            <td align="center">
            </td>
           </tr>
           <tr>
             <td align="center" colspan="2" height="40px">
             <table border="1" width="500px" rules="none">
               <tr style="height: 90px">
                 <td colspan="2">
                   <p style="font-size: 20px" align="center"> 账户登录 </p>
                 </td>
               </tr>
               <tr style="height: 70px; width: 100px">
                 <td align="right">
                   <p> 用户名: </p>
                 </td>
                 <td align="center">
                   <p><input style="height: 30px; width: 200px" type="text" name="name"></p>
                 </td>
               </tr>
               <tr style="height: 90px; width: 100px">
                 <td align="right">
                   <p> 密码: </p>
                 </td>
                 <td align="center">
                   <p><input style="height: 30px; width: 200px" type="text" name="name"></p>
                 </td>
               </tr>
               <tr>
                 <td align="right" colspan="2">
                   <p style="color: #FF8C00; padding-right: 20px"> 忘记密码? </p>
                 </td>
               </tr>
               <tr>
                 <td align="center" colspan="2" style="height: 90px; width: 100px">
                   <p><button id="loginInButton"> 登录 </button> </p>
                 </td>
               </tr>
                <tr>
                 <td align="right" colspan="2" style="height: 90px; width: 100px">
                   <p style="padding-right: 20px">还没有账号,请先注册</p>
                 </td>
               </tr>
             </table>
            </td>
           </tr>
       </table>
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
#loginInButton {
  width: 300px;
  height: 40px;
  background-color: #FF8C00;
  color: #FFFFFF;
  font-size: 15px;
}
</style>
