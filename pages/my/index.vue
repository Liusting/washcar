<template name="components">
	<view>
		<view class=" padding bg-blue" style="height:125px;">
			<view class="flex align-center">
				<view class="cu-avatar xl round "
					style="background-image:url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3246287556,1532663924&fm=26&gp=0.jpg);">
				</view>

				<view class="margin-left flex align-center justify-between" style="width:80%">
					<view>
						<text bindtap="userMessage" class="text-df padding-xs">李晓芳
						</text>

					</view>
				</view>
			</view>
		</view>

		<scroll-view scroll-y class="page" :style="[{height:deviceH-125 + 'px'}]">
			<view class="margin-sm bg-white" style="border-radius:7px">
				<view class="padding-tb padding-left-xs flex align-center justify-between">
					<text class="text-lg text-black text-bold">
						<text class="cuIcon-titles"></text>
						我的订单</text>
					<text class="text-gary"><text class="cuIcon-right"></text> </text>
				</view>
				<view class="bg-white " style="border-radius:7px">
					<view class="flex text-center">
						<view class="flex justify-center align-center margin-tb-lg flex-sub" v-for="item in orderItems"
							:key="item.typeId">
							<view class=" bg-white">
								<view style="font-size:30px">
									<text :class="item.icon"></text>
								</view>
								<view class="text-black"> {{item.name}}
								</view>
								<view class="cu-tag1 round badge1" v-show="item.badge!=0">
									<block v-show="item.badge!=0">{{item.badge>99?"99+":item.badge}}</block>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="bg-white margin-sm " style="border-radius:7px">
				<view class="padding-tb-sm">
					<view class="padding-tb padding-left-xs flex align-center justify-between">
						<text class="text-lg text-black text-bold"><text class="cuIcon-titles"></text>更多服务</text>
					</view>
					<view v-for="item in myTools" :key="item.id">
						<view class="padding  flex justify-between align-center" @click="navBtn(item.id)">
							<view>
								<text class="text-xl"><text :class="item.icon"></text></text>
								<text class="text-black text-lg margin-left-xs">{{item.name}}</text>
							</view>
							<view>
								<text class="cuIcon-right"></text>
							</view>
						</view>
					</view>
					<view class="padding  flex justify-between align-center">
						<view>
							<text class="text-xl"><text class="cuIcon-exit"></text></text>
							<text class="text-black text-lg margin-left-xs">退出登录</text>
						</view>

					</view>
				</view>
			</view>

			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				deviceH: this.deviceH,
				deviceW: this.deviceW,
				myTools: [{
						id: 1,
						icon: 'cuIcon-commentfill',
						name: '意见反馈',
						color: 'yellow'
					}, {
						id: 2,
						icon: 'cuIcon-ticket',
						name: '商城优惠券',
						color: 'yellow'
					},
					{
						id: 3,
						icon: 'cuIcon-locationfill ',
						name: '地址管理',
						color: 'bule'
					},
					{
						id: 4,
						icon: 'cuIcon-unlock',
						name: '忘记密码',
						color: 'pink'
					}
				],
				orderItems: [{
						typeId: 1,
						icon: 'cuIcon-pay',
						name: '待付款',
						badge: 7
					},
					{
						typeId: 2,
						icon: 'cuIcon-send',
						name: '待发货',
						badge: 0
					},
					{
						typeId: 3,
						icon: 'cuIcon-deliver',
						name: '待收货',
						badge: 120
					},
					{
						typeId: 4,
						icon: 'cuIcon-comment',
						name: '待评价',
						badge: 2
					},
					{
						typeId: 5,
						icon: 'cuIcon-refund',
						name: '退款/售后',
						badge: 1
					},
				],
			};
		},
		created() {

		},
		methods: {
			navBtn(id) {
				// console.log(id)
				switch (id) {
					case 1:
					console.log("=====")
						uni.navigateTo({
							url: '../my/advice'
						})
						break;
					case 2:
						break;
					case 3:
					
						uni.navigateTo({
							url: '../my/addressList'
						})
						break;
					case 4:
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}


	.cu-tag1 {
		font-size: 24rpx;
		vertical-align: middle;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 0rpx 18rpx;
		height: 48rpx;
		font-family: Helvetica Neue, Helvetica, sans-serif;
		white-space: nowrap;
	}

	.cu-tag1.badge1 {
		background-color: #dd514c;
		position: absolute;
		top: 155rpx;
		margin-left: 4px;
		font-size: 30rpx;
		padding: 5rpx 10rpx;
		height: 35rpx;
		color: white;

	}
</style>
