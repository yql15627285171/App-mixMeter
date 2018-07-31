<!-- 用电明细 -->
<template>
	<div class="main">
		
		<v-toast :show='loading'></v-toast>
		<v-message :show="showMessage" :message="message" @iKnow="sureMessage"></v-message>

		<div id="dayPie" style="width:100%; height:230px"></div>
	    <div style="overflow:auto">
	    	<div id="daysLine" style="width:100%; height:300px;">
	    	</div>
	    </div>
	    <div id="yearBar" style="width:100%; height:300px"></div>
	</div>
</template>
<script>
var echarts = require('echarts')
import vToast from '../baseComp/toast'
import vMessage from '../baseComp/message'
export default{
	components:{
		vToast,
		vMessage
	},
	data(){
		return{
			loading:false,
			showMessage:false,
			message:'',
		}
		
	},
	methods:{

		/**
		*客户电量数据查询
		*/
		QureyEFDataForUser(){
			this.loading = false
			var params = {
				HouseRegionCode:window.sessionStorage.getItem("HouseRegionCode"),
				time:this.dataUtil.formatTime1(new Date())
			}

			var encryptParams = {
		        evalue:this.$encrypt(JSON.stringify(params))
		    }

		    this.http.post(this.api.baseUrl+this.api.QureyEFDataForUser,encryptParams)
		    .then(result=>{
		    	this.loading = false
		    	console.log(result)
		    	if (result.status == '成功') {

		    		var ELastDay = result.data[0].ELastDay
		    		var title = ELastDay.FreezeDate + '用电量'
		    		this.dayPie(title,ELastDay.data)

		    		var EDay = result.data[0].EDay
		    		this.daysLine(EDay.Date,EDay.Pow)
		    		// this.daysLine(['7-05','7-06','7-07','7-08','7-09','7-10','7-11'],['90','80','100','70','89','99','100'])

		    		var EMonth = result.data[0].EMonth
		    		this.yearBar(EMonth.Date,EMonth.Pow)


		    	}else{
		    		this.message = result.data
		    		this.showMessage = true
		    	}
		    })
		},

		/**
		*子组件回调的方法
		*/
		sureMessage(){
			this.showMessage = false
			this.$router.go(-1)
		},
		/**
		*过去一天尖峰平谷的饼型图
		*/
		dayPie(title,data){
			echarts.init(document.getElementById('dayPie')).setOption({
				legend: {
                    right: 0,
                    top:40,
                    orient: 'vertical'
                },

				title: {
            		text: title,
            		 x:'center'

        		},
        		tooltip : {
                	trigger: 'item',
                	formatter: "{a} <br/>{b} : {c} ({d}%)"
            	},
	            series: {
	            	name:'用电量',
	            	type: 'pie',
	            	radius: '55%',
	                data:data
	            }
	        });
		},

		/**
		*过去10天的折线图
		*/
		daysLine(xData,data){
			echarts.init(document.getElementById('daysLine')).setOption({
				title: {
            		text: '过去7天的用电情况',
            		 x:'center'
       		 	},
        		tooltip: {},
		     
		        xAxis: {
		            data: xData,
		        },
		        yAxis: {},
		        series: [{
		            name: '用电量',
		            type: 'line',
		            data: data
		        }]
	        });
		},

		/**
		*过去12月的用电情况
		*/
		yearBar(xData,data){
			echarts.init(document.getElementById('yearBar')).setOption({
				title: {
            		text: '过去12个月的用电情况',
            		 x:'center'
       		 	},
        		tooltip: {},
		     
		        xAxis: {
		            data: xData
		        },
		        yAxis: {},
		        series: [{
		            name: '用电量',
		            type: 'bar',
		            data: data
		        }]
	        });
		}

	},
	activated(){
		this.QureyEFDataForUser()
		// this.dayPie();
		// this.daysLine();
		// this.yearBar();
	}
}
</script>
<style scoped>
.main{
	 position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>