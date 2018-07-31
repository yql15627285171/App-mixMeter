<template>
	<div>
		<v-toast :show='loading'></v-toast>

    <v-finish :show='finish'></v-finish>

    <v-message :show="showMessage" :message="message" @iKnow="sureMessage"></v-message>

    	<div class="weui-cells__title">当前手机号码:{{userInfo.MobilePhone}},请确定是本人进行修改操作</div>
    	<div class="weui-cells weui-cells_form">
    		<div class="weui-cell">
    		 	<div class="weui-cell__bd">
            		<input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" v-model='phone'/>
            	</div>
        	</div>


			<div class="weui-cell weui-cell_vcode">
		        
		        <div class="weui-cell__bd">
		            <input class="weui-input" v-model.trim="vCode" type="tel" placeholder="请输入验证码" >
		        </div>
		        <div class="weui-cell__ft">
		            <div class="weui-vcode-btn" @click="VerificationCode" style="width:60px;text-align:center">{{sendName}}</div>
		      	</div>
		    </div>

        </div>  



		<div class="weui-btn weui-btn_primary btn" @click="changeInformation">确定</div>		

    </div>
</template>
<script>
import vToast from '../baseComp/toast'
import vFinish from '../baseComp/finish'
import vMessage from '../baseComp/message'
export default {
  components:{
    vToast,
    vFinish,
    vMessage
  },
	data(){
		return{
			loading:false,
      finish:false,
      showMessage:false,
      message:'',
			phone:'',
			userInfo:{},
      vCode:'',//验证码

      sendName:'',//发送按钮上的字
		}
	},
	methods:{
		  /**
      *修改个人信息
      */
      changeInformation(){
       	if (this.phone == '') {
          this.message = '请填写新电话号码'
          this.showMessage = true
       		return
       	}else if (this.phone.length != 11) {
          this.message = '电话号码不正确'
          this.showMessage = true
       		return
       	}else if (this.phone == this.userInfo.MobilePhone) {
          this.message = '手机号码与原来的一致'
          this.showMessage = true
          return
        }

        this.informationDialogVisible = false
          this.loading = true
          var params = {
            MobilePhone:this.phone,
            vCode:this.vCode,
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

          this.http.post(this.api.baseUrl+this.api.UpdateUserMoblie,encryptParams)
          .then(result=>{
            this.loading = false
            console.log(result)
            if (result.status == '成功') {
                this.finish = true
                setTimeout(()=>{
                  this.finish=false
                },1000)
            }else{         
            	this.message = result.data
              this.showMessage = true
            }         
                               
          })

      },

      /**
      *获取短息密码
      */
       VerificationCode(){
          var that = this

          if (this.phone =='' || this.phone.length != 11) {
            this.message = '手机号码长度错误'
            this.showMessage = true
            return
          }

          if (this.userInfo.MobilePhone == this.phone) {
            this.message = '手机号码与原来的一致'
            this.showMessage = true
            return
          }

          

          if (this.sendName != '发送' && this.sendName != '重发') {
            return
          }

          var params = {
            mobile:this.phone,
            time:this.dataUtil.formatTime1(new Date()) 
            
          }
          console.log(params)

          var encryptParams = {
            evalue:this.$encrypt(JSON.stringify(params))
          }

          console.log(this.$encrypt(JSON.stringify(params)))

          this.http.post(this.api.baseUrl+this.api.VerificationCode,encryptParams)
          .then(result=>{
            console.log(result)
            if (result.status == '成功') {
             
              var times = 119
              var timer = setInterval(function(){
                
                if (times > 0) {
                 
                  that.sendName = times + 's'
                  times--
                }else{
                  that.sendName = '重发'
                  clearInterval(timer)
                }
              },1000)
            }else {
              this.message = result.data
              this.showMessage = true
            }

          })
       },

       /**
       *回调
       */
       sureMessage(){
        this.showMessage = false
       }


	},
	activated(){
    if ('undefined' == typeof(this.$route.params.data)) {
      this.$router.back(-1)
      return
    } 

    this.sendName = '发送'

		this.userInfo = this.$route.params.data
		Object.keys(this.userInfo).forEach(key=>{
          	if (this.userInfo[key] == '未设置') {
          		this.userInfo[key] = ''
          	}
   	
		  })

		// this.phone = this.userInfo.MobilePhone
		
	}
}	
</script>
<style scoped>
	.weui-btn{
		margin: 20px 10px
	}
</style>