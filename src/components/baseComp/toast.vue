<template>
	<div>
		<div id="loadingToast" v-show='show'>
		    <div class="weui-mask_transparent"></div>
		    <div class="weui-toast">
		        <i class="weui-loading weui-icon_toast"></i>
		        <p class="weui-toast__content">加载中</p>
		    </div>
		</div>
	</div>
	
</template>
<script>
export default{
	props:{
		show:{
			type:Boolean,
			required:true,
			defult:false,
		}
	}
}
</script>
<style scoped>
	
</style>