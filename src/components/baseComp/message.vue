<template>
	<div v-show="show">
	    <div class="weui-mask"></div>
	    <div class="weui-dialog">
	        <!-- <div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗标题</strong></div> -->
	        <div class="weui-dialog__bd">{{message}}</div>
	        <div class="weui-dialog__ft">
	            <div class="weui-dialog__btn weui-dialog__btn_primary" @click="iKnow">知道了</div>
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
		},
		message:{
			type:String,
			require:true,
			default:'',
		}
	},
	methods:{
		iKnow(){
			this.$emit('iKnow')
		}
	}

}
</script>

<style scoped>
	
</style>