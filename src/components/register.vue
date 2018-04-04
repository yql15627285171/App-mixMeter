<!-- 这是注册界面 -->
<template>
  <div>
    <v-toast :show='loading'></v-toast>
    <div class="weui-cells__title">此账户可用于网站登录</div>
    <div class="weui-cells weui-cells_form">

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">用户名</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入姓名" v-model.trim="UserId"/>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入密码" v-model.trim="UserPwd1"/>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">确认密码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入密码" v-model.trim="UserPwd2"/>
        </div>
      </div>
      </div>

      <div class="weui-cells__title"></div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
          <div class="weui-cell__bd">
              <input class="weui-input" placeholder="请输入姓名" v-model.trim="UserName"/>
          </div>
        </div>

      </div>

      <div class="weui-cells__title"></div>
      <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" v-model.trim="mobile"/>
        </div>  
      </div>
      
      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
            <label class="weui-label">验证码</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="tel" placeholder="请输入验证码" v-model.trim="vCode">
        </div>
        <div class="weui-cell__ft">
            <a href="javascript:;" class="weui-vcode-btn">获取验证码</a>
        </div>
      </div>
    </div>



    <div class="weui-btn weui-btn_primary" @click='Register'>注 册</div>
  </div>
	
</template>
<script>
import vToast from './baseComp/toast'
export default{
  components:{
    vToast
  },

  data(){
    return{
      loading:false,
      mobile:'',//电话
      vCode:'',//验证码
      UserId:'',//用户名
      UserName:'',//姓名
      UserPwd1:'',//密码
      UserPwd2:'',//确认密码
    }
  },

  methods:{
    /**
    *注册
    */
    Register(){

      if (this.mobile =='' || this.vCode == '' || this.UserId == '' || this.UserName == '' || this.UserPwd1 =='' || this.UserPwd2 == '') {
        alert('信息没填写完整')
        return
      }else if(this.UserPwd1 != this.UserPwd2){
        alert('两次密码填写不相同')
        return
      }

      this.loading = true

      var params = {
        mobile:this.mobile,
        vCode:this.vCode,
        mpCode:this.$route.params.myCode,
        UserId:this.UserId,
        UserName :this.UserName,
        UserPwd:this.$encryptPsd(this.UserPwd1),
        time:this.dataUtil.formatTime1(new Date())
      }

      console.log(params);

      var encryptParams = {
        evalue:this.$encrypt(JSON.stringify(params))
      }

      console.log(encryptParams);

      this.http.post(this.api.baseUrl+this.api.Register,encryptParams)
      .then(result=>{
          this.loading = false
          console.log(result);
          if (result.status == '成功') {
            window.sessionStorage.setItem('id',result.UserId)
            window.sessionStorage.setItem('headImgUrl',result.headimgurl)
            this.$router.push({name:'main'})
          }
            
      })
    }

  },

  mounted(){

  }

}
</script>
<style scoped>

	.weui-cell__hd{
    width: 70px;
  }

  .weui-btn{
    margin: 30px 10px;
  }
</style>













