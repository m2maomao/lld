<template>
	<view>
		<view class="label-block">找回密码需要验证你的手机号码</view>
		<view class="form-item">
			<view class="form-item-label">手机号</view>
			<view class="form-item-input">
				<input placeholder="请输入手机号码" v-model="mobile" />
			</view>
		</view>
		<view class="form-item">
			<view class="form-item-label">验证码</view>
			<view class="form-item-input">
				<input placeholder="请输入验证码" v-model="verifyCode" />
				<view v-show="verifycodeBtnFlag" class="capture" @click="getVerifycode">获取验证码</view>
				<view v-show="!verifycodeBtnFlag" class="count">{{count}}s</view>
			</view>
		</view>
		<view class="form-button" @click="next">下一步</view>
	</view>
</template>

<script>
	import {userSendVerifycode, resetPwdStep1} from '../../api/api.js'
	
	export default {
		data() {
			return {
				verifyCode: '',
				mobile: '',
				count: '',
				verifycodeBtnFlag: true,
				timer: null
			};
		},
		methods:{
			// 获取验证码
			getVerifycode() {
				const TIME_OUT = 60
				userSendVerifycode({
					mobile: this.mobile
				}).then(res => {
					// 提示
					uni.showToast({
						title: res.message
					})
					// 显示倒计时
					if(!this.timer) {
						this.count = TIME_OUT
						this.verifycodeBtnFlag = false
						this.timer=setInterval(() => {
							if(this.count > 0 && this.count <= TIME_OUT) {
								this.count--
							} else {
								this.verifycodeBtnFlag = true
								clearInterval(this.timer)
								this.timer = null
							}
						}, 1000)
					}
				})
			},
			// 校验验证码
			next() {
				// resetPwdStep1({
				// 	mobile: this.mobile,
				// 	verifyCode: this.verifyCode
				// }).then(res => {
				// 	uni.navigateTo({
				// 		url:"./resetPassword"
				// 	})
				// })
				let data = JSON.stringify({'key': '11ss22ss33eejjkk', 'mobile': this.mobile})
				uni.navigateTo({
					url:"./resetPassword?data=" + data
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #F9F9F9;
}
.label-block{
	font-size: 14px;
	color: #333333;
	line-height: 50px;
	text-align: center;
}
.form-item{
	padding: 0 20px;
	height: 50px;
	background: #FFFFFF;
	display: flex;
	align-items: center;
	font-size: 14px;
	.form-item-label{
		width: 80px;
		color: #333333;
		height: 100%;
		align-items: center;
		display: flex;
	}
	.form-item-input{
		display: flex;
		flex: 1;
		align-items: center;
		height: 100%;
		input{
			flex: 1;
			height: 100%;
			width: 100%;
			margin-right: 10px;
		}
		.capture{
			width: 90px;
			height: 30px;
			line-height: 30px;
			background: #002140;
			text-align: center;
			color: #FFFFFF;
			border-radius: 22px;
		}
		.count{
			width: 90px;
			height: 30px;
			line-height: 30px;
			background: #002140;
			text-align: center;
			color: #FFFFFF;
			border-radius: 22px;
		}
	}
}
.form-button{
	margin: 25px 20px 0;
	border-radius: 22px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	font-size: 14px;
	color: #FFFFFF;
	background: #002140;
}
</style>
