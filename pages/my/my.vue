<template>
	<view>
		<view class="user-wrap">
			<view class="avatar">
				<img src="https://dummyimage.com/60x60/94ffff">
				<i class="icon boy"></i>
			</view>
			<view class="info">
				<view class="privacy">
					<view class="name">张天</view>
					<view class="phone">15366856652</view>
				</view>
				<view class="position">销售部 | 销售经理</view>
			</view>
		</view>
		<view class="list-wrap">
			<navigator url="" class="navigator" hover-class="none">
				<view type="default">我的合作客户</view>
			</navigator>
			<navigator url="" class="navigator" hover-class="none">
				<view type="default">我的潜在客户</view>
			</navigator>
		</view>
		<view class="list-wrap">
			<navigator url="" class="navigator" hover-class="none">
				<view type="default">我的商机收藏</view>
			</navigator>
		</view>
		<view class="list-wrap">
			<navigator url="" class="navigator" hover-class="none">
				<view type="default">设置</view>
			</navigator>
		</view>
		<tabBar currentPage="my"></tabBar>
	</view>
</template>

<script>
	import tabBar from '../../components/tabbar';
	export default {
		components:{
			tabBar
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
page {
	min-height: 100%;
	background: #F9F9F9;
}
.user-wrap{
	background: #FFFFFF;
	padding: 15px 20px 15px 15px;
	display: flex;
	.avatar{
		position: relative;
		img{
			width: 60px;
			height: 60px;
			border-radius: 30px;
			vertical-align: top;
		}
		.icon{
			width: 16px;
			height: 16px;
			border-radius: 8px;
			display: block;
			background: red;
			position: absolute;
			right: 0px;
			bottom: 0px;
			&.boy{
				background: url('../../static/@2xnan.png') 0 0 / 100% auto no-repeat;
			}
		}
	}
	.info{
		display: flex;
		flex-direction: column;
		margin-left: 10px;
		flex: 1;
		background: url(../../static/@2xjiantou.png) right center / 4px 7px no-repeat;
		.privacy{
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 6px;
			.name{
				font-size: 16px;
				color: #333333;
				margin-right: 8px;
			}
			.phone{
				font-size: 12px;
				color: #333333;
			}
		}
		.position{
			font-size: 12px;
			color: #999999;
			margin-top: 5px;
		}
	}
}
.list-wrap{
	padding: 0 20px;
	margin-top: 10px;
	background: #FFFFFF;
	.navigator{
		font-size: 14px;
		color: #333333;
		line-height: 50px;
		background: url(../../static/@2xjiantou.png) right center / 4px 7px no-repeat;
		
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

.default{
	font-size: 30px;
	color: pink;
}
</style>
