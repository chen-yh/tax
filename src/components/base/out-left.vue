<template>
 <div class="left">
    <div v-if="userType==1">
      <dl v-for="m in menuInfo.slice()" :key="m.id">
       <dt :class="m.url"><img :src="m.imgSrc"> <span @click="goPageParent(m.name,m.url)">{{m.name}}</span></dt>
       <dd v-if="m.children.length!=0">
        <ul>
         <li v-for="(c,index) in m.children" :class="{active:curCname==c.name}" :key="c.id" @click="goPage(c.name,m.name,c.url,index)">
            {{c.name}}
         </li>
        </ul>
       </dd>
      </dl>
    </div>
    <div v-if="userType==3">
      <dl v-for="m in menuInfo.slice(0,1)" :key="m.id">
       <dt :class="m.url"><img :src="m.imgSrc"> <span @click="goPageParent(m.name,m.url)">{{m.name}}</span>
       </dt>
       <dd v-if="m.children.length!=0">
        <ul>
         <li v-for="(c,index) in m.children" :class="{active:curCname==c.name}" :key="c.id" @click="goPage(c.name,m.name,c.url,index)">
            {{c.name}}
         </li>
        </ul>
       </dd>
      </dl>
      <dl v-for="m in menuInfo.slice(3,5)" :key="m.id">
       <dt :class="m.url"><img :src="m.imgSrc"> <span @click="goPageParent(m.name,m.url)">{{m.name}}</span></dt>
       <dd v-if="m.children.length!=0">
        <ul>
         <li v-for="(c,index) in m.children" :class="{active:curCname==c.name}" :key="c.id" @click="goPage(c.name,m.name,c.url,index)">
            {{c.name}}
         </li>
        </ul>
       </dd>
      </dl>
    </div>
    <div v-if="userType==2">
      <dl v-for="m in menuInfo.slice(0,1)" :key="m.id">
       <dt :class="m.url"><img :src="m.imgSrc"> <span @click="goPageParent(m.name,m.url)">{{m.name}}</span></dt>
       <dd v-if="m.children.length!=0">
        <ul>
         <li v-for="(c,index) in m.children" :class="{active:curCname==c.name}" :key="c.id" @click="goPage(c.name,m.name,c.url,index)">
            {{c.name}}
         </li>
        </ul>
       </dd>
      </dl>
      <dl v-for="m in menuInfo.slice(3,4)" :key="m.id">
       <dt :class="m.url"><img :src="m.imgSrc"> <span @click="goPageParent(m.name,m.url)">{{m.name}}</span></dt>
       <dd v-if="m.children.length!=0">
        <ul>
         <li v-for="(c,index) in m.children" :class="{active:curCname==c.name}" :key="c.id" @click="goPage(c.name,m.name,c.url,index)">
            {{c.name}}
         </li>
        </ul>
       </dd>
      </dl>
      <dl v-for="m in menuInfo.slice(5)" :key="m.id">
       <dt :class="m.url"><img :src="m.imgSrc"> <span @click="goPageParent(m.name,m.url)">{{m.name}}</span></dt>
       <dd v-if="m.children.length!=0">
        <ul>
         <li v-for="(c,index) in m.children" :class="{active:curCname==c.name}" :key="c.id" @click="goPage(c.name,m.name,c.url,index)">
            {{c.name}}
         </li>
        </ul>
       </dd>
      </dl>
    </div>
 </div>
</template>
<script type="text/javascript">
import {mapMutations} from 'vuex'
export default({
  name: 'outLeft',
  data () {
    return {
      userType: JSON.parse(window.localStorage.outsideUserLoginMsg).userType,
      // type: '2',
      // type: '3',
      curCname: '',
      pCurMname: '',
      isTrue: false,
      menuInfo: [
        {
          name: '',
          imgSrc: '/static/img/icon_1.png',
          url: 'outhome',
          children: [
            {name: '外综服首页', url: 'outhome'}
          ]
        },
        {
          name: '账户管理',
          imgSrc: '/static/img/icon_2.png',
          url: 'outManagementSubAccount',
          children: [
            {name: '创建账户', url: 'outCreatAccount'},
            {name: '管理账户', url: 'outManagementSubAccount'}
          ]
        },
        {
          name: '企业信息',
          imgSrc: '/static/img/w_icon_2.png',
          url: 'outCompany',
          children: [
            {name: '企业信息', url: 'outCompany'},
            {name: '修改密码', url: 'outChangePasswords'}
          ]
        },
        {
          name: '我的账号',
          imgSrc: '/static/img/w_icon_3.png',
          url: '',
          children: [
            {name: '授信额度', url: 'outCredit'},
            {name: '借贷明细', url: 'outLoanDetail'},
            {name: '出口明细', url: 'outOutDetail'}
          ]
        },
        {
          name: '财务操作',
          imgSrc: '/static/img/w_icon_4.png',
          url: '',
          children: [
            {name: '我要还款', url: 'outRepayment'},
            {name: '还款列表', url: 'repayList'},
            {name: '融资确认', url: 'financingAffirmList'},
            {name: '收款待确认', url: 'outReciveList'},
            {name: '平台对账', url: 'outAccount'}
          ]
        },
        {
          name: '退税融资', imgSrc: '/static/img/w_icon_5.png', url: '', children: [
              {name: '退税融资管理', url: 'taxRefund'},
              {name: '退税融资申请', url: 'outApplication1'}
          ]
        },
        {
          name: '出口企业退税申请', imgSrc: '/static/img/icon_7.png', url: 'outAuditingList', children: []
        },
        {
          name: '结汇融资', imgSrc: '/static/img/w_icon_6.png', url: '', children: []
        },
        {
          name: '信保融资', imgSrc: '/static/img/w_icon_7.png', url: '', children: []
        },
        {
          name: '', imgSrc: '/static/img/w_icon-10.png', url: 'myUser', children: [
            {name: '我的客户', url: 'myUser'}
          ]
        }
      ]
    }
  },
  mounted () {
    
  },
  methods: {
    ...mapMutations({
      setBrand: 'SET_BRAND',
      setParentBrand: 'SET_PARENTBRAND'
    }),
    goPageParent (mName, url) {
      // alert(0)
      this.curCname = mName
      this.$router.push({
        name: url
      })
    },
    goPage (cName, mName, url, indexs) {
      if (url === 'outApplication1') {
        this.reviewTheValidation (cName, mName, url, indexs)
      }else {
        this.curCname = cName
        // 保存状态
        this.setBrand(cName)
        this.setParentBrand(mName)
        this.$router.push({
          name: url
        })
      }
    },
    reviewTheValidation (cName, mName, url, indexs) {
      let _this = this
      this.$http.post('/api/validate/user', {
      }).then(function (res) {
        console.log('3333', res)
        if (res.data.msg === '成功') {
          _this.curCname = cName
          // 保存状态
          _this.setBrand(cName)
          _this.setParentBrand(mName)
          _this.$router.push({
            name: url
          })
        }else {
          alert('请认证企业信息')
          _this.$router.push({
            name: 'outCompanyEdit'
          })
        }
      }).catch(function (error) {
      })
    }
  }
})
</script>
<style type="text/css">
@import '../../assets/css/left.css'
</style>
