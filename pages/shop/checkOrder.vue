<template>
	<view>
		<view class="padding flex align-center radius bg-white margin-sm">
			<view class="cu-avatar round bg-orange">
				<text class="cuIcon-location"></text>
			</view>
			<view class="margin-left">
				<text class="text-black text-bold">收货人：刘南</text>
				<text class="margin-left ">13047838940</text>
				<view>
					<text class="productTitle text-black">收货地址：广东省佛山市南海区招商置地中心</text>
				</view>
			</view>
			<view class="flex align-center">
				<text class="cuIcon-right text-gray"></text>
			</view>
		</view>

		<view class="bg-white padding-xs margin-sm radius">
			<view class="flex bg-white padding-xs">
				<view>
					<image style="  height: 220rpx;width: 220rpx;"
						src="https://img11.360buyimg.com/n7/jfs/t1/158470/3/15873/145493/605c32b2E9c4a2fbc/f069179542dec991.jpg"
						mode="widthFix"></image>
				</view>
				<view class="margin-left-sm">
					<text class='productTitle'>净珠 汽车摩托车玻璃水清洁剂0度2L*2瓶装 汽车用品开盖即用去油膜去污剂雨刷精</text>
					<view class="text-sm margin-tb text-gray">
						正品保证，急速发货，7天退换货
					</view>
					<view>
						<text class="text-price text-red text-lg margin-right">{{saleprice}}</text>
						<text class="text-sm text-gray text-price" style="text-decoration:line-through">{{price}}</text>
						<text style="float:right;">共 {{number}} 件</text>
					</view>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">购买数量</view>
				<view class="flex align-center">

					<view class="cu-tag padding-tb " @click="move">
						<text class="cuIcon-move"></text>
					</view>


					<view class="text-center cu-tag  padding"> {{number}} </view>


					<view class=" cu-tag padding-tb" @click="add">
						<text class="cuIcon-add"></text>
					</view>
				</view>
			</view>
			<view class="padding flex align-center justify-between">
				<view style="font-size: 15px;">买家留言</view>
				<input placeholder-class="text-xs text-gray" class="margin-left" style="width:75%"
					placeholder="与商家协商并确认，45字以内" />
			</view>
		</view>



		<view class="bg-white padding-xs margin-sm radius">
			
			<view class="cu-form-group margin-top">
				<view class="title">商品总价</view>
				<view class="flex align-center">
					<text class="text-price">99.00</text>
				</view>
			</view>
			<view class="padding flex align-center justify-between">
				<view style="font-size: 15px;">运费</view>
				<view class="flex align-center">
					+ <text class="text-price"> 10.00</text>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white tabbar foot border shop">

			<view class="flex justify-end padding-right" style="width: 75%;">
				<view>
					<text class="text-black">合计：</text>
					<text class="text-price text-lg text-bold text-red">{{saleprice*number}}</text>
				</view>
			</view>
			<view class="bg-blue submit" @click="applyOrder">提交订单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number: 1,
				price: 39.00,
				saleprice: 29.00

			}
		},
		methods: {
			add() {
				this.number++
			},
			move() {
				if (this.number > 1) {
					this.number--
				}

			},
			applyOrder(){
				uni.navigateTo({
					url:'../shop/paySuccess'
				})
			}
		}
	}
</script>

<style>
	.productTitle {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
