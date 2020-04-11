<template>
	<view>
		<view :class="['main-wrap', searchToolFlag ? 'search_tool' : '']">
			<view class="nav">客户</view>
			<scroll-view
				:scroll-y="true" 
				class="main-content" 
				ref="mainContent" 
				id="mainContent"
				@scroll="scrollHandle"
			>
				<view class="searchBox">
					<input class="uni-input" placeholder="搜索..." />
					<i class="icon-search"></i>
				</view>
				<view class="list_with_detail">
					<view class="menu">
						<view class="btn_wrap">
							<view :class="['btn', index === tabSelected ? 'active' : '']" v-for="(tab, index) in tabMenu" @click="tabHandle(index)" :key="index">{{tab}}</view>
						</view>
						<view class="search_btn"></view>
					</view>
					<scroll-view
						:scroll-y="innerScroll"
						@scrolltoupper="innerScrollHandle"
						:upper-threshold="50"
						:scroll-into-view="true" 
						class="content"
						v-show="tabSelected === 0"
					>
						<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
							<view class="sub_title">佳格食品（中国）有限公司</view>
							<view class="sub_content">佳格食品（中国）有限公司于2012年01月21日在太仓市市场监督管理局登记成立。法定代表人宣建生，公司经营范围包括食用植物油（全精炼、半精炼）、饮料（植物饮料、营养素饮料、蛋白饮料）等</view>
							<view class="sub_info">
								<view class="area">广东省·深圳市</view>
								<view class="time">最近下单：2020-02-29</view>
							</view>
						</navigator>
						<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
							<view class="sub_title">上海东冠纸业有限公司</view>
							<view class="sub_content">上海东冠纸业有限公司 [1]  是由英属维尔京群岛的东方纸业有限公司和上海东冠华洁纸业有限公司共同投资设立的专业生产各类高档卫生用纸企业，其产品的品牌是“洁云”。</view>
							<view class="sub_info">
								<view class="area">广东省·深圳市</view>
								<view class="time">最近下单：2020-02-29</view>
							</view>
						</navigator>
						<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
							<view class="sub_title">佳格食品（中国）有限公司</view>
							<view class="sub_content">佳格食品（中国）有限公司于2012年01月21日在太仓市市场监督管理局登记成立。法定代表人宣建生，公司经营范围包括食用植物油（全精炼、半精炼）、饮料（植物饮料、营养素饮料、蛋白饮料）等</view>
							<view class="sub_info">
								<view class="area">广东省·深圳市</view>
								<view class="time">最近下单：2020-02-29</view>
							</view>
						</navigator>
						<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
							<view class="sub_title">上海东冠纸业有限公司</view>
							<view class="sub_content">上海东冠纸业有限公司 [1]  是由英属维尔京群岛的东方纸业有限公司和上海东冠华洁纸业有限公司共同投资设立的专业生产各类高档卫生用纸企业，其产品的品牌是“洁云”。</view>
							<view class="sub_info">
								<view class="area">广东省·深圳市</view>
								<view class="time">最近下单：2020-02-29</view>
							</view>
						</navigator>
					</scroll-view>
					<scroll-view
						:scroll-y="innerScroll"
						@scrolltoupper="innerScrollHandle"
						:upper-threshold="50"
						:scroll-into-view="true" 
						class="content"
						v-show="tabSelected === 1"
					>
						<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
							<view class="sub_title">佳格食品（中国）有限公司</view>
							<view class="sub_content">佳格食品（中国）有限公司于2012年01月21日在太仓市市场监督管理局登记成立。法定代表人宣建生，公司经营范围包括食用植物油（全精炼、半精炼）、饮料（植物饮料、营养素饮料、蛋白饮料）等</view>
							<view class="sub_info">
								<view class="area">广东省·深圳市</view>
								<view class="time">最近跟进：2020-02-29</view>
							</view>
						</navigator>
						<navigator url="" hover-class="none" open-type="navigate" class="sub_content_wrap">
							<view class="sub_title">上海东冠纸业有限公司</view>
							<view class="sub_content">上海东冠纸业有限公司 [1]  是由英属维尔京群岛的东方纸业有限公司和上海东冠华洁纸业有限公司共同投资设立的专业生产各类高档卫生用纸企业，其产品的品牌是“洁云”。</view>
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
							<view class="sub_title">上海东冠纸业有限公司</view>
							<view class="sub_content">上海东冠纸业有限公司 [1]  是由英属维尔京群岛的东方纸业有限公司和上海东冠华洁纸业有限公司共同投资设立的专业生产各类高档卫生用纸企业，其产品的品牌是“洁云”。</view>
							<view class="sub_info">
								<view class="area">广东省·深圳市</view>
								<view class="time">最近跟进：2020-02-29</view>
							</view>
						</navigator>
					</scroll-view>
				</view>
			</scroll-view>	
		</view>
		<tabBar currentPage="customer"></tabBar>
	</view>
</template>

<script>
	import tabBar from '../../components/tabbar';
	export default {
		components:{
			tabBar
		},
		data() {
			return {
				// 动态改变搜索框状态
				searchToolFlag: false,
				// 内部滚动
				innerScroll: false,
				// tab
				tabMenu: ['合作客户', '潜在客户'],
				tabSelected: 0
			};
		},
		methods:{
			// 外层容器滚动视差
			scrollHandle(event) {
				let st = event.detail.scrollTop
				console.log("最外层滚动条:", st)
				// 判断是否锁住顶部
				if(st > 96) {
					this.searchToolFlag = true
					this.innerScroll = true
				}
			},
			// 内层容器滚动视差
			innerScrollHandle(event) {
				this.searchToolFlag = false
				this.innerScroll = false
			},
			// tab切换
			tabHandle(index) {
				this.tabSelected = index
			}
		}
	}
</script>

<style lang="scss">
page{
	min-height: 100%;
	background: url(https://img.51kcwc.com/thread/2004/06/2a974cf99729c9bd2336a8bf62424e5d_s498x1080.jpeg) #002140 0 0 / 100% auto no-repeat;
}
.main-wrap{
	width: 100%;
	min-height: 400px;
	overflow: hidden;
	// 根据滚动条位置动态控制各容器状态
	&.search_tool{
		.searchBox{
			position: fixed;//
			display: none;
		}
		.list_with_detail{
			.menu{
				position: fixed;//
				top: 60px;//
				display: flex;
				width: 100%;
				.search_btn{
					opacity: 1;
					transition: opacity .2s;
				}
			}
			.content{
				position: fixed;//
				top: 100px;//
				bottom:30px;//
				left: 0px;//
				right:0px;//
				overflow: auto;//
			}
		}
	}
	.nav{
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
	}
	.searchBox{
		margin: 24px 20px 30px;
		height: 40px;
		background: #FFFFFF;
		border-radius: 20px;
		display: flex;
		box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
		input{
			padding: 10px 20px;
			flex: 1;
			font-size: 14px;
		}
		.icon-search{
			width: 16px;
			height: 16px;
			padding: 12px 20px 12px 12px;
			background: url(../../static/@2xss-hei.png) center center / 16px auto no-repeat;
		}
	}
	.list_with_detail{
		.menu{
			display: flex;
			justify-content: space-between;
			.btn_wrap{
				display: flex;
				flex-direction: row;
				padding: 0 10px;
				margin-bottom: 10px;
				align-items: center;
				position: relative;
			}
			.btn{
				height: 30px;
				line-height: 30px;
				font-size: 14px;
				color: #FFFFFF;
				padding:0 8px;
				position: relative;
				margin-right: 20px;
				&.active{
					font-size: 16px;
					&:after{
						content:' ';
						position: absolute;
						width: 14px;
						height: 2px;
						background: #FFFFFF;
						bottom: -3px;
						left: 50%;
						margin-left: -7px;
						border-radius: 1px;
					}
				}
			}
			.search_btn{
				width: 16px;
				height: 16px;
				padding: 7px;
				background: url(../../static/@2xsearch-white.png) center center / 16px 16px no-repeat;
				position: absolute;
				right: 10px;
				opacity: 0;
				transition: opacity; 
			}
		}
		.content{
			background: #FFFFFF;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			padding: 5px 0px 20px 0px;
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
	}
}
</style>
