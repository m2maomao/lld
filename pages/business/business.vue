<template>
	<view>
		<view :class="['main-wrap', searchToolFlag ? 'search_tool' : '']">
			<view class="nav">商机</view>
			<scroll-view 
				:scroll-y="true" 
				class="main-content" 
				ref="mainContent" 
				id="mainContent"
				@scroll="scrollHandle"
			>
				<view class="searchBox">
					<input class="uni-input" placeholder="搜索..." v-model="searchWord" />
					<i class="icon-search" @click="goto('../search/index', {searchWord: searchWord, tabMenuSelected: tabMenu[tabSelected]})"></i>
				</view>
				<view class="list_with_detail">
					<view class="menu">
						<view class="btn_wrap">
							<view :class="['btn', index === tabSelected ? 'active' : '']" v-for="(tab, index) in tabMenu" @click="tabHandle(index)" :key="index">{{tab}}</view>
						</view>
						<view class="search_btn" @click="showSearch"></view>
					</view>
					<!-- 企业招标滚动 -->
					<scroll-view 
						:scroll-y="innerScroll"
						@scrolltoupper="innerScrollHandle"
						@scrolltolower="loadMore(0)"
						:upper-threshold="50"
						:scroll-into-view="true" 
						class="content"
						v-show="tabSelected === 0"
					>
						<view
							class="sub_content_wrap"
							v-for="(item, index) in enterpriseList"
							:key="index"
							@click="goto('tenderingDetail', {id: item.id})"
						>
							<view class="sub_title">{{item.title}}</view>
							<view class="sub_info">
								<view class="area">
									{{locationConvert(item.province, item.city, item.district)}}
								</view>
								<view class="time">最近下单：{{formatTime(item.createTime)}}</view>
							</view>
						</view>
					</scroll-view>
					<!-- 公海客户滚动 -->
					<scroll-view
						:scroll-y="innerScroll"
						@scrolltoupper="innerScrollHandle"
						@scrolltolower="loadMore(1)"
						:upper-threshold="50"
						:scroll-into-view="true" 
						class="content"
						v-show="tabSelected === 1"
					>
						<view 
							class="sub_content_wrap"
							v-for="(item, index) in customerList"
							:key="index"
							@click="goto('customerDetail', {id: item.id})"
						>
							<view class="sub_title">{{item.name}}</view>
							<view class="sub_content">{{item.intro}}</view>
							<view class="sub_info">
								<view class="area">
									{{locationConvert(item.province, item.city, item.district)}}
								</view>
								<view class="time">最近跟进：{{formatTime(item.updateTime)}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</scroll-view>	
		</view>
		<tabBar currentPage="business"></tabBar>
	</view>
</template>

<script>
	import tabBar from '../../components/tabbar';
	import { opportunityEnterpriseList, opportunityCustomerList } from '../../api/api.js';
	
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
				tabMenu: ['企业招标', '公海客户'],
				tabSelected: 0,
				// 搜索
				searchWord: null,
				// 企业招标传参
				enterpriseParams: {
					pageSize: 20,
					pageIndex: 1,
					totalPage: 1
				},
				// 企业招标列表数据
				enterpriseList: [],
				// 公海客户传参
				customerParams: {
					pageSize: 20,
					pageIndex: 1,
					totalPage: 1
				},
				// 公海客户列表数据
				customerList: []
			};
		},
		onShow() {
			this.loadMore(2)
		},
		onLoad() {
		},
		methods:{
			loadMore(type) {
				if(type === 0) {
					console.log('滚动企业招标')
					if(this.enterpriseParams.totalPage >= this.enterpriseParams.pageIndex) {
						this.loadDataEnterpriseList()
						this.enterpriseParams.pageIndex++;
					}
				} else if(type === 1) {
					console.log('滚动公海客户')
					if(this.customerParams.totalPage >= this.customerParams.pageIndex) {
						this.loadDataCustomerList()
						this.customerParams.pageIndex++;
					}
				} else {
					this.loadDataEnterpriseList();
					this.loadDataCustomerList();
				}
			},
			loadDataEnterpriseList() {
				// 获取企业招标列表
				opportunityEnterpriseList({...this.enterpriseParams}).then(res => {
					console.log('招标res:', res)
					let _d = res.data
					this.enterpriseParams.totalPage = _d.totalPage;
					if(this.enterpriseParams.pageIndex > 1) {
						this.enterpriseList.push(..._d.list)
					} else {
						this.enterpriseList = _d.list
					}
					if(this.enterpriseParams.totalPage > this.enterpriseParams.pageIndex) {
						this.enterpriseParams.pageIndex++;
					}
				})
			},
			loadDataCustomerList() {
				// 获取公海客户列表
				opportunityCustomerList({...this.customerParams}).then(res => {
					console.log('客户res:', res)
					let _d = res.data
					this.customerParams.totalPage = _d.totalPage;
					if(this.customerParams.totalPage > 1) {
						this.customerList.push(..._d.list)
					} else {
						this.customerList = _d.list
					}
					if(this.customerParams.totalPage > this.customerParams.pageIndex) {
						this.customerParams.pageIndex++;
					}
				})
			},
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
			},
			// 显示搜索框
			showSearch() {
				// 顶部搜索框获取焦点
				this.searchToolFlag = false
				this.innerScroll = false
			}
		}
	}
</script>

<style lang="scss">
page{
	min-height: 100%;
	background: url(../../static/@2xbg.png) #002140 0 0 / 100% auto no-repeat;
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
				top: 80px;// 视差
				display: flex;
				width: 100%;
				.search_btn{
					opacity: 1;
					transition: opacity .2s;
				}
			}
			.content{
				position: fixed;//
				top: 120px;// 视差
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
					&::after{
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
			box-sizing: border-box;
			min-height: calc(100vh - (50px + 40px + 90px + 43px));
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
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3; //需要控制的文本行数
					overflow: hidden;
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
