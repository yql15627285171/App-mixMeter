<!-- 用电明细 -->
<template>
	<div class="main">
<!-- 		<div class="weui-tab">
	    <div class="weui-navbar">
	        <div :class="{'weui-navbar__item':true,'weui-bar__item_on':show1}" @click="chose('1')">
	            日
	        </div>
	        <div :class="{'weui-navbar__item':true,'weui-bar__item_on':show2}" @click="chose('2')">
	            月
	        </div>
	        <div :class="{'weui-navbar__item':true,'weui-bar__item_on':show3}" @click="chose('3')">
	            年
	        </div>
	    </div>
	    <div class="weui-tab__panel" style='background:#fff'>
	        <div id="dayPie" style="width:100%; height:230px"></div>
	        <div id="daysLine" style="width:100%; height:300px"></div>
	        <div id="yearBar" style="width:100%; height:300px"></div>
	    </div>
		</div> -->
		<div id="dayPie" style="width:100%; height:230px"></div>
	    <div id="daysLine" style="width:100%; height:300px"></div>
	    <div id="yearBar" style="width:100%; height:300px"></div>
	</div>
</template>
<script>
var echarts = require('echarts')
export default{
	data(){
		return{
			show1:true,//选项一是否高亮
			show2:false,//选项一是否高亮
			show3:false,//选项一是否高亮
		}
		
	},
	methods:{
		chose(index){
			if (index == '1') {
				this.show1=true
				this.show2=false
				this.show3=false
			}else if (index=='2') {
				this.show1=false
				this.show2=true
				this.show3=false
			}else{
				this.show1=false
				this.show2=false
				this.show3=true
			}
		},

		/**
		*过去一天尖峰平谷的饼型图
		*/
		dayPie(){
			echarts.init(document.getElementById('dayPie')).setOption({
				title: {
            		text: '过去一天的用电情况',
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
	                data: [
	                    {name: '尖', value: 17},
	                    {name: '峰', value: 10},
	                    {name: '平', value: 5},
	                    {name: '谷', value: 1},
	                ]
	            }
	        });
		},

		/**
		*过去15天的折线图
		*/
		daysLine(){
			echarts.init(document.getElementById('daysLine')).setOption({
				title: {
            		text: '过去10天的用电情况',
            		 x:'center'
       		 	},
        		tooltip: {},
		     
		        xAxis: {
		            data: ['3.15','3.14','3.13','3.12','3.11','3.10','3.09','3.08','3.07','3.06']
		        },
		        yAxis: {},
		        series: [{
		            name: '用电量',
		            type: 'line',
		            data: [30,33,29,40,35,33,32,28,42,30]
		        }]
	        });
		},

		/**
		*过去12月的用电情况
		*/
		yearBar(){
			echarts.init(document.getElementById('yearBar')).setOption({
				title: {
            		text: '过去12个月的用电情况',
            		 x:'center'
       		 	},
        		tooltip: {},
		     
		        xAxis: {
		            data: ['1','2','3','4','5','6','7','8','9','10','11','12']
		        },
		        yAxis: {},
		        series: [{
		            name: '用电量',
		            type: 'bar',
		            data: [30,33,29,40,35,33,32,28,42,30,22,34]
		        }]
	        });
		}

	},
	mounted(){
		this.dayPie();
		this.daysLine();
		this.yearBar();
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