<template>
	<div>
	</div>
</template>
<script>
export default{
	methods:{
    // 获取回调目录
    MPRedirect_url(){

      var params = {
        bBase:false,
        time:this.dataUtil.formatTime1(new Date())
      }

      console.log(params);

      var encryptParams = {
        evalue:this.$encrypt(JSON.stringify(params))
      }

      console.log(encryptParams);

      this.http.post(this.api.baseUrl+this.api.MPRedirect_url,encryptParams)
      .then(result=>{
        console.log(result)
        if (result.status == '成功') {
          console.log(result.data.replace(/<&amps;>/g, ""))
          // window.location.href = result.data
        }
      })
    },


  },
  mounted(){
    window.sessionStorage.setItem('isLogin',true)
    // this.MPRedirect_url()
    window.location.href = this.api.url

    // 测试的时候跳过授权页
    // window.sessionStorage.setItem('id','user01')
    // this.$router.push('main')
   
  }
}	
</script>
<style>
	
</style>