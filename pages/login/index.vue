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
				<view class="agreement">
					<view :class='["icon", checked ? "checked" : null]' @click="toggleChecked"></view>
					<view class="txt">请阅读并同意以下<view class="link" @click="goto('agreement', {})">服务协议</view></view>
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
 import { userLogin, accountInfo } from '../../api/api';
 import { isLogin } from '../../libs/authService.js';
 import { mapState, mapMutations} from 'vuex'
 
	export default {
		data() {
			return {
				username: '',
				password: '',
				checked: true
			}
		},
		computed:{
			...mapState(['accountInfo'])
		},
		onLoad() {
			// 已登录情况，默认跳转首页
			if (isLogin()) {
				uni.switchTab({
					url:'../home/home'
				})
			}
		},
		onShow() {
		},
		methods: {
			// 切换协议选中状态
			toggleChecked() {
				this.checked = !this.checked
			},
			...mapMutations(['setAccountInfo']),
			login() {
				if (!this.checked) {
					uni.showToast({
						icon:'none',
						title: '您必须同意服务协议!'
					})
					return
				}
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
					// 请求获取用户数据
					accountInfo().then(res => {
						let _d = res.data
						this.setAccountInfo({
							..._d
						})
					})
					// 延迟跳转
					setTimeout(() => {
						uni.switchTab({
							url:"../home/home"
						})
					}, 1000)
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
			margin-top: 20px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 14px;
			color: #FFFFFF;
			border-radius: 22px;
			background: #002140;
		}
		.agreement{
			margin-top: 10px;
			font-size: 12px;
			line-height: 14px;
			color: #666666;
			display: flex;
			align-items: center;
			.icon{
				width: 14px;
				height: 14px;
				margin-right: 5px;
				background: url(../../static/icon-check-off@2x.png) center center / 100% auto no-repeat;
				&.checked{
					background: url(../../static/icon-check-on@2x.png) center center / 100% auto no-repeat;
				}
			}
			.txt{
				display: flex;
				flex-direction: row;
				.link{
					text-decoration: underline;
				}
			}
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
