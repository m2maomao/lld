<template>
	<view class="tabBar">
		<view v-for="(item,index) in tabBar" :key="item.url" class="tabbar_item" :class="{'active':item.url == currentPage}"
		 @click="navTo(item,index)">
			<view v-if="item.convex">
				<image :src="item.imgNormal" class="convex" @click="showPanelHandle"></image>
			</view>
			<view v-else>
				<image v-if="item.url == currentPage" :src="item.imgClick" mode=""></image>
				<image v-else :src="item.imgNormal" mode=""></image>
				<view class="text">{{item.text}}</view>
			</view>
		</view>
		<view :class="['mask',maskFlag ? 'active' : '']"></view>
		<view :class="['add_wrap',showPanel ? 'active' : '']">
			<view class="navigator_wrap">
				<view class="customer" @click="goto('../add/customer', {})">新增潜在客户</view>
				<view class="record" @click="goto('../add/record', {})">新增拜访记录</view>
			</view>
			<view class="close_btn" @click="hidePanelHandle"></view>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			currentPage: {
				type: String,
				default: 'home'
			}
		},
		data() {
			return {
				tabBar: [{
						url: 'home',
						text: '首页',
						imgNormal: '../../static/@2xshouye-2.png',
						imgClick: '../../static/@2xshouye.png',
						convex: false
					},
					{
						url: 'business',
						text: '商机',
						imgNormal: '../../static/@2xshangji-2.png',
						imgClick: '../../static/@2xshangji.png',
						convex: false
					},
					{
						url: 'add',
						text: '新增',
						imgNormal: '../../static/@2xadd.png',
						imgClick: '../../static/@2xadd.png',
						convex: true
					},
					{
						url: 'customer',
						text: '客户',
						imgNormal: '../../static/@2xkehu-2.png',
						imgClick: '../../static/@2xkehu.png',
						convex: false
					}, {
						url: 'my',
						text: '我的',
						imgNormal: '../../static/@2xwo-2.png',
						imgClick: '../../static/@2xwode.png',
						convex: false
					}
				],
				level: '',
				showPanel: false,
				maskFlag: false
			};
		},
		mounted() {
			console.log()
		},
		created() {
			uni.hideTabBar({})
		},
		computed: {

		},
		methods: {
			// 封装跳转底部Tab
			navTo(item, index) {
				if (item.url !== this.currentPage) {
					let isUrl = `/pages/${item.url}/${item.url}`
					uni.switchTab({
						url: isUrl
					})
				}
			},
			hidePanelHandle() {
				this.showPanel = false
				this.maskFlag = false
			},
			showPanelHandle() {
				this.showPanel = true
				this.maskFlag = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	//导航栏设置
	$isRadius:0upx; //左上右上圆角
	$isWidth:100vw; //导航栏宽度
	$isBorder:0px; //边框 不需要则设为0px
	$isBg:white; //背景

	// 选中设置
	$chooseTextColor:#002140; //选中时字体颜色
	$chooseBgColor:white; //选中时背景颜色 transparent为透明

	//未选中设置
	$normalTextColor:#A0ADB9; //未选中颜色

	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba($color: #000000, $alpha: 0.3);
		z-index: 1;
		display: none;
		transition: display .2s;

		&.active {
			transition: display .6s;
			display: block;
		}
	}

	.add_wrap {
		position: fixed;
		width: 100%;
		bottom: -230px;
		transition: bottom .3s;
		background: #FFFFFF;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		z-index: 2;

		&.active {
			bottom: 0px;
			transition: bottom .3s;
		}

		.navigator_wrap {
			display: flex;
			font-size: 14px;
			color: #333333;
			text-align: center;
			margin: 45px 0 40px;

			.customer {
				background: url(../../static/@2xyonghu.png) center 0 / 50px auto no-repeat;
				padding-top: 65px;
				flex: 1;
			}

			.record {
				background: url(../../static/@2xdangan.png) center 0 / 50px auto no-repeat;
				padding-top: 65px;
				flex: 1;
			}
		}

		.close_btn {
			width: 30px;
			height: 30px;
			margin: 0 auto 30px;
			background: url(../../static/@2xguanbi.png) center center / 16px 16px no-repeat;
		}
	}

	.tabBar {
		width: $isWidth;
		height: 100upx;
		position: fixed;
		bottom: 0upx;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: 998;
		background-color: $isBg;
		color: $normalTextColor;
		border-left: $isBorder;
		border-top: $isBorder;
		border-right: $isBorder;
		display: flex;
		justify-content: space-around;
		border-top-right-radius: $isRadius;
		border-top-left-radius: $isRadius;
		box-sizing: border-box;
		// overflow: hidden;
		box-shadow: 0px -3px 9px 0px rgba(0, 0, 0, 0.06);

		.tabbar_item {
			width: 25%;
			font-size: 10px;
			line-height: 14px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			&.active {
				/* border-left: $isBorder;
                border-top: $isBorder; */
				background: $chooseBgColor;
				color: $chooseTextColor;
			}

			.text {}

			.convex {
				width: 50px;
				height: 50px;
				position: relative;
				bottom: 19px;
			}
		}

		image {
			width: 16px;
			height: 16px;
			margin-left: 5upx;
			margin-top: 4px;
		}
	}
</style>
