<template>
	<view>
		<location v-if="PageCur=='location'"></location>
		<shop v-if="PageCur=='shop'"></shop>
		<my v-if="PageCur=='my'"></my>
		<view class="cu-bar tabbar bg-white shadow foot grid col-3">
			<view  @click="NavChange" data-cur="location" class="text-center">
				<view class="text-xxl" :class="PageCur=='location'?'text-green':'text-gray'">
					<text class="cuIcon-locationfill"></text>
				</view>
				<view :class="PageCur=='location'?'text-green':'text-gray'">附近网点</view>
			</view>
			<view  @click="NavChange" data-cur="shop" class="text-center">
				<view class="text-xxl" :class="PageCur=='shop'?'text-green':'text-gray'">
					<text class="cuIcon-shopfill"></text>
				</view>
				<view :class="PageCur=='shop'?'text-green':'text-gray'">商城</view>
			</view>
			<view  @click="NavChange" data-cur="my" class="text-center">
				<view class="text-xxl" :class="PageCur=='my'?'text-green':'text-gray'">
					<text class="cuIcon-peoplefill"></text>
				</view>
				<view :class="PageCur=='my'?'text-green':'text-gray'">个人中心</view>
			</view>
		</view>
		<!-- <basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">元素</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">扩展</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'location'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
