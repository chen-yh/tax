<template>
    <div class="details">
        <div class="hearder">
            <p style="color: #A9A9A9" > 当前位置 >首页 > 用户管理 </p>
            <div class="contentBack">
                <div class="contentTitle">
                    <div class="contentType">
                        <table border="0" width="500px">
                            <tr>
                                <td align="right" height="80px" colspan="2">
                                </td>
                            </tr>
                            <tr>
                                <td align="right" height="40px">
                                    <p> 用户账号: <input style="height: 20px" type="text" name="name" class="username" @focus="username()"></p>
                                </td>
                                <td align="center">
                                    <p> 部门: <select v-model="subordinateDepartmentsModel" name="subordinateDepartments" id="subordinateDepartments"><option v-for="da in departmentData" v-bind:value="da.id" v-bind:key="da.id"> {{ da.name }}</option></select></p>
                                </td>
                            </tr>
                            <tr>
                                <td align="right" height="40px">
                                    <p> 名称: <input style="height: 20px" type="text" name="name" class="tname" @focus="tname()"> </p>
                                </td>
                                <td align="center">
                                    <p> 角色: <select v-model="roleModel" name="role" id="role"><option v-for="da in data2" v-bind:value="da.id" v-bind:key="da.id"> {{ da.roledesc }}</option></select></p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" height="40px">
                                    <button id="searchButton" @click="searchUserList ()"> 搜索 </button>
                                </td>
                                <td align="center">
                                    <button id="addUserButton"><router-link :to="{name:'oowayUserManagementAdduser'}"> 新增用户 </router-link></button>
                                </td>
                            </tr>
                        </table>
                        <table border="1" width="800px" frame="below" rules="rows">
                            <tr>
                                <td style="vertical-align: bottom;" align="left" height="50px" width="300px" colspan="7">
                                    <p> 已设置{{userNum}}名用户 </p><hr/>
                                </td>
                            </tr>
                            <tr style="background-color: #A9A9A9">
                                <td align="center" height="40px" width="100px">
                                    <p> 用户账号 </p>
                                </td>
                                <td align="center" width="60px">
                                    <p> 用户名称 </p>
                                </td>
                                <td align="center" width="60px">
                                    <p> 所属部门 </p>
                                </td>
                                <td align="center" width="80px">
                                    <p> 账号角色 </p>
                                </td>
                                <td align="center" width="100px">
                                    <p> 创建时间 </p>
                                </td>
                                <td align="center" width="80px">
                                    <p> 权限状态 </p>
                                </td>
                                <td align="center" width="200px">
                                    <p> 操作 </p>
                                </td>
                            </tr>
                            <tr v-for="m in menuInfo" :key= "m.id" >
                                <td align="center" height="40px">
                                    <p> {{m.username}} </p>
                                </td>
                                <td align="center">
                                    <p> {{m.realname}} </p>
                                </td>
                                <td align="center">
                                    <p> {{m.deptname}} </p>
                                </td>
                                <td align="center">
                                    <p> {{m.rolename}} </p>
                                </td>
                                <td align="center">
                                    <p> {{m.edittime}} </p>
                                </td>
                                <td align="center">
                                    <p> {{m.statusName}} </p>
                                </td>
                                <td align="center">
                                    <p> <button id="toViewButton"><router-link :to="{name:'oowayRoleManagementEditor',query:{'userID': m.id, 'roleID':m.role, 'addRess': 'user'}}"> 查看 </router-link></button> <button id="editButton"><router-link :to="{name:'oowayUserManagementEdituser',query:{thisId: m.id}}" tag="div"> 编辑 </router-link></button> <button id="delectButton" @click="getDelectData (m.id)">删除</button> </p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      <page :pageSize="pageCount" :curPage="curPage" :curIndex="curIndex" @getCurPage="getCurPage"></page>
    </div>
</template>
<script type="text/javascript">
import tablesTitMore from '../../../components/common/tables-tit-more'
import page from '../../../components/base/page'
import $ from 'jquery'
export default{
  data () {
    return {
      subordinateDepartmentsModel: '',
      departmentData: [],
      roleModel: '',
      data2: [],
      menuInfo: [],
      userNum: 0,
      //分页
      // 默认当前页
      curPage: 1,
      // 当前页的index
      curIndex: 0,
      //最大页数
      pageCount: 1
    }
  },
  components: {
    tablesTitMore,
    page
  },
  mounted () {
    this.searchAllUserList()
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
    username () {
      $('.username').val()
    },
    tname () {
      $('.tname').val()
    },
    searchAllUserList () {
      let _this = this
      this.$http.post('/api/sys/user/list', {
        pageNum: _this.curPage,
        username: '',
        realname: '',
        deptno: '',
        role: ''
      }).then(function (res) {
        _this.menuInfo = res.data.result.rows
        _this.userNum = _this.menuInfo.length
        // 分页
        _this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
        _this.pageNum = res.data.result.pageNum
      }).catch(function (error) {
      })
    },
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.searchAllUserList ()
    },
    searchUserList () {
      let _this = this
      let pUserName = $('.username').val()
      let pTName = $('.tname').val()
      let pDepartmentSelectType = $('#subordinateDepartments option:selected').val()
      let pRoleSelectType = $('#role option:selected').val()
      this.$http.post('/api/sys/user/list', {
        pageNum: _this.curPage,
        username: pUserName,
        realname: pTName,
        deptno: pDepartmentSelectType,
        role: pRoleSelectType
      }).then(function (res) {
        _this.menuInfo = res.data.result.rows
        _this.userNum = _this.menuInfo.length
        // 分页
        _this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
        _this.pageNum = res.data.result.pageNum
      }).catch(function (error) {
      })
    },
    getDelectData (m) {
      let _this = this
      let thisId = m
      this.$http.post('/api/sys/user/edit', {
        id: thisId,
        status: 0
      }).then(function (res) {
        if (res.data.msg === '修改用户成功') {
          _this.searchAllUserList()
        }else {
            alert(res.data.msg)
        }
      }).catch(function (error) {
      })
    },
    getAllDept () {
      let _this = this
      this.$http.get('/api/sys/user/dept', {
      }).then(function (res) {
        _this.departmentData = res.data.result
      }).catch(function (error) {
      })
    }
  }
}
</script>
<style type="text/css" scoped>
.hearder {
    margin-left: 10px;
    width: 850px;
    /*height: 800px;*/
}
.contentBack{
    margin-left: 10px;
    background-color: #FFFFFF;
/*    height: 700px;*/
}
.contentBack {
    background-color: #FFFFFF;
}
.contentTitle {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
}
#addUserButton {
    background-color: #FF8C00;
    height: 35px;
    width: 200px;
    color: #FFFFFF;
    border-radius: 5px;
}
#searchButton {
    background-color: #A9A9A9;
    height: 35px;
    width: 200px;
    color: #FFFFFF;
    border-radius: 5px;
}
#toViewButton {
}
#editButton {
}
#delectButton {
}
</style>
