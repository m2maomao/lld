<template>
	<view class="container">
		<scroll-view scroll-y="true" @scrolltolower="loadMore" class="scroll-wrap">
			<view class="main-top">
				<view class="title">{{name}}</view>
				<view class="info-wrap">
						<view class="location">{{locationConvert(province, city, district)}}</view>
						<view class="time">{{formatTime(updateTime)}}</view>
				</view>
				<view class="introduction" v-html="intro"></view>
			</view>
			
			<view class="main-content">
				<view class="record-wrap">
					<view class="record-title">拜访记录</view>
						<view class="record-container" v-for="(item,index) in recordList" :key="index">
							<view :class="['record-box', item.attachment.length ? '' : 'border' ]">
								<view class="user-wrap">
									<view class="user-info">
										<image class="img" :src="getImage(item.avatar)"></image>
										<view class="name">{{item.userName}}</view>
									</view>
									<view class="phone">{{formatTime(item.visitTime)}} 于电话</view>
								</view>
								<view class="info-wrap">
									<view class="info-title">商讨合作</view>
									<view class="info-single">摘要：{{item.summary}}</view>
									<view class="info-single">费用：{{item.expense ? item.expense + '元' : ''}}</view>
									<view class="info-single attachment">附件：</view>
									<view class="info-img" v-for="(attach, i) in item.attachment" :key="i">
										<!-- <image :src="getImage(attach.img)" class="img"></image> -->
									</view>
								</view>
							</view>
						</view>
				</view>
			</view>
			
			<view class="form-btn" @click="goto('../add/record', {id:id,name:name,location:locationConvert(province, city, district),intro:intro})">
				<view class="icon-add"></view>
				<view class="txt">我来跟进</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { opportunityPublicCustomerDetail, visitList } from '../../api/api.js'
	
	export default {
		data() {
			return {
				id: null,
				province: null,
				city: null,
				district: null,
				name: null,
				intro: null,
				updateTime: null,
				recordList: [],
				// 分页
				params: {
					pageIndex: 1,
					pageSize: 5,
					totalPage: 1
				}
			};
		},
		onShow() {
			this.loadData()
		},
		onLoad(option) {
			this.id = option.id
			// 公海客户详情
			opportunityPublicCustomerDetail({id: this.id}).then(res => {
				console.log('customerDetailRes:', res)
				let _d = res.data
				this.province = _d.province
				this.city = _d.city
				this.district = _d.district
				this.name = _d.name
				this.intro = _d.intro
				this.updateTime = _d.updateTime
			})
		},
		methods: {
			loadData() {
				console.log('~~', {id: this.id, ...this.params})
				visitList({id: this.id, ...this.params}).then(res => {
					let _d = res.data;
					this.params.totalPage = _d.totalPage;
					this.recordList.push(..._d.list);
					if(this.params.totalPage > this.params.pageIndex) {
						this.params.pageIndex++;
					}
				})
			},
			// 滚动加载
			loadMore() {
				console.log('loadMore')
				if(this.params.totalPage >= this.params.pageIndex) {
					this.loadData()
					this.params.pageIndex++;
				}
			}
		}
	}
</script>

<style lang="scss">
page{
	background: url(../../static/@2xbg.png) #002140 0 -60px / 100% auto no-repeat;
}
.container{
	display: flex;
	flex-direction: column;
	height: 100vh;
	.scroll-wrap{
		height: 100vh;
	}
	.main-top{
		color: #FFFFFF;
		padding: 20px 20px 20px 20px;
		box-sizing: border-box;
		.title{
			line-height: 22px;
			font-size: 16px;
		}
		.info-wrap{
			display: flex;
			flex-direction: row;
			font-size: 12px;
			margin-top: 10px;
			.location{
				background: url(../../static/@2xdingwei.png) 0 center / 10px auto no-repeat;
				padding-left: 16px;
			}
			.time{
				margin-left: 12px;
			}
		}
		.introduction{
			margin-top: 15px;
			line-height: 22px;
			font-size: 14px;
			text-align: justify;
		}
	}
	.main-content{
		padding: 20px;
		flex: 1;
		background: #FFFFFF;
		border-top-left-radius: 22px;
		border-top-right-radius: 22px;
		.record-wrap{
			padding-bottom: 25px;
			position: relative;
			.record-title{
				font-size: 16px;
			}
			.record-box{
				margin-top: 15px;
				&:after {
					content: " ";
					position: absolute;
					height: 1px;
					width: 100%;
					border-top: 1px solid rgba($color: #cbcbcb, $alpha: .4);
					transform-origin: 0 0;
					transform: scaleY(0.5);/*缩放*/
				}
				&.border .info-single.attachment {
					padding-bottom: 10px!important;
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
	.form-btn{
		position: fixed;
		bottom: 10px;
		left: 20px;
		right: 20px;
		height: 40px;
		display: flex;
		flex-direction: row;
		background: #002140;
		color: #FFFFFF;
		align-items: center;
		border-radius: 22px;
		justify-content: center;
		.icon-add{
			width: 14px;
			height: 14px;
			margin-right: 5px;
			background: url(../../static/@2xtianjia.png) 0 center / 14px auto no-repeat;
		}
		.txt{
			font-size: 14px;
		}
	}
}

</style>
