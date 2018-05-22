<template>
    <div>
       <brand>退税融资申请</brand>
       <div class="bgwhite">
         <auditing></auditing>
       </div>
    </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
import auditing from '../../../components/common/auditing'
export default({
  data () {
    return {
      applyData: {
        data: [
          {title: '融资项目'},
          {title: '融资金额'},
          {title: '贷款周期'},
          {title: '融资申请时间'},
          {title: '贷款开始时间'},
          {title: '贷款到期时间'},
          {title: '平台服务费'}
        ],
        url: ''
      }
    }
  },
  components: {
    brand,
    tablesTitMore,
    auditing
  },
  methods: {
    goInfo () {
      this.$router.push({name: 'outApplicationInfo'})
    }
  }
})
</script>
<style>
.company-info dl dt{
    line-height: 35px;
  }
  </style>
