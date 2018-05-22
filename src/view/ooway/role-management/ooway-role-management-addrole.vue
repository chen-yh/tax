<template>
    <div class="details">
        <div class="hearder">
            <p style="color: #A9A9A9" > 当前位置 >首页 > 角色管理 </p>
            <div class="contentBack">
                <div class="contentTitle">
                    <div class="contentType">
                        <table border="0" width="800px">
                            <tr>
                                <td align="left" height="80px" colspan="3" valign="bottom">
                                    <p style="font-size: 15px"> 角色管理 </p><hr/>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" height="40px" width="100px">
                                    <p> 角色名称: </p>
                                </td>
                                <td align="left" height="40px" width="300px">
                                    <p><input class="username" style="height: 30px; width:200px" type="text" name="name" placeholder="请输入角色名称" @focus="userf()"></p>
                                </td>
                                <td align="left" height="40px">
                                    <p><img src="../../../assets/img/ooway-adduser-passwords-message.png"> </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" height="40px" width="100px">
                                    <p> 角色说明: </p>
                                </td>
                                <td align="left" height="70px" colspan="2">
                                    <p><input class="roledesc" style="height: 50px; width:600px" type="text" name="name" placeholder="选填" @focus="roleDesc()"></p>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" height="80px" width="300px" colspan="3" valign="bottom">
                                    <p style="font-size: 15px"> 权限分配 </p><hr/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <table border="1" height="70px" width="800px">
                                    <tr>
                                        <td align="center" height="50px" valign="middle">
                                            <p style="font-size: 15px"> 一级导航 </p>
                                        </td>
                                        <td align="center" width="100px" valign="middle">
                                            <p style="font-size: 15px"> 二级导航 </p>
                                        </td>
                                        <td align="center" valign="middle">
                                            <p style="font-size: 15px"> 操作权限 </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2" align="center">
                                            <p> 用户管理 </p>
                                        </td>
                                        <td align="center" height="30px">
                                            <p> 用户信息管理 </p>
                                        </td>
                                        <td height="30px">
                                            <p style="padding-left: 20px">
                                              <input type="checkbox" name="user-edit" class="user-edit">编辑
                                              <input type="checkbox" name="user-find" class="user-find">查看
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" height="30px">
                                            <p> 角色管理 </p>
                                        </td>
                                        <td>
                                            <p style="padding-left: 20px">
                                              <input type="checkbox" name="role-edit" class="role-edit">编辑
                                              <input type="checkbox" name="role-find" class="role-find">查看 
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2" align="center">
                                            <p> 后台客户管理 </p>
                                        </td>
                                        <td align="center" height="30px">
                                            <p> 利率设置 </p>
                                        </td>
                                        <td>
                                            <p style="padding-left: 20px">
                                              <input type="checkbox" name="rate-edit" class="rate-edit">编辑
                                              <input type="checkbox" name="rate-find" class="rate-find">查看 
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" height="30px">
                                            <p> 放款管理 </p>
                                        </td>
                                        <td>
                                            <p style="padding-left: 20px">
                                              <input type="checkbox" name="loan-edit" class="loan-edit">编辑
                                              <input type="checkbox" name="loan-find" class="loan-find">查看  
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2" align="center">
                                            <p> 外综服管理 </p>
                                        </td>
                                        <td align="center" height="30px">
                                            <p> 企业信息管理 </p>
                                        </td>
                                        <td>
                                            <p style="padding-left: 20px">
                                              <input type="checkbox" name="trade-find" class="trade-find">查看 
                                              <input type="checkbox" name="trade-edit" class="trade-edit">编辑
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" height="30px">
                                            <p> 退税融资申请 </p>
                                        </td>
                                        <td>
                                            <p style="padding-left: 20px">
                                              <input type="checkbox" name="financing-edit" class="financing-edit">编辑
                                              <input type="checkbox" name="financing-find" class="financing-find">查看 
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3" align="center">
                                            <p> 出口企业管理 </p>
                                        </td>
                                        <td align="center" height="30px">
                                            <p> 企业信息管理 </p>
                                        </td>
                                        <td>
                                            <p style="padding-left: 20px">
                                              <input type="checkbox" name="factory-find" class="factory-find">查看 
                                              <input type="checkbox" name="factory-edit" class="factory-edit">编辑
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" height="30px">
                                            <p> 退税融资管理 </p>
                                        </td>
                                        <td>
                                            <p style="padding-left: 20px">
                                              <input type="checkbox" name="drawback-edit" class="drawback-edit">编辑
                                              <input type="checkbox" name="drawback-find" class="drawback-find">查看 
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" height="30px">
                                            <p> 货代明细管理 </p>
                                        </td>
                                        <td>
                                            <p style="padding-left: 20px">
                                              <input type="checkbox" name="forwarder-find" class="forwarder-find">查看  
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" height="30px">
                                            <p> 后台客户管理 </p>
                                        </td>
                                        <td align="center" height="30px">
                                            <p> 服务关系管理 </p>
                                        </td>
                                        <td>
                                            <p style="padding-left: 20px">
                                              <input type="checkbox" name="sevice-find" class="sevice:find">查看  
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                </td>
                            </tr>
                        </table>
                        <table border="0" align="center" style="margin-top: 20px">
                            <tr>
                                <td align="center" width="200px" height="50px">
                                    <p></p>
                                </td>
                                <td align="center" width="200px">
                                    <p><input type="radio" name="radio" value="1"> 开通 </p>
                                </td>
                                <td align="center" width="200px">
                                    <p><input type="radio" name="radio" value="2"> 未通过 </p>
                                </td>
                                <td align="center" width="200px">
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center">
                                    <p><button id="cancleButton"> 取消 </button></p>
                                </td>
                                <td colspan="2" align="center">
                                    <p><button id="trueButton" @click="searchUserList()">确认并提交</button></p>
                                 <!--    <router-link :to="{name:'oowayRoleManagementEditor'}"> 确认并提交 </router-link> -->
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
export default({
  data () {
    return {
      userNameData: '',
      roleDescData: ''
    }
  },
  components: {
    tablesTitMore
  },
  mounted () {
  },
  methods: {
    userf () {
      $('.username').val()
    },
    roleDesc () {
      $('.roledesc').val()
    },
    searchUserList () {
      let userEdit = $('input:checkbox[name="user-edit"]:checked').val()
      let userFind = $('input:checkbox[name="user-find"]:checked').val()
      let roleEdit = $('input:checkbox[name="role-edit"]:checked').val()
      let roleFind = $('input:checkbox[name="role-find"]:checked').val()
      let rateEdit = $('input:checkbox[name="rate-edit"]:checked').val()
      let rateFind = $('input:checkbox[name="rate-find"]:checked').val()
      let loanEdit = $('input:checkbox[name="loan-edit"]:checked').val()
      let loanFind = $('input:checkbox[name="loan-find"]:checked').val()
      let tradeFind = $('input:checkbox[name="trade-find"]:checked').val()
      let tradeEdit = $('input:checkbox[name="trade-edit"]:checked').val()
      let financingEdit = $('input:checkbox[name="financing-edit"]:checked').val()
      let financingFind = $('input:checkbox[name="financing-find"]:checked').val()
      let factoryFind = $('input:checkbox[name="factory-find"]:checked').val()
      let factoryEdit = $('input:checkbox[name="factory-edit"]:checked').val()
      let drawbackEdit = $('input:checkbox[name="drawback-edit"]:checked').val()
      let drawbackFind = $('input:checkbox[name="drawback-find"]:checked').val()
      let forwarderFind = $('input:checkbox[name="forwarder-find"]:checked').val()
      let seviceFind = $('input:checkbox[name="sevice-find"]:checked').val()
      let status = $('input:radio[name="radio"]:checked').val()
      var peridListData = new Array()
      if (userEdit != null) {
        peridListData.push(1)
      }
      if (userFind != null) {
        peridListData.push(2)
      }
      if (roleEdit != null) {
        peridListData.push(3)
      }
      if (roleFind != null) {
        peridListData.push(4)
      }
      if (rateEdit != null) {
        peridListData.push(5)
      }
      if (rateFind != null) {
        peridListData.push(6)
      }
      if (loanEdit != null) {
        peridListData.push(7)
      }
      if (loanFind != null) {
        peridListData.push(8)
      }
      if (tradeEdit != null) {
        peridListData.push(10)
      }
      if (tradeFind != null) {
        peridListData.push(9)
      }
      if (financingEdit != null) {
        peridListData.push(11)
      }
      if (financingFind != null) {
        peridListData.push(12)
      }
      if (factoryEdit != null) {
        peridListData.push(14)
      }
      if (factoryFind != null) {
        peridListData.push(13)
      }
      if (drawbackEdit != null) {
        peridListData.push(15)
      }
      if (drawbackFind != null) {
        peridListData.push(16)
      }
      if (forwarderFind != null) {
        peridListData.push(17)
      }
      if (seviceFind != null) {
        peridListData.push(18)
      }
      let _this = this;
      let userName = $('.username').val()
      let roleDesc = $('.roledesc').val()
      this.$http.post('/api/sys/role/edit', {
        rolename: userName,
        roledesc: roleDesc,
        type: status,
        peridList: peridListData,
        status: 1
      }).then(function (res) {
        if (res.data.msg === '新增成功') {
          _this.$router.push({
            name: 'oowayRoleManagement'
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
    height: 1100px;
    width: 850px;
}
.contentBack{
    margin-left: 10px;
    background-color: #FFFFFF;
    height: 980px;
}
.contentTitle {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
}
#cancleButton {
    background-color: #A9A9A9;
    color: #FFFFFF;
    height: 40px;
    width: 200px;
}
#trueButton {
    background-color: #FF8C00;
    color: #FFFFFF;
    height: 40px;
    width: 200px;
}

</style>
