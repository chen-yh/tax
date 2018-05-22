<template>
<div class="bigImg" v-if="showBigImg">
  <div class="mark"></div>
  <img :src="imgSrc" id="imgs">
  <span @click="close()" class="close">X</span>
</div>
</template>
<script type="text/javascript">
import $ from 'jquery'
export default{
  props: ['imgSrc', 'showBigImg'],
  data () {
    return {
      
    }
  },
  created () {
    let w = $('.bigImg img').width()
    let h = $('.bigImg img').height()
    // alert($(document).scrollTop()) 
    if (this.showBigImg) {
      $('html').css({
        'height': '100%',
        'overflow': 'hidden'
      })
      // $('#imgs').css({
      //   'left': '50%'
      //   // 'margin-left': -w/2 + 'px',
      //   // 'top': '50%',
      //   // 'margin-top': -h/2 + 'px''
      // })
      
    }
    
  },
  methods: {
    close () {
      this.showBigImg = false
      this.$emit('childRen',this.showBigImg)
      
    }
  }
}
</script>
<style type="text/css">
body,html{
  /*width:100%;
  height:100%;
  overflow: hidden;*/
}
.bigImg{
  width:100%;
  height:100%;
  position: absolute;
  top:0;
  left:0;
}
.mark{
  width:100%;
  height:100%;
  background:#000;
  opacity: .5;
  position:absolute;
  z-index:90;
}
.bigImg img{
  position: absolute;
  z-index:200;
  display: block;
  margin: 0 auto;
  top:30%;
  left:40%;
  max-width:80%;
}
.close{
  position: absolute;
  right:10px;
  top:10px;
  color:#fff;
  z-index: 210;
}
</style>
