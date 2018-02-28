<!-- 这是回调页面，在此页面做获取code,然后判断用户是否要注册 -->
<template>
	<div>
	</div>
</template>
<script>
export default{
	methods:{
	 GetQueryString(name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}

	},
	mounted(){
		var params = this.GetQueryString("code")
		console.log(params)
		this.$router.push('register')
	}
}
</script>
<style>
	
</style>