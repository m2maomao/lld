<template>
	<view class="container">
		<view class="main-top">
			<view class="title">{{name}}</view>
			<view class="info-wrap">
				<view class="location">{{locationConvert(province, city, district)}}</view>
			</view>
			<view class="introduction">{{intro}}</view>
		</view>

		<view class="main-content">
			<view class="menu">
				<view class="btn_wrap">
					<view :class="['btn', index === tabSelected ? 'active' : '']" v-for="(tab, index) in tabMenu" @click="tabHandle(index)"
					 :key="index">{{tab}}</view>
				</view>
			</view>

			<view class="record-wrap" v-show="tabSelected === 0">
				<view class="empty" v-if="!visitRecord.length > 0">
					<view class="txt">暂无记录</view>
				</view>
				<view class="record-wrap-inner" v-for="(record, r) in visitRecord" :key="r" v-else>
					<view class="record-box">
						<view class="user-wrap">
							<view class="user-info">
								<image class="img" :src="getImage(record.avatar)"></image>
								<view class="name">{{record.userName}}</view>
							</view>
							<view class="phone">{{formatTime(record.visitTime)}} 于电话</view>
						</view>
						<view class="info-wrap">
							<view class="info-title">{{record.matter}}</view>
							<view class="info-single">摘要：{{record.summary}}</view>
							<view class="info-single">费用：{{record.expense}}元</view>
							<view class="info-single">附件：</view>
							<view class="info-img" v-for="(attach, i) in record.attachment" :key="i">
								<view class="file">{{attach}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="order-wrap" v-show="tabSelected === 1">
				<view class="empty" v-if="!orderRecord.length > 0">
					<view class="txt">暂无记录</view>
				</view>
				<view class="order-wrap-inner" v-for="(order, o) in orderRecord" :key="o" v-else>
					<view class="order-box">
						<view class="tip">
							<view class="time">{{formatTime(order.deliveryTime)}}</view>
							<view class="status">已交付</view>
						</view>
						<view class="info-single">{{order.name}}</view>
						<view class="info-single">规格：{{order.norms}}</view>
						<view class="info-single">数量：{{order.number}}</view>
					</view>
				</view>
			</view>
		</view>

		<view class="form-btn" @click="goto('../add/record', {id: id,name: name,location: locationConvert(province, city, district),intro: intro})">
			<view class="icon-add"></view>
			<view class="txt">拜访记录</view>
		</view>
	</view>
</template>

<script>
	import {
		customerVisitRecording
	} from '../../api/api.js';
	export default {
		data() {
			return {
				// tab
				tabMenu: ['拜访记录', '订单记录'],
				tabSelected: 0,
				// 客户ID
				id: null,
				params: {
					pageIndex: 1,
					pageSize: 10
				},
				// 拜访记录  
				name: null,
				province: null,
				city: null,
				district: null,
				intro: null,
				visitRecord: [],
				orderRecord: []
			};
		},
		methods: {
			// tab切换
			tabHandle(index) {
				this.tabSelected = index
			}
		},
		onLoad(option) {
			// 获取客户信息
			this.id = option.id;
		},
		onShow() {
			// 获取拜访记录
			customerVisitRecording({
				id: this.id,
				...this.params
			}).then(res => {
				let _d = res.data
				this.name = _d.name;
				this.province = _d.province;
				this.city = _d.city;
				this.district = _d.district;
				this.intro = _d.intro;
				this.visitRecord = _d.visitRecord;
				this.orderRecord = _d.orderRecord;
			})
		}
	}
</script>

<style lang="scss">
	page {
		background: url(../../static/@2xbg.png) #002140 0 -60px / 100% auto no-repeat;
	}

	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;

		.main-top {
			color: #FFFFFF;
			padding: 20px 20px 20px 20px;
			box-sizing: border-box;

			.title {
				line-height: 22px;
				font-size: 16px;
			}

			.info-wrap {
				display: flex;
				flex-direction: row;
				font-size: 12px;
				margin-top: 10px;

				.location {
					background: url(../../static/@2xdingwei.png) 0 center / 10px auto no-repeat;
					padding-left: 16px;
				}

				.time {
					margin-left: 12px;
				}
			}

			.introduction {
				margin-top: 15px;
				line-height: 22px;
				font-size: 14px;
				text-align: justify;
			}
		}

		.main-content {
			padding: 20px;
			flex: 1;
			background: #FFFFFF;
			border-top-left-radius: 22px;
			border-top-right-radius: 22px;

			.menu {
				display: flex;
				justify-content: space-between;

				.btn_wrap {
					display: flex;
					flex-direction: row;
					margin-bottom: 10px;
					align-items: center;
					position: relative;
				}

				.btn {
					height: 30px;
					line-height: 30px;
					font-size: 14px;
					color: #333333;
					position: relative;
					margin-right: 30px;

					&.active {
						font-size: 16px;

						&::after {
							content: ' ';
							position: absolute;
							width: 14px;
							height: 2px;
							background: #333333;
							bottom: -3px;
							left: 50%;
							margin-left: -7px;
							border-radius: 1px;
						}
					}
				}
			}

			.record-wrap {
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
				.record-title {
					font-size: 16px;
				}

				.record-box {
					margin-top: 15px;

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

					.user-wrap {
						display: flex;
						flex-direction: row;
						justify-content: space-between;

						.user-info {
							display: flex;
							align-items: center;

							.img {
								width: 16px;
								height: 16px;
								border-radius: 8px;
								margin-right: 5px;
								vertical-align: top;
							}

							.name {
								font-size: 12px;
								color: #666666;
							}
						}

						.phone {
							font-size: 12px;
							color: #666666;
						}
					}

					.info-wrap {
						margin-top: 10px;

						.info-title {
							font-size: 14px;
							color: #333333;
						}

						.info-single {
							font-size: 14px;
							color: #333333;
							margin-top: 5px;
						}

						.info-img {
							margin-top: 5px;
							padding-bottom: 10px;

							.img {
								width: 56px;
								height: 56px;
								margin-right: 5px;
								border-radius: 2px;
							}

						}
					}
				}
			}

			.order-wrap {
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
				.order-box {
					padding: 15px 0;
					position: relative;

					&:after {
						content: " ";
						position: absolute;
						height: 1px;
						width: 100%;
						bottom: 0;
						border-bottom: 1px solid rgba($color: #cbcbcb, $alpha: .4);
						transform-origin: 0 0;
						transform: scaleY(0.5);
						/*缩放*/
					}

					&:first-child {
						padding: 0 0 15px 0;
					}

					.tip {
						display: flex;
						justify-content: space-between;
						margin-bottom: 10px;

						.time {
							font-size: 14px;
							color: #333333;
						}

						.status {
							font-size: 14px;
							color: #F5A623;
						}
					}

					.info-single {
						font-size: 14px;
						line-height: 20px;
						color: #333333;
						margin-top: 5px;
					}
				}
			}
		}

		.form-btn {
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

			.icon-add {
				width: 14px;
				height: 14px;
				margin-right: 5px;
				background: url(../../static/@2xtianjia.png) 0 center / 14px auto no-repeat;
			}

			.txt {
				font-size: 14px;
			}
		}
	}
</style>
