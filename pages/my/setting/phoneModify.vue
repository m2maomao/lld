<template>
	<view>
		<view class="label-block">修改手机号需要验证你的手机号码 156****7051</view>
		<view class="form-item">
			<view class="form-item-label">验证码</view>
			<view class="form-item-input">
				<input placeholder="请输入验证码" />
				<view class="capture">获取验证码</view>
			</view>
		</view>
		<view class="form-button">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
page{
	background: #F9F9F9;
}
.label-block{
	font-size: 14px;
	color: #333333;
	line-height: 50px;
	text-align: center;
}
.form-item{
	padding: 0 20px;
	height: 50px;
	background: #FFFFFF;
	display: flex;
	align-items: center;
	font-size: 14px;
	.form-item-label{
		width: 80px;
		color: #333333;
		height: 100%;
		align-items: center;
		display: flex;
	}
	.form-item-input{
		display: flex;
		flex: 1;
		align-items: center;
		height: 100%;
		input{
			flex: 1;
			height: 100%;
			width: 100%;
			margin-right: 10px;
		}
		.capture{
			width: 90px;
			height: 30px;
			line-height: 30px;
			background: #002140;
			text-align: center;
			color: #FFFFFF;
			border-radius: 22px;
		}
	}
}
.form-button{
	margin: 25px 20px 0;
	border-radius: 22px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	font-size: 14px;
	color: #FFFFFF;
	background: #002140;
}
</style>
