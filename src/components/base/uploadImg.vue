<template>
    <div class="btn-file">
      <div class="btn-zi btn-zi-big float-right"><slot></slot></div>
      <p>图片格式要求：jpg/png/pdf</p>
      <div class="file-up2 file-up3"><input type="file" name=""  @change="onFileChange($event)"></div>
    </div>
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex'
export default{
  data () {
    return {
      brandHome: '首页',
      policyurl: ''
    }
  },
  computed: {
    ...mapGetters([
      'brand',
      'parentBrand'
    ])
  },
  created () {
    // console.log('aaaa', '> ' + this.brand)
  },
  methods: {
    //上传
    onFileChange(e) {
      let _this = this
      var fs = e.target.files || e.dataTransfer.files;
      this.iSrc = fs[0].name;
      if (fs && fs.length > 0) {
        // 获取目前上传的文件
        var file = fs[0]; // 文件大小校验的动作
        if (file.size > 1024 * 1024 * 2) {
          alert("文件已超过2M！上传失败！");
        } else {
          var zipFormData = new FormData();
          zipFormData.append("files", file); //filename是键，file是值，就是要传的文件，test.zip是要传的文件名
          console.log(zipFormData);
          //发送请求上传--图片
          this.$http.post("/api/auth/upload/image",zipFormData)
          //{headers: { "Content-Type": "multipart/form-data" }}
            .then(function(res) {
              console.log(res);
              if (res != null) {
                // 获取文件的路径地址
                let policyurla = res.data.data;
                // _this.policyurl = policyurla;
                // 传给父组件
                _this.$emit('imgSrcP', res.data.data)
                console.log(policyurla)
              } else {
                alert("上传失败");
              }
              
            });
        }
      }
    },
    aa (e) {
      console.log('bbb', e)
      this.$emit('imgSrcP', e)

    }
  }
}
</script>
