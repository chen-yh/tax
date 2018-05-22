<template>
 <div>
  <brand></brand>
      <div>
        <div class="bgwhite">
            <!--企业名称及授信额度-->
            <!---->
        </div>
        <div class="bgwhite">
            <tables-tit-more :tablesData="repaymentTit">
                <div slot="tables-tit">待业务部门处理融资申请
                    <span class="more"><router-link to="/">查看更多 ></router-link></span></div>
            </tables-tit-more>
            <tables-tit-more :tablesData="repaymentTit">
                <div slot="tables-tit">待财务部门放款列表
                    <span class="more"><router-link to="/">查看更多 ></router-link></span></div>
            </tables-tit-more>
            <tables-tit-more :tablesData="repaymentTit">
                <div slot="tables-tit">逾期还款列表
                    <span class="more"><router-link to="/">查看更多 ></router-link></span></div>
            </tables-tit-more>
            <tables-tit-more :tablesData="homeTit">
                <div slot="tables-tit">本周放款 / 还款汇总
                    <span class="more"><router-link to="/">查看更多 ></router-link></span>
                </div>
            </tables-tit-more>
            <tables-tit-more :tablesData="homeTit">
                <div slot="tables-tit">本月放款 / 还款汇总
                    <span class="more"><router-link to="/">查看更多 ></router-link></span>
                </div>
            </tables-tit-more>
            <tables-tit-more :tablesData="homeTit">
                <div slot="tables-tit">本年放款 / 还款汇总
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
  }
})
</script>
