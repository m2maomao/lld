<template>
	<view>
		<view class="container">
			<view class="searchBox">
				<input class="uni-input" placeholder="搜索..." v-model="searchWord" />
				<i class="icon-search"></i>
			</view>
			<view class="content">
				
				<!-- 暂无结果 -->
				<view class="empty" v-show="emptyFlag">
					<view class="txt">暂无结果</view>
				</view>
				<!-- /暂无结果 -->
				
				<!-- 企业招标 -->
				<view class="tendering" v-if="tabMenuSelected === '企业招标'">
					<view
						class="sub_content_wrap"
						v-for="(item, index) in enterpriseList"
						:key="index"
						@click="goto('../business/tenderingDetail', {id: item.id})"
					>
						<view class="sub_title">{{item.title}}</view>
						<view class="sub_info">
							<view class="area">
								{{locationConvert(item.province, item.city, item.district)}}
							</view>
							<view class="time">最近下单：{{formatTime(item.createTime)}}</view>
						</view>
					</view>
				</view>
				<!-- /企业招标 -->
				
				<!-- 公海客户 -->
				<view class="customer" v-if="tabMenuSelected === '公海客户' && !emptyFlag">
					<view
						class="sub_content_wrap"
						v-for="(item, index) in customerList"
						:key="index"
						@click="goto('../business/customerDetail', {id: item.id})"
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
				</view>
				<!-- /公海客户 -->
				
				<!-- 合作客户 -->
				<view class="cooperative" v-if="tabMenuSelected === '合作客户' && !emptyFlag">
					<view
						class="sub_content_wrap"
						v-for="(item, index) in cooperationCustomerData.list"
						:key="index"
						@click="goto('../customer/cooperativeDetail', {id: item.id})"
					>
						<view class="sub_title">{{item.name}}</view>
						<view class="sub_content" v-html="item.intro"></view>
						<view class="sub_info">
							<view class="area">{{locationConvert(item.province, item.city, item.district)}}</view>
							<view class="time">最近下单：{{formatTime(item.updateTime)}}</view>
						</view>
					</view>
				</view>
				<!-- /合作客户 -->
				
				<!-- 潜在客户 -->
				<view class="potential" v-if="tabMenuSelected === '潜在客户' && !emptyFlag">
					<view
						class="sub_content_wrap"
						v-for="(item, index) in potentialCustomerData.list"
						:key="index"
						@click="goto('../customer/potentialDetail', {id: item.id})"
					>
						<view class="sub_title">{{item.name}}</view>
						<view class="sub_content">{{item.intro}}</view>
						<view class="sub_info">
							<view class="area">{{locationConvert(item.province, item.city, item.district)}}</view>
							<view class="time">最近跟进：{{formatTime(item.createTime)}}</view>
						</view>
					</view>
				</view>
				<!-- /潜在客户 -->
			</view>
		</view>
	</view>
</template>

<script>
	import { opportunityEnterpriseList, opportunityCustomerList, cooperationCustomerList, potentialCustomerList} from '../../api/api.js';
	
	export default {
		data() {
			return {
				searchWord: null,
				tabMenuSelected: null,
				emptyFlag: true,
				// 企业招标列表数据
				enterpriseList: [],
				// 企业招标传参
				enterpriseParams: {
					asc: null,
					desc: null,
					pageSize: 20,
					pageIndex: 1,
					keyword: ''
				},
				// 公海客户列表数据
				customerList: [],
				// 公海客户传参
				customerParams: {
					asc: null,
					desc: null,
					pageSize: 20,
					pageIndex: 1,
					keyword: ''
				},
				// 合作客户列表
				cooperationCustomerData: {},
				// 合作客户列表传参
				cooperationCustomerParams: {
					asc: null,
					desc: null,
					pageSize: 20,
					pageIndex: 1,
					keyword: ''
				},
				// 潜在客户列表
				potentialCustomerData: {},
				// 潜在客户列表传参
				potentialCustomerParams: {
					asc: null,
					desc: null,
					pageSize: 20,
					pageIndex: 1,
					keyword: ''
				}
			};
		},
		onLoad(option) {
			this.searchWord = decodeURIComponent(option.searchWord)
			this.tabMenuSelected = decodeURIComponent(option.tabMenuSelected)
		},
		methods:{
			fetchData() {
				switch(this.tabMenuSelected) {
					case '企业招标':
					this.enterpriseParams.keyword = this.searchWord
						// 获取企业招标列表
						opportunityEnterpriseList(this.enterpriseParams).then(res => {
							console.log('招标res:', res)
							let _d = res.data
							this.enterpriseList = _d.list
							this.changeEmptyFlag(this.enterpriseList)
						});
						break;
					case '公海客户':
						this.customerParams.keyword = this.searchWord
						// 获取公海客户列表
						opportunityCustomerList(this.customerParams).then(res => {
							console.log('客户res:', res)
							let _d = res.data
							this.customerList = _d.list
							this.changeEmptyFlag(this.customerList)
						});
						break;
					case '合作客户':
						this.cooperationCustomerParams.keyword = this.searchWord
						// 获取合作客户
						cooperationCustomerList(this.cooperationCustomerParams).then(res => {
							this.cooperationCustomerData = res.data
							this.changeEmptyFlag(this.cooperationCustomerData.list)
							console.log('cooperationCustomerData:', this.cooperationCustomerData)
						});
						break;
						case '潜在客户':
							this.potentialCustomerParams.keyword = this.searchWord
							// 获取潜在客户
							potentialCustomerList(this.potentialCustomerParams).then(res => {
								this.potentialCustomerData = res.data
								this.changeEmptyFlag(this.potentialCustomerData.list)
								console.log('potentialCustomerData:', this.potentialCustomerData)
							});
							break;
						default:
							this.emptyFlag = true
				}
			},
			changeEmptyFlag(o) {
				this.emptyFlag = o.length > 0 ? false : true
			}
		},
		mounted() {
			this.fetchData()
		},
		onBackPress() {
			this.searchWord = ''
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
	.content{
		padding: 0 20px;
		flex: 1;
		background: #FFFFFF;
		border-top-left-radius: 22px;
		border-top-right-radius: 22px;
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
		.tendering{
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
		.customer{
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
		.cooperative, .potential{
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
