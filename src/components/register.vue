<!-- 这是注册界面 -->
<template>
  <div>
    <v-toast :show='loading'></v-toast>
    <v-message :show="showMessage" :message="message" @iKnow="sureMessage"></v-message>

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
            <input class="weui-input" placeholder="请输入密码" v-model.trim="UserPwd1" type="password"/>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">确认密码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入密码" v-model.trim="UserPwd2" type="password"/>
        </div>
      </div>
      </div>

      <div class="weui-cells__title"></div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
          <div class="weui-cell__bd">
              <input class="weui-input" placeholder="请输入真实姓名" v-model.trim="UserName"/>
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
        <div class="weui-cell__ft" @click="VerificationCode">
            <div class="weui-vcode-btn" style="width:60px;text-align:center">{{sendName}}</div>
        </div>
      </div>
    </div>

    <div class="weui-btn weui-btn_primary" @click='Register'>注 册</div>
  </div>

</template>
<script>
import vToast from './baseComp/toast'
import vMessage from './baseComp/message'
export default{
  components:{
    vToast,
    vMessage
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
      sendName:'',
      showMessage:false,
      message:'',

    }
  },

  methods:{
    /**
    *注册
    */
    Register(){

      if (this.mobile =='' || this.vCode == '' || this.UserId == '' || this.UserName == '' || this.UserPwd1 =='' || this.UserPwd2 == '') {

        this.message = '信息没填写完整'
        this.showMessage = true
        return
      }else if(this.UserPwd1 != this.UserPwd2){
        this.message = '两次密码填写不相同'
        this.showMessage = true
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
          }else {
            alert(result.data)
          }

      })
    },

    /**
    *获取验证码
    */
    VerificationCode(){
        var that = this
        if (this.mobile =='' || this.mobile.length != 11) {
          this.message = '请输入正确的电话号码'
          this.showMessage = true
          return
        }

       if (this.sendName != '发送' && this.sendName != '重发') {
          return
        }

        var params = {
          mobile:this.mobile,
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

  mounted(){
    this.sendName = '发送'
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













