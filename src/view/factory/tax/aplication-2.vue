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
           选择融资金额及贷款期限
         </h2>
         <div class="set1">
             <div class="set-money">
               融资金额： <input type="text" name="" class="w200">  元
             </div>
             <div>
               <input type="radio" name=""> 最长1个月，年利率5%
             </div>
             <div>
               <input type="radio" name=""> 最长1个月，年利率5%
             </div>
             <div>
               <input type="radio" name=""> 最长1个月，年利率5%
             </div>
             <div>
               <input type="radio" name=""> 最长1个月，年利率5%
             </div>
         </div>
         <div class="pop">
           注： 融资期限为最长融资期限。最长融资期限内，您可根据实际情况提前还款，还款利息按日计算。
         </div>
         <div class="operate">
           <button class="btn-no">上一步</button>
           <router-link to="aplication3"><button class="btn-true">下一步</button></router-link>
         </div>
       </div>
    </div>
</template>
<script type="text/javascript">
import brand from '../../../components/base/brand'
export default({
  components: {
    brand
  }
})
</script>
<style type="text/css">
  @import '../../../assets/css/detail.css'
</style>
