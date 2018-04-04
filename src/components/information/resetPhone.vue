<template>
	<div>
		<v-toast :show='loading'></v-toast>
    <v-finish :show='finish'></v-finish>
    	<div class="weui-cells__title">请确定是本人操作</div>
    	<div class="weui-cells weui-cells_form">
    		<div class="weui-cell">
    		 	<div class="weui-cell__bd">
            		<input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" v-model='phone'/>
            	</div>
        	</div>


			<div class="weui-cell weui-cell_vcode">
		        
		        <div class="weui-cell__bd">
		            <input class="weui-input" type="tel" placeholder="请输入验证码">
		        </div>
		        <div class="weui-cell__ft">
		            <a href="javascript:;" class="weui-vcode-btn">获取验证码</a>
		      	</div>
		    </div>

        </div>  



		<div class="weui-btn weui-btn_primary btn" @click="changeInformation">确定</div>		

    </div>
</template>
<script>
import vToast from '../baseComp/toast'
import vFinish from '../baseComp/finish'
export default {
  components:{
    vToast,
    vFinish
  },
	data(){
		return{
			loading:false,
      finish:false,
			phone:'',
			userInfo:{},
		}
	},
	methods:{
		     /**
      *修改个人信息
      */
      changeInformation(){
       	if (this.phone == '') {
       		alert('请填写新电话号码')
       		return
       	}else if (this.phone.length != 11) {
       		alert('号码个数不对')
       		return
       	}

        this.informationDialogVisible = false
          this.loading = true
          var params = {
            MobilePhone:this.phone,
            UserId :window.sessionStorage.getItem('id'),
            UserName:this.userInfo.UserName,
            CustomerAddress:this.userInfo.CustomerAddress,
            time:this.dataUtil.formatTime1(new Date())
          }

          console.log(params);
          
          var encryptParams = {
            evalue:this.$encrypt(JSON.stringify(params))
          }

          console.log(this.$encrypt(JSON.stringify(params)))
          console.log(this.api.baseUrl+this.api.UpdateUserInfo)

          this.http.post(this.api.baseUrl+this.api.UpdateUserInfo,encryptParams)
          .then(result=>{
            this.loading = false
            console.log(result)
            if (result.status == '成功') {
                this.finish = true
                setTimeout(()=>{
                  this.finish=false
                },1000)
            }else{         
            	alert(result.data)
            }         
                               
          })

      },
	},
	activated(){
    if ('undefined' == typeof(this.$route.params.data)) {
      this.$router.back(-1)
      return
    } 
		this.userInfo = this.$route.params.data
		Object.keys(this.userInfo).forEach(key=>{
          	if (this.userInfo[key] == '未设置') {
          		this.userInfo[key] = ''
          	}
   	
		  })

		this.phone = this.userInfo.MobilePhone
		
	}
}	
</script>
<style scoped>
	.weui-btn{
		margin: 20px 10px
	}
</style>