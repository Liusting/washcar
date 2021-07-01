<template name="components">
	<view>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input v-model="keyword" :adjust-position="false" type="text" placeholder="请输入关键词"
					></input>
			</view>
			<view class="action">
				<button @click="search" class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		<view>
			<view class=" grid col-4 bg-white ">
				<view  class="text-center  margin-top"
					v-for="item in swipertab" :key="item.index" @click="tabSwitch(item.index)">
					{{item.name}}
					<view class="text-center flex justify-center margin-top">
						<view :class="currtab == item.index ? 'on' : ''">
							
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<scroll-view scroll-y class="page" :style="[{height:deviceH-50-52 + 'px'}]">

			<view v-for="item in 8">

				<view class="bg-white margin-sm radius padding-tb-sm padding-lr-xs">
					<view class="flex justify-between ">
						<view class=" radius">
							<image class="radius cu-avatar xl"
								src="https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/132989916/O1CN01H7jw5H2N7a3KRHlCA_!!0-item_pic.jpg_250x250.jpg 	"
								mode="aspectFill"></image>
						</view>
						<view class="margin-lr-sm">
							<view class="">
								<text class="text-bold text-lg text-black">龟牌玻璃水汽车日常夏季专用雨刮水雨刷液车用防冻四季通用</text>
							</view>
							<view class="text-gray text-sm margin-tb-sm">
								<text class="">正品保证，极速发货，7天退换货</text>
							</view>
							<view class="flex justify-between align-center">
								<view class="">
									<text class="text-price text-red text-xl">18.90</text>
									<text style="text-decoration: line-through;" class="text-price margin-left-sm text-sm text-gray">28.90</text>
								</view>
								<button class="cu-btn radius bg-blue" @click="buy">立即抢购</button>
							</view>
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
				keyword:'',
				currtab: 0,
				deviceH:this.deviceH,
				deviceW:this.deviceW,
				swipertab: [{
						name: '推荐',
						index: 0
					},
					{
						name: '9.9包邮',
						index: 1
					},
					{
						name: '美容保养',
						index: 2
					},
					{
						name: '行车安全',
						index: 3
					}
				]
			};
		},
		created() {

		},
		methods:{
			tabSwitch(index){
				console.log(index)
				this.currtab  = index;
			},
			search(){
				console.log(this.keyword)
			},
			buy(){
				uni.navigateTo({
					url:'../shop/productDetail'
				})
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
		
	}

	.on {
		 height: 2px;
		 width: 30%;
		 background-color: blue;
	}
</style>
