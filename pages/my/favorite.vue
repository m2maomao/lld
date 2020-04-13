<template>
	<view>
		<view class="main-wrap">
			<view class="empty" v-if="!list.length>0">
				<view class="txt">暂无收藏</view>
			</view>
			<view class="content-wrap" v-else v-for="(item, index) in list" :key="index">
				<view class="sub_content_wrap">
					<view class="sub_title">{{item.title}}</view>
					<view class="sub_info">
						<view class="area">{{locationConvert(item.province, item.city, item.district)}}</view>
						<view class="time">最近下单：{{formatTime(item.createTime)}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { accountOpportunity } from '../../api/api.js';
	
	export default {
		data() {
			return {
				params: {
					pageIndex: 1,
					pageSize: 10
				},
				list: []
			};
		},
		onShow() {
			accountOpportunity({...this.params}).then(res => {
				let _d = res.data;
				this.list = _d.list;
			})
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
