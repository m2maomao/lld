<template>
	<view>
		<view class="main-wrap">
			<view class="list-wrap">
				<navigator url="" class="navigator" hover-class="none">
					<view type="default">个人资料</view>
				</navigator>
				<navigator url="" class="navigator" hover-class="none">
					<view type="default">修改手机号</view>
				</navigator>
				<navigator url="" class="navigator" hover-class="none">
					<view type="default">修改密码</view>
				</navigator>
				<navigator url="" class="navigator" hover-class="none">
					<view type="default">意见反馈</view>
				</navigator>
			</view>
			<view class="form-btn">退出登录</view>
		</view>
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
.main-wrap{
	.list-wrap{
		padding: 0 20px;
		background: #FFFFFF;
		.navigator{
			font-size: 14px;
			color: #333333;
			line-height: 50px;
			background: url(../../../static/@2xjiantou.png) right center / 4px 7px no-repeat;
			
			&:after {
				content: " ";
				position: absolute;
				height: 1px;
				width: 89%;
				border-top: 1px solid rgba($color: #cbcbcb, $alpha: .4);
				transform-origin: 0 0;
				transform: scaleY(0.5);/*缩放*/
			}
			
			&:last-child{
				border-bottom: none;
				&:after{
					border-top: none;
				}
			}
		}
	}
	.form-btn{
		text-align: center;
		line-height: 50px;
		margin-top: 30px;
		background: #FFFFFF;
		font-size: 14px;
		color: #333333;
	}
}
</style>
