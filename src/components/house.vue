<!-- 房间主界面 -->
<template>
	<div>
		<v-toast :show='loading'></v-toast>

		<div v-if="checkedRoom.length>0">
			<div class="weui-cells__title">已审核房间</div>
			<div class="weui-cells">


				<router-link v-for="item in checkedRoom" :to="{name:'unbindRoom',params:{data:item}}" class="weui-cell weui-cell_access">
			        <div class="weui-cell__bd">
			            <p>{{item.FiveAndHouseName}}</p>
			        </div>
			        <div class="weui-cell__ft"></div>
			    </router-link>

				
			</div>
		</div>
		

		<div v-if="checkingRoom.length>0">
			<div class="weui-cells__title">未审核房间</div>
			<div class="weui-cells" >

				<a class="weui-cell" href="javascript:;" v-for="item in checkingRoom">
			        <div class="weui-cell__bd">
			            <p>{{item.FiveAndHouseName}}</p>
			        </div>
			        <div class="weui-cell__ft"></div>
			    </a>

				
			</div>	

		</div>
		
	
		<router-link :to="{name:'bindRoom'}" class="weui-btn weui-btn_primary btn" style="margin:40px 10px">绑定房间</router-link>

	</div>
</template>

<script>
import vToast from './baseComp/toast'
export default{
	components:{
		vToast
	},

	data(){
		return{
			checkedRoom:[],//已审核房间
			checkingRoom:[],//正在审核房间
			loading:false,
		}
	},

	methods:{
		/**
		*查询房间的审查信息
		*/
		QueryUserHouseInfoByID(){
			this.loading = true
			var params = {
		 		UserId:window.sessionStorage.getItem('id'),
		 		time:this.dataUtil.formatTime1(new Date())
		 	}
		 	console.log(JSON.stringify(params));
		 	
		 	var encryptParams = {
		 		evalue:this.$encrypt(JSON.stringify(params))
		 	}

		 	console.log(encryptParams);

		 	this.http.post(this.api.baseUrl+this.api.QueryUserHouseInfoByID,encryptParams)
		 	.then(result=>{
		 		this.loading = false
		 		console.log(result)
		 		if (result.status == '成功') {


		 		// 	console.log(result.data.Check)
		 			this.checkedRoom = result.data.Check
		 			this.checkingRoom = result.data.Apply             
		 		}
		 	})
		}
	},
	activated(){
		
	  
		this.QueryUserHouseInfoByID()
	}
}
</script>
<style>
	
</style>