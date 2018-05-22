<template>
    <div class="details">
        <div class="hearder">
            <p style="color: #A9A9A9" > 当前位置 > 首页 > 账户管理 > 创建账户 </p>
            <div class="contentBack">
                <div class="contentTitle">
                    <div class="contentType">
                        <p style="height: 50px; line-height: 70px; font-size: 17px">用户管理</p><hr/>
                        <table border="0" align="center" style="margin-top: 50px">
                            <tr>
                                <td align="right" height="80px" width="300px">
                                    <p> 账号 : </p>
                                </td>
                                <td align="center" height="40px" width="400px">
                                    <input type="text" class="username" placeholder="请输入用户名" style="height: 40px; width: 280px" @focus="userf()">
                                </td>
                                <td align="left">
                                    <p><img src="../../../assets/img/ooway-adduser-username-message.png"> </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="right" height="80px">
                                    <p> 密码 : </p>
                                </td>
                                <td align="center" height="40px" >
                                    <input type="text" class="password" placeholder="请输入密码" style="height: 40px; width: 280px" @focus="password()">
                                </td>
                                <td align="left">
                                    <p><img src="../../../assets/img/ooway-adduser-passwords-message.png"> </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="right" height="80px">
                                    <p> 真实姓名 : </p>
                                </td>
                                <td align="center" height="40px">
                                    <input type="text" class="realname" placeholder="请输入账户名" style="height: 40px; width: 280px" @focus="realname()">
                                </td>
                                <td align="left">
                                </td>
                            </tr>
                            <tr>
                                <td align="right" height="80px">
                                    <p> 所属部门 : </p>
                                </td>
                                <td align="center" height="40px">
                                     <select v-model="subordinateDepartmentsModel" name="subordinateDepartments" id="subordinateDepartments" style="height: 40px; width: 280px">
                                        <option v-for="da in departmentData"  v-bind:value="da.id" v-bind:key="da.id">{{ da.name }}</option></select>
                                </td>
                                <td align="center">
                                </td>
                            </tr>
                            <tr>
                                <td align="right" height="80px">
                                    <p> 分配角色 : </p>
                                </td>
                                <td align="center" height="40px">
                                    <select style="height: 40px; width: 280px" v-model="assignRolesModel" name="assignRoles" id="assignRoles"><option v-for="da in data2"  v-bind:value="da.id" v-bind:key="da.id"> {{ da.roledesc }}</option></select>
                                </td>
                                <td align="center">
                                </td>
                            </tr>
                             <tr>
                                <td>
                                </td>
                                <td align="center" height="40px">
                                    <p><input name="radio" class="radio" type="radio" value="1" v-model="thisChecked"/> 开通 </p>
                                </td>
                                <td align="left" width="300px">
                                    <p><input name="radio" class="radio" type="radio" value="2" v-model="thisChecked"/> 未开通 </p>
                                </td>
                            </tr>
                             <tr>
                                <td align="right" height="80px">
                                </td>
                                <td align="left" height="40px">
                                    <button style="background-color: #A9A9A9;height: 40px; width: 180px; color: #FFFFFF; font-size: 15px"> 取消 </button>
                                </td>
                                <td align="left">
                                    <button style="background-color:  #FF8C00; height: 40px; width: 180px; color: #FFFFFF; font-size: 15px" @click="getAddDatas ()"> 确认并提交 </button>
                                </td>
                            </tr>
                        </table>
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
      cancleBtn: '',
      subordinateDepartmentsModel: '',
      departmentData: [],
      assignRolesModel: '',
      data2: [],
      thisChecked: false
    }
  },
  components: {
    tablesTitMore
  },
  mounted () {
    // this.getDatas()
    this.subordinateDepartmentsSelect()
    this.assignRolesSelect()
    this.radioSelect()
    this.getAllDept()
    this.getAllRole()
  },
  methods: {
    getAllRole () {
      let _this = this
      this.$http.post('/api/sys/role/all', {
      }).then(function (res) {
        _this.data2 = res.data.result
      }).catch(function (error) {

      })
    },
    radioSelect () {
      $('.radio').click(function () {
        $('input:radio[name="radio"]:checked').text()
      })
    },
    subordinateDepartmentsSelect () {
      $('#subordinateDepartments').change(function () {
        $('#subordinateDepartments option:selected').text()
      })
    },
    assignRolesSelect () {
      $('#assignRoles').change(function () {
        $('#assignRoles option:selected').text()
      })
    },
    userf () {
      $('.username').val('')
    },
    password () {
      $('.password').val('')
    },
    realname () {
      $('.realname').val('')
    },
    getAllDept () {
      let _this = this
      this.$http.get('/api/sys/user/dept', {
      }).then(function (res) {
        _this.departmentData = res.data.result
      }).catch(function (error) {
      })
    },
    getAddDatas () {
      let _this = this
      let userName = $('.username').val()
      let passWord = $('.password').val()
      let realName = $('.realname').val()
      let assignRoles = $('#assignRoles option:selected').val()
      let subordinateDepartments1 = $('#subordinateDepartments option:selected').val()
      let status = $('input:radio[name="radio"]:checked').val()
      this.$http.post('/api/sys/user/register', {
        username: userName,
        password: passWord,
        realname: realName,
        status: status,
        role: assignRoles,
        deptno: subordinateDepartments1
      }).then(function (res) {
        if (res.data.msg === '添加用户成功') {
          _this.$router.push({
            name: 'oowayUserManagement'
          })
        }else {
            alert(res.data.msg)
        }
      }).catch(function (error) {
      })
    }
  }
})
</script>
<style type="text/css" scoped>
.hearder {
    margin-left: 10px;
    width: 800px;
    height: 800px;
}
.contentBack{
    margin-left: 10px;
    background-color: #FFFFFF;
}
.contentBack {
    background-color: #FFFFFF;
}
.contentTitle {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
}
#searchButton {
    background-color: #A9A9A9;
    height: 30px;
    width: 200px;
    color: #FFFFFF;
}
#addUserButton {
    background-color: #FF8C00;
    height: 30px;
    width: 200px;
    color: #FFFFFF;
}
</style>
