<template>
	<view>
		<view class="main-wrap">
			<view class="form-item border-bottom">
				<view class="form-item-label">新号码</view>
				<view class="form-item-input">
					<input placeholder="请输入新手机号码" v-model="mobile" />
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
			<view class="form-button">确定</view>
		</view>
	</view>
</template>

<script>
	import { userSendVerifycode, accountChangePhone} from '../../../api/api.js';
	
	export default {
		data() {
			return {
				mobile: null,
				verifyCode: '',
				key: '',
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
			changePhone() {
				accountChangePhone({
					mobile: this.mobile,
					smsCode: this.verifyCode
				}).then(res => {
					uni.showToast({
						title:res.message
					})
					setTimeout(() => {
						uni.navigateBack()
					})
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
	position: relative;
	&.border-bottom {
		&:after {
			content: " ";
			position: absolute;
			height: 1px;
			width: 89%;
			bottom: 0;
			border-top: 1px solid rgba($color: #cbcbcb, $alpha: .4);
			transform-origin: 0 0;
			transform: scaleY(0.5);/*缩放*/
		}
		
		&:last-child{
			border: none;
			&:after{
				border: none;
			}
		}
	}
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
