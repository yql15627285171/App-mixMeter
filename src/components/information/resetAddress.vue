<template>
	<div>
		<v-toast :show='loading'></v-toast>
    <v-finish :show='finish'></v-finish>
    	<div class="weui-cells__title">请确定是本人操作</div>
    	<div class="weui-cells weui-cells_form">

    		<div class="weui-cell">
		        <div class="weui-cell__bd">
		            <input class="weui-input" placeholder="新地址" v-model.trim="address"/>
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
			address:'',
			userInfo:{},
		}
	},
	methods:{
		     /**
      *修改个人信息
      */
      changeInformation(){
       	if (this.address == '') {
       		alert('请填写新地址')
       		return
       	}

        this.informationDialogVisible = false
          this.loading = true
          var params = {
            MobilePhone:this.userInfo.MobilePhone,
            UserId :window.sessionStorage.getItem('id'),
            UserName:this.userInfo.UserName,
            CustomerAddress:this.address,
            time:this.dataUtil.formatTime1(new Date())
          }

          console.log(params);
          
          var encryptParams = {
            evalue:this.$encrypt(JSON.stringify(params))
          }

          console.log(this.$encrypt(JSON.stringify(params)))

          this.http.post(this.api.baseUrl+this.api.UpdateUserAddress,encryptParams)
          .then(result=>{
            this.loading = false
            console.log(result)
            // 
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

		this.address = this.userInfo.CustomerAddress	
	},

}
</script>
<style scoped>
	.weui-btn{
		margin: 20px 10px
	}
</style>



