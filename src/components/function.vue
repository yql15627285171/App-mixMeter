<template>
	<div>
		
		<div class="weui-grids">
		    <router-link :to="{ name:'user-number',params:{type:'电'}}" class='weui-grid'>
		      <div class="weui-grid__icon">
		            <img src="../assets/electricity.png" alt="">
		        </div>
		        <p class="weui-grid__label">
		            电费
		        </p>
		    </router-link>
		    <router-link :to="{ name:'user-number',params:{type:'水'}}" class='weui-grid'>
		      <div class="weui-grid__icon">
		            <img src="../assets/water.png" alt="">
		        </div>
		        <p class="weui-grid__label">
		            水费
		        </p>
		    </router-link>
		    <router-link :to="{ name:'user-number',params:{type:'气'}}" class='weui-grid'>
		      <div class="weui-grid__icon">
		            <img src="../assets/gas.png" alt="">
		        </div>
		        <p class="weui-grid__label">
		            燃气费
		        </p>
		    </router-link>
		    <router-link :to="{ name:'user-number',params:{type:'热'}}" class='weui-grid'>
		      <div class="weui-grid__icon">
		            <img src="../assets/hot.png" alt="">
		        </div>
		        <p class="weui-grid__label">
		            暖热费
		        </p>
		    </router-link>


	




		</div>
	</div>
</template>
<script>
	

</script>
<style scoped>

.weui-grid{
  background: #fff;
}

</style>










