<template>
	<div>
		<v-toast :show='loading'></v-toast>
    <v-finish :show='finish'></v-finish>
    	<div class="weui-cells__title">请确定是本人操作</div>
    	<div class="weui-cells weui-cells_form">

    		<div class="weui-cell">
		        <div class="weui-cell__bd">
		            <input class="weui-input" placeholder="旧密码密码" type="password" v-model.trim='oldPsd'/>
		        </div>
		    </div>

			<div class="weui-cell">
		        <div class="weui-cell__bd">
		            <input class="weui-input" placeholder="新密码" type='password' v-model.trim='newPsd'/>
		        </div>
		    </div>

		    <div class="weui-cell">
		        <div class="weui-cell__bd">
		            <input class="weui-input" placeholder="确认密码" type="password" v-model.trim='againPsd'/>
		        </div>
		    </div>
			

        </div>  



		<div class="weui-btn weui-btn_primary btn" @click="UpdateUserPassWord">确定</div>		

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
			oldPsd:'',
			newPsd:'',
			againPsd:'',
		}
	},
	methods:{
	 UpdateUserPassWord(){

        if (this.oldPsd == '' || this.newPsd == '' || this.againPsd == '' || this.newPsd == '') {
                alert('请填写好信息')
            return
        }else if(this.newPsd != this.againPsd){
        	alert('新旧密码不一样')
        	return
        }else if(this.newPsd == this.oldPsd){
        	alert('新密码与旧密码一致')
        	return
        }

        this.psdDialogVisible = false
          this.loading = true
          var params = {
            UserPwdOld:this.$encryptPsd(this.oldPsd),
            UserPwd:this.$encryptPsd(this.newPsd),
            UserId :window.sessionStorage.getItem('id'),
            // UserId :'user01',
            time:this.dataUtil.formatTime1(new Date())
          }

          console.log(params);
          
          var encryptParams = {
            evalue:this.$encrypt(JSON.stringify(params))
          }

          console.log(this.$encrypt(JSON.stringify(params)))

          this.http.post(this.api.baseUrl+this.api.UpdateUserPassWord,encryptParams)
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
		this.oldPsd = ''
		this.newPsd = ''
		this.againPsd = ''
	}
}
</script>
<style scoped>
	.weui-btn{
		margin: 20px 10px
	}
</style>





