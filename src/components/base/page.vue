<template>
  <div class="center">
    <ul class="page">
      <!-- <li @click="prevPage()">&lt;</li> -->
      <li v-for="(p,index) in pageSize" @click="goCurPage(p,index)" :class="{curPage: curIndex==index}">{{p}}</li>
      <!-- <li @click="nextPage()">&gt;</li> -->
    </ul>
  </div>
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex'
export default{
  props: ['pageSize', 'curPage', 'curIndex'],
  data () {
    return {
     // curIndex: 0
    }
  },
  computed: {
    
  },
  created () {
    // console.log('aaaa', '> ' + this.brand)
  },
  methods: {
    // 获取当前页
    goCurPage (p, index) {
      this.$emit('getCurPage', p, index)
    },
    // 下一页
    nextPage () {
      this.curPage++
      alert(this.curPage)
      // if (this.curPage == this.pageSize) {
      //   this.curPage = 1
      //   this.curIndex = 0
      //   this.$emit('getCurPage', this.curPage, this.curIndex )
      // }
    }
  }
}
</script>
<style type="text/css">
.center{
  margin:20px auto;
  text-align:center;
}
  .page li{
    display: inline-block;
    width:40px;
    padding:4px 5px;
    margin:10px 3px;
    text-align:center;
  }
  .curPage{
    background: #eee;
    color:red;
  }
</style>
