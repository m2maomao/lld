<template>
	<view>
		<view class="main-wrap">
			<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
				<view class="sub_title">佳格食品（中国）有限公司</view>
				<view class="sub_content">佳格食品（中国）有限公司于2012年01月21日在太仓市市场监督管理局登记成立。法定代表人宣建生，公司经营范围包括食用植物油（全精炼、半精炼）、饮料（植物饮料、营养素饮料、蛋白饮料）等</view>
				<view class="sub_info">
					<view class="area">广东省·深圳市</view>
					<view class="time">最近跟进：2020-02-29</view>
				</view>
			</navigator>
			<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
				<view class="sub_title">佳格食品（中国）有限公司</view>
				<view class="sub_content">佳格食品（中国）有限公司于2012年01月21日在太仓市市场监督管理局登记成立。法定代表人宣建生，公司经营范围包括食用植物油（全精炼、半精炼）、饮料（植物饮料、营养素饮料、蛋白饮料）等</view>
				<view class="sub_info">
					<view class="area">广东省·深圳市</view>
					<view class="time">最近跟进：2020-02-29</view>
				</view>
			</navigator>
			<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
				<view class="sub_title">佳格食品（中国）有限公司</view>
				<view class="sub_content">佳格食品（中国）有限公司于2012年01月21日在太仓市市场监督管理局登记成立。法定代表人宣建生，公司经营范围包括食用植物油（全精炼、半精炼）、饮料（植物饮料、营养素饮料、蛋白饮料）等</view>
				<view class="sub_info">
					<view class="area">广东省·深圳市</view>
					<view class="time">最近跟进：2020-02-29</view>
				</view>
			</navigator>
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
