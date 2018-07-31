<template>
	<div v-show="show">
	    <div class="weui-mask"></div>
	    <div class="weui-dialog">
	        <div class="weui-dialog__hd"><strong class="weui-dialog__title">提示</strong></div>
	        <div class="weui-dialog__bd">{{message}}</div>
	        <div class="weui-dialog__ft">
	            <div class="weui-dialog__btn weui-dialog__btn_default" @click="iSure(false)">取消</div>
	            <div class="weui-dialog__btn weui-dialog__btn_primary" @click="iSure(true)">确认</div>
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
		iSure(isSure){
			this.$emit('iSure',isSure)
		}
	}

}
</script>