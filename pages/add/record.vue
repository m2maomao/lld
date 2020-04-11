<template>
	<view>
		<view class="main-top">
			<view class="title">佳格食品（中国）有限公司</view>
			<view class="location">广东省·深圳市</view>
			<view class="address">详细地址：太仓港经济技术开发区新区大连西路88号</view>
		</view>
		<view class="main-content">
			<view class="sign">加 <view class="warn">*</view> 标注的为必填项</view>
			<view class="form-wrap">
				<view class="form-item">
					<view class="form-item-label warn">拜访日期</view>
					<view class="form-item-input">
						<view class="form-item-witharrow">请选择时间</view>
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input" v-if="">{{array[index]}}</view>
							<view v-else>请选择时间</view>
						</picker>
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label warn">拜访人</view>
					<view class="form-item-input">
						<input placeholder="请输入拜访人姓名" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label warn">拜访地址</view>
					<view class="form-item-input">
						<input placeholder="请输入拜访地址" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label warn">拜访事项</view>
					<view class="form-item-input">
						<input placeholder="请输入拜访事项" />
						<view class="form-item-limitcount">0/10</view>
					</view>
				</view>
				<view class="form-item column">
					<view class="form-item-label warn">拜访摘要</view>
					<view class="form-item-textarea">
						<textarea />
						<view class="limitcount">0/100</view>
					</view>
				</view>
				<view class="form-item column">
					<view class="form-item-label ">附件上传</view>
					<view class="form-item-upload">
						<view class="form-item-upload-btn"></view>
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label">费用报销</view>
					<view class="form-item-input">
						<input placeholder="请输入费用报销" />
						<view class="unit">元</view>
					</view>
				</view>
			</view>
			<view class="form-button">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(option) {
			console.log(option)
		}
	}
</script>

<style lang="scss">
page{
	background: #002140;
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
	background: #FFFFFF;
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
		padding: 0 20px;
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
					border: 1px solid #F8F8F8;
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
