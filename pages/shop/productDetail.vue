<template>
	<view>
		<cu-custom isBack="true" bgColor="bg-white">
			<block slot="backText">商品详情</block>
		</cu-custom>
		<scroll-view scroll-y="true">


			<swiper style="height: 350px;" class="screen-swiper square-dot" :indicator-dots="true" :circular="true"
				:autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false"
						objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>

			<view class="padding bg-white">
				<view class="flex justify-between align-center text-black">
					<view class='text-black text-lg'>净珠 汽车摩托车玻璃水清洁剂0度2L*2瓶装 汽车用品开盖即用去油膜去污剂雨刷精</view>
				</view>
				<view class='text-gray padding-tb-sm'>急速发货</view>
				<view class="flex align-center justify-between ">
					<view class=" text-red">
						<view class="">
							<text class="text-sm text-red text-price  margin-right-xs"></text><text
								class="text-xxl ">95.90</text>
							<text class="text-sm text-gray margin-left-xs text-price"
								style="text-decoration:line-through">15.80</text>
						</view>
					</view>

				</view>

			</view>

			<view>
				<view class=" grid col-2 bg-white margin-top">
					<view class="text-center  margin-top" v-for="item in swipertab" :key="item.index"
						@click="tabSwitch(item.index)">
						{{item.name}}
						<view class="text-center flex justify-center margin-top">
							<view :class="currtab == item.index ? 'on' : ''">

							</view>
						</view>
					</view>

				</view>
			</view>
			<view v-for="(item,index) in swiperList1" :key="index">
				<image style="width:100%" :src="item.url" mode="widthFix" />
			</view>
		</scroll-view>
		<view class="cu-bar bg-white tabbar foot border shop">
			<button class="action" open-type="contact">
				<view class="cuIcon-service text-green">
				</view>
				客服
			</button>
			<button class="action" open-type="redirect">
				<navigator url="/pages/index/index" open-type="redirect"><view class="cuIcon-home">
					</view>
					首页</navigator>
			</button>
		
			<view class="bg-blue submit" @click="checkOrder">立即订购</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currtab: 0,
				swipertab: [{
						name: '宝贝详情',
						index: 0
					},
					{
						name: '商品评论',
						index: 1
					}
				],
				swiperList1: [{
					id: 0,
					type: 'image',
					url: 'https://img.alicdn.com/imgextra/i3/2397812748/O1CN01JswdmF1WAd02QMdEE_!!2397812748.png_430x430q90.jpg'
				}, {

					url: 'https://img.alicdn.com/imgextra/i3/2397812748/O1CN01JswdmF1WAd02QMdEE_!!2397812748.png_430x430q90.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://img.alicdn.com/imgextra/i2/2397812748/O1CN01Wz7eg01WAd03AUd2y_!!2397812748.png_430x430q90.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://img.alicdn.com/imgextra/i2/2397812748/O1CN01z17EwX1WAczqJ2vQo_!!2397812748.png_430x430q90.jpg'
				}],
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://img11.360buyimg.com/n1/jfs/t1/109698/7/14959/235018/5ea93977E1056360b/2fb2c718634b79a0.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://img11.360buyimg.com/n1/jfs/t1/158470/3/15873/145493/605c32b2E9c4a2fbc/f069179542dec991.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://img11.360buyimg.com/n1/jfs/t1/19921/7/12278/493319/5cab0827E31aa5dcd/58332aac7a3a352b.jpg'
				}],
			}
		},
		methods: {
			checkOrder() {
				uni.navigateTo({
					url: '../shop/checkOrder'
				})
			},
			tabSwitch(index) {
				console.log(index)
				this.currtab = index;
			},
		}
	}
</script>

<style>
	.on {
		height: 2px;
		width: 30%;
		background-color: blue;
	}
</style>
