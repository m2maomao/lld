<template>
	<scroll-view scroll-y="true" @scrolltolower="loadMore" class="scroll-wrap">
		<view class="main-content">
			<view class="record-wrap">
				<view class="empty" v-if="!visitList.length > 0">
					<view class="txt">暂无记录</view>
				</view>
				<view class="record-wrap-inner" v-for="(record, r) in visitList" :key="r" v-else>
					<view class="record-box">
						<view class="user-wrap">
							<view class="user-info">
								<view class="name">{{record.customerName}}</view>
							</view>
							<view class="phone">{{formatTime(record.visitTime)}} 于电话</view>
						</view>
						<view class="info-wrap">
							<view class="info-title">{{record.matter}}</view>
							<view class="info-single">摘要：{{record.summary}}</view>
							<view class="info-single">费用：{{record.expense}}元</view>
							<view class="info-single">附件：</view>
							<view class="info-img">
								<view class="file">
									<img :src="getImage(attach)" class="img" v-for="(attach, i) in record.attachment" :key="i"/>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import { accountVisit } from '../../api/api.js';
	
	export default {
		data() {
			return {
				params: {
					pageIndex: 1,
					pageSize: 5
				},
				visitList: []
			};
		},
		onLoad() {
			
		},
		onShow() {
			this.loadData()
		},
		methods:{
			loadData() {
				accountVisit({...this.params}).then(res => {
					console.log('潜在客户详情：', res)
					let _d = res.data;
					this.params.pageIndex++;
					this.visitList.push(..._d.list);
					console.log('visitList', this.visitList)
					
					// 判断当前页是否还有数据
					// if (_d.visitList.length > 1) {
					// 	this.visitList.push(..._d.visitList);
					// }
				})
			},
			// 滚动加载
			loadMore() {
				console.log('loadMore')				
				this.loadData()
			}
		}
	}
</script>

<style lang="scss">
	.scroll-wrap{
		height: 100vh;
	}
	.main-content{
		padding: 20px;
		flex: 1;
		background: #FFFFFF;
		.record-wrap{
			.empty {
				width: 176px;
				height: 95px;
				margin: 80px auto 80px;
				text-align: center;
				position: relative;
				background: url(../../static/@2xempty1.png) 0 0 / 176px auto no-repeat;
				position: relative;
			
				.txt {
					position: relative;
					top: 90px;
					font-size: 14px;
					color: #333333;
				}
			}
			.record-title{
				font-size: 16px;
			}
			.record-box{
				margin-top: 15px;
				&:after {
					content: " ";
					position: absolute;
					height: 1px;
					width: 89%;
					border-top: 1px solid rgba($color: #cbcbcb, $alpha: .4);
					transform-origin: 0 0;
					transform: scaleY(0.5);/*缩放*/
				}
				.user-wrap{
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					.user-info{
						display: flex;
						align-items: center;
						.img{
							width: 16px;
							height: 16px;
							border-radius: 8px;
							margin-right: 5px;
							vertical-align: top;
						}
						.name{
							font-size: 12px;
							color: #666666;
						}
					}
					.phone{
						font-size: 12px;
						color: #666666;
					}
				}
				.info-wrap{
					margin-top: 10px;
					.info-title{
						font-size: 14px;
						color: #333333;
					}
					.info-single{
						font-size: 14px;
						color: #333333;
						margin-top: 5px;
					}
					.info-img{
						margin-top: 5px;
						padding-bottom: 10px;
						.img{
							width: 56px;
							height: 56px;
							margin-right: 5px;
							border-radius: 2px;
						}
						
					}
				}
			}
		}
	}
	
</style>
