<template>
	<div>
		<div class="user-number">
		<p>{{this.$route.params.type}}表编号</p>
		
		<input type="text" v-model='num' placeholder="请输入10位编号，请查看账单/短信">
		</div>

		<!--网络请求的时候可以添加类名weui-btn_loading  -->
		<router-link :to="{name:'bill',params:{type:$route.params.type}}"class="weui-btn weui-btn_primary btn ">
		<!-- <i class="weui-loading"></i> -->	
		查询账单
		</router-link>

	</div>
	
</template>

<script>
export default{
	data(){
		return{
			num:''
		}
	}
}
</script>

<style scoped>
.user-number{
	background-color: #fff;
	margin-top: 10%;
}

input{
	height: 50px;
	width: 100%;
	outline: none;
	font-size: 16px;
	padding: 0 10px;
	margin:5px 0 10px 0;
	border-bottom: 1px solid #f0f0f0;
	border-left : none;
	border-top: none;
	border-right: none;
}

p{
	font-size: 14px;
	margin-left: 10px;
	line-height: 45px;
}

.btn{
	margin: 20px 10px;

}


</style>