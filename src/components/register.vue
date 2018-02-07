<template>
  <div>
    <div class="weui-cells__title">必填项</div>
    <div class="weui-cells weui-cells_form">

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入姓名"/>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入密码"/>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号"/>
        </div>  
      </div>
      
      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
            <label class="weui-label">验证码</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="tel" placeholder="请输入验证码">
        </div>
        <div class="weui-cell__ft">
            <a href="javascript:;" class="weui-vcode-btn">获取验证码</a>
        </div>
      </div>

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">省份</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2">
              <option value="1">广东省</option>
          </select>
        </div>
      </div>

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">市</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2">
              <option value="1">深圳市</option>
          </select>
        </div>
      </div>

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">区/县</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2">
              <option value="1">罗湖区</option>
          </select>
        </div>
      </div>

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">社区</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2">
              <option value="1">莲塘社区</option>
          </select>
        </div>
      </div>

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">栋数</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2">
              <option value="1">A栋201</option>
          </select>
        </div>
      </div>

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">房间</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2">
              <option value="1">201</option>
          </select>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">编码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入密码" value='000000' disabled />
        </div>
      </div>


    </div>

    <div class="weui-cells__title">选填项</div>
    <div class="weui-cells weui-cells_form">

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">证件类型</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2">
              <option value="1">身份证</option>
          </select>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">证件编号</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号"/>
        </div>  
      </div>

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">性别</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2">
              <option value="1">男</option>
              <option value="2">女</option>
          </select>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">固定电话</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入固定电话"/>
        </div>
      </div>
    
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">联系地址</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入联系地址"/>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">邮政编码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入邮政编码"/>
        </div>  
      </div>
      
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">银行卡号</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入银行卡号"/>
        </div>  
      </div>

      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">是否扣款用户</div>
        <div class="weui-cell__ft">
            <input class="weui-switch" type="checkbox"/>
        </div>
      </div>

    </div>

    <router-link :to="{name:'main'}" class="weui-btn weui-btn_primary" @click.native="howManyArgs('11','wq')">提交审核</router-link>
  </div>
	
</template>
<script>
export default{

  data(){
    return{
      exam:22
    }
  },

  methods:{

     /**
     *获取路径参数
     */
    //  GetQueryString(name)
    // {
    //      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    //      var r = window.location.search.substr(1).match(reg);
    //      if(r!=null)return  unescape(r[2]); return null;
    // }
  },


  mounted(){
    console.log('hello');
    console.log(this.$route.params)

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













