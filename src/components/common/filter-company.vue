<template>
  <div class="filter">
      <dl>
      <dt style="font-weight:bold;">审核状态：</dt>
      <dd>
        <label><input type="radio" name="stateCom" v-model="myStatus" value="0"> 全 部</label>
        <label><input type="radio" name="stateCom" v-model="myStatus" value="1"> 待审核</label>
        <label><input type="radio" name="stateCom" v-model="myStatus" value="2"> 审核通过</label>
        <label><input type="radio" name="stateCom" v-model="myStatus" value="3"> 审核未通过</label>
      </dd>
    </dl>
  </div>
</template>
<script type="text/javascript">
  export default({
    data () {
      return {
        myStatus: this.$route.query.verifyState || 0,
        cVal: this.$route.query.verifyState || 0
      }
    },
    watch: {
      myStatus: function (val, oldVal) {
        this.cVal = val
        this.myState(this.cVal)
        console.log(this.cVal)
      }
    },
    mounted () {
      this.myState(this.cVal)
    },
    methods: {
      myState (val) {
        this.$emit('myState', val)
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
