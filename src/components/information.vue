<!-- 我的信息的界面 -->
<template>
	<div class="wrap">
		<!-- 加载 -->
    	<v-toast :show='loading'></v-toast>

		<div class="header">
			<div class="header-avatar">
				<img :src="headUrl" class="header-img">
			</div>
			<span class="header-name">{{userId}}</span>
		</div>

	<div class="weui-cells__title"></div>
	<div class="weui-cells">


		<a class="weui-cell" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>姓名</p>
	        </div>
	        <div class="weui-cell__ft">{{userInfo.UserName}}</div>
	    </a>

		<a class="weui-cell" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>性别</p>
	        </div>
	        <div class="weui-cell__ft">{{userInfo.Sex}}</div>
	    </a>
		
	</div>

	<div class="weui-cells__title"></div>
	<div class="weui-cells">
		<router-link :to="{name:'resetPhone',params:{data:userInfo}}" class="weui-cell weui-cell_access">
			<div class="weui-cell__bd">
	            <p>电话</p>
	        </div>
	        <div class="weui-cell__ft"></div>
		</router-link>

		<a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>扣款卡号</p>
	        </div>
	        <div class="weui-cell__ft"></div>
	    </a>
	
		<router-link :to="{name:'resetAddress',params:{data:userInfo}}" class="weui-cell weui-cell_access">
			<div class="weui-cell__bd">
	            <p>联系地址</p>
	        </div>
	        <div class="weui-cell__ft"></div>
		</router-link>

	
		<router-link :to="{name:'resetPsd'}" class="weui-cell weui-cell_access">
			<div class="weui-cell__bd">
	            <p>修改密码</p>
	        </div>
	        <div class="weui-cell__ft"></div>
		</router-link>
	   
	</div>

	<!-- <div class="weui-cells__title"></div>
	<div class="weui-cells">
	    <a class="weui-cell weui-cell_access" href="javascript:;" v-for="item in houseInfo">
	        <div class="weui-cell__bd">
	            <p>{{item.HouseName}}</p>
	        </div>
	        <div class="weui-cell__ft"></div>
	    </a>
	 </div>

	<router-link :to="{name:'bindRoom'}" class="weui-btn weui-btn_primary btn">绑定房间</router-link> -->
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
  		userInfo:{},
  		houseInfo:[],
  		headUrl:window.sessionStorage.getItem('headImgUrl'),
  		userId:window.sessionStorage.getItem('id')
  	}
  },
  methods:{
	/**
    *获取当前用户的表计状态和个人信息
    */
    QureyUserByUserId(){
      this.loading = true
      var params = {
        UserId:window.sessionStorage.getItem('id'),
        MeterKindId:'1',
        time:this.dataUtil.formatTime1(new Date()),
      }
      // console.log(params)

       var encryptParams = {
        evalue:this.$encrypt(JSON.stringify(params))
      }

      console.log(encryptParams)

      this.http.post(this.api.baseUrl+this.api.QureyUserByUserId,encryptParams)
      .then(result=>{
        console.log(result)
        this.loading = false
        if (result.status == '成功') {
        	this.userInfo = result.UserInfo[0]
          	this.houseInfo = result.HouseInfo
  
        }
                
      })
    },

  },


  activated(){
  	this.QureyUserByUserId()
  }
}
</script>

<style scoped>


.header{
	background-color: #e54c46;
	height: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.header-avatar{
	background: #fff;
	margin-bottom: 10px;
	width: 50px;
	height: 50px;
	border-radius: 25px;
}
.header-img{
	height: 50px;
	width: 50px;
	border-radius: 25px;
}

.btn{
	margin: 40px 10px;
}

/*.weui-cells{
	background-color: rgba(0, 0, 0, 0)
}*/

/*箭头颜色*/
/*.weui-cell__bd:after,
.weui-cell_access .weui-cell__ft:after
{
	border-color: #000;
}*/
</style>