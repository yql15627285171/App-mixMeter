<!-- 这是回调页面，在此页面做获取code,然后判断用户是否要注册 -->
<template>
	<div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			code:''
		}
	},
	methods:{
		// 获取路径中的值
		GetQueryString(name){
		    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		    var r = window.location.search.substr(1).match(reg);
		    if(r!=null)return  unescape(r[2]); return null;
		},

		// 发送code值，获取用户是否已存在
		loadBympCode(){
		 	var params = {
		 		mpCode:this.code,
		 		time:this.dataUtil.formatTime1(new Date())
		 	}

		 	console.log(JSON.stringify(params));
		 	
		 	var encryptParams = {
		 		evalue:this.$encrypt(JSON.stringify(params))
		 	}

		 	console.log(encryptParams);

		 	this.http.post(this.api.baseUrl+this.api.LoadBympCode,encryptParams)
		 	
		 	.then(result=>{
		 		// var result= JSON.parse(res.data.replace(/<[^>]+>/g, ""))
		 		console.log(result);
		 		if (result.status == '成功') {
		 			if(result.data == 'register'){
		 				this.$router.push({name:'register',params:{myCode:this.code}})
		 			}else{
		 				window.sessionStorage.setItem('id',result.UserId)
		 				window.sessionStorage.setItem('headImgUrl',result.headimgurl)
		 				this.$router.push({name:'main'})
		 			}
		 		}
		 	})
		 },

	},

	mounted(){
		this.code = this.GetQueryString("code")
		console.log(this.code)
		this.loadBympCode();
	},



}
</script>
<style>
	
</style>