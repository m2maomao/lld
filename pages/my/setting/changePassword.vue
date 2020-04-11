<template>
	<view>
		<view class="form-item-wrap">
			<view class="form-item">
				<view class="form-item-label">旧密码</view>
				<view class="form-item-input">
					<input placeholder="请输入旧密码" />
				</view>
			</view>
			<view class="form-item">
				<view class="form-item-label">新密码</view>
				<view class="form-item-input">
					<input placeholder="请输入新密码" />
				</view>
			</view>
			<view class="form-item">
				<view class="form-item-label">确认密码</view>
				<view class="form-item-input">
					<input placeholder="请再次输入新密码" />
				</view>
			</view>
		</view>
		<view class="form-button">确定</view>
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
.form-item-wrap{
	padding: 0 20px;
	background: #FFFFFF;
	.form-item{
		height: 50px;
		display: flex;
		align-items: center;
		font-size: 14px;
		position: relative;
		&:after{
			content: " ";
			position: absolute;
			bottom: 0;
			height: 1px;
			width: 100%;
			display: flex;
			border-bottom: 1px solid rgba($color: #cbcbcb, $alpha: .4);
			transform-origin: 0 0;
			transform: scaleY(0.5);/*缩放*/
		}
		&:last-child{
			&:after{
				display: none;
			}
		}
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
