<template>
 <div class="detail">
  <brand><router-link to="/">借贷明细</router-link></brand>
  <div class="bgwhite">
    <div class="filter">
      <dl>
        <dt>贷款开始时间：</dt>
        <dd>
          <select>
            <option>全部</option>
            <option>今日</option>
            <option>本周</option>
            <option>本月</option>
          </select>
          <input type="date" name="">
        </dd>
      </dl>
      <dl>
        <dt>还款倒计时：</dt>
        <dd>
          <select>
            <option>全部</option>
            <option>3日内</option>
            <option>1周内</option>
            <option>1个月内</option>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>还款状态：</dt>
        <dd>
          <select>
            <option>全部</option>
            <option>3日内</option>
            <option>1周内</option>
            <option>1个月内</option>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>是否逾期</dt>
        <dd>
          <select>
            <option>全部</option>
            <option>3日内</option>
            <option>1周内</option>
            <option>1个月内</option>
          </select>
        </dd>
      </dl>
    </div>
    <!--贷款还款总计-->
    <tables-tit-more :tablesData="loanCount">
      <div slot="tables-tit">统计
      </div>
    </tables-tit-more>
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="loanDetial">
      <div slot="tables-tit">贷款 / 还款明细
      </div>
    </tables-tit-more>
    </div>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
export default({
  data () {
    return {
      loanCount: {
        data: [
          {title: '出口金额()'},
          {title: '融资金额()'},
          {
            title: '平台服务费() '},
          {title: '已还款()'},
          {title: '未还款()'}
        ]
      },
      loanDetial: {
        data: [
          {title: '合同号'},
          {title: '融资项目'},
          {title: '企业名称 '},
          {title: '合同号'},
          {title: '合同号'},
          {title: '合同号'},
          {title: '合同号'}
        ],
        url: 'oLoanInfo'
      }
    }
  },
  components: {
    brand,
    tablesTitMore
  }
})
</script>
<style type="text/css" scoped>
</style>
