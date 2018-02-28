<template>
	<div>
		<!-- <div class="user-number">
		<p>{{this.$route.params.type}}表编号</p>
		
		<input type="text" v-model='num' placeholder="请输入10位编号，请查看账单/短信">
		</div>

		<router-link :to="{name:'bill',params:{type:$route.params.type}}"class="weui-btn weui-btn_primary btn ">
		查询账单
		</router-link>
 -->
 	 <div class="weui-cells__title"></div>
	 <div class="weui-cells">
		<router-link :to="{name:'bill',params:{type:$route.params.type}}"class="weui-cell weui-cell_access ">
			<div class="weui-cell__bd">
	            <p>罗湖区/莲塘枫景/A栋/1701</p>
	        </div>
	        <div class="weui-cell__ft"></div>
		</router-link>
	   
	        
	  
	    <router-link :to="{name:'bill',params:{type:$route.params.type}}"class="weui-cell weui-cell_access ">
			<div class="weui-cell__bd">
	            <p>罗湖区/鹏兴花园/A栋/801</p>
	        </div>
	        <div class="weui-cell__ft"></div>
		</router-link>	 </div>
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