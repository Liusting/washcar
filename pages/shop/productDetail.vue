<template>
	<view>
		<cu-custom isBack="true" bgColor="bg-white">
			<block slot="backText">商品详情</block>
		</cu-custom>
		<scroll-view scroll-y="true">


			<swiper style="height: 350px;" class="screen-swiper square-dot" :indicator-dots="true" :circular="true"
				:autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in wsProduct.albumPicsList" :key="index">
					<image :src="item" mode="widthFix"></image>
				</swiper-item>
			</swiper>

			<view class="padding bg-white">
				<view class="flex justify-between align-center text-black">
					<view class='text-black text-lg'>{{wsProduct.name}}</view>
				</view>
				<view class='text-gray padding-tb-sm'>{{wsProduct.subName}}</view>
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
				<navigator url="/pages/index/index" open-type="redirect">
					<view class="cuIcon-home">
					</view>
					首页
				</navigator>
			</button>

			<view class="bg-blue submit" @click="checkOrder('bottomModal')">立即订购</view>
			<view style='overflow: hidden;text-align: left;' class="cu-modal justify-start bottom-modal"
				:class="modalName=='bottomModal'?'show':''">
				<view class="cu-dialog bg-white">
					<view class="flex  justify-between padding-tb-xs padding-lr">
						<view class="flex" style="height: 90px;">
							<image
								style="width: 100px;height: 100px;margin-top:-20px;position: fixed;border-radius: 7px;"
								src="https://img14.360buyimg.com/n7/jfs/t1/167580/10/10571/201094/604aca36E45a8dcca/62a4eff5f6e4c628.jpg"
								mode="aspectFit"></image>
							<view class="padding-lr-sm" style="margin-left:110px">

								<view class="text-price text-red margin-top-sm text-lg">
									29.00
								</view>
								<view class="margin-top-sm">
									请选择：容量 适用季节
								</view>
							</view>

						</view>

						<view class="text-black text-xl" @tap="hideModal">
							<text class="cuIcon-roundclose"></text>
						</view>
					</view>
					<view class="padding-tb-xs padding-lr-xl">

						<view class="margin-top-sm" v-for="(item,index) in wsAttributeCategory" :key="item.id">
							<view class="margin-bottom-sm">{{item.name}}</view>
							<view style="display: inline-block;" v-for="(items,index) in item.attributeParamsList" :key="items.id">
								<button @click="attributeClick(items.name,item.name,item.id)" :disabled="items.disabled"
									class="cu-btn round sm  margin-right-sm"
									:class="items.check?'bg-red':'line-gray'">{{items.name}}</button>
							</view>
						</view>

						<view class="flex justify-between align-center margin-top padding-tb-sm">
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
						<view class="margin-tb">
							<button @click="applyOrder" class="cu-btn bg-red  flex flex-wrap">立即下单</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ff:[],
				number: 1,
				modalName: 'bottomModal',
				wsProduct: {},
				wsAttributeCategory: [],
				skutco: [],
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
		created() {
			// console.log(this.axios)
			this.axios.get("http://localhost:8023/wsProduct/selectOne?id=1").then(res => {
				this.wsProduct = res.data.wsProduct;
				let kk = res.data.wsAttributeCategory;
				for (let i in kk) {
					let hh = kk[i].attributeParamsList;
					for (let j in hh) {
						let hj = {
							"name": hh[j],
							"check": false,
							"disabled": true
						};
						hh[j] = hj;
					}
				}
				this.wsAttributeCategory = kk;
				this.skutco = res.data.skuStock;
				this.sku();
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			//根据sku信息生成不能点
			sku() {
				let skuList = this.skutco;
				let cateList = this.wsAttributeCategory;
				for (let g in cateList) {
					let attributeParamsList = cateList[g].attributeParamsList;
					for (let d in attributeParamsList) {
						for (let k in skuList) {
							let spDataList = skuList[k].spDataList;
							for (let h in spDataList) {
								if (spDataList[h].value == attributeParamsList[d].name) {
									attributeParamsList[d].disabled = false;
								}
							}
						}
					}
				}

				// console.log(cateList)

			},
			hideModal() {
				this.modalName = null;
			},
			add() {
				this.number++
			},
			move() {
				if (this.number > 1) {
					this.number--
				}

			},
			checkOrder(name) {

				this.modalName = name;

			},
			tabSwitch(index) {
				console.log(index)
				this.currtab = index;
			},
			//立即下单
			applyOrder() {
				uni.navigateTo({
					url: '../shop/checkOrder'
				})
			},
			//点击时候判断
			attributeClick(items, name, id) {
				// console.log(this.skutco)
				console.log(items)
				
				let jj = {
					id:id,
					name:items
				}
				
				
				this.ff.push(jj)
				
				console.log(this.ff)
				
				// let tt = this.skutco;
				// for (let f in tt) {
				// 	let ss = tt[f].spDataList;
				// 	for (let r in ss) {
				// 		if(ss[r].value == items){
				// 			let vv = tt[f];
				// 			console.log(vv)
				// 			for (let k in vv) {
				// 				let ww = vv.spDataList;
							
				// 				for (let p in ww) {
									
				// 					let kk = this.wsAttributeCategory;
				// 					for (let i in kk) {
				// 							let hh = kk[i].attributeParamsList;
				// 							for (let j in hh) {
				// 								if (ww[p].value == hh[j].name) {
													
				// 								} 
				// 							}
				// 					}
				// 				}
								
				// 			}
				// 		}
				// 	}
				// }
				// console.log(this.wsAttributeCategory)

				let kk = this.wsAttributeCategory;
				for (let i in kk) {
					if (id == kk[i].id) {
						let hh = kk[i].attributeParamsList;
						for (let j in hh) {
							if (items == hh[j].name) {
								hh[j].check = true;
							} else {
								hh[j].check = false;
							}
						}
					}
				}
			}
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
