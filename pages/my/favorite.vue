<template>
	<view>
		<view class="main-wrap">
			<view class="empty" v-if="!list.length>0">
				<view class="txt">暂无收藏</view>
			</view>
			<!-- <scroll-view :scroll-y="isScroll" @scrolltolower="loadMore" class="content-wrap" v-else >
				<block v-for="(item, index) in list" :key="index">
					<view class="sub_content_wrap order-item" :data-index = "index" @touchstart="drawStart" @touchmove="drawMove" @touchend="drawEnd" :style="{right: item.right + 'rpx'}">
						<view class="sub_title">{{item.title}}</view>
						<view class="sub_info">
							<view class="area">{{locationConvert(item.province, item.city, item.district)}}</view>
							<view class="time">发布时间：{{formatTime(item.createTime)}}</view>
						</view>
					</view>
					<view class="remove">
						<view class="removeTxt delete1" v-if="!item.ifConfirmDelete" @click="delItem1(index)"><img src="../../static/@2xshanchu.png"></view>
						<view class="removeTxt delete2" @click="delItem(index)" v-else><img src="../../static/@2xshanchu.png">确认删除</view>
					</view>
				</block>
			</scroll-view> -->
			<scroll-view :scroll-y="isScroll" class="sub_content_wrap">
				<block :key="index" v-for="(item, index) in list">
					<view :data-index = "index" class="order-item" @touchstart="drawStart" @touchmove="drawMove" @touchend="drawEnd" :style="{right: item.right + 'rpx'}">
						<view class="content">
							<view class="sub_title">{{item.title}}</view>
							<view class="sub_info">
								{{locationConvert(item.province, item.city, item.district)}}
								<view class="time">发布时间：{{formatTime(item.createTime)}}</view>
							</view>
						</view>
						<view class="remove" :style="{'width': item.ifConfirmDelete&&deletingIndex ==index ? '210rpx': '100rpx','right':item.ifConfirmDelete&&deletingIndex == index ? '-210rpx': '-100rpx'}">
							<view class="removeTxt delete1" v-if="!item.ifConfirmDelete" @click="delItem1(index)"> <view class="circle"><img src="../../static/@2xshanchu.png"></view></view>
							<view class="removeTxt delete2" @click="delItem(index)" v-else> <view class="circle1" ><img src="../../static/@2xshanchu.png">确认删除</view></view>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import { accountOpportunity } from '../../api/api.js';
	
	export default {
		data() {
			return {
				list: [],
				params: {
					pageIndex: 1,
					pageSize: 20,
					totalPage: 1
				},
				delBtnWidth:100,
				ifScrollForbidden:false,
				isScorll:true,
			};
		},
		onShow() {
			this.loadData()
		},
		methods: {
			loadData() {
				accountOpportunity({...this.params}).then(res => {
					let _d = res.data;
					this.params.totalPage = _d.totalPage;
					let _list = this.editList(_d.list)
					//this.list.push(..._d.list);
					this.list.push(..._list);
					if(this.params.totalPage > this.params.pageIndex) {
						this.params.pageIndex++;
					}
				})
			},
			/**
			 * 重构数组
			 */
			editList(list){
				for(let i=0; i<list.length; i++){
					list[i]['ifConfirmDelete'] = false;
					list[i]['right'] = 0;
				}
				return list
			},
			drawStart: function(e){
				console.log(11);
				console.log('this.ifScrollForbidden=',this.ifScrollForbidden);
				if(this.ifScrollForbidden){
					return false;
				}
				var touch = e.touches[0];
				for(var index in this.list){
					this.list[index].right = 0;
				}
				this.startX = touch.clientX;
			},
			drawMove:function(e){
				console.log(22);
				var touch = e.touches[0];
				var item = this.list[e.currentTarget.dataset.index];
				var disX = this.startX - touch.clientX;
				console.log('disX=',disX)
				if(disX >=50){
					if(disX > this.delBtnWidth){
						disX = this.delBtnWidth;
					}
					this.isScorll = false;
					this.list[e.currentTarget.dataset.index].right = disX;
					this.ifScrollForbidden = true;
					this.deletingIndex = e.currentTarget.dataset.index;
					console.log('this.deletingIndex=',this.deletingIndex)
				}else{
					this.isScorll = true;
					this.list[e.currentTarget.dataset.index].right = 0;
					this.ifScrollForbidden = false;
				}
			},
			drawEnd: function(e){
				console.log(33);
				var item = this.list[e.currentTarget.dataset.index];
				if(item.right >= this.delBtnWidth /2){
					console.log('xinxin 1')
					this.isScorll = true;
					this.list[e.currentTarget.dataset.index].right = this.delBtnWidth
				}else{
					console.log('xinxin 2')
					this.isScorll = true;
					this.list[e.currentTarget.dataset.index].right = 0;
					console.log('改回删除按钮');
					this.delBtnWidth = 100;
					this.$set(this.list[e.currentTarget.dataset.index], 'ifConfirmDelete',false);
				}
				if(!this.ifScrollForbidden){
					console.log('xinxin 3')
					for(let i=0; i<this.list.length; i++){
						this.$set(this.list[i] ,'ifConfirmDelete',false);
						this.$set(this.list[i] ,'right',0);
					}
				}
				// this.startX = 0;
				
			},
			/**
			 * 点击删除
			 */
			delItem1(index){
				this.$set(this.list[index] ,'ifConfirmDelete',true);
				this.ifScrollForbidden = true;
				this.delBtnWidth = 210;
				
				this.list[index].right = this.delBtnWidth
			},
			/**
			 * 确认删除
			 */
			delItem(index){
				console.log('这次是真的删除');
				this.list.splice(index,1);
				this.ifScrollForbidden = false;
				this.delBtnWidth = 100;
			},
			// 滚动加载
			loadMore() {
				if(this.params.totalPage >= this.params.pageIndex) {
					this.loadData()
					this.params.pageIndex++;
				}
			}
		}
	}
</script>

<style lang="scss">
.main-wrap{
	.scroll-wrap{
		height: 100vh; 
		
	}
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
	.sub_content_wrap{
		// padding: 15px 20px 0 20px;
		width: 92%;
		margin: 0 auto;
		
		
		&:after{
			content: " ";
			position: absolute;
			height: 1px;
			width: 89%;
			border-top: 1px solid rgba($color: #cbcbcb, $alpha: .4);
			transform-origin: 0 0;
			transform: scaleY(0.5);/*缩放*/
		}
		.order-item{
			width: 100%;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			position: relative;
			background: #fff;
			border-bottom: 1px solid #e5e5e5;
			padding: 10px 0;
			.content{
				width: 100%;
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
			.remove{
				width:100rpx;
				height:100%;
				// background:#002140;
				color:#fff;
				position: absolute;
				top:0;
				right: -100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				
				img{
					width: 16px;
					height: 16px;
				}
				.removeTxt{
					width: 100%;
					height: 100%;
					text-align:center;
					display: flex;
					align-items: center;
					justify-content: center;
					.circle{
						width:40px;
						height:40px;
						border-radius: 50%;
						background:#002140;
						text-align:center;
						line-height:44px;
					}
					.circle1{
						padding:8px;
						border-radius: 32px;
						background:#002140;
						display: flex;
						align-items: center;
						font-size:14px;
						img{
							margin-right:3px;
						}
					}
				}
			} 
		}
	}
	
}
</style>
