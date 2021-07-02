<template>
	<view class="">
		<cu-custom isBack="true" bgColor="bg-white">
			<block slot="backText"></block>
		</cu-custom>
		<view class="padding flex justify-center">
			<button @click="wsConfig" class="cu-btn round bg-gradual-blue">注入cofig配置</button>
		</view>
		<view class="padding flex justify-center">
			<button @click="wsUserAddress" class="cu-btn round bg-gradual-red">获取用户地址</button>
		</view>
		<view class="padding flex justify-center">
			<button @click="wsOpenAddress" class="cu-btn round bg-gradual-green">打开用户地址</button>
		</view>
		<view class="padding flex justify-center">
			<button @click="wsNetWork" class="cu-btn round bg-gradual-orange">获取用户网络状态</button>
		</view>

		<view class="padding flex justify-center">
			<button @click="wsCheckApi" class="cu-btn round bg-gradual-pink">测试接口列表</button>
		</view>
		<view class="bg-white padding margin" style="border: 1px solid pink;">
			{{info}}
		</view>
		<view class="bg-white padding margin" style="border: 1px solid yellow;">
			{{msg}}
		</view>
	</view>

</template>

<script>
	import wx from 'weixin-js-sdk';
	export default {
		data() {
			return {
				info: '',
				msg: ''
			}
		},
		methods: {
			wsConfig() {
				//通过config接口注入权限验证配置
				let _this = this;
				uni.request({
					url: 'http://weixin123.gz2vip.idcfengye.com/getSign',
					method: 'GET',
					success(res) {
						_this.info = res.data;
						wx.config({
							debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
							appId: res.data.appId, // 必填，公众号的唯一标识
							timestamp: res.data.timestamp, // 必填，生成签名的时间戳
							nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
							signature: res.data.signature, // 必填，签名
							jsApiList: ["getLocation", "getNetworkType", "openLocation"] // 必填，需要使用的JS接口列表
						});


					}
				})
				wx.ready(function() {
					//配置成功之后回调
					this.msg = "微信JS SDK配置成功！";
					console.log("微信JS SDK配置成功！");
				});
				wx.error(function(res) {
					this.msg = "微信JS SDK配置错误！";
					console.log("微信JS SDK配置错误！");
					// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
				});

			},
			wsUserAddress() {
				let _this = this;
				wx.getLocation({
					type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					success: function(res) {
						_this.info = res;
						var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
						var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
						var speed = res.speed; // 速度，以米/每秒计
						var accuracy = res.accuracy; // 位置精度
					}
				});
			},
			wsOpenAddress() {
				wx.openLocation({
					latitude: 23.068339, // 纬度，浮点数，范围为90 ~ -90
					longitude: 113.041337, // 经度，浮点数，范围为180 ~ -180。
					name: '车海洋6元洗车', // 位置名
					address: '佛山市南海区中环路中布综合楼东北侧约140米', // 地址详情说明
					scale: 14, // 地图缩放级别,整型值,范围从1~28。默认为最大
					infoUrl: 'http://weixin.qq.com' // 在查看位置界面底部显示的超链接,可点击跳转
				});
			},
			wsNetWork() {
				let _this = this;
				wx.getNetworkType({
					success: function(res) {
						var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
						_this.info = networkType;

					}
				});
			},
			wsCheckApi() {
				let _this = this;
				wx.checkJsApi({
					jsApiList: ["getLocation", "getNetworkType", "openLocation"], // 需要检测的JS接口列表，所有JS接口列表见附录2,
					success: function(res) {
						_this.info = res;
						// 以键值对的形式返回，可用的api值true，不可用为false
						// 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
					}
				});
			}
		}
	}
</script>

<style>

</style>
