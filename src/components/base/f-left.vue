<template>
 <div class="left">
  <dl v-for="m in menuInfo" :key="m.id">
   <dt><img :src="m.imgSrc"> <router-link :to="{name: m.url}">{{m.name}}</router-link></dt>
   <dd v-if="m.children.length!=0">
    <ul>
     <li v-for="c in m.children" :key="c.id"><router-link :to="{name: c.url}">{{c.name}}</router-link></li>
    </ul>
   </dd>
  </dl>
 <!--  <dl>
   <dt><img src="../../assets/img/icon-home.png"> 账户管理</dt>
   <dd>
    <ul>
     <li><router-link :to="{name:'outCredit'}">创建账户</router-link></li>
     <li><router-link :to="{name:'outLoanDetail'}">管理账户</router-link></li>
    </ul>
   </dd>
  </dl>
  <dl>
   <dt><img src="../../assets/img/icon-home.png"> <router-link :to="{name:'outCompany'}">企业信息</router-link></dt>
  </dl>
  <dl>
   <dt><img src="../../assets/img/icon-home.png"> 我的账号</dt>
   <dd>
    <ul>
     <li><router-link :to="{name:'outCredit'}">授信额度</router-link></li>
     <li><router-link :to="{name:'outLoanDetail'}">借贷明细</router-link></li>
     <li>出口明细</li>
    </ul>
   </dd>
  </dl>
  <dl>
   <dt><img src="../../assets/img/icon-home.png"> 财务操作</dt>
   <dd>
    <ul>
     <li><router-link :to="{name:'outCredit'}">我要还款</router-link></li>
     <li><router-link :to="{name:'outLoanDetail'}">融资确认</router-link></li>
     <li>收款确认</li>
     <li>平台对账</li>
    </ul>
   </dd>
  </dl>
  <dl>
   <dt><img src="../../assets/img/icon-home.png"> 退税融资</dt>
  </dl>
  <dl>
   <dt><img src="../../assets/img/icon-home.png"> 结汇融资</dt>
  </dl>
  <dl>
   <dt><img src="../../assets/img/icon-home.png"> 信保融资</dt>
  </dl>
  <dl>
   <dt><img src="../../assets/img/icon-home.png"> 我的客户</dt>
  </dl> -->
 </div>
</template>
<script type="text/javascript">
export default({
  name: 'fLeft',
  data () {
    return {
      menuInfo: [
        {
          name: '出口企业首页',
          imgSrc: '../../assets/img/icon-home.png',
          url: 'fHome',
          children: []
        },
        {
          name: '企业信息',
          imgSrc: '../../assets/img/icon-home.png',
          url: 'fCompany',
          children: []
        },
        {
          name: '退税明细', imgSrc: '../../assets/img/icon-home.png', url: 'fLoanDetail', children: []
        },
        {
          name: '出口明细', imgSrc: '../../assets/img/icon-home.png', url: 'fOutDetail', children: []
        },
        {
          name: '退税申请', imgSrc: '../../assets/img/icon-home.png', url: 'taxRefund', children: []
        },
        // {
        //   name: '结汇融资', imgSrc: '../../assets/img/icon-home.png', url: '', children: []
        // },
        // {
        //   name: '信保融资', imgSrc: '../../assets/img/icon-home.png', url: '', children: []
        // },
        {
          name: '外综服企业', imgSrc: '../../assets/img/icon-home.png', url: 'myUser', children: []
        }
      ]
    }
  },
  methods: {

  }
})
</script>
<style type="text/css">
@import '../../assets/css/left.css'
</style>
