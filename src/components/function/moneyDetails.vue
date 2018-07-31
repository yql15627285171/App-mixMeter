<!-- 流水账的记录 -->
<template>
	<div>
		<v-toast :show='loading'></v-toast>
		<v-message :show="showMessage" :message="message" @iKnow="sureMessage"></v-message>

		<div class="weui-form-preview item" v-for="item in details">
		    <div class="weui-form-preview__hd">
		        <label class="weui-form-preview__label">交易金额</label>
		        <em class="weui-form-preview__value">¥{{item.TransactionAmount}}</em>
		    </div>
		    <div class="weui-form-preview__bd">
		        <p>
		            <label class="weui-form-preview__label">交易订单</label>
		            <span class="weui-form-preview__value">{{item.TransactionOrder}}</span>
		        </p>
		        <p>
		            <label class="weui-form-preview__label">交易时间</label>
		            <span class="weui-form-preview__value">{{item.TransactionTime}}</span>
		        </p>
		        <p>
		            <label class="weui-form-preview__label">交易类型</label>
		            <span class="weui-form-preview__value">{{item.TransactionType}}</span>
		        </p>
		        <p>
		            <label class="weui-form-preview__label">交易途径</label>
		            <span class="weui-form-preview__value">{{item.TransactionMode}}</span>
		        </p>
		        <p>
		            <label class="weui-form-preview__label">交易方法</label>
		            <span class="weui-form-preview__value">{{item.TransactionMethod}}</span>
		        </p>
		    </div>
		   <!--  <div class="weui-form-preview__ft">
		        <a class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:">操作</a>
		    </div> -->
		</div>


	</div>
</template>

<script>
import vToast from '../baseComp/toast'
import vMessage from '../baseComp/message'
export default{
	components:{
		vToast,
		vMessage
	},
	data(){
		return{
			loading:false,//转圈圈
			showMessage:false,//信息提示
			message:'',//提示的内容
			details:[],//请求回来的流水账数据
		}
	},
	methods:{
		/**
		*客户交易流水账查询
		*/
		QueryMDForUser(){

			this.loading = true

			var params = {
				HouseRegionCode:window.sessionStorage.getItem('HouseRegionCode'),
				time:this.dataUtil.formatTime1(new Date())
			}

			var encryptParams = {
		        evalue:this.$encrypt(JSON.stringify(params))
		    }

		    this.http.post(this.api.baseUrl+this.api.QueryMDForUser,encryptParams)
		    .then(result=>{
		    	this.loading = false
		    	console.log(result)

		    	if (result.status == '成功') {
		    		this.details = result.data
		    	}else{
		    		this.message = result.data
		    		this.showMessage = true
		    	}
		    })
		},

		/**
		*提示框的点击确定的回调方法
		*/
		sureMessage(){
			this.showMessage = false
		}
	},
	activated(){
		this.QueryMDForUser()
	}
}
</script>

<style scoped>
.item{
	margin-bottom: 20px;
}
</style>