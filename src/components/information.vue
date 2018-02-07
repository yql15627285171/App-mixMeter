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
	    <a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>姓名</p>
	        </div>
	        <div class="weui-cell__ft">张三</div>
	    </a>
	    <a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>社区</p>
	        </div>
	        <div class="weui-cell__ft">莲塘</div>
	    </a>
	    <a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>住址</p>
	        </div>
	        <div class="weui-cell__ft">A区201</div>
	    </a>
	    <a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>性别</p>
	        </div>
	        <div class="weui-cell__ft">不详</div>
	    </a>
	    <a class="weui-cell weui-cell_access" href="javascript:;">
	        <div class="weui-cell__bd">
	            <p>类别</p>
	        </div>
	        <div class="weui-cell__ft">业主</div>
	    </a>

	</div>

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

</style>