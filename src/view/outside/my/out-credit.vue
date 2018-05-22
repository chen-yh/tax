<template>
  <div>
    <brand></brand>
    <div class="bgwhite">
     <h2 class="title">
      保证金与授信额度
     </h2>
     <div class="bg-hui-info">
      <div class="company-info">
       <dl>
        <dt>您今年授信额度上限：</dt>
        <dd>{{credit.yearLimit}} 元</dd>
       </dl>
       <dl>
        <dt>本月授信额度上限：</dt>
        <dd>{{credit.monthLimit}} 元</dd>
       </dl>
      </div>
      <div class="company-info">
       <dl>
        <dt>本月授信额度剩余：</dt>
        <dd>{{credit.monthBalance}} 元</dd>
       </dl>
       <dl>
        <dt>退税融资共管账户：</dt>
        <dd>{{credit.coCount}}</dd>
       </dl>
      </div>
     </div>
     <!--担保方式-->
     <h2 class="title">
      担保方式
     </h2>
     <div class="bg-hui-info clear">
      <div class="company-info1">
       <dl v-for="(w,index) in warran" v-if="index<2">
        <dt>
          <span v-if="w.warrantType == 0">保证金担保：</span>
          <span v-if="w.warrantType == 1">房屋抵押担保：</span>
          <span v-if="w.warrantType == 2">其它担保：</span>
          <span v-if="w.warrantType == 3">无担保：</span> 
        </dt>
        <dd>{{w.warrantValue}} 元</dd>
       </dl>
      </div>
      <div class="company-info1">
       <dl v-for="(w,index) in warran" v-if="index>1">
        <dt>{{w.warrantType}}：</dt>
        <dd>{{w.warrantValue}} 元</dd>
       </dl>
      </div>
     </div>
    </div>
    <div class="bgwhite">
     <!--提高授信额度-->
     <div class="btn-zi btn-zi-big mcenter" @click="goMessage()">我要提高授信额度</div>
    </div>
 </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
export default({
  data () {
    return {
      credit: {},
      warran: []
    }
  },
  components: {
    brand
  },
  mounted () {
    this.getCredit()
  },
  methods: {
    // 保证金与授信额度
    getCredit () {
      // 授信额度
      this.$http.post('/api/tradecompany/credit/detail', {})
        .then(res => {
          if (res.data.status === 200) {
            this.credit = res.data.result
          } else {
            window.alert('数据请求错误')
          }
        })
      // 保证金
      this.$http.get('/api/tradecompany/warrant/detail')
        .then(res => {
          console.log(res)
          if (res.data.status === 200) {
            this.warran = res.data.result
          }
        })
    },
    // 提高授信额度
    goMessage () {
      this.$msgbox({
        title: '提高授信额度',
        message: '要提高授信额度，请去银行交纳担保金',
        confirmButtonText: '确定'
        // cancelButtonText: '取消'
      })
    }
  }
})
</script>
<style type="text/css">
  @import '../../../assets/css/detail.css'
</style>
