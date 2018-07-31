<!-- 这是主界面 -->
<template>
  <div class="main">

  <!-- 有房子的时候显示 -->
    <div class="weui-tab">
      <div class="weui-tab__panel">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="weui-tabbar">

          <router-link :to="{ name: 'function', params: { userId: 123 }}" class="weui-tabbar__item " active-class='weui-bar__item_on' @click.native="changeImage('function')">
            <img :src=functionImage alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">功能</p>
          </router-link>
          
          <router-link :to="{name:'house'}" class="weui-tabbar__item" active-class='weui-bar__item_on' @click.native="changeImage('house')">
            <img :src=houseImage alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">房间</p>
          </router-link>

          <router-link :to="{name:'info'}" class="weui-tabbar__item" active-class='weui-bar__item_on' @click.native="changeImage('my')">
            <img :src=myImage alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">我的</p>
          </router-link>

      </div>
  </div>



   
  </div>
</template>

<script>
import http from "../axios/http"
import api from "../axios/api"
var wx = require('weixin-js-sdk');
export default {
  // 数据源
  data () {
    return {
      loading:false,
      hasHouse:false,
      functionImage:'',
      myImage:'',
      houseImage:''
    }
  },
  // 方法集合
  methods:{
    /**
    *改变图标
    */
    changeImage:function(name){
      if (name=='function') {
          this.functionImage = require('../assets/function_select.png')
          this.myImage=require('../assets/my_unselect.png') 
          this.houseImage=require('../assets/house_unselect.png')
       }else if (name=='my') {
          this.functionImage = require('../assets/function_unselect.png')
          this.myImage=require('../assets/my_select.png')
          this.houseImage=require('../assets/house_unselect.png')
       }else if (name=='house') {
          this.functionImage = require('../assets/function_unselect.png')
          this.myImage=require('../assets/my_unselect.png')
          this.houseImage=require('../assets/house_select.png')
       }
    },

   
  },

  computed:{
    myRoute(){
      return this.$route.path
    }
  },

  watch:{
    myRoute(newVal){
      console.log(newVal)
      if (newVal == '/main/function') {
        this.changeImage('function')
      }else if(newVal == '/main/info'){
        this.changeImage('my')
      }else if(newVal == '/main/house'){
        this.changeImage('house')
      }
    }
  },
  mounted(){
    wx.ready(function(){
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    });

    if (this.$route.path == '/main/function') {
        this.changeImage('function')
    }else if(this.$route.path == '/main/info'){
        this.changeImage('my')
    }else if(this.$route.path== '/main/house'){
        this.changeImage('house')
      }

  }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.main{
  height: 100%;
  position: relative;
  /*background-image: url('../assets/bg.jpg')*/
  
}

.weui-tabbar .weui-bar__item_on .weui-tabbar__label{
  color: #1296db;
}
</style>
