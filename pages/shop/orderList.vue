<template>
	<view>
		<cu-custom isBack="true" >
		</cu-custom>
		<view class="bg-gray">
			<view class=" grid col-5 cu-tabbar-height">
				<view class=" flex  justify-center align-center" v-for="item in swipertab" >
					<view :class="currtab == item.index ? 'bg-yellow' : ''" class="cu-btn round"
						@click="tabSwitch(item.index)">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		
		
		<scroll-view scroll-y style="height:714px">
			<view class="" v-for="item in orderList">
				<view class="bg-white margin-sm" style="border-radius:7px">
					<view class="flex align-center justify-between padding-sm">
						<view>
							<text class="text-sm text-gray">订单号：2021020155</text>
						</view>
						<view class="text-red">
							<text v-show="item.trade_status==1">等待买家付款</text>
							<text v-show="item.trade_status==2">买家已付款</text>
							<text v-show="item.trade_status==3">卖家已发货</text>
							<text v-show="item.trade_status==4||item.trade_status==5">交易成功</text>
						</view>
					</view>
		
		<view class="margin-lr-sm padding-tb-sm" wx:key
						style="border-top:1px solid #F7F7F7;border-bottom:1px solid #F7F7F7">
		
						<view v-for="items in item.children" >
							<view @click="orderDetail(item.trade_status)">
								<view class="flex margin-bottom-sm">
									<view class="productImg">
										<image :src="items.imageUrl" mode="widthFix"></image>
									</view>
									<view class="margin-lr-sm">
										<view class="productTitle">{{items.name}}
											{{items.length}}
										</view>
										<view class="margin-top-sm text-sm">{{items.typeName}}</view>
										<view class="flex-sub margin-top-sm text-gray">
											<text class="text-price ">{{items.money}}.00</text>
											<text class="margin-left">x</text><text> {{items.number}}</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
		
					<view class="flex justify-end margin-lr-sm padding-tb-sm">
						<text>共2件商品，实付款：<text class="text-price text-red">1899.00</text></text>
					</view>
					
					<view class="flex justify-end padding-sm" v-show="item.trade_status==1">
						<view>
							<button class="cu-btn round line-gray"  @click="cancelOrder">取消订单 </button>
							<button class="cu-btn round line-red margin-left-sm">立即支付</button>
						</view>
					</view>
		
					<view class="flex justify-end padding-sm" v-show="item.trade_status==2">
						<button @click="remind(item.id)" class="cu-btn round line-gray" >提醒发货</button>
					</view>
		
					<view class="flex justify-end padding-sm" v-show="item.trade_status==3">
						<view>
		
							<button class="cu-btn round line-gray " @click="expressDetail(item.id)">查看物流</button>
							<button class="cu-btn round line-red margin-left-sm"  @click="confirmGet(item.id)">确认收货</button>
						</view>
					</view>
		
					<view class="flex justify-end padding-sm" v-show="item.trade_status==4">
						<view>
							<button class="cu-btn line-gray round"  @click="applyRefund(item.id)">申请售后</button>
							<button class="cu-btn line-red margin-left-sm round" @click="appraise(item.id)">立即评价</button>
						</view>
					</view>
		
					<view class="flex justify-end padding-sm" v-show="item.trade_status==5">
						<view>
							<button class="cu-btn line-gray round"  @click="deleteOrder(item.id)">删除订单</button>
						</view>
					</view>
				</view>
			</view>
		
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currtab: 0,
				swipertab: [{
						name: '全部',
						index: 0
					},
					{
						name: '待付款',
						index: 1
					},
					{
						name: '待发货',
						index: 2
					},
					{
						name: '待收货',
						index: 3
					},
					{
						name: '待评价',
						index: 4
					},
				],
				orderList: [{
				            "trade_status": "1",
				            "children": [{
				                    "number": 1,
				                    "pay_status": "1",
				                    "money": 1899.0,
				                    "item_id": "1",
				                    "type_id": "2555",
				                    "trade_status": "1",
				                    "imageUrl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=179584017,3580078821&fm=26&gp=0.jpg",
				                    "display": "1",
				                    "name": "罗浮威尔通体大理石瓷砖800x800简约现代灰色客厅防滑耐磨地板砖",
				                    "typeName": "经典方形三档套装;8寸",
				                    "id": "1",
				                    "order_id": "20200522100218863744"
				                }
				            ]
				
				
				        }, {
				            "trade_status": "2",
				            "children": [{
				                "number": 5,
				                "pay_status": "1",
				                "money": 1699.0,
				                "item_id": "4",
				                "type_id": "1",
				                "trade_status": "2",
				                "imageUrl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=179584017,3580078821&fm=26&gp=0.jpg",
				                "display": "1",
				                "name": "龙鼎天著木门定制烤漆环保静音门家用室内门LA-014",
				                "typeName": "大方体方形四档套装-旗舰款;10寸",
				                "id": "d1f33a1519a04993a56cbc2c2f3c3c5b",
				                "order_id": "20200522100218863742"
				            }]
				
				        }, {
				            "trade_status": "3",
				            "children": [{
				                "number": 5,
				                "pay_status": "1",
				                "money": 1699.0,
				                "item_id": "4",
				                "type_id": "1",
				                "trade_status": "2",
				                "imageUrl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=179584017,3580078821&fm=26&gp=0.jpg",
				                "display": "1",
				                "name": "龙鼎天著木门定制烤漆环保静音门家用室内门LA-014",
				                "typeName": "大方体方形四档套装-旗舰款;10寸",
				                "id": "d1f33a1519a04993a56cbc2c2f3c3c5b",
				                "order_id": "20200522100218863742"
				            }]
				        }, {
				            "trade_status": "4",
				            "children": [{
				                "number": 5,
				                "pay_status": "1",
				                "money": 1699.0,
				                "item_id": "4",
				                "type_id": "1",
				                "trade_status": "2",
				                "imageUrl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=179584017,3580078821&fm=26&gp=0.jpg",
				                "display": "1",
				                "name": "龙鼎天著木门定制烤漆环保静音门家用室内门LA-014",
				                "typeName": "大方体方形四档套装-旗舰款;10寸",
				                "id": "d1f33a1519a04993a56cbc2c2f3c3c5b",
				                "order_id": "20200522100218863742"
				            }]
				        }, {
				
				            "trade_status": "5",
				            "children": [{
				                "number": 5,
				                "pay_status": "1",
				                "money": 1699.0,
				                "item_id": "4",
				                "type_id": "1",
				                "trade_status": "2",
				                "imageUrl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=179584017,3580078821&fm=26&gp=0.jpg",
				                "display": "1",
				                "name": "龙鼎天著木门定制烤漆环保静音门家用室内门LA-014",
				                "typeName": "大方体方形四档套装-旗舰款;10寸",
				                "id": "d1f33a1519a04993a56cbc2c2f3c3c5b",
				                "order_id": "20200522100218863742"
				            }]
				        }]
			}
		},
		created() {
			this.currtab = this.options.id;

		},
		methods: {
			tabSwitch(index) {
				this.currtab = index;
			},
			orderDetail(trade_status){
				console.log(trade_status)
				uni.navigateTo({
					url:'../shop/orderDetail?trade_status='+trade_status
				})
			}
		}
	}
</script>

<style>

.on {
  border-bottom:2px solid red;
  color: red;
  font-size: 33rpx;
}
 .nva{
   position: fixed;
   z-index: 99;
   width: 100%;
 }
.navTopList {
  display: flex;
  width: 100%;
  height: 70rpx;
  background: #fff;
  margin-top:5px;
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

.shop_type {
  margin: 10rpx;
  display: block;
  font-size: 25rpx;
  width: auto;
  color: gray;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.scimg {
  height: 180rpx;
  width: 180rpx;
}

.dcimg {
  height: 168px;
  width: 168px;
}
.navTopList .order-info {
  text-align: center;
}
 
.navTopList .order-info view {
  width: 56rpx;
  height: 56rpx;
  margin-left: 31rpx;
}
 
.navTopList .order-info text {
  font-size: 34rpx;
}
 
.navTopList .order-info text.active {
  color: #ff6662;
}
 
.navTopList .ywc,.navTopList .dfk,.navTopList .yqx {
  flex: 1;
}

.noOrder{
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
}
.scimg{
  height: 180rpx;
  width: 180rpx;
}
 
/*订单列表*/ 
.orderListTitle {
  height: 70rpx;
  line-height: 70rpx;
}
 
 
.orderListTitle .orderStatus {
  float: right;
  margin-right: 20rpx;
  color: red;
  font-size: 25rpx;
}
 

  .productImg {
  flex: 1;
  height: 180rpx;
  width: 180rpx;
}
 

 
.orderListDetails .productInfo {
  flex: 4;

 height: 100%;


}
 
.orderListDetails .productInfo .productTitle {

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.productCount {
  height: 70rpx;
  line-height: 70rpx;
  margin-left: 20rpx;
 
}


</style>
