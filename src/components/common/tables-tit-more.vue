<template>
 <div class="tables">
  <h2>
   <slot name="tables-tit"></slot>
  </h2>
  <dl>
   <dt>
     <div v-for="tit in tablesData.data" :key="tit.id">{{tit.title}}</div>
   </dt>
   <slot name="datas"></slot>
   <slot name="countData"></slot>
  </dl>
 </div>
</template>
<script type="text/javascript">
export default({
  data () {
    return {}
  },
  props: ['tablesData', 'tDatas'],
  mounted () {
    let tablesLen = $('.tables').length
    var len
    for (var i = 0; i < tablesLen; i++) {
      len = $('.tables').eq(i).find('dl>dt div').length 
      // alert(len)
      $('.tables').eq(i).find('dl').css('minWidth','100%')
      if(len > 8) {
        $('.tables').eq(i).find('dl').width(len * 100)
      } else {
        $('.tables').eq(i).find('dl').css('width','100%')
      }
    }
  },
  methods: {
    goDetailInfo () {
      console.log(this.tablesData.url)
      this.$router.push({
        name: this.tablesData.url
      })
    }
  }
})
</script>
<style type="text/css">
/*表格*/
.tables{
 margin-bottom: 20px;
 width:100%;
 overflow: auto;
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
.tables dl dt div, .tables dl dd div{
  text-align: center;
  justify-content:center;
  word-break:break-all;
}
</style>
