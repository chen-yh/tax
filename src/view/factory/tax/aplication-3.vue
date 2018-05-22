<template>
    <div>
       <brand>退税融资申请</brand>
       <div class="bgwhite">
         <div class="bg-hui-info">
           <div class="path">
             <dl class="active">
               <dt>1</dt>
               <dd>单据上传及信息确认</dd>
             </dl>
             <dl class="active">
               <dt>2</dt>
               <dd>选择融资金额及期限</dd>
             </dl>
             <dl class="active">
               <dt>3</dt>
               <dd>确认融资</dd>
             </dl>
           </div>
         </div>
         <!--报关信息-->
         <h2 class="tit-hui">
           报关单信息
         </h2>
         <div class="company-info">
           <dl>
            <dt>合同号：</dt>
            <dd>asdfw4234</dd>
           </dl>
           <dl>
            <dt>报关单号：</dt>
            <dd>35345</dd>
           </dl>
           <dl>
            <dt>报关单金额：</dt>
            <dd>100 </dd>
           </dl>

          </div>
          <div class="company-info">
           <dl>
            <dt>海关放行状态：</dt>
            <dd>放行</dd>
           </dl>
           <dl>
            <dt>出口申报日期：</dt>
            <dd>2018-09-09</dd>
           </dl>
           <dl>
            <dt>委托出口企业名称：</dt>
            <dd>保定帽业 </dd>
           </dl>
          </div>
         <!--报关商品-->
         <div class="tit2">
            <h3>报关单商品1</h3>
         </div>
         <div class="company-info">
           <dl>
            <dt>出口商品名称：</dt>
            <dd>100</dd>
           </dl>
           <dl>
            <dt>出口商品HS编码：</dt>
            <dd>天津北qqqqq</dd>
           </dl>
           <dl>
            <dt>退税率：</dt>
            <dd>天津北12313123</dd>
           </dl>
          </div>
          <div class="company-info">
           <dl>
            <dt>商品单价：</dt>
            <dd>10</dd>
           </dl>
           <dl>
            <dt>商品数量：</dt>
            <dd>&nbsp;</dd>
           </dl>
           <dl>
            <dt>商品总价：</dt>
            <dd>2342sdfsdfsf4</dd>
           </dl>
          </div>
         <!--结汇收汇信息-->
         <h2 class="tit-hui">
           结汇收汇信息
         </h2>
         <div class="company-info">
           <dl>
            <dt>结汇金额：</dt>
            <dd>100</dd>
           </dl>
           <dl>
            <dt>收汇金额：</dt>
            <dd>100 </dd>
           </dl>
           <dl>
            <dt>退税总金额：</dt>
            <dd>100 </dd>
           </dl>
         </div>
         <!--发票信息-->
         <h2 class="tit-hui">
           发票信息
         </h2>
         <div class="bg-hui-info">
            <div class="company-info">
             <dl>
              <dt>发票代码：</dt>
              <dd>100</dd>
             </dl>
             <dl>
              <dt>开票日期：</dt>
              <dd>天津北qqqqq</dd>
             </dl>
             <dl>
              <dt>发票数量：</dt>
              <dd>天津北qqqqq</dd>
             </dl>
            </div>
            <div class="company-info">
             <dl>
              <dt style="width:80%; text-align:left; padding-left:60px;">发票号码：100 发票金额：</dt>
              <dd></dd>
             </dl>
            </div>
            <div class="company-info">
             <dl>
              <dt>发票总金额：</dt>
              <dd></dd>
             </dl>
             <dl>
              <dt> </dt>
              <dd> </dd>
             </dl>
             <dl>
              <dt> </dt>
              <dd> </dd>
             </dl>
            </div>
          </div>
          <!--票据信息-->
          <h2 class="tit-hui">
           票据信息
         </h2>
         <div class="piaoju">
          <dl>
           <dt>报关单：</dt>
           <dd>
            <div class="pic1"><img src="../../../assets/img/shuidan.png"></div>
            <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
            </div>
           </dd>
          </dl>
          <dl>
           <dt>收汇凭证：</dt>
           <dd>
            <div class="pic2"><img src="../../../assets/img/yingye1.png"></div>
            <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
            </div>
           </dd>
          </dl>
          <dl>
           <dt>结汇凭证：</dt>
           <dd>
            <div class="pic2"><img src="../../../assets/img/yingye1.png"></div>
            <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
            </div>
           </dd>
          </dl>
          <dl>
           <dt>发票：</dt>
           <dd class="fapiao">
            <div class="pic3">
              <img src="../../../assets/img/yingye1.png">
            </div>
            <div class="btn-file" style="margin-top:30px;">
              <div class="btn-zi btn-zi-big float-right">更改 点击上传</div>
              <p>图片格式要求：jpg/png/pdf</p>
            </div>
           </dd>
          </dl>
         </div>
         <div>
           <p>数据统计信息</p>
           <tables-tit-more :tablesData="applyData"></tables-tit-more>
         </div>
         <div class="operate">
           <button class="btn-no">上一步</button>
           <button class="btn-true" @click="goInfo()">提交并待财务审核</button>
         </div>
       </div>
    </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
import tablesTitMore from '../../../components/common/tables-tit-more'
export default({
  data () {
    return {
      applyData: {
        data: [
          {title: '融资项目'},
          {title: '融资金额()'},
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
    tablesTitMore
  },
  methods: {
    goInfo () {
      this.$router.push({name: 'aplicationInfo'})
    }
  }
})
</script>
<style type="text/css">
  @import '../../../assets/css/detail.css'
</style>
