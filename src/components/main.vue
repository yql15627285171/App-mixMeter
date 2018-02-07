<template>
  <div class="main">
   <!--  <div class="electricity item">
      <img src="../assets/electricity.png">
      <span class="item-font">电费</span>
    </div>
    <div class="water item">
      <img src="../assets/water.png">
      <span class="item-font">水费</span>
    </div>
    <div class="gas item">
      <img src="../assets/gas.png">
      <span class="item-font">燃气费</span>
    </div>
    <div class="hot item">
      <img src="../assets/hot.png">
      <span class="item-font">暖热费</span>
    </div> -->

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
/*.main{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33.3%;
  height: 100px;
  background-color: #fff;
  border: 0.5px solid #f0f0f0;

}

.item-font{
  margin-top: 10px;
}

img{
  width: 30px;
  height: 30px;
}*/

.main{
  height: 100%;
}

.weui-tabbar .weui-bar__item_on .weui-tabbar__label{
  color: #1296db;
}
</style>
