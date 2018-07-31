<!-- 功能界面 -->
<template>
<div>
	<!-- 加载 -->
    <v-toast :show='loading'></v-toast>

	<!-- 没有房子的时候显示 -->
    <div class="weui-msg" v-if="!hasHouse">
      <div class="weui-msg__icon-area">
        <i class="weui-icon-success weui-icon_msg"></i> 
      </div>
      <div class="weui-msg__text-area">
          <h2 class="weui-msg__title"></h2>
          <p class="weui-msg__desc">您还没有进行绑定房间</p>
      </div>
    
      <div class="weui-msg__extra-area">
          <div class="weui-footer">
              <p class="weui-footer__text">Copyright &copy; 2008-2016 公司名字</p>
          </div>
      </div>
    </div>
    <!-- 有房子的时候使用 -->
	<div class='main' v-else>
		
		<div class="weui-cell weui-cell_select weui-cell_select-after room">
	        <div class="weui-cell__hd">
	            <label for="select2" class="weui-label">房间</label>
	        </div>
	        <div class="weui-cell__bd">
	          <select class="weui-select" v-model='selectHouseCode'>
	              <option v-for="item in houseInfo"  :value="item.HouseRegionCode">{{item.HouseName}}</option>
	          </select>
	        </div>
      </div>


		<div class="weui-cells__title">电表</div>
		<div class="weui-cells">

			
			
		    <div class="weui-cell weui-cell_access" @click='toBillpage'>
		        <!-- <div class="weui-cell__hd"><img src="../assets/" alt="" style="width:20px;margin-right:5px;display:block"></div> -->
		        <div class="weui-cell__bd">
		            <p>当前余额</p>
		        </div>
		        <div class="weui-cell__ft" style="color:#000">{{selectHouse.RemainMoney}}</div>
		    </div>

		    <router-link class="weui-cell weui-cell_access" :to="{name:'useDetails'}">
		        <!-- <div class="weui-cell__hd"><img src="../assets/" alt="" style="width:20px;margin-right:5px;display:block"></div> -->
		        <div class="weui-cell__bd">
		            <p>当前电量</p>
		        </div>
		        <div class="weui-cell__ft" style="color:#000">{{selectHouse.CurrentPower}}</div>
		    </router-link>
			
			<div class="weui-cell">
		        <div class="weui-cell__bd">
		            <p>余额状态</p>
		        </div>
		        <div class="weui-cell__ft" style="color:#000">{{selectHouse.BalanceStatu}}</div>
    		</div>

		    <div class="weui-cell">
		        <div class="weui-cell__bd">
		            <p>阀门状态</p>
		        </div>
		        <div class="weui-cell__ft" style="color:#000">{{selectHouse.RelayStatu}}</div>
		    </div>

		    <div class="weui-cell">
		        <div class="weui-cell__bd">
		            <p>倍率</p>
		        </div>
		        <div class="weui-cell__ft" style="color:#000">{{selectHouse.CT}}</div>
		    </div>

		    <div class="weui-cell">
		        <div class="weui-cell__bd">
		            <p>费率1电价</p>
		        </div>
		        <div class="weui-cell__ft" style="color:#000">{{selectHouse.R1}}</div>
		    </div>

		    <div class="weui-cell">
		        <div class="weui-cell__bd">
		            <p>费率2电价</p>
		        </div>
		        <div class="weui-cell__ft" style="color:#000">{{selectHouse.R2}}</div>
		    </div>

		    <div class="weui-cell">
		        <div class="weui-cell__bd">
		            <p>费率3电价</p>
		        </div>
		        <div class="weui-cell__ft" style="color:#000">{{selectHouse.R3}}</div>
		    </div>

		    <div class="weui-cell">
		        <div class="weui-cell__bd">
		            <p>费率4电价</p>
		        </div>
		        <div class="weui-cell__ft" style="color:#000">{{selectHouse.R4}}</div>
		    </div>

		</div>
	</div>
</div>
	
</template>
<script>
import vToast from './baseComp/toast'
export default {
  components:{
    vToast
  },
	data(){
		return{
			loading:false,
			hasHouse:false,

			houseInfo:[],
			selectHouseCode:'',

			
		}
	},
	methods:{
		/**
	    *获取当前用户的表计状态和个人信息
	    */
	    QureyMeterCurrentStatusByUserId(){
	      this.loading = true
	      var params = {
	        UserId:window.sessionStorage.getItem('id'),

	        MeterKindId:'1',
	        time:this.dataUtil.formatTime1(new Date()),
	      }
	      console.log(params)

	       var encryptParams = {
	        evalue:this.$encrypt(JSON.stringify(params))
	      }

	      console.log(encryptParams)

	      this.http.post(this.api.baseUrl+this.api.QureyMeterCurrentStatusByUserId,encryptParams)
	      .then(result=>{

	      	this.loading = false
	        console.log(result)

	        

	        if (result.status == '成功') {
	          if (result.HouseInfo.length == 0) {
	            this.hasHouse = false
	          }else{
	            this.hasHouse = true
	            this.houseInfo = result.HouseInfo
	            this.selectHouseCode = this.houseInfo[0].HouseRegionCode
	            
	          }
	        }
	                
	      })
	    },

	    /**
	    *跳转到账单信息页面
	    */
	    toBillpage(){
	    	window.sessionStorage.setItem('feeType', '电')
	    	window.sessionStorage.setItem('feeValue', this.selectHouse.RemainMoney)
	    	this.$router.push({name:'bill'})
	    },


	},
	computed:{
		selectHouse:{
			get:function(){
				window.sessionStorage.setItem('HouseRegionCode', this.selectHouseCode)
				return	this.houseInfo.filter(element=> {
					return (element.HouseRegionCode == this.selectHouseCode);
				})[0]
			}
			
		}
	},
	mounted(){
		this.QureyMeterCurrentStatusByUserId()
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
    /* background-image: linear-gradient(#4facfe,#00f2fe ); */
    background-color: #fff;
}

.weui-grid{
  /*background: #fff;*/
}

.room{
	font-size: 14px;
	border-bottom: 1px solid #000;
	margin-bottom: 30px;
}
.weui-cell__hd{
	width: 50px;
	
}

.weui-cells{
	background-color: rgba(0, 0, 0, 0)
}

/*箭头颜色*/
.weui-cell__bd:after,
.weui-cell_access .weui-cell__ft:after
{
	border-color: #000;
}

</style>










