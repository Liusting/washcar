<template>
	<view>
		<scroll-view scroll-y="true" >
			<view v-for="item in 5">
				<view class="cu-bar flex bg-white " style="border-bottom:1px solid #f1f1f1">
					<view  style="width:10px" class=" margin-left-xs text-green "></view>
					<view class="padding-sm">
						<view class="flex align-center text-lg">
							<text class="text-black text-bold">刘桂廷</text>
							<text class="text-black text-bold">，13047838940</text>
							<text class="cu-tag text-xs margin-left sm radius line-orange">默认</text>
						</view>
		
						<view class="text-cut text-grey margin-top-xs" style="width:620rpx;">
							<text>收货地址：广东省佛山市南海区招商置地中心3座11楼1107</text>
						</view>
					</view>
					<view class="">
						<view  class="margin-right cuIcon-write text-gray"></view>
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height">
			</view>
		</scroll-view>
		<view class="cu-bar tabbar foot bg-cyan justify-center" >
			<text class="text-white">新增收货地址</text>
		</view>
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

</style>
