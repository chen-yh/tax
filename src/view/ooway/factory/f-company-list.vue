<template>
  <div class="detail">
    <brand>出口企业企业 > <router-link to="/">出口企业企业列表</router-link></brand>
    <div class="bgwhite">
    <!--贷款还款总计-->
    <h2 class="h2-bord">出口企业企业列表</h2>
    <filter-company>
      <dl slot="other">
        <dt>&nbsp;</dt>
        <dd>
          <div class="btn-jiejin">封禁</div>
          <div class="btn-fengjin">解禁</div>
        </dd>
      </dl>
    </filter-company>
    <tables-tit-more :tablesData="dRepayData">
      <div slot="tables-tit">
      </div>
    </tables-tit-more>
    </div>
  </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
import checkboxData from '../../../components/common/checkbox-data'
import filterCompany from '../../../components/common/filter-company'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: ''},
          {title: '企业名称'},
          {title: '用户名'},
          {title: '上线状态'},
          {title: '审核状态'},
          {title: '注册时间'},
          {title: '联系电话'},
          {title: '注册邮箱'},
          {title: '操作'}
        ],
        url: 'outCompanyAffirm'
      }
    }
  },
  components: {
    brand,
    tablesTitMore,
    checkboxData,
    filterCompany
  },
  methods: {
    goRepay () {
      this.$router.push({name: 'goRepayment'})
    }
  }
})
</script>
<style type="text/css" scoped>
@import '../../../assets/css/detail.css';
.filter dl dt{padding-top:0px;}
</style>
