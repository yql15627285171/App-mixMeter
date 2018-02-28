<!-- 这是主界面 -->
<template>
  <div class="main">
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="weui-tabbar">

        <router-link :to="{name:'function'}" class="weui-tabbar__item " active-class='weui-bar__item_on' @click.native="changeImage('function')">
          <img :src=functionImage alt="" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">功能</p>
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
export default {
  // 数据源
  data () {
    return {
      functionImage:require('../assets/function_select.png'),
      myImage:require('../assets/my_unselect.png')
    }
  },
  // 方法集合
  methods:{

    changeImage:function(name){
        if (name=='function') {
          this.functionImage = require('../assets/function_select.png')
          this.myImage=require('../assets/my_unselect.png') 
       }else {
          this.functionImage = require('../assets/function_unselect.png')
          this.myImage=require('../assets/my_select.png')
       }
    }
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.main{
  height: 100%;
}

.weui-tabbar .weui-bar__item_on .weui-tabbar__label{
  color: #1296db;
}
</style>
