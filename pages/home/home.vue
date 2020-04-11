<template>
	<view>
		<view class="main-wrap">
			<view class="top-bar"></view>
			<view class="main-content">
				<view class="top-info">
					<view class="user-wrap">
						<view class="name">早上好~,张天</view>
						<view class="avatar">
							<img src="https://dummyimage.com/50x50/94ffff">
							<i class="icon boy"></i>
						</view>
					</view>
					<view class="total-info-wrap">
						<view class="info-wrap">
								<view class="tip">本月概况</view>
								<view class="desc">下单金额</view>
								<view class="number">{{orderAmount}}<view class="unit">元</view></view>
						</view>
						<view class="total-wrap">
							<view class="box">
								<view class="title">收藏商机</view>
								<view class="number">{{collectionNum}}<view class="unit">条</view></view>
							</view>
							<view class="box">
								<view class="title">新增潜在客户</view>
								<view class="number">{{customerNum}}<view class="unit">个</view></view>
							</view>
							<view class="box">
								<view class="title">拜访跟进</view>
								<view class="number">{{visitNum}}<view class="unit">次</view></view>
							</view>
							<view class="box">
								<view class="title">下单客户</view>
								<view class="number">{{customerNum}}<view class="unit">个</view></view>
							</view>
						</view>
					</view>
				</view>
				<view class="content">
					<view class="content_title">商机推荐</view>
					<view 
						class="sub_content_wrap" 
						v-for="(item, index) in opportunities"
						:key="index"
						@click="goto('/pages/business/tenderingDetail',{id: item.id})"
					>
						<view class="sub_title">{{item.title}}</view>
						<view class="sub_info">
							<view class="area">{{locationConvert(item.province, item.city, item.district)}}</view>
							<view class="time">发布时间：{{formatTime(item.createTime)}}</view>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<tabBar currentPage="home"></tabBar>
	</view>
</template>

<script>
	import tabBar from '../../components/tabbar';
	import { formatDate } from '../../libs/tools.js';
	import { isLogin } from '../../libs/authService.js'
	import { home } from '../../api/api';
	export default {
		components:{
			tabBar
		},
		data() {
			return {
				collectionNum: 0,
				customerNum: 0,
				newCustomerNum: 0,
				opportunities: [],
				orderAmount: 0,
				visitNum: 0
			};
		},
		onShow() {
			// 未登录跳转
			if( !isLogin() ) {
				console.log('111')
				uni.navigateTo({
					url: "../login/index"
				})
			}else{
				home().then(res =>{
					console.log('res=',res)
					let _d = res.data
					this.collectionNum = _d.collectionNum;
					this.customerNum = _d.customerNum;
					this.newCustomerNum = _d.newCustomerNum;
					this.opportunities = _d.opportunities;
					this.orderAmount = _d.orderAmount;
					this.visitNum = _d.visitNum;
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">
page{
	min-height: 100%;
	background: url(https://img.51kcwc.com/thread/2004/06/8503d9bb7ba788333ff2f2c82dc6f84e_s750x734.jpeg) #002140 0 0 / 100% auto no-repeat;
}
.main-wrap{
	width: 100%;
	min-height: 400px;
	overflow: hidden;
	.top-bar{
		line-height: 43px;
		margin-top: 24px;
		text-align: center;
		font-size: 16px;
		color: #FFFFFF;
		position: fixed;
		z-index: 999;
		width: 100%;
	}
	.main-content{
		position: absolute;
		top: 63px;
		bottom: 48px;
		left: 0;
		right: 0;
		overflow: auto;
		.top-info{
			.user-wrap{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 10px;
				padding: 0 20px;
				.name{
					font-size: 20px;
					color: #FFFFFF;
				}
				.avatar{
					position: relative;
					img{
						width: 50px;
						height: 50px;
						border-radius: 25px;
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
			}
			.total-info-wrap{
				display: flex;
				padding: 25px 30px 10px 0px;
				.info-wrap{
					flex: 1;
					align-items: center;
					color: #FFFFFF;
					display: flex;
					flex-direction: column;

					.tip{
						display: inline-block;
						margin-top: 30px;
						margin-bottom: 25px;
						font-size: 12px;
						color: #FFFFFF;
						padding: 0px 12px;
						line-height: 23px;
						border: 1px solid #FFFFFF;
						border-radius: 11px;
						background: rgba($color: #FFFFFF, $alpha: .1);
					}
					.desc{
						font-size: 14px;
					}
					.number{
						font-size: 24px;
						text-align: center;
						display: flex;
						align-items: baseline;
						justify-content: center;
						margin-top: 7px;
						.unit{
							font-size: 14px;
						}
					}
				}
				.total-wrap{
					display: flex;
					width: 200px;
					flex-wrap: wrap;
					.box{
						width: 80px;
						height: 75px;
						border-radius: 10px;
						background: linear-gradient(left top,#0F3050,#0D3458);
						margin-left: 20px;
						margin-bottom: 20px;
						flex-shrink: 0;
						color: #FFFFFF;
						.title{
							font-size: 10px;
							margin-top: 13px;
							text-align: center;
						}
						.number{
							font-size: 24px;
							text-align: center;
							display: flex;
							align-items: baseline;
							justify-content: center;
							margin-top: 7px;
							.unit{
								font-size: 14px;
							}
						}
					}
				}
			}
		}
		.content{
			background: #FFFFFF;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			padding: 5px 20px 10px 20px;
			.content_title{
				font-size: 16px;
				color: #333333;
				margin-top: 15px;
			}
			.sub_content_wrap{
				padding-top: 15px;
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
					text-align: justify;
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
	}
}
</style>
