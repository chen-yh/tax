<template>
 <div>
  <div class="bg-zi">
    <span class="homea">平台首页</span>
    <div class="righta">
<<<<<<< HEAD:web/src/components/base/headers.vue
      <span>您好， xxxxxx有限公司</span> | <span>退出</span>
=======
      <span>您好，{{hearderCompanyName}}有限公司 您好</span> | <span>退出</span>
>>>>>>> b8599f532cc5230ca981b199977a578e63340130:web/src/components/base/factory-header.vue
    </div>
  </div>
  <div class="logo">
   <router-link to="/">
    <img src="../../assets/img/logo.png">
    <div class="logo-text">
     <p class="f12">大路网退税融资平台</p>
     <p class="f16">{{headers}}</p>
    </div>
   </router-link>
  </div>
 </div>
</template>
<script type="text/javascript">
export default{
  props: [
    'headers'
  ],
  data () {
    return {
      hearderCompanyName: ''   
    }
  }
}
</script>
<style type="text/css">
  .logo{
   margin:20px auto;
   clear:both;
   overflow: hidden;
   width:1200px;
  }
  .logo img{
   float:left;
   width:207px;

  }
  p{
   margin:0;
   padding:0;
  }
  .logo-text{
   float:left;
   padding-left:10px;
   margin-top:14px;
   color:#703ea2;

  }
  .f12{
   font-size:12px;
   color:#333;
  }
  .f16{
   font-size:16px;
  }
  .bg-zi{
    background: #703ea3;
    height:40px;
    line-height: 40px;
    color:#fff;
    width:100%;
  }
  .bg-zi .homea{
    color:#fff;
    float:left;
    margin-left:30px;
  }
  .bg-zi .righta{
    float:right;
    margin-right:20px;
    font-size:22px;
    font-weight:100;

  }
  .righta span{
    padding:0 15px;
    font-size:14px;
    font-weight:normal;
    line-height: 20px;
    vertical-align: middle;
  }
</style>
