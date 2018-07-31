<template>
	<div>
    <v-toast :show='loading'></v-toast>
    <v-finish :show='finish'></v-finish>
	<div class="weui-cells__title">绑定您对应的房间后,等待管理员进行信息审核</div>
    <div class="weui-cells weui-cells_form">

	 <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="select1" class="weui-label">省份</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" v-model="firstCode">
              <option value="请选择" disabled>请选择</option>
              <option v-for='item in firstRegion' :value="item.code">{{item.label}}</option>
          </select>
        </div>
      </div>

        <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">市</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" v-model="secondCode">
              <option value="请选择" disabled>请选择</option>
              <option v-for='item in secondRegion' :value="item.code">{{item.label}}</option>
          </select>
        </div>
      </div>
	
	  <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">区/县</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" v-model="thirdCode">
              <option value="请选择" disabled>请选择</option>
              <option v-for='item in thirdRegion' :value="item.code">{{item.label}}</option>
          </select>
        </div>
      </div>

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">社区</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" v-model="forthCode" >
              <option value="请选择" disabled>请选择</option>
              <option v-for='item in forthRegion' :value="item.code">{{item.label}}</option>
          </select>
        </div>
      </div>

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">栋数</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" v-model="fifthCode">
              <option value="请选择" disabled>请选择</option>
              <option v-for='item in fifthRegion' :value="item.code">{{item.label}}</option>
          </select>
        </div>
      </div>

      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
            <label for="" class="weui-label">房间</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" v-model="houseCode">
              <option value="请选择" disabled>请选择</option>
              <option v-for='item in houseRegion' :value="item.code">{{item.label}}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="weui-btn weui-btn_primary btn" @click="ApplyForAccessHouseInfo">绑 定</div>
    </div>
</template>
<script>
import vToast from '../baseComp/toast'
import vFinish from '../baseComp/finish'
export default{
  components:{
    vToast,
    vFinish
  },
  data(){
    return{
      loading:false,
      finish:false,
      firstCode:'',
      firstRegion:[],
      secondCode:'',
      secondRegion:[],
      thirdCode:'',
      thirdRegion:[],
      forthCode:'',
      forthRegion:[],
      fifthCode:'',
      fifthRegion:[],
      houseCode:'',
      houseRegion:[],
    }
  },

  methods:{
    
    /**
    *获取省市区社区
    */
    GetRegionInfoByRegion(code){
      this.loading = true
      var params = {
        RegionCode:code,
        time:this.dataUtil.formatTime1(new Date())
      }

      var encryptParams = {
        evalue:this.$encrypt(JSON.stringify(params))
      }


      this.http.post(this.api.baseUrl+this.api.GetRegionInfoByRegion,encryptParams)
      .then(result=>{
        this.loading = false
        if (code == '0') {
          this.firstRegion = result.data 
        }else if (code == this.firstCode) {
          this.secondRegion = result.data
        }else if (code == this.secondCode) {
          this.thirdRegion = result.data
        }else if (code == this.thirdCode) {
          this.forthRegion = result.data
        }else if (code == this.forthCode) {
          this.fifthRegion = result.data
        }else if (code == this.fifthCode) {
          this.houseRegion = result.data
        }
            
      })

    },

    /**
    *绑定房间
    */
    ApplyForAccessHouseInfo(){
      if (this.houseCode == '') {
        return
      }

      this.loading = true
      var params = {
        HouseRegionCode:this.houseCode,
        UserId :window.sessionStorage.getItem('id'),
        time:this.dataUtil.formatTime1(new Date())
      }

      console.log(params);
 
      var encryptParams = {
        evalue:this.$encrypt(JSON.stringify(params))
      }

      console.log(encryptParams)

      this.http.post(this.api.baseUrl+this.api.ApplyForAccessHouseInfo,encryptParams)
      .then(result=>{
        console.log(result)
        this.loading = false
        this.finish = true
        setTimeout(()=>{
          this.finish=false
        },1000)
                
      })
    }
  },
  watch:{
    firstCode(newValue){
      console.log(newValue);
      if (newValue =='请选择') {
        document.getElementById('select1').innerHTML = ''
        return
      }
      // 清空
      this.second = '',
      this.secondRegion = [],

      // 请求市
      this.GetRegionInfoByRegion(newValue)
    },
    secondCode(newValue){
      // 清空
      this.thirdCode = '',
      this.thirdRegion = [],

      this.GetRegionInfoByRegion(newValue)
    },
    thirdCode(newValue){
      // 清空
      this.forthCode = '',
      this.forthRegion = [],

      this.GetRegionInfoByRegion(newValue)
    },
    forthCode(newValue){
      // 清空
      this.fifthCode = '',
      this.fifthRegion = [],

      this.GetRegionInfoByRegion(newValue)
    },
    fifthCode(newValue){
      // 清空
      this.houseCode = '',
      this.houseRegion = [],

      this.GetRegionInfoByRegion(newValue)
    },

  },
  mounted(){
      this.GetRegionInfoByRegion('0')
  }

}
</script>
<style scoped>
.btn{
	margin: 40px 10px;
}

.weui-cell__hd{
  width: 50px;
}
</style>













