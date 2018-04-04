<!-- 流水账的记录 -->
<template>
	<div>
		<div class="weui-cells__title">带说明的列表项</div>
		<div class="weui-cells">
    		<div class="weui-cell" v-for="item in details">
	        	<div class="weui-cell__bd">
	            	<p>{{item.time}}</p>
	        	</div>
	        	<div class="weui-cell__ft" style="color:green" v-if="parseInt(item.money)>0">{{item.money}}</div>
	        	<div class="weui-cell__ft" v-else>{{item.money}}</div>
    		</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			details:[
			{
				time:'2018-01-21',
				money:'-5.21'
			},
			{
				time:'2018-01-20',
				money:'-6.21'
			},
			{
				time:'2018-01-19',
				money:'-5.38'
			},
			{
				time:'2018-01-18',
				money:'-4.21'
			},
			{
				time:'2018-01-17',
				money:'+200'
			},]
		}
	},
	methods:{
		he(){

		}
	}
}
</script>
<style>
	
</style>