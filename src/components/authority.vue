<template>
	<div>
	</div>
</template>
<script>
export default{
  mounted(){
    window.sessionStorage.setItem('isLogin',true)
    // window.location.href = this.api.url

    // 测试的时候跳过授权页
    window.sessionStorage.setItem('id','yql')
    this.$router.push('main')
   
  }
}	
</script>
<style>
	
</style>