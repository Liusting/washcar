<template>
	<view>
		<cu-custom isBack="true" bgColor="bg-red">
			<block slot="backText">订单详情</block>
		</cu-custom>
		<scroll-view scroll-y style="height:724px">
			<view style="height:15%" class="padding-tb text-center bg-red">
				<view class="flex justify-center align-center" v-show="trade_status==1">
					<view class="text-sl">
						<text class="cuIcon-pay"></text>
					</view>
					<text class="margin-left-xs">待付款</text>
				</view>
				<view class="flex justify-center align-center" v-show="trade_status==2">
					<view class="text-sl">
						<text class="cuIcon-send"></text>
					</view>
					<text class="margin-left-xs">待发货</text>
				</view>
				<view class="flex justify-center align-center" v-show="trade_status==3">
					<view class="text-sl">
						<text class="cuIcon-deliver"></text>
					</view>
					<text class="margin-left-xs">已发货</text>
				</view>
				<view class="flex justify-center align-center" v-show="trade_status==4||trade_status==5">
					<view class="text-sl">
						<text class="cuIcon-roundcheck"></text>
					</view>
					<text class="margin-left-xs">交易成功</text>
				</view>
			</view>
			<view style="margin-top:-10%;border-radius:7px" class="padding-tb padding-lr-sm margin-sm flex bg-white "
				@click="test">
				<view class="align-center flex ">
					<view class="cu-avatar round bg-orange">
						<text class="cuIcon-location"></text>
					</view>
					<view class="margin-left-sm">
						<text class="text-black">刘桂廷</text><text class="margin-left">186****0747</text>
						<view class="margin-top-xs">
							<text class="text-gray">广东省佛山市南海置地中心3座11楼</text>
						</view>
					</view>
				</view>
			</view>
		
			<view v-show="trade_status==3||trade_status==4||trade_status==5" style="border-radius:7px"
				class="padding-tb padding-lr-sm margin-sm flex bg-white margin-top">
				<view class="flex align-center flex-sub justify-between">
					<view class="flex">
						<view class="cu-avatar round bg-blue">
							<text class="cuIcon-deliver"></text>
						</view>
						<view class="margin-left">
							<text class="text-blue">到达【佛山平洲营业部】</text>
							<view class="margin-top-xs">
								<text class="text-gray">2020-02-04 05:28:22</text>
							</view>
						</view>
					</view>
					<view class="cuIcon-right"></view>
				</view>
			</view>
		
		
			<view class="margin-top bg-white padding-sm margin-sm" style="border-radius:7px">
				<view v-for="item in spList" >
					<view v-for="items in item.children">
						<view class="orderListDetails" @click="orderDetail">
							<view class="productImg">
								<image :src="items.imageUrl" mode="widthFix"></image>
							</view>
							<view class="productInfo ">
								<view class="productTitle">{{items.name}}</view>
								<view class="margin-tb-sm text-sm">{{items.typeName}}</view>
								<view>
								</view>
								<view style="height:100%;width:150rpx;">
									<text style="margin-right:20rpx;" class="text-price">{{items.money}}</text>
									<text style="margin-right:20rpx;color:gray;font-size:20rpx;">x{{items.number}}</text>
								</view>
							</view>
		
						</view>
					</view>
				</view>
				<view class="margin-lr-sm padding-tb-xs flex justify-between">
					<text class="text-sm text-gray">商品总价</text>
					<text class="text-sm text-gray text-price">26.00</text>
				</view>
				<view class="margin-lr-sm padding-tb-xs flex justify-between">
					<text class="text-sm text-gray">运费(快递)</text>
					<text class="text-sm text-gray" >+ <text
							class="text-sm text-gray text-price">0.00</text></text>
				</view>
				<view class="margin-lr-sm padding-tb-xs flex justify-between">
					<text class="text-sm text-gray">优惠券抵扣</text>
					<text class="text-sm text-gray" >- <text
							class="text-sm text-gray text-price">0.00</text></text>
				</view>
				<view class="margin-lr-sm padding-tb-xs flex justify-between" style="  border-bottom: 1px solid #F7F7F7;">
					<text class="text-sm text-gray">订单总价</text>
					<text class="text-price" >26.00</text>
				</view>
				<view class="margin-lr-sm padding-tb-xs flex justify-between">
					<text>需付款</text>
					<text class="text-price text-red text-lg" >26.00</text>
				</view>
			</view>
		
		
		
			<view class="margin-sm bg-white" style="border-radius:7px">
				<view class="padding-sm">
					<text><text class=" cuIcon-titles text-orange"></text>订单信息</text>
				</view>
				<view class="padding-sm">
					<text class="text-sm text-gray">商城积分</text>
					<text class="text-black margin-left-xs">获得100积分</text>
				</view>
				<view class="padding-sm">
					<text class="text-sm text-gray">订单编号</text>
					<text class="text-black margin-left-xs">3463867637862764322</text>
				</view>
				<view class="padding-sm">
					<text class="text-sm text-gray">买家留言</text>
					<text class="text-black margin-left-xs">发顺丰快递</text>
				</view>
				<view class="padding-sm">
					<text class="text-sm text-gray">下单日期</text>
					<text class="text-black margin-left-xs">2019-10-16 09:52:44</text>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
		
		
		
		<view class="cu-bar foot tabbar  bg-white padding-xs">
			<view class="flex align-center">
				<button open-type="contact" class="kf-button bg-white"> <text class="cuIcon-weixin text-green text-xl"></text><text
						class="margin-left-xs text-lg">联系客服</text></button>
			</view>
			<view v-show="trade_status==1">
				<button class="cu-btn line-gray margin-right-sm round"  @click="closeOrder">取消订单 </button>
				<button class="cu-btn line-red margin-right-sm round">立即支付</button>
			</view>
			<view v-show="trade_status==2">
				<button class="cu-btn line-gray margin-right-smround "  @click="remind">提醒发货</button>
			</view>
			<view v-show="trade_status==3">
			
				<button class="cu-btn line-gray margin-right-sm round">查看物流</button>
				<button class="cu-btn line-red margin-right-sm round"  @click="confirmGet">确认收货</button>
			</view>
			<view v-show="trade_status==4">
				<button class="cu-btn line-gray margin-right-sm round"  @click="cancelOrder">申请售后</button>
				<button class="cu-btn line-red margin-right-sm round">立即评价</button>
			</view>
			<view v-show="trade_status==5">
				<button class="cu-btn line-gray margin-right-sm round"  @click="cancelOrder">删除订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				spList: [{
				            "trade_status": "3",
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
				        }
				        ],
				        trade_status: '3'
			}
		},
		methods: {
			
		},
		created() {
			this.trade_status = this.options.trade_status;
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




.on {
  border-bottom:2px solid red;
  color: red;
}
 
.navTopList {
  display: flex;
  width: 100%;
  height: 70rpx;
  background: #fff;
  margin-top:5px;
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
 
.orderListDetails {
  display: flex;
  height: 200rpx;
  background-color: #fff;
}
 
.orderListDetails .productImg {
  flex: 1;
  height:200rpx;
  width:120px;
  margin-top: 5rpx;
  margin-left: 20rpx;
}
 
.orderListDetails .productImg image {
  width: 100px;
  height: 100%;
}
 
.orderListDetails .productInfo {
 height: 100%;
 padding-left: 15rpx;
 padding-right: 15rpx;
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

.right-btn{
  font-size: 20rpx;
  height: 60rpx;
  line-height: 60rpx;
  background-color: #fff;
  width: 70px;
  color: #ff6662;
  border-radius: 50px;
  border: 1px solid #ff6662;
  margin-top: 2px;
  
}
.productCount>view {
  float: right;
  margin-right: 30rpx;
}

.kf-button::after{
  border: none;
}
</style>
