<template>
 <div class="left">
  <dl v-for="m in menuInfo" :key="m.id">
   <dt :class="m.url"><img :src="m.imgSrc"> <router-link :to="{name: m.url}">{{m.name}}</router-link></dt>
   <dd v-if="m.children.length!=0">
    <ul>
     <li v-for="(c,index) in m.children" :key="index" :class="{active:curCname==c.name}" @click="goPage(c.name,m.name,c.url,index)">{{c.name}} </li>
    </ul>
   </dd>
  </dl>
 </div>
</template>
<script type="text/javascript">
import {mapMutations} from 'vuex'
export default({
  name: 'outLeft',
  data () {
    return {
      curCname: '',
      pCurMname: '',
      isTrue: false,
      menuInfo: [
        {
          name: '',
          imgSrc: '/static/img/icon_1.png',
          url: 'oowayHome',
          children: [
            {name: '大路平台首页', url: 'oowayHome'},
          ]
        },
        {
          name: '用户管理',
          imgSrc: '/static/img/icon_3.png',
          url: 'oowayUserManagement',
          children: []
        },
        {
          name: '角色管理',
          imgSrc: '/static/img/icon_2.png',
          url: 'oowayRoleManagement',
          children: [
            {name: '角色权限', url: 'oowayRoleManagement'},
            {name: '分配权限', url: 'oowayRoleManagementAddrole'}
          ]
        },
        {
          name: '利率管理',
          imgSrc: '/static/img/icon_4.png',
          children: [
            {name: '基础利率设置', url: 'oowayInterestRatesSet'},
            {name: '利率定制', url: 'ratesMyset'}
          ]
        },
        {
          name: '财务部门审核',
          imgSrc: '/static/img/icon_5.png',
          url: '',
          children: [
            {name: '放款审核', url: 'loanList'},
            {name: '还款确认', url: 'reciveAffirmList'},
            {name: '已还款列表', url: 'reciveList'}
          ]
        },
        {
          name: '外综服企业',
          imgSrc: '/static/img/icon_6.png',
          url: '',
          children: [
            {name: '企业信息', url: 'outCompanyList'},
            {name: '退税融资申请', url: 'outTaxList'},
            {name: '结汇融资申请', url: ''},
            {name: '信保融资申请', url: ''},
            {name: '放款/还款明细', url: 'oLoanDetail'}
          ]
        },
        {
          name: '出口企业',
          imgSrc: '/static/img/icon_7.png',
          url: '',
          children: [
            {name: '企业信息', url: 'fCompanyList'},
            {name: '退税申请', url: 'fTaxList'},
            {name: '结汇融资申请', url: ''},
            {name: '信保融资申请', url: ''},
            {name: '退税明细', url: 'fLoanDetail'}
          ]
        },
        {
          name: '',
          imgSrc: '/static/img/icon_8.png',
          url: 'server',
          children: [
            {name: '服务关系表', url: 'server'},
          ]
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      setBrand: 'SET_BRAND',
      setParentBrand: 'SET_PARENTBRAND'
    }),
    goPage (cName, mName, url, indexs) {
      this.curCname = cName
      // 保存状态
      this.setBrand(cName)
      this.setParentBrand(mName)
      this.$router.push({
        name: url
      })
    }
  }
})
</script>
<style type="text/css">
@import '../../assets/css/left.css'
</style>
