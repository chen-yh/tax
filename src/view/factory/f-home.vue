<template>
 <div>
  <brand><router-link to="/">首页</router-link></brand>
      <div>
        <div class="bgwhite">
          <h2 class="h2-bord">公司名称</h2>
          <div class="bg-hui-info">
            您X月X日提交的融资申请，外综服企业已经受理。请等候反馈。
          </div>
        </div>
        <div class="bgwhite">
            <tables-tit-more :tablesData="homeTit">
                <div slot="tables-tit">本周融资 / 还款汇总
                    <span class="more"><router-link to="/">查看更多 ></router-link></span>
                </div>
            </tables-tit-more>
            <tables-tit-more :tablesData="homeTit">
                <div slot="tables-tit">本月融资 / 还款汇总
                    <span class="more"><router-link to="/">查看更多 ></router-link></span>
                </div>
            </tables-tit-more>
            <tables-tit-more :tablesData="homeTit">
                <div slot="tables-tit">本年融资 / 还款汇总
                    <span class="more"><router-link to="/">查看更多 ></router-link></span>
                </div>
            </tables-tit-more>
        </div>
      </div>
 </div>
</template>
<script type="text/javascript">
// 面包屑
import brand from '../../components/base/brand'
// 引用企业名称
import homeCompany from '../../components/common/home-company'
// 引用表格
import tablesTitMore from '../../components/common/tables-tit-more'
export default({
  data () {
    return {
      repaymentTit: {
        data: [
          {title: '序号'},
          {title: '合同号'},
          {title: '融资项目'},
          {title: '委托企业名称'},
          {title: '出口金额'},
          {title: '出口产品'},
          {title: '出口申报日期'}
        ],
        url: 'loanDetailInfo'
      },
      homeTit: {
        data: [
          {title: '序号'},
          {title: '合同号'},
          {title: '融资项目'},
          {title: '委托企业名称'},
          {title: '出口金额'},
          {title: '出口产品'},
          {title: '出口申报日期'}
        ],
        url: 'loanDetailInfo'
      }
    }
  },
  components: {
    homeCompany,
    tablesTitMore,
    brand
  },
  mounted () {
    // this.getDatas()
    // this.subordinateDepartmentsSelect()
    // this.assignRolesSelect()
    // this.radioSelect()
    this.getDatas();
  },
  methods: {
    getDatas () {
      let _this = this;
      this.$http.get('/api/factory/query/status', {
      }).then(function (res) {
        // alert('成功')
        // console.log(res)
      }).catch(function (error) {
        // alert('失败')
        // console.log(error)
      })
    },
    // delectRequest (ID) {
    //   console.log(ID)
    //   let _this = this;
    //   this.$http.post('/api/sys/role/delete', {
    //     id: ID,
    //     status: 0
    //   }).then(function (res) {
    //     alert('成功')
    //     console.log(res)
    //   }).catch(function (error) {
    //     alert('失败')
    //     console.log(error)
    //   })
    // }
  }
})
</script>
