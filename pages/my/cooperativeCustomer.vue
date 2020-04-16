<template>
	<view>
		<view class="main-wrap">
			<scroll-view scroll-y="true" @scrolltolower="loadMore" class="scroll-wrap">
				<view class="sub_content_wrap" v-for="(item, index) in list" :key="index">
					<view class="sub_title">{{item.name}}</view>
					<view class="sub_content">{{item.contact}}</view>
					<view class="sub_info">
						<view class="area">{{locationConvert(item.province, item.city, item.district)}}</view>
						<view class="time">最近下单：{{formatTime(item.updateTime)}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		accountCooperation
	} from '../../api/api.js';

	export default {
		data() {
			return {
				list: [],
				params: {
					pageIndex: 1,
					pageSize: 20,
					totalPage: 1
				}
			};
		},
		onShow() {
			this.loadData()
		},
		methods: {
			loadData() {
				accountCooperation({...this.params}).then(res => {
					let _d = res.data;
					this.list.push(..._d.list);
					this.params.totalPage = _d.totalPage;
					if(this.params.totalPage > this.params.pageIndex) {
						this.params.pageIndex++;
					}
				})
			},
			// 滚动加载
			loadMore() {
				console.log('loadMore执行了')
				if(this.params.totalPage >= this.params.pageIndex) {
					this.loadData()
					this.params.pageIndex++;
				}
			}
		}
	}
</script>

<style lang="scss">
	.main-wrap {
		.scroll-wrap{
			height: 100vh; 
		}
		.sub_content_wrap {
			padding: 15px 20px 0 20px;

			&:after {
				content: " ";
				position: absolute;
				height: 1px;
				width: 89%;
				border-top: 1px solid rgba($color: #cbcbcb, $alpha: .4);
				transform-origin: 0 0;
				transform: scaleY(0.5);
				/*缩放*/
			}

			.sub_title {
				font-size: 14px;
				line-height: 20px;
				color: #000000;
			}

			.sub_content {
				font-size: 14px;
				color: #666666;
				margin-top: 10px;
				line-height: 20px;
			}

			.sub_info {
				margin-top: 10px;
				font-size: 12px;
				color: #999999;
				display: flex;
				justify-content: space-between;
				margin-bottom: 15px;

				.area {
					background: url(../../static/@2xlocation.png) 0 center / auto 12px no-repeat;
					padding-left: 16px;
				}

				.time {}
			}
		}
	}
</style>
