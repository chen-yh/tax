<template>
  <div>
    <div class="selects">
       <img src="../../assets/img/w_icon_9.png" class="arrow">
       <input v-model="selected" type="text" v-bind:readonly="input_disabled" class="inputCss" v-on:click.stop="setselUl">
       <ul >
          <!-- <li class="selLI" v-for="item in dateList" v-bind:data-val="item.date"  v-text="item.date" v-on:click.stop="setSelectVal(item.date)"></li> -->
          <li  v-for="item in dateList" v-bind:data-val="item.date"  v-text="item.date" @click.stop="setSelectVal(item.date)">aaa</li>
          <li>bbb</li>
       </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
export default({
    data () {
      return {
        selected: '请选择',
        serviceType:0,
        dateList:[
          {'date':'2016-11'
          },
          {'date':'2016-10'
          },
          {'date':'2016-09'
          },
          //这里可以用ajax回调设置，做到动态获取
          ],
        Apptype:0,
        num:true,
        input_disabled:true
      }
    },
    methods:{
     change:function(){
        console.log(this.selected);
      }

    } 
})
</script>
<style>
.arrow{
  position: absolute;
  left:160px;
  top:12px;
}
.selects{
  margin-top: 30px;
  position: relative;
}
.selects ul{
    display:block;
    left:0px;
    top:35px;
    position: absolute;
    width:184px;
    border: 1px solid #ccc;
    border-top: none;
    z-index: 999;
}
.selects ul li{
    font-size:12px;
    height:28px;
    line-height: 20px;
    cursor: pointer;
    padding: 5px 0 5px 19px;
    background-color:#ffffff;
  }
.selects ul li:hover{
    color:#ffffff;
    background-color:#ccc;
}
.selects .inputCss{
  width: 164px;
  height:34px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  padding: 0 10px 0 10px;
  border-radius: 0;
  border:1px solid #ababab;
}
.selects .inputCss[disabled]{background-color:#ffffff;}
.selects .inputCss:focus,
.selects .inputCss:hover{
    border-top: 0.5px solid #ccc;border-bottom: 0.5px solid #ccc;border-right: 0.5px solid #ccc;
}
</style>