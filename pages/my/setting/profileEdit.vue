<template>
	<view>
		<view class="main-wrap">
			<view class="list-wrap">
				<view class="navigator">
					<view type="default">头像</view>
					<view class="content">
						<image :src="getImage(accountInfo.avatar)" class="img"></image>
					</view>
				</view>
				<view class="navigator" @click="goto('./nameEdit', {})">
					<view type="default">姓名</view>
					<view class="content">{{accountInfo.name}}</view>
				</view>
				<view class="navigator">
					<view type="default">性别</view>
					<view class="content" >
						<picker @change="bindPickerChange" :value="genderIndex" :range="genderArray" class="uni-input-wrap">
							<view class="uni-input">{{genderArray[genderIndex]}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { accountUpdateGender } from '../../../api/api.js';
	import { mapState } from 'vuex';

	export default {
		data() {
			return {
				genderArray: ['男', '女'],
				genderIndex: null,
			};
		},
		computed: {
			...mapState(['accountInfo'])
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.genderIndex = e.target.value
				accountUpdateGender({gender: this.genderIndex}).then(res => {
					console.log(res)
				})
			}
		},
		onReady() {
			this.genderIndex = this.accountInfo.gender.value
		}
	}
</script>

<style lang="scss">
	page {
		background: #F9F9F9;
	}

	.main-wrap {
		.list-wrap {
			padding: 0 20px;
			background: #FFFFFF;

			.navigator {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #333333;
				line-height: 50px;
				background: url(../../../static/@2xjiantou.png) right center / 4px 7px no-repeat;
				position: relative;

				.content {
					margin-right: 10px;
					display: flex;
					flex: 1;
					flex-direction: row-reverse;
					align-items: center;

					.img {
						width: 32px;
						height: 32px;
						border-radius: 16px;
					}
					.uni-input-wrap{
						width: 100%;
						.uni-input{
							width: 100%;
							text-align: right;
						}
					}					
				}

				&:after {
					content: " ";
					position: absolute;
					height: 1px;
					width: 100%;
					bottom: 0;
					border-top: 1px solid rgba($color: #cbcbcb, $alpha: .4);
					transform-origin: 0 0;
					transform: scaleY(0.5);
					/*缩放*/
				}

				&:last-child {
					border-bottom: none;

					&:after {
						border-top: none;
					}
				}
			}
		}

		.form-btn {
			text-align: center;
			line-height: 50px;
			margin-top: 30px;
			background: #FFFFFF;
			font-size: 14px;
			color: #333333;
		}
	}
</style>
