<template>
	<div>
	</div>
</template>
<script>
export default{
	methods:{
  	// 默认授权
  	autoAuthority(){
      window.location.href=this.api.scope_url2
  	},

  	// 手动授权
  	authorityByUser(){
      window.location.href=this.api.scope_url1
  	}	
  },
  mounted(){
  	// this.authorityByUser()
    // 测试的时候跳过授权页
    this.$router.push('register')
  }
}	
</script>
<style>
	
</style>