<template>
	<view>
		<view class="main-content">
			<view class="form-wrap">
				<view class="title">客户资料</view>
				<view class="form-item">
					<view class="form-item-label">客户名称</view>
					<view class="form-item-input">
						<input placeholder="请输入客户名称" v-model="name" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label">所在地区</view>
					<view class="form-item-input">
						<view class="form-item-witharrow" @tap="openAddres">{{pickerCity ? pickerCity.label:'请选择所在地区'}}</view>
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label">详细地址</view>
					<view class="form-item-input">
						<input placeholder="如街道,门牌号等" v-model="address" />
					</view>
				</view>
				<view class="form-item column">
					<view class="form-item-label">客户简介</view>
					<view class="form-item-textarea">
						<textarea v-model="intro" maxlength="100" />
						<view class="limitcount">{{intro.length}}/100</view>
					</view>
				</view>
			</view>
			<view class="form-wrap customer-contact">
				<view class="title">客户联系人</view>
				<view class="form-item">
					<view class="form-item-label">联系人</view>
					<view class="form-item-input">
						<input placeholder="请输入联系人姓名" v-model="contact"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label">部门职位</view>
					<view class="form-item-input">
						<input placeholder="请输入部门职位"  v-model="position"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label">联系电话</view>
					<view class="form-item-input">
						<input placeholder="请输入联系电话" v-model="mobile" type="number"/>
					</view>
				</view>
			</view>
			<view class="form-button" @click="toSaveInfo">保存</view>
			<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirmAddress" themeColor="#007AFF"></simple-address>
		</view>
	</view>
</template>

<script>
	import simpleAddress from '@/components/simple-address/simple-address.nvue';
	import { addPotentialCustomer } from '../../api/api.js'
	export default {
		data() {
			return {
				"address": "",
				"city": "",
				"contact": "",
				"district": "",
				"intro": "",
				"mobile": "",
				"name": "",
				"position": "",
				"province": "",
			    pickerCity:"",
				cityPickerValueDefault: [0, 0, 1],
			};
		},
		components: {
			simpleAddress
		},
		methods:{
			toSaveInfo(){
				let params = {
					"address": this.address,
					"city":this.pickerCity.labelArr[1],
					"contact":this.contact,
					"district":this.pickerCity.labelArr[2],
					"intro":this.intro,
					"mobile":this.mobile,
					"name":this.name,
					"position": this.position,
					"province":this.pickerCity.labelArr[0],
				}
				addPotentialCustomer(params).then( res => {
					uni.showToast({
						title:res.message
					})
					setTimeout(() => {
						uni.navigateBack()
					},1000)
					
				})
			},
			openAddres() {
				this.cityPickerValueDefault = [0,0,1]
				this.$refs.simpleAddress.open();
			},
			onConfirmAddress(e){
				
				this.pickerCity = e;
				console.log('pickerCity=',this.pickerCity)
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #F5F5F5;
	height: 100%;
}
.main-top{
	padding: 20px;
	color: #FFFFFF;
	.title{
		font-size: 16px;
		line-height: 28px;
	}
	.location{
		font-size: 12px;
		line-height: 17px;
		padding-left: 17px;
		margin-top: 5px;
		background: url(../../static/@2xlocation-white.png) 0 center / 12px auto no-repeat;
	}
	.address{
		font-size: 12px;
		line-height: 28px;
		margin-top: 5px;
	}
}
.main-content{
	background: #F5F5F5;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	
	overflow: hidden;
	.sign{
		font-size: 10px;
		color: #999999;
		padding: 10px 20px 0 20px;
		.warn{
			color: red;
			display: inline;
		}
	}
	.form-wrap{
		padding: 0 20px 15px;
		margin-bottom: 10px;
		background: #FFFFFF;
		&.customer-contact{
			padding-bottom: 0;
			.form-item{
				&:last-child{
					&:after{
						display: none;
					}
				}
			}
		}
		.title{
			font-size: 16px;
			line-height: 22px;
			padding: 20px 0 5px;
			color: #333333;
		}
		.form-item{
			display: flex;
			font-size: 14px;
			color: #333333;
			align-items: center;
			position: relative;
			&.column{
				flex-direction: column;
				&:after{
					display: none;
				}
				.form-item-label{
					width: 100%;
				}
				.form-item-textarea{
					width: 100%;
					padding: 5px;
					box-sizing: border-box;
					position: relative;
					border: 1px solid #F1F1F1;
					textarea{
						width: 100%;
						height: 70px;
					}
					.limitcount{
						text-align: right;
						font-size: 14px;
						color: #999999;
					}
				}
			}
			&:after{
				content: " ";
				position: absolute;
				bottom: 0;
				height: 1px;
				width: 100%;
				display: flex;
				border-bottom: 1px solid rgba($color: #cbcbcb, $alpha: .4);
				transform-origin: 0 0;
				transform: scaleY(0.5);/*缩放*/
			}
			.form-item-label{
				width: 80px;
				line-height: 50px;
				&.warn:after{
					content: '*';
					color: red;
				}
			}
			.form-item-input{
				display: flex;
				line-height: 50px;
				flex: 1;
				align-items: center;
				input{
					flex: 1;
					font-size: 14px;
				}
				.form-item-limitcount{
					width: 40px;
					text-align: right;
					font-size: 14px;
					color: #999999;
					padding-right: 5px;
				}
				.form-item-witharrow{
					color: #888888;
					flex: 1;
					background: url(../../static/@2xjiantou.png) right center / 4px auto no-repeat;
				}
				.unit{
					color: #333333;
					font-size: 14px;
				}
			}
			.form-item-upload{
				width: 100%;
				.form-item-upload-btn{
					width: 64px;
					height: 64px;
					background: url(../../static/@2xzhaopian.png) 0 0 / 64px auto no-repeat;
				}
			}
		}
	}
	.form-button{
		margin: 18px 20px 12px 20px;
		line-height: 40px;
		background: #002140;
		color: #FFFFFF;
		font-size: 14px;
		border-radius: 22px;
		text-align: center;
	}
}
</style>
