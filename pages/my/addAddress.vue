<template>
	<view class="content">
		<button @click="openRegion">打开地址选择</button>
		<regionWindow ref="region" @on></regionWindow>
	</view>
</template>

<script>
	import regionWindow from '@/components/region-window/index.vue'
	export default {
		components:{regionWindow},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			openRegion(){
				this.$refs.region.open()
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>