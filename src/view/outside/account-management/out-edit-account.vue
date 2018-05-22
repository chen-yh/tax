<template>
  <div class="details">
   <div class="hearder">
     <div class="contentBack">
         <div class="contentType">
          <table width="800px" border="0" align="center">
           <tr>
           <td align="left" height="80px">
             <p style="font-size: 18px"><router-link :to="{name:'outCreatAccount'}"> 编辑子账号 </router-link></p><hr/>
            </td>
            <td align="center">
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
              <p><input style="height: 30px; width: 300px" type="text" class="username" name="name" @focus="userf ()" v-model="topUsername"></p>
            </td>
           </tr>
           <tr>
             <td align="right" height="60px" width="260px">
               <p> 密码: </p>
             </td>
             <td align="left" style="padding-left: 30px">
               <p> <input style="height: 30px; width: 300px" type="text" name="name" class="password" @focus="password ()" v-model="topPassword"></p>
             </td>
           </tr>
           <tr>
             <td align="right" height="60px">
               <p> 公司名称: </p>
             </td>
             <td align="left" style="padding-left: 30px">
               <p> <input style="height: 30px; width: 300px" type="text" name="name" class="realName" @focus="realName ()" v-model="topEntName"></p>
             </td>
           </tr>
           <tr>
             <td align="right" height="60px">
               <p> 用户类型: </p>
             </td>
             <td align="left" style="padding-left: 30px">
              <p> <select style="height: 30px; width: 300px" v-model="selected" id="userTypeSelect"><option v-for="da in data"  v-bind:value="da.v" v-bind:key="da.id"> {{ da.name }}</option></select> </p>
             </td>
           </tr>
            <tr>
             <td align="center" colspan="2" height="60px">
             <p> <button id="pushButton" @click="changeRequest ()"> 提交 </button></p>
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
    return {
      selected: '',
      data: [
        {
          name: '业务部', v: '2'
        },
        {
          name: '财务部', v: '3'
        }
      ],
      topUsername: '',
      topPassword: '',
      topEntName: ''
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
    this.messageShow()
  },
  methods: {
    messageShow () {
      let _this = this
      let thisId = this.$route.query.thisId
      let ssoId = this.$route.query.ssoId
      // console.log(thisId, ssoId)
      this.$http.post('/api/user/find/child', {
        id: thisId,
        ssoUserid: ssoId
      }).then(function (res) {
        // alert('请求成功')
        // console.log(res)
        _this.topUsername = res.data.result.userName
        _this.topPassword = res.data.result.passWord
        _this.topEntName = res.data.result.entName
        _this.selected = res.data.result.userType
      }).catch(function (error) {
        // console.log(error)
      })
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
    changeRequest () {
      let _this = this
      let thisId = this.$route.query.thisId
      let ssoId = this.$route.query.ssoId
      let username = $('.username').val()
      let password = $('.password').val()
      let realName = $('.realName').val()
      let deptno = $('#userTypeSelect option:selected').val()
      // console.log(username, password, realName, deptno)
      this.$http.post('/api/user/edit/child', {
        id: thisId,
        ssoUserid: ssoId,
        userName: username,
        passWord: password,
        entName: realName,
        userType: deptno
      }).then(function (res) {
        if (res.data.msg === '修改成功') {
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
#pushButton {
  width: 300px;
  height: 40px;
  background-color: #FF8C00;
  color: #FFFFFF;
  font-size: 15px;
}
</style>
