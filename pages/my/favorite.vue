<template>
	<view>
		<view class="main-wrap">
			<view class="empty">
				<view class="txt">暂无收藏</view>
			</view>
			<view class="content-wrap">
				<!-- <navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
					<view class="sub_title">佳格食品（中国）有限公司佳格食品（中国）有限公司佳格食品（中国）有限公司</view>
					<view class="sub_info">
						<view class="area">广东省·深圳市</view>
						<view class="time">最近下单：2020-02-29</view>
					</view>
				</navigator>
				<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
					<view class="sub_title">111佳格食品（中国）有限公司</view>
					<view class="sub_info">
						<view class="area">广东省·深圳市</view>
						<view class="time">最近下单：2020-02-29</view>
					</view>
				</navigator>
				<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
					<view class="sub_title">111佳格食品（中国）有限公司</view>
					<view class="sub_info">
						<view class="area">广东省·深圳市</view>
						<view class="time">最近下单：2020-02-29</view>
					</view>
				</navigator>
				<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
					<view class="sub_title">111佳格食品（中国）有限公司</view>
					<view class="sub_info">
						<view class="area">广东省·深圳市</view>
						<view class="time">最近下单：2020-02-29</view>
					</view>
				</navigator> -->
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
.main-wrap{
	.empty{
		width: 176px;
		height: 95px;
		margin: 150px auto 0;
		text-align: center;
		position: relative;
		background: url(../../static/@2xempty2.png) 0 0 / 176px auto no-repeat;
		position: relative;
		.txt{
			position: relative;
			top: 90px;
			font-size: 14px;
			color: #333333;
		}
	}
	.sub_content_wrap{
		padding: 15px 20px 0 20px;
		&:after{
			content: " ";
			position: absolute;
			height: 1px;
			width: 89%;
			border-top: 1px solid rgba($color: #cbcbcb, $alpha: .4);
			transform-origin: 0 0;
			transform: scaleY(0.5);/*缩放*/
		}
		&:last-child{
			&:after{
				border-top: none;
			}
		}
		.sub_title{
			font-size: 14px;
			line-height: 20px;
			color: #000000;
		}
		.sub_content{
			font-size: 14px;
			color: #666666;
			margin-top: 10px;
			line-height: 20px;
		}
		.sub_info{
			margin-top: 10px;
			font-size: 12px;
			color: #999999;
			display: flex;
			justify-content: space-between;
			margin-bottom: 15px;
			.area{
				background: url(../../static/@2xlocation.png) 0 center / auto 12px no-repeat;
				padding-left: 16px;
			}
			.time{}
		}
	}
}
</style>
