<template>
	<view>
		<view class="main-wrap">
			<view class="list-wrap">
				<view class="navigator" @click="goto('./profileEdit',{avatar, name, gender})">
					<view type="default">个人资料</view>
				</view>
				<view class="navigator" @click="goto('./phoneModify',{})">
					<view type="default">修改手机号</view>
				</view>
				<view class="navigator" @click="goto('./changePassword',{})">
					<view type="default">修改密码</view>
				</view>
				<view class="navigator">
					
					<button class="default" open-type='feedback' type="primary">意见反馈</button>
				</view>
			</view>
			<view class="form-btn" @click="logout">退出登录</view>
		</view>
	</view>
</template>

<script>
	import { accountInfo } from '../../../api/api.js';
	
	export default {
		data() {
			return {
				avatar: null,
				name: null,
				gender: null,
				mobile: null
			};
		},
		onShow() {
			accountInfo().then(res => {
				console.log('profileEdit:', res)
				let _d = res.data;
				this.avatar = _d.avatar;
				this.name = _d.name;
				this.gender = _d.gender;
				this.mobile = _d.mobile;
			})
		},
		methods:{
			logout() {
				uni.showActionSheet({
				    itemList: ['退出登录'],
				    success: function (res) {
				        uni.removeStorage({
				        	key: 'token',
									success: (res) => {
										uni.navigateTo({
											url: '../../login/index'
										})
									}
				        })
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #F9F9F9;
	}
.main-wrap{
	.list-wrap{
		padding: 0 20px;
		background: #FFFFFF;
		.navigator{
			font-size: 14px;
			color: #333333;
			line-height: 50px;
			background: url(../../../static/@2xjiantou.png) right center / 4px 7px no-repeat;
			
			&:after {
				content: " ";
				position: absolute;
				height: 1px;
				width: 89%;
				border-top: 1px solid rgba($color: #cbcbcb, $alpha: .4);
				transform-origin: 0 0;
				transform: scaleY(0.5);/*缩放*/
			}
			
			&:last-child{
				border-bottom: none;
				&:after{
					border-top: none;
				}
			}
			.default{
				background: none;
				border: 0;
				&:after{border: none;}
				padding: 0;
				outline: none;
				text-align: left;
				font-size: 14px;
				color: #333333;
				line-height: 50px;
			}
		}
	}
	.form-btn{
		text-align: center;
		line-height: 50px;
		margin-top: 30px;
		background: #FFFFFF;
		font-size: 14px;
		color: #333333;
	}
}
</style>
