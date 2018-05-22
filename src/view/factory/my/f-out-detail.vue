<template>
 <div class="detail">
  <brand><router-link to="/">出口明细</router-link></brand>
  <div class="bgwhite">
    <div class="filter">
      <dl>
        <dt>出口申报日期：</dt>
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
        <dt>融资开始时间：</dt>
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
    </div>
    <!--贷款还款总计-->
    <tables-tit-more :tablesData="loanCount">
      <div slot="tables-tit">统计
      </div>
    </tables-tit-more>
    <!--贷款还款明细-->
    <tables-tit-more :tablesData="loanDetial">
      <div slot="tables-tit">出口明细
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
            title: '平台服务费()'
          },
          {title: '已还款()'},
          {title: '未还款()'}
        ]
      },
      loanDetial: {
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
    brand,
    tablesTitMore
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
  margin:10px 20px;
}
.filter dl dt,.filter dl dd{
  float:left;
}
.filter dl dt{
  margin-right:10px;
  color:#333;
}
</style>
