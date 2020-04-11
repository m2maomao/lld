<template>
	<view class="container">
		<view class="main-top">
			<view class="title">佳格食品（中国）有限公司</view>
			<view class="info-wrap">
					<view class="location">广东省·深圳市</view>
					<view class="time">2020-02-29</view>
			</view>
			<view class="introduction">佳格食品（中国）有限公司于2012年01月21日在太仓市市场监督管理局登记成立。法定代表人宣建生，公司经营范围包括食用植物油（全精炼、半精炼）、饮料（植物饮料、营养素饮料、蛋白饮料）等</view>
		</view>
		
		<view class="main-content">
			<view class="contact-wrap">
				<view class="contact-title">客户联系人</view>
				<view class="info-single">联系人：王励勤</view>
				<view class="info-single">部门职位：财务总监</view>
				<view class="info-single">联系电话：17689870987</view>
			</view>
			<view class="record-wrap">
				<view class="record-title">拜访记录</view>
				
				<view class="record-box">
					<view class="user-wrap">
						<view class="user-info">
							<image class="img" src="https://dummyimage.com/16x16/595fff/fff"></image>
							<view class="name">刘明杰</view>
						</view>
						<view class="phone">2020-02-29 于电话</view>
					</view>
					<view class="info-wrap">
						<view class="info-title">商讨合作</view>
						<view class="info-single">摘要：客户公司告知，已经选择了其他供应商</view>
						<view class="info-single">费用：200元</view>
						<view class="info-single">附件：</view>
						<view class="info-img">
							<image src="https://dummyimage.com/56x56/595fff/fff" class="img"></image>
							<image src="https://dummyimage.com/56x56/595fff/fff" class="img"></image>
							<image src="https://dummyimage.com/56x56/595fff/fff" class="img"></image>
							<image src="https://dummyimage.com/56x56/595fff/fff" class="img"></image>
						</view>
					</view>
				</view>
				
				<view class="record-box">
					<view class="user-wrap">
						<view class="user-info">
							<image class="img" src="https://dummyimage.com/16x16/595fff/fff"></image>
							<view class="name">刘明杰</view>
						</view>
						<view class="phone">2020-02-29 于电话</view>
					</view>
					<view class="info-wrap">
						<view class="info-title">商讨合作</view>
						<view class="info-single">摘要：客户公司告知，已经选择了其他供应商</view>
						<view class="info-single">费用：200元</view>
						<view class="info-single">附件：</view>
						<view class="info-img">
							<image src="https://dummyimage.com/56x56/595fff/fff" class="img"></image>
							<image src="https://dummyimage.com/56x56/595fff/fff" class="img"></image>
							<image src="https://dummyimage.com/56x56/595fff/fff" class="img"></image>
							<image src="https://dummyimage.com/56x56/595fff/fff" class="img"></image>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="form-btn">
			<view class="icon-add"></view>
			<view class="txt">拜访记录</view>
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
	background: url(../../static/@2xbg.png) #002140 0 -60px / 100% auto no-repeat;
}
.container{
	display: flex;
	flex-direction: column;
	height: 100vh;
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
		}
	}
	.main-content{
		padding: 20px;
		flex: 1;
		background: #FFFFFF;
		border-top-left-radius: 22px;
		border-top-right-radius: 22px;
		.contact-wrap{
			padding-bottom: 30px;
			.contact-title{
				font-size: 16px;
				margin-bottom: 5px;
			}
			.info-single{
				font-size: 14px;
				color: #333333;
				margin-top: 10px;
				line-height: 20px;
			}
		}
		.record-wrap{
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
