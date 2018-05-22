<template>
    <div>
       <brand>退税融资</brand>
       <div class="bgwhite">
         <h2 class="title">公司名称</h2>
         <div class="bg-hui-info">
           <div class="company-info">
             <dl>
              <dt>您今年授信额度上限：</dt>
              <dd>35345</dd>
             </dl>
             <dl>
              <dt>本月授信额度：</dt>
              <dd>35345</dd>
             </dl>
            </div>
            <div class="company-info">
             <dl>
              <dt>本月剩余授信额度：</dt>
              <dd>35345</dd>
             </dl>
             <dl>
              <dt> </dt>
              <dd> </dd>
             </dl>
            </div>
            <p class="padd10">您已经通过平台融资2022笔，融资金额共计2000 元。<br/>
            其中202222笔为退税融资，退税融资金额200222 元。</p>
         </div>
       </div>
       <div class="bgwhite">
         <router-link to="aplication1"><div class="btn-big-orange">申请退税融资</div></router-link>
       </div>
       <div class="bgwhite">
         <!--talbes1-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">待平台审核的退税融资列表
             <span class="more"><router-link to="/">查看更多 ></router-link></span>
           </div>
         </tables-tit-more>
         <!--talbes2-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">审批未通过列表
             <span class="more"><router-link to="/">查看更多 ></router-link></span>
           </div>
         </tables-tit-more>
         <!--talbes3-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">待提交退税融资列表
             <span class="more"><router-link to="/">查看更多 ></router-link></span>
           </div>
         </tables-tit-more>
         <!--talbes4-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">待财务确认的放款退税融资列表
             <span class="more"><router-link to="/">查看更多 ></router-link></span>
           </div>
         </tables-tit-more>
         <!--talbes5-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">已经放款的退税融资列表
             <span class="more"><router-link to="/">查看更多 ></router-link></span>
           </div>
         </tables-tit-more>
         <!--talbes5-->
         <tables-tit-more :tablesData="taxData">
           <div slot="tables-tit">待您处理的工厂融资请求列表
             <span class="more"><router-link to="/">查看更多 ></router-link></span>
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
      taxData: {
        data: [
          {title: '合同号'},
          {title: '委托企业'},
          {title: '出口申报日期'},
          {title: '报关金额'},
          {title: '结汇金额'},
          {title: '发票总金额'},
          {title: '委托企业'},
          {title: '委托企业'},
          {title: '委托企业'},
          {title: '委托企业'},
          {title: '委托企业'}
        ],
        url: ''
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
 @import '../../../assets/css/detail.css'
</style>
