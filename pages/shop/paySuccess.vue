<template>
	<view>
		<cu-custom isBack="true" bgColor="bg-blue">
			<block slot="backText"></block>
		</cu-custom>
		<view class="padding bg bg-blue">
			<view class="text-xsl text-white flex justify-center">
				<text class=" cuIcon-roundcheck"></text>
			</view>
			<view class="text-xl text-white flex justify-center">
				<text>支付成功</text>
			</view>

			<view class=" text-white margin-top-sm">
				<text>支付金额：￥1688.29</text>
				<text class="margin-left">优惠金额：￥18.29</text>
			</view>
			<view class="text-sm text-white margin-top-sm">
				<text>您的订单号为26458641654860，此订单由普斯汽保提供服务。</text>
			</view>
			<view class="padding bg-white margin-top" style="border-radius:7px;">
				<view class="text-black text-bold">
					<text>感谢您使用本平台选购商品，您的订单已完成支付，我们将尽快为您发货，期待您再次光临。</text>
				</view>
				<view class="margin-top flex justify-center">
					<button class="cu-btn line-gray margin-right">取消订单</button>
					<button class="cu-btn bg-green margin-right">
						<navigator url="/pages/me/sp_order_list/orderDetail/orderDetail">订单详情</navigator>
					</button>
					<button class="cu-btn bg-orange ">
						<navigator url="/pages/index/index" open-type="redirect">再来一单</navigator>
					</button>
				</view>
			</view>
		</view>
	<!-- 	<view style="margin-top:60px" class=" padding-sm flex text-xl text-red justify-center">
			<view class="margin-lr-sm text-grey">好物推荐</view>
		</view> -->
		<!-- <view>
			<view class=" grid col-2">
				<view v-for="item in 8" :key="index">
					<view style="border-radius: 7px;" class="margin-sm padding-xs bg-white">
						<view >
							<image
							style="width: 120px;height: 120px;"
								src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3454967093,1824291965&fm=26&gp=0.jpg"
								mode='widthFix'></image>
							<view class="shop_name">
								小米9手机壳cc9e红米k20Pro青春note7版8保护6x套max3note5防摔mix2s全包屏幕指纹se八5plus九a硅胶note3磨砂</view>
							<view class="padding flex align-center justify-between">
								<view>
									<text class="text-price text-red text-xl">27</text>
									<text class="text-sm text-gray margin-left-xs text-price"
										style="text-decoration:line-through">15.80</text>
								</view>
						
							</view>
						</view>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.dcimg {
		width: 180rpx;
		height: 180rpx;
	}

	.bg {
		height: 450rpx;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
	}

	.btn-img {
		width: 40rpx;
		height: 40rpx;
	}

	.shop_name {
		font-size: 30rpx;
		line-height: 40rpx;
		display: block;
		max-height: 80rpx;
		word-break: break-all;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin: 5rpx;
		color: black;
	}
</style>
