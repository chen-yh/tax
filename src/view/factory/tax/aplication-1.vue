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
             <dl>
               <dt>2</dt>
               <dd>选择融资金额及期限</dd>
             </dl>
             <dl>
               <dt>3</dt>
               <dd>确认融资</dd>
             </dl>
           </div>
           <div class="pop">
            <span>
              您年授信额度：1000 
            </span>
            <span>
              您本月授信额度：1000 
            </span>
            <span>
              可使用最大融资额：1000 
            </span>
            <p>为确保融资正常，请及时去银行交纳保证金，提高授信额度。</p>
           </div>
         </div>
         <!--报关信息-->
         <h2 class="tit-hui">
           报关单信息
         </h2>
         <div class="company-info">
           <dl>
             <dt>合同号：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
           <dl>
             <dt>报关单号：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
         </div>
         <div class="company-info">
           <dl>
             <dt>海关放行状态：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
           <dl>
             <dt>出口申报日期：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
         </div>
         <div class="company-info">
          <dl>
             <dt>委托出口企业名称：</dt>
             <dd>
              <select>
                <option>委托出口企业名称</option>
              </select>
            </dd>
           </dl>
           <dl>
             <dt>报关单金额：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
         </div>
          <div class="company-info">
            <dl>
             <dt> &nbsp;</dt>
             <dd> <div class="btn-zi" style="margin-top:20px;">新增自有客户</div></dd>
           </dl>
           <dl>
             <dt> </dt>
             <dd>
            </dd>
           </dl>
         </div>
         <!--报关商品-->
         <div class="tit2">
            <h3>报关单商品1</h3>
         </div>
         <div class="company-info">
           <dl>
             <dt>出口商品名称：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
           <dl>
             <dt>出口商品SH编码：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
         </div>
         <div class="company-info">
           <dl>
             <dt>商品单价：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
           <dl>
             <dt>退税率：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
         </div>
         <div class="company-info">
           <dl>
             <dt>商品数量：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
           <dl>
             <dt> </dt>
             <dd> </dd>
           </dl>
         </div>
         <div class="company-info">
           <dl>
             <dt>商品总价：</dt>
             <dd><span class="red">232323</span></dd>
           </dl>
           <dl>
             <dt> </dt>
             <dd> </dd>
           </dl>
         </div>
         <div class="company-info">
           <dl>
             <dt> &nbsp; </dt>
             <dd><div class="btn-zi">新增商品</div> </dd>
           </dl>
           <dl>
             <dt> </dt>
             <dd> </dd>
           </dl>
         </div>
         <!--结汇收汇信息-->
         <h2 class="tit-hui">
           结汇收汇信息
         </h2>
         <div class="company-info">
           <dl>
             <dt>结汇金额：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
           <dl>
             <dt>收汇金额：</dt>
             <dd><input type="text" name=""> <img src="../../../assets/img/icon-del.png" class="icon"></dd>
           </dl>
         </div>
         <div class="company-info">
           <dl>
             <dt>退税融资总金额：</dt>
             <dd>23424</dd>
           </dl>
           <dl>
             <dt> </dt>
             <dd> </dd>
           </dl>
         </div>
         <!--发票信息-->
         <h2 class="tit-hui">
           结汇收汇信息
         </h2>
         <div class="company-info">
           <dl>
             <dt>发票代码：</dt>
             <dd><input type="text" name=""></dd>
           </dl>
           <dl>
             <dt>开票日期：</dt>
             <dd><input type="text" name=""> <img src="../../../assets/img/icon-del.png" class="icon"></dd>
           </dl>
         </div>
         <div class="company-info">
           <dl>
             <dt>
              发票号码：
            </dt>
             <dd><input type="text" name="" style="width:80px;"> &nbsp; &nbsp; &nbsp;发票金额：<input type="text" name="" style="width:80px;"></dd>
           </dl>
           <dl>
             <dt> <div class="btn-orange-small">新增发票号码及金额</div> </dt>
             <dd>&nbsp; </dd>
           </dl>
         </div>
         <div class="company-info">
           <dl>
             <dt>
              发票数量：
            </dt>
             <dd><input type="text" name=""></dd>
           </dl>
           <dl>
             <dt> 发票总金额： </dt>
             <dd>23412 </dd>
           </dl>
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
              <div class="btn-zi btn-zi-big float-right">点击上传付款水单</div>
              <p>图片格式要求：jpg/png/pdf</p>
            </div>
           </dd>
          </dl>
          <dl>
           <dt>收汇凭证：</dt>
           <dd>
            <div class="pic2"><img src="../../../assets/img/yingye1.png"></div>
            <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">点击上传收汇凭证</div>
              <p>图片格式要求：jpg/png/pdf</p>
            </div>
           </dd>
          </dl>
          <dl>
           <dt>转账凭证：</dt>
           <dd>
            <div class="pic2"><img src="../../../assets/img/yingye1.png"></div>
            <div class="btn-file">
              <div class="btn-zi btn-zi-big float-right">点击上传转账凭证</div>
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
              <div class="btn-zi btn-zi-big float-right">点击上传发票</div>
              <p>图片格式要求：jpg/png/pdf</p>
            </div>
           </dd>
          </dl>
         </div>
         <div class="operate">
           <button class="btn-no">保存</button>
           <button class="btn-true" @click="goApp2()">下一步</button>
         </div>
       </div>
    </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
export default({
  components: {
    brand
  },
  methods: {
    goApp2 () {
      this.$router.push({
        name: 'aplication2'
      })
    }
  }
})
</script>
<style type="text/css">
  @import '../../../assets/css/detail.css'
</style>
