<template>
  <div class="detail">
    <brand></brand>
    <div class="bgwhite">
    <!--贷款还款总计-->
    <tables-tit-more :tablesData="dRepayData">
      <div slot="tables-tit">还款确认列表
      </div>
      <div slot="datas"  v-show="popData2" class="pop-center">暂无数据</div>
      <div slot="datas" v-show="mainData2">
        <dd v-for="d in datas">
          <!-- <div>{{d.contract}}</div> -->
          <div>
            <span v-if="d.financingProject==1">退税融资</span>
          </div>
          <div>{{d.entName}}</div>
          <div>{{d.allFinancing}} 元</div>
          <div>{{d.repayment.repayTime | dateFormate}}</div>
          <div>{{d.repayment.createTime | dateFormate}}</div>
          <div>{{d.repayment.amount}}</div>
          <div><span class="link-blue" @click="goRepay(d.repayment)">去确认</span></div>
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
import {mapMutations} from 'vuex'
export default({
  data () {
    return {
      dRepayData: {
        data: [
          {title: '融资项目'},
          {title: '融资企业'},
          {title: '融资金额'},
          {title: '贷款申请时间'},
          {title: '还款时间'},
          {title: '还款金额'},
          {title: '操作'}
        ],
        url: 'reciveAffirm'
      },
      datas: [],
      repayMent: 0,
      imgSrc: '',
      //分页
      // 默认当前页
      curPage: 1,
      // 当前页的index
      curIndex: 0,
      //最大页数
      pageCount: 1,
      // 暂无数据
      popData2: false,
      mainData2: true,
    }
  },
  components: {
    brand,
    page,
    tablesTitMore
  },
  mounted () {
    this.getDatas()
  },
  methods: {
    ...mapMutations({
      setRepayMent: 'SET_REPAYMENT'
    }),
    // 分页
    getCurPage (p, index) {
      this.curPage = p
      this.curIndex = index
      this.getDatas()
    },
    getDatas () {
      let _this = this
      this.$http.get('/api/ooway/repay/select?pageNum=' + _this.curPage + '&status=0')
        .then(res => {
          if (res.data.status === 200 && res.data.result && res.data.result.total > 0) {
              this.datas = res.data.result.rows
              // 分页
              this.pageCount = Math.ceil(res.data.result.total / res.data.result.pageSize )
              this.pageNum = res.data.result.pageNum
            } else {
              // 暂无数据
              _this.popData2 = true
              _this.mainData2 = false
            }
        })
    },
    goRepay (obj) {
      let params = {
        'id': obj.id,
        'amount': obj.amount,
        'imgSrc': obj.paymentImg,
        'repayTime': obj.repayTime,
        'applyId': obj.applyId
      }
      console.log('params', params)
      // 保存信息
      this.setRepayMent(params)
      this.$router.push({
        name: 'reciveAffirm',
        query: {
          'id': obj.id
        }
      })
    }
  }
})
</script>
<style type="text/css" scoped>
@import '../../../assets/css/detail.css';
</style>
