<template>
	<view>
		<cu-custom isBack="true" bgColor="bg-white">
			<block slot="backText">商城优惠券</block>
		</cu-custom>
		<scroll-view scroll-y="true" style="height: 700px;">
			<view v-for="item in 5">
				<view class="margin">
					<view class="wrapper">
						<view class="left padding">
							<view class="text-black text-xl text-bold flex justify-center">
								商城消费券满500减50
							</view>
							<view class="text-gray text-sm margin-top flex justify-center">
								使用时间：2021.07.02 - 2021.08.02
							</view>
						</view>
						<view class="line">

						</view>
						<view class="right padding-sm">
							<view class="flex justify-center align-center text-xxl">
								<text class="text-price text-red"></text>
								<view class="text-red ">
									50
								</view>
							</view>
							<view class="text-red text-xs flex justify-center margin-tb-xs">
								满500可用
							</view>
							<view class="cu-btn bg-gradual-red round sm flex justify-center">
								去使用
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="foot tabbar cu-bar bg-white shadow flex justify-center">
			<button class="cu-btn round bg-gradual-red flex flex-direction">领取更多好券</button>
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
	/* 这是第二个 */
	.wrapper {
		display: flex;
		position: relative;
		height: 100px;
		margin: auto;
		filter: drop-shadow(2px 2px 3px #999);
	}


	.left {

		background: radial-gradient(circle at top right, transparent 5px, #fff 0) top right, radial-gradient(circle at bottom right, transparent 5px, #fff 0) bottom right;
		background-size: 100% 60%;
		background-repeat: no-repeat;
		color: white;
		width: 70%;
		border-radius: 5px 0 0 5px;
	}

	.right {

		background: radial-gradient(circle at top left, transparent 5px, #fff 0) top left, radial-gradient(circle at bottom left, transparent 5px, #fff 0) bottom left;
		background-size: 100% 60%;
		background-repeat: no-repeat;
		width: 30%;
		color: white;
		border-radius: 0 5px 5px 0;
	}

	.line {
		margin-top: 5px;
		height: 90px;
		width: 1px;
		border-left: 1px dashed #EEEEEE;
	}
</style>
