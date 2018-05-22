<template>
  <div class="detail">
    <brand></brand>
    <div class="bgwhite">
    <!--贷款还款总计-->
    <h2 class="h2-bord">外综服企业列表</h2>
    <filter-company @myState = "myStates">
      <dl slot="other">
        <dt>&nbsp;</dt>
        <!-- <dd>
          <div class="btn-jiejin">封禁</div>
          <div class="btn-fengjin">解禁</div>
        </dd> -->
      </dl>
    </filter-company>
    <tables-tit-more :tablesData="dRepayData">
      <div slot="tables-tit">
      </div>
      <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
      <div slot="datas" v-show="mainData2">
        <dd v-for="c in companys">
          <div>{{c.tradeCompanyInfo.entName}}</div>
          <div>{{c.userName}}</div>
          <div><span class="green cursor" v-if="c.tradeCompanyInfo.onlineStatus==1"  @click="goStop(c.tradeCompanyInfo.id,2)">封禁<i class="hui-ccc">（点击解禁）</i></span> <span class="green cursor"  v-if="c.tradeCompanyInfo.onlineStatus==2"  @click="goStop(c.tradeCompanyInfo.id,1)">正常<i class="hui-ccc"> (点击可封禁)</i></span></div>
          <div>
            <span class="hui cursor" v-if="c.tradeCompanyInfo.status==1">审核通过</span> 
            <span class="red cursor"  v-if="c.tradeCompanyInfo.status==2">审核未通过</span> 
            <span class="green cursor"  v-if="c.tradeCompanyInfo.status==0">待审核</span></div>
          <div>{{c.time | dateFormate}}</div>
          <div>{{c.mobile}}</div>
          <!-- <div>{{c.email}}</div> -->
          <div class="blue-link">
             <!-- v-if="c.tradeCompanyInfo.status==0" -->
           
            <div class="cursor">
              <span  @click="goAuditing(c.tradeCompanyInfo.id, c.bank?c.bank.id:'', c.bank?c.bank.name: '', c.tradeCompanyInfo.status)">审核</span>
              <span  @click="goCompany(c.tradeCompanyInfo.id)">查看</span> <span  @click="goEdit(c.tradeCompanyInfo.id, c.bank?c.bank.name:'')">编辑</span>
            </div>
          </div>
        </dd>
      </div>
    </tables-tit-more>
    </div>
    <!--分页-->
    <page :pageSize="pageCount" :curPage="curPage" :curIndex="curIndex" @getCurPage="getCurPage"></page>
  </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import page from '../../../components/base/page'
import tablesTitMore from '../../../components/common/tables-tit-more'
import checkboxData from '../../../components/common/checkbox-data'
import filterCompany from '../../../components/common/filter-company-out'
import {mapMutations} from 'vuex'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: '企业名称'},
          {title: '用户名'},
          {title: '上线状态'},
          {title: '审核状态'},
          {title: '注册时间'},
          {title: '联系电话'},
          // {title: '注册邮箱'},
          {title: '操作'}
        ],
        url: 'outCompanyAffirm'
      },
      // 企业
      companys: [],
      // 默认选中状态
      selectStates: '',
      //分页
      // 默认当前页
      curPage: 1,
      // 当前页的index
      curIndex: 0,
      //最大页数
      pageSize: 1,
      pageCount: 1,
      // 暂无数据
      popData2: false,
      mainData2: true
    }
  },
  components: {
    brand,
    tablesTitMore,
    checkboxData,
    filterCompany,
    page
  },
  mounted () {
    this.getCompanys()
  },
  methods: {
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getCompanys()
    },
    // ...mapMutations({
    //   setBankName: 'SET_BANKNAME'
    // }),
    goRepay () {
      this.$router.push({name: 'goRepayment'})
    },
    // 获取企业信息列表
    getCompanys () {
      let _this = this
      this.$http.get('/api/ooway/tradecompany/selectbystatus?pageNum='+ _this.curPage +'&&status=' + _this.selectStates)
        .then(res => {
          if (res.data.status === 200 && res.data.result) {
            this.pageSize = res.data.result.pageSize
            this.pageCount = Math.ceil(res.data.result.total / this.pageSize)
            this.pageNum = res.data.result.pageNum
            _this.companys = res.data.result.rows
            // 暂无数据
            _this.popData2 = false
            _this.mainData2 = true
          } else {
            // 暂无数据
            _this.popData2 = true
            _this.mainData2 = false
          }
        })
    },
    // 接收子组件单选框的选中状态
    myStates (val) {
      this.selectStates = val
      console.log(this.selectStates)
      // 根据选中状态来筛选数据
      this.getCompanys()
    },
    // 进入公司详情
    goCompany (_id) {
      this.$router.push({
        name: 'outCompanyInfo',
        query: {
          'id': _id
        }
      })
    },
    // 去编辑
    goEdit (_id, _bankName) {
        this.$router.push({
        name: 'outCompanyEdit',
        query: {
          'id': _id,
          'bankName': _bankName
          }
        })
    },
    // 去审核
    goAuditing (_id, _bankId, _bankName, _status) {
      this.$router.push({
        name: 'outCompanyAffirm',
        query: {
          'id': _id,
          'bankName': _bankName,
          'bankId': _bankId,
          's': _status
        }
      })
      // this.setBankName(_bankName)

    },
    // 去删除
    goDelete (_id) {
      this.$router.push({
        name: 'outCompanyAffirm',
        query: {
          'id': _id
        }
      })
    },
    // 去封禁
    goStop (_id, _lineStatus) {
      let _this = this
      this.$http.get('/api/ooway/tradecompany/manage?id=' + _id +  '&&onlineStatus=' + _lineStatus)
        .then(res => {
          if(res.data.status === 200) {
            _this.getCompanys()
          }
        })
    }
  }
})
</script>
<style type="text/css" scoped>
@import '../../../assets/css/detail.css';
.filter dl dt{padding-top:0px;}
.blue-link span{
  display: inline-block;
  margin:0 5px;
  color:blue;
}
.cursor span{
  cursor: pointer;
}
</style>
