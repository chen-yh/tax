<template>
  <div class="details">
  <brand></brand>
   <div class="hearder">
     <div class="contentBack">
         <div class="contentType">
          <table width="800px" border="0" align="center">
           <tr>
            <td align="center" height="80px">
             <p class="active tit-big"><router-link :to="{name:'outCreatAccount'}"> 创建子账号 </router-link></p><hr/>
            </td>
            <td align="center">
             <p class="tit-big"><router-link :to="{name:'outManagementSubAccount'}"> 管理子账号 </router-link></p><hr/>
            </td>
           </tr>
           <tr>
             <td align="center" colspan="2" height="40px">
             <p style="color: #FF8C00"> 如果你是外综服企业,注册后可获得免费展示机会,获取更多客户,平台提供融资 </p>
            </td>
           </tr>
          </table>
          <table width="800px" border="0" align="center">
           <tr>
            <td align="right" height="60px" width="260px">
             <p> 用户名: </p>
            </td>
            <td align="left" style="padding-left: 30px">
              <p><input class="username" placeholder="请输入用户名,英文加数字" style="height: 30px; width: 300px" type="text" name="name" @focus="userf()"></p>
            </td>
           </tr>
           <tr>
             <td align="right" height="60px" width="260px">
               <p> 密码: </p>
             </td>
             <td align="left" style="padding-left: 30px">
               <p> <input class="password" placeholder="请输入密码" style="height: 30px; width: 300px" type="text" name="name" @focus="password()"> </p>
             </td>
           </tr>
           <tr>
             <td align="right" height="60px">
               <p> 公司名称: </p>
             </td>
             <td align="left" style="padding-left: 30px">
               <p> <input class="realName" placeholder="请输入公司名称" style="height: 30px; width: 300px" type="text" name="name" @focus="realName()"> </p>
             </td>
           </tr>
           <tr>
             <td align="right" height="60px">
               <p> 用户类型: </p>
             </td>
             <td align="left" style="padding-left: 30px">
              <select v-model="userTypeModel" name="userType" id="userTypeSelect" style="height: 30px; width: 300px"><option v-for="da in userType"  v-bind:value="da.value" v-bind:key="da.id">{{ da.text }}</option></select>
             </td>
           </tr>
            <tr>
             <td align="center" colspan="2" height="60px">
             <p> <button id="registerButton" @click="registerRequest ()"> 注册 </button></p>
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
// 面包屑
import brand from '../../../components/base/brand'
import $ from 'jquery'
export default({
  data () {
    return {
      userTypeModel: '',
      userType: [
        {text: '业务员', value: 2},
        {text: '财务员', value: 3}
      ]
    }
  },
  components: {
    tablesTitMore,
    brand
  },
  mounted () {
    // this.searchAllUserList()
    // this.getAllDept ()
    // this.departmentSelect()
    // this.roleSelect()
  },
  methods: {
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
      let _this = this
      let username = $('.username').val()
      let password = $('.password').val()
      let realName = $('.realName').val()
      let deptno = $('#userTypeSelect option:selected').val()
      console.log(username, password, realName, deptno)
      this.$http.post('/api/user/add/child', {
        userName: username,
        entName: realName,
        userType: deptno,
        passWord: password
      }).then(function (res) {
        console.log(res)
        if (res.data.msg === '新增成功') {
          _this.$router.push({
            name: 'outManagementSubAccount'
          })
        }else {
          alert(res.data.msg)
        }
      }).catch(function (error) {
        // console.log(error)
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
#registerButton {
  width: 300px;
  height: 40px;
  background-color: #70419f;
  color: #FFFFFF;
  font-size: 15px;
}
.active{
  background:#70419f; 
  color:#fff;
  height: 30px;
}
.active a{
  color:#fff;
}
.tit-big{
  font-size: 16px; height: 44px; line-height: 44px;
}
</style>
