<template>
	<div>
		<v-toast :show='loading'></v-toast>
		<v-message :show="showMessage" :message="message" @iKnow="sureMessage"></v-message>
		<v-dialog :show="showDialog" :message="message" @iSure="sureDialog"></v-dialog>
		<div class="weui-btn weui-btn_warn btn" style="margin:40px 10px" @click="deleteBtnClick">解除绑定</div>
	</div>
</template>

<script>
import vToast from '../baseComp/toast'
import vDialog from '../baseComp/dialog'
import vMessage from '../baseComp/message'

export default{
	components:{
		vToast,
		vDialog,
		vMessage
	},
	data(){
		return{
			loading:false,
			showDialog:false,
			showMessage:false,

			message:'',//提示显示的内容
		}
	},
	methods:{
		/**
		*解除房间的绑定
		*/
		DeleteUserHouseInfo(){
			this.loading = true
			var params = {
		 		UserId:window.sessionStorage.getItem('id'),
		 		HouseRegionCode:this.$route.params.data.HouseRegionCode,
		 		time:this.dataUtil.formatTime1(new Date())
		 	}
		 	console.log(JSON.stringify(params));
		 	
		 	var encryptParams = {
		 		evalue:this.$encrypt(JSON.stringify(params))
		 	}

		 	console.log(encryptParams);

		 	this.http.post(this.api.baseUrl+this.api.DeleteUserHouseInfo,encryptParams)
		 	.then(result=>{
		 		this.loading = false
		 		console.log(result)
		 		if (result.status == '成功') {
		          this.message = '删除成功'
		          this.showMessage = true
		 		}else{
		 			alert(result.data)
		 		}
		 	})

		},

		/**
		*通知框确认
		*/
		sureMessage(){
			this.showMessage = false
			// 返回
			this.$router.go(-1)

		},

		/**
		*二次确认框操作
		*/
		sureDialog(isSure){
			this.showDialog = false

			if(isSure){
				this.DeleteUserHouseInfo()
			}

		},

		/**
		*点击删除按钮
		*/
		deleteBtnClick(){
			this.message = '你去确认解除与该房间的绑定吗？'
			this.showDialog = true
		}

	},

	activated(){
		if ('undefined' == typeof(this.$route.params.data)) {
	      this.$router.back(-1)
	      return
	    }
	}
}


</script>

<style>
	
</style>
