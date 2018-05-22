<template>
 <div class="tables">
  <h2>
   <slot name="tables-tit"></slot>
  </h2>
  <dl>
   <dt>
     <div v-for="tit in checkboxData.data" :key="tit.id">{{tit.title}}</div>
   </dt>
   <slot name="datas"></slot>
  </dl>
 </div>
</template>
<script type="text/javascript">
export default({
  data () {
    return {}
  },
  props: ['checkboxData'],
  methods: {
    goDetailInfo () {
      console.log(this.checkboxData.url)
      this.$router.push({
        name: this.checkboxData.url
      })
    }
  }
})
</script>
<style type="text/css">
/*表格*/
.tables{
 margin-bottom: 20px;
}
.tables h2{
 margin: 0;
 padding: 6px 0;
 font-size: 16px;
 font-weight: bold;
}
.tables dl dt{
 border-top: solid 2px #703fa2;
 border-bottom: solid 1px #ccc;
 background: #f7f7f7;
}
.tables dl dd{
 border-bottom: solid 1px #ccc;
}
.tables dl dt,.tables dl dd{
 padding: 14px 10px;
 display: flex;
 justify-content: space-around;
}
.tables dl dt div,.tables dl dd div{
 display: flex;
 flex: 1;
}
</style>
