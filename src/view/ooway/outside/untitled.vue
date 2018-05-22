import page from '../../../components/base/page'



//分页
      // 默认当前页
      curPage: 1,
      // 当前页的index
      curIndex: 0,
      //最大页数
      pageSize: 1



<!--分页-->
    <page :pageSize="pageSize" :curPage="curPage" :curIndex="curIndex" @getCurPage="getCurPage"></page>


    components: {
    brand,
    tablesTitMore,
    checkboxData,
    filterCompany,
    page
  },


  // 获取企业信息列表
    getCompanys () {
      let _this = this
      this.$http.get('/api/ooway/tradecompany/selectbystatus?pageNum='+ _this.curPage +'&&status=' + _this.selectStates)
        .then(res => {
          console.log('000', res.data.result)
          if (res.data.status === 200) {
          	// 分页
            this.pageSize = res.data.result.pageSize
            this.pageNum = res.data.result.pageNum
            _this.companys = res.data.result.rows
          }
        })
    },