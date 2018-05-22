<template>
  <div class="details">
  <brand></brand>
   <div class="hearder">
     <div class="contentBack">
         <div class="contentType">
          <table width="800px" border="0" align="center">
           <tr>
            <td align="center" height="80px">
             <p class="tit-big"><router-link :to="{name:'outCreatAccount'}"> 创建账号 </router-link></p><hr/>
            </td>
            <td align="center">
             <p class="tit-big active"> 管理子账号 </router-link></p><hr/>
            </td>
           </tr>
           <tr>
            <td align="center" colspan="2">
              <table border="1" width="800px" class="table-tit">
                <tr>
                  <th>
                    <p> 公司名称 </p>
                  </th>
                  <th>
                    <p> 用户类型 </p>
                  </th>
                  <th>
                    <p> 用户名 </p>
                  </th>
                  <th>
                    <p> 创建时间 </p>
                  </th>
                  <th>
                    <p> 操作 </p>
                  </th>
                </tr>
                <tr v-for= "a in data" :key= "a.id" align="center" style="height: 30px">
                  <td>
                    <p> {{a.entName}} </p>
                  </td>
                  <td>
                    <p v-if="a.userType == 2"> 业务部门 </p>
                    <p v-if="a.userType == 3"> 财务部门 </p>
                  </td>
                  <td>
                    <p> {{a.userName}} </p>
                  </td>
                  <td>
                    <p> {{a.createtime}} </p>
                  </td>
                  <td>
                    <p><button><router-link :to="{name:'outEditAccount', query:{thisId: a.id, ssoId: a.ssoUserid}}" tag="div"> 编辑 </router-link> </button> <button @click="delectRequest ( a.id, a.ssoUserid, a.userName )"> 删除 </button></p>
                  </td>
                </tr>
              </table>
            </td>
           </tr>
       </table>
      </div>
    </div>
  </div>
<!--    <page :pageSize="pageCount" :curPage="curPage" :curIndex="curIndex" @getCurPage="getCurPage"></page> -->
</div>
</template>

<script type="text/javascript">
import tablesTitMore from '../../../components/common/tables-tit-more'
// 面包屑
import brand from '../../../components/base/brand'
// import page from '../../../components/base/page'
// import $ from 'jquery'
export default({
  data () {
    return {
      data: [],
      // //分页
      // // 默认当前页
      // curPage: 1,
      // // 当前页的index
      // curIndex: 0,
      // //最大页数
      // pageCount: 1
    }
  },
  components: {
    tablesTitMore,
    brand
    // page
  },
  mounted () {
    // this.searchAllUserList()
    // this.getAllDept ()
    // this.departmentSelect()
    // this.roleSelect()
    this.getAllUserMessage()
  },
  methods: {
    getAllUserMessage () {
      let _this = this
      this.$http.post('/api/user/list/child', {
      }).then(function (res) {
        console.log(res)
        _this.data = res.data.users
      }).catch(function (error) {
        // console.log(error)
      })
    },
    delectRequest (mId, mSsoId, mUserName) {
      let _this = this
      this.$http.post('/api/user/edit/child', {
        id: mId,
        ssoUserid: mSsoId,
        status: 0,
        userName: mUserName
      }).then(function (res) {
        if (res.data.msg === '修改成功') {
          _this.getAllUserMessage ()
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
  width: 200px;
  height: 30px;
  background-color: #FF8C00;
  color: #FFFFFF;
}
.active{
  background:#70419f; 
  color:#fff;
}
.active a{
  color:#fff;
}
.table-tit th{
  background-color: #ddd;
  height: 44px;
  font-size: 14px;
  text-align: center;
}
.table-tit td{
  height:42px;
  line-height: 42px;
}
.tit-big{
  font-size: 16px; height: 44px; line-height: 44px;
}
.table-tit p button{
  margin:0 8px;
}
</style>
