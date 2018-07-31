<template>
	<div>
		<!-- <div class=" balance">
			<img src="../../assets/money.png" >
			<span class="balance-text">余额</span>
			<span>¥{{money}}</span>
		</div> -->
		<div class="weui-msg">
    <div class="weui-msg__icon-area">
    	<img src="../../assets/money.png" alt="">
    </div>
    <div class="weui-msg__text-area">
    	<p class="weui-msg__desc">{{feeType}}费余额</p>
        <h2 class="weui-msg__title">{{feeValue}}元</h2>
        
    </div>
    <div class="weui-msg__opr-area">
        <p class="weui-btn-area">
        	<router-link :to="{name:'moneyDetails'}" class="weui-btn weui-btn_primary">流水账</router-link>
           
        </p>
    </div>
    <div class="weui-msg__extra-area">
        <div class="weui-footer">
          <!--   <p class="weui-footer__links">
                <a href="javascript:void(0);" class="weui-footer__link">底部链接文本</a>
            </p> -->
            <p class="weui-footer__text">Copyright &copy; 1998-2018 TRJ</p>
        </div>
    </div>
</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			feeType:window.sessionStorage.getItem('feeType'),
			feeValue:window.sessionStorage.getItem('feeValue')
		
		}
	}
}
</script>
<style scoped>

/*.balance{
	background: #686f79;
	height: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #fff;
}
	
.balance-text{
	margin-top: 10px;
}*/
</style>