<template>
  <div class="filter">
      <dl>
      <dt style="font-weight:bold;">审核对象：</dt>
      <dd>
        <label><input type="radio" name="stateCom1" v-model="myStatus1" value="2"> 大路平台</label>
        <label><input type="radio" name="stateCom1" v-model="myStatus1" value="1"> 外综服</label>
      </dd>
    </dl>
  </div>
</template>
<script type="text/javascript">
  export default({
    data () {
      return {
        myStatus1: 2,
        cVal: 2
      }
    },
    watch: {
      myStatus1: function (val, oldVal) {
        this.cVal = val
        this.myStateObj(this.cVal)
        console.log(this.cVal)
      }
    },
    mounted () {
      this.myStateObj(this.cVal)
    },
    methods: {
      myStateObj (val) {
        this.$emit('myStateObj', val)
      }
    }
  })
</script>
<style type="text/css">
  .btn-jiejin,.btn-fengjin{
    display: inline-block;
    width:80px;
    height:40px;
    line-height: 40px;
    text-align:center;
    background: #ccc;
    color:#fff;
    border-radius:4px;
    margin:0 10px;
  }
  .btn-jiejin{background: #f5aa19;}
</style>
