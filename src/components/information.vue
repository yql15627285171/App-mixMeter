<!-- 我的信息的界面 -->
<template>
	<div>
		<div class="header">
			<div class="header-avatar">
				<img src="../assets/avatar.png" class="header-img">
			</div>
			<span class="header-name">Darian</span>
		</div>

	 <div class="weui-cells__title"></div>
	 <div class="weui-cells">
	 	<a class="weui-cell" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>账户名</p>
	        </div>
	        <div class="weui-cell__ft">Hello Ketty</div>
	    </a>

		<a class="weui-cell" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>姓名</p>
	        </div>
	        <div class="weui-cell__ft">张三</div>
	    </a>

		<a class="weui-cell" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>性别</p>
	        </div>
	        <div class="weui-cell__ft">男</div>
	    </a>
		
	</div>

	<div class="weui-cells__title"></div>
	<div class="weui-cells">
	    <a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>电话</p>
	        </div>
	        <div class="weui-cell__ft">15627288888</div>
	    </a>

		<a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>扣款卡号</p>
	        </div>
	        <div class="weui-cell__ft">未设置</div>
	    </a>

	    <a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>联系地址</p>
	        </div>
	        <div class="weui-cell__ft">未设置</div>
	    </a>

	   	<a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>修改密码</p>
	        </div>
	        <div class="weui-cell__ft"></div>
	    </a>
	</div>

	<div class="weui-cells__title"></div>
	<div class="weui-cells">
	    <a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>罗湖区/莲塘枫景/A栋/1701</p>
	        </div>
	        <div class="weui-cell__ft"></div>
	    </a>
	    <a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>罗湖区/鹏兴花园/A栋/801</p>
	        </div>
	        <div class="weui-cell__ft"></div>
	    </a>
	 </div>

	<router-link :to="{name:'bindRoom'}" class="weui-btn weui-btn_primary btn">绑定房间</router-link>
	</div>
</template>
<script>
	
</script>

<style scoped>
.header{
	background-color: #e54c46;
	height: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.header-avatar{
	background: #fff;
	margin-bottom: 10px;
	border-radius: 25px;
}
.header-img{
	height: 50px;
	width: 50px;
}

.btn{
	margin: 40px 10px;
}
</style>