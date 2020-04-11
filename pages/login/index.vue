<template>
	<view>
		<view class="main-wrap">
			<view class="logo"></view>
			<view class="form">
				<view class="title">登录</view>
				<view class="form-item">
					<view class="form-item-label user-icon">用户名</view>
					<view class="form-item-input"><input placeholder="请输入用户名" v-model="username" /></view>
				</view>
				<view class="form-item">
					<view class="form-item-label password-icon">密码</view>
					<view class="form-item-input"><input password="true" placeholder="请输入密码" v-model="password" /></view>
				</view>
				<view class="form-button" @click="login">登录</view>
				<navigator url="findPassword" open-type="navigate" class="forgot-password" hover-class="none">忘记密码?</navigator>
			</view>
		</view>
		<view class="copyright-wrap">
			<view class="copyright">©2020 龙利得智能科技股份有限公司 版权所有</view>
			<navigator to="" class="link">龙利得在线服务平台</navigator>
		</view>
	</view>
</template>

<script>
 import { userLogin } from '../../api/api';
 import { isLogin } from '../../libs/authService.js';
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		onLoad() {
			
		},
		onUnload() {

		},
		methods: {
			login() {
				userLogin({
					username: this.username,
					password: this.password
				}).then(res => {
					// token全局写入
					uni.setStorage({
						key: "token",
						data: res.data
					})
					// 成功提示
					uni.showToast({
						title: '登录成功!',
						duration: 2000
					})
					// 延迟跳转
					setTimeout(() => {
						uni.switchTab({
							url:"../home/home"
						})
					}, 2000)
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	min-height: 100%;
	background: url(https://img.51kcwc.com/thread/2004/06/37da51e12f6af3218654103d98b9b65e_s750x384.jpeg) #FFFFFF 0 0 / 100% auto no-repeat;
}
.main-wrap{
	position: absolute;
	top: 162px;
	bottom: 50px;
	left: 0;
	right: 0;
	padding: 0 40px;
	background: #FFFFFF;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	.logo{
		width: 98px;
		height: 128px;
		background: url(../../static/@2xlogo.png) 0 0 / 100% auto no-repeat;
		position: absolute;
		top: -40px;
		left: 50%;
		margin-left: -49px;
	}
	.form{
		margin-top: 120px;
		.title{
			font-size: 20px;
			color: #333333;
			margin-bottom: 15px;
		}
		.form-item{
			height: 56px;
			line-height: 56px;
			display: flex;
			position: relative;
			width: 100%;
			&:after{
				content: " ";
				position: absolute;
				bottom: 0;
				height: 1px;
				width: 100%;
				border-bottom: 1px solid rgba($color: #cbcbcb, $alpha: .4);
				transform-origin: 0 0;
				transform: scaleY(0.5);/*缩放*/
			}
			.form-item-label{
				width: 84px;
				padding-left: 22px;
				font-size: 14px;
				&.user-icon{
					background: url(../../static/@2xuser-icon.png) 0 center / 14px auto no-repeat;
				}
				&.password-icon{
					background: url(../../static/@2xpassword-icon.png) 0 center / 14px auto no-repeat;
				}
			}
			.form-item-input{
				flex: 1;
				font-size: 14px;
				input{
					width: 100%;
					height: 100%;
					line-height: 56px;
				}
			}
		}
		.forgot-password{
			margin-top: 15px;
			line-height: 20px;
			font-size: 14px;
			color: #666666;
			display: flex;
			flex-direction: row-reverse;
		}
		.form-button{
			margin-top: 30px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 14px;
			color: #FFFFFF;
			border-radius: 22px;
			background: #002140;
		}
	}
}
.copyright-wrap{
	position: fixed;
	width: 100%;
	height: 50px;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
	font-size: 12px;
	line-height: 17px;
	.copyright{
		margin-top: 2px;
		color: #747474;
	}
	.link{
		margin-top: 5px;
		color: #B0B0B0;
	}
}
</style>
