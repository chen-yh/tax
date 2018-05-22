<template>
    <div class="details">
        <div class="hearder">
            <p style="color: #A9A9A9" > 当前位置 > 角色管理 > 角色权限 </p>
            <div class="contentBack">
                <div class="contentTitle">
                    <div class="contentType">
                        <table border="0">
                            <tr>
                                <td align="left" height="80px" width="950px" colspan="4">
                                    <p> 共 {{messageNum}} 条记录 </p>
                                </td>
                                <td align="right" height="80px" width="300px">
                                    <button id="addRoleButton"><router-link :to="{name:'oowayRoleManagementAddrole'}"> 新增角色 </router-link></button>
                                </td>
                            </tr>
                            </table>
                            <table border="1" rules="rows" frame="hsides">
                            <tr style="background-color: #A9A9A9">
                                <td align="center" height="40px" width="300px">
                                    <p> 角色名称 </p>
                                </td>
                                <td align="center" width="300px">
                                    <p> 创建时间 </p>
                                </td>
                                <td align="center" width="300px">
                                    <p> 开通状态 </p>
                                </td>
                                <td align="center" width="300px">
                                    <p> 操作 </p>
                                </td>
                            </tr>
                            <tr v-for= "a in data" :key= "a.id">
                                <td align="center" height="30px">
                                    <p> {{a.rolename}} </p>
                                </td>
                                <td align="center">
                                    <p> {{a.createtime}} </p>
                                </td>
                                <td align="center">
                                    <p v-if="a.type == 1"> 开通 </p>
                                    <p v-else="a.type == 0"> 未开通 </p>
                                </td>
                                <td align="center">
                                    <p><button><router-link :to="{name:'oowayRoleManagementEditor', query:{'roleID':a.id,'addRess':'role'}}"> 编辑 </router-link></button><button @click="delectRequest (a.id)"> 删除 </button></p>
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
// import page from '../../../components/base/page'
export default({
  data () {
    return {
      messageNum: '',
      data: []
    }
  },
  components: {
    tablesTitMore
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    getDatas () {
      let _this = this;
      this.$http.get('/api/sys/role/all', {
      }).then(function (res) {
        _this.data = res.data.result
        _this.messageNum = res.data.result.length
      }).catch(function (error) {
      })
    },
    delectRequest (ID) {
      let _this = this;
      this.$http.post('/api/sys/role/delete', {
        id: ID,
        status: 0
      }).then(function (res) {
        if (res.data.msg === '删除成功') {
          _this.getDatas()
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
    /*height: 700px;*/
}
.contentBack{
    margin-left: 10px;
    background-color: #FFFFFF;
    padding-bottom: 20px;
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
#addRoleButton{
  background: #70419f;
  border:none;
  line-height: 35px;
  width: 150px;
}
#addRoleButton a{
  color: #FFFFFF;
}
</style>
