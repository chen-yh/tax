<template>
 <div>
  <h2>{{companyName}}</h2>
  <div><slot></slot></div>
 </div>
</template>
<script type="text/javascript">
export default({
  props: ['companyName'],
  data () {
    return {
    }
  }
})
</script>
<style type="text/css">
 h2{
  font-size:16px;
  font-weight:bold;
  padding-bottom:10px;
  padding-top:20px;
  border-bottom:solid 1px #f4f4f4;
  margin-bottom:20px;
 }
</style>
