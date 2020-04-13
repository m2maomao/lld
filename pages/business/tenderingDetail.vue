<template>
	<view class="container">
		<view class="main-top">
			<view class="title">{{title}}</view>
			<view class="info-wrap">
				<view class="info-left">
					<view class="location">{{locationConvert(province, city, district)}}</view>
					<view class="time">{{formatTime(createTime)}}</view>
				</view>
				<view class="info-right">
					<view class="icon-share">
						<button open-type="share"></button>
					</view>
					<view class="icon-favorite" @click="addFavorite"></view>
				</view>
			</view>
		</view>
		
		<view class="main-content">
			<view class="html" v-html="content">
			</view>
		</view>
	</view>
</template>

<script>
	import { opportunityEnterprise, accountCreate } from '../../api/api.js'
	
	export default {
		data() {
			return {
				id: '',
				province: '',
				city: '',
				district: '',
				content: '',
				createTime: '',
				title: ''
			}
		},
		onLoad(option){
			// 获取列表页传入的ID
			this.id = option.id
			// 获取企业招标详情数据
			opportunityEnterprise({
				id: this.id
			}).then(res => {
				console.log('res', res)
				let _d = res.data
				this.content = _d.content
				this.createTime = _d.createTime
				this.province = _d.province
				this.city = _d.city
				this.district =_d.district
				this.title = _d.title
			})			
		},
		methods:{
			addFavorite() {
				accountCreate({
					id: this.id
				}).then(res => {
					uni.showToast({
						title: res.message
					})
				})
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
	.main-top{
		color: #FFFFFF;
		padding: 20px 20px 15px 20px;
		box-sizing: border-box;
		.title{
			line-height: 22px;
			font-size: 16px;
		}
		.info-wrap{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 12px;
			margin-top: 10px;
			.info-left{
				display: flex;
				flex-direction: row;
				.location{
					background: url(../../static/@2xdingwei.png) 0 center / 10px auto no-repeat;
					padding-left: 16px;
				}
				.time{
					margin-left: 12px;
				}
			}
			.info-right{
				display: flex;
				flex-direction: row;
				.icon-share{
					width: 16px;
					height: 16px;
					background: url(../../static/@2xshare.png) 0 center / 16px auto no-repeat;
					button{
						background: none;
						border: 0;
						&:after{border: none;}
						padding: 0;
						outline: none;
						width: 100%;
						height: 100%;
					}
				}
				.icon-favorite{
					margin-left: 25px;
					width: 16px;
					height: 16px;
					background: url(../../static/@2xshoucang.png) 0 center / 16px auto no-repeat;
				}
			}
		}
	}
	.main-content{
		padding: 20px;
		flex: 1;
		background: #FFFFFF;
		border-top-left-radius: 22px;
		border-top-right-radius: 22px;
		.html{
			color: #333333;
			line-height: 1.5em;
			text-align: justify;
		}
	}
}

</style>
