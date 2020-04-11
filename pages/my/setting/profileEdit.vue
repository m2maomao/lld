<template>
	<view>
		<view class="main-wrap">
			<view class="list-wrap">
				<navigator url="" class="navigator" hover-class="none">
					<view type="default">头像</view>
					<view class="content">
						<image src="https://dummyimage.com/32x32/5ed1ff/fff" class="img"></image>
					</view>
				</navigator>
				<navigator url="" class="navigator" hover-class="none">
					<view type="default">姓名</view>
					<view class="content">张天</view>
				</navigator>
				<navigator url="" class="navigator" hover-class="none">
					<view type="default">性别</view>
					<view class="content">男</view>
				</navigator>
			</view>
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
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			color: #333333;
			line-height: 50px;
			background: url(../../../static/@2xjiantou.png) right center / 4px 7px no-repeat;
			position: relative;
			.content{
				margin-right: 10px;
				display: flex;
				align-items: center;
				.img{
					width: 32px;
					height: 32px;
					border-radius: 16px;
				}
			}
			&:after {
				content: " ";
				position: absolute;
				height: 1px;
				width: 100%;
				bottom: 0;
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
