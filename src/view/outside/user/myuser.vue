<template>
 <div class="detail">
  <brand></brand>
  <div class="bgwhite">
    <div class="filter">
      <label><input type="radio" v-model="userFilter" value="2" name="user"> 全部</label>
      <label><input type="radio" name="user" v-model="userFilter" value="0"> 平台推荐客户</label>
      <label><input type="radio" name="user" v-model="userFilter" value="1"> 自有客户</label>
      <div class="btn-zi btn-zi-big" @click="addUser()">新增自有客户</div>
    </div>
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="loanDetial">
      <div slot="tables-tit">我的客户列表
      </div>
      <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
      <div slot="datas" class="link-blue" v-show="mainData2">
        <dd v-for="d in userData">
          <div>{{d.factoryInfo.entName}}</div>
          <div>{{d.factoryInfo.province}}</div>
          <div>{{d.factoryInfo.city}}</div>
          <div>{{d.factoryInfo.createTime}}</div>
          <div>{{d.factoryInfo.mainProduct}}</div>
          <div>{{d.factoryInfo.exportScale}}</div>
          <div>{{d.factoryInfo.refundTax}}</div>
          <div>{{d.factoryInfo.earnings}}</div>
          <div class="opera-span"> 
            <span @click="goPage(d.factoryInfo.id)">查看</span>  
            <span @click="goEdit(d.factoryInfo.id, d)">编辑</span> 
            <span @click="goDelete(d.factoryInfo.id)">删除</span>
          </div>
        </dd>
      </div>
    </tables-tit-more>
    </div>
    <!--分页-->
    <page :pageSize="pageCount" :curPage="curPage" :curIndex="curIndex" @getCurPage="getCurPage"></page>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import page from '../../../components/base/page'
import tablesTitMore from '../../../components/common/tables-tit-more'
export default({
  data () {
    return {
      loanDetial: {
        data: [
          {title: '企业名称'},
          {title: '所在省份'},
          {title: '所在城市 '},
          {title: '成立时间'},
          // {title: '注册资本'},
          {title: '主营产品'},
          {title: '今年出口额'},
          {title: '今年退税融资额'},
          {title: '今年收汇额'},
          {title: '操作'}
        ],
        url: 'outCompany'
      },
      userFilter: 2,
      userData: [],
      // 暂无数据
      popData2: false,
      mainData2: true,
      //分页
      // 默认当前页
      curPage: 1,
      // 当前页的index
      curIndex: 0,
      //最大页数
      pageCount: 1,
      vals: ''
    }
  },
  components: {
    brand,
    page,
    tablesTitMore
  },
  watch: {
    userFilter: function (val, oldVal) {
      this.getDatas(val)
    }
  },
  mounted () {
    this.getDatas(2)
    // this.radioSelect ()
  },
  methods: {
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getDatas(2)
    },
    addUser () {
      this.$router.push({name: 'addMyUser'})
    },
    // 我的用户数据接口
    getDatas (vals) {
      let _this = this
      console.log(_this.curPage, '-----------', vals)
      this.$http.get('/api/relation/mycus/list?page='+ _this.curPage +'&&facType=' + vals)
        .then(res => {
          // console.log('我的用户', res)
          if (res.data.status === 200) {
            _this.userData = res.data.result.rows
            // 分页
            this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
            this.pageNum = res.data.result.pageNum
            //分页end
          } else {
            _this.popData2 = true
            _this.mainData2 = false
          }
        })
    },
    // radioSelect () {
    //   $('.radio').click(function () {
    //     let vals = $('input:radio[name="radio"]:checked').text()
    //     console.log('---', vals)
    //     if ($('input:radio[name="radio"]:checked').text() == 1) {
    //     this.$http.get('/api/relation/mycus/list?page='+ _this.curPage +'&&facType=' + vals)
    //     .then(res => {
    //       console.log('我的用户', res)
    //       if (res.data.status === 200 && res.data.result.rows.length > 0) {
    //         _this.userData = res.data.result.rows
    //         // 分页
    //         this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
    //         this.pageNum = res.data.result.pageNum
    //         //分页end
    //       } else {
    //         _this.popData2 = true
    //         _this.mainData2 = false
    //       }
    //     })
    //     }else {
    //     this.$http.get('/api/relation/mycus/list?page='+ _this.curPage)
    //     .then(res => {
    //       console.log('我的用户', res)
    //       if (res.data.status === 200 && res.data.result.rows.length > 0) {
    //         _this.userData = res.data.result.rows
    //         // 分页
    //         this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize)
    //         this.pageNum = res.data.result.pageNum
    //         //分页end
    //       } else {
    //         _this.popData2 = true
    //         _this.mainData2 = false
    //       }
    //     })
    //     }
    //   })
    // },
    // 进入详情自有用户
    goPage (_id) {
      this.$router.push({
        name: 'myUserDetail',
        query: {'id': _id}
      })
    },
    // 编辑自有用户
    goEdit (_id) {
      this.$router.push({
        name: 'editMyUser',
        query: {'id': _id}
      })
    },
    // 删除自有用户
    goDelete (_id) {
      let _this = this
      this.$confirm('此操作将删除该客户，是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        _this.$http.post('/api/relation/delete/ids?factoryId=' + _id).then(function(res){
          _this.getDatas (_this.userFilter)
          _this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
})
</script>
<style type="text/css" scoped>
.filter{
  clear:both;
  overflow: hidden;
}
.filter dl{
 float:left;
  margin:30px 20px;
}
.filter dl dt,.filter dl dd{
  float:left;
}
.filter dl dt{
  margin-right:10px;
  color:#333;
}
.filter label{
  display: inline-block;
  margin:10px 30px;
  float:left;
  padding: 20px 0
}
.btn-zi-big{
  float:right;
}
.filter{
  margin: 10px 0 30px 0;
}
.opera-span span{
  padding-right:10px;
}
</style>
