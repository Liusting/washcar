<template name="components">
	<view>
		<view class="cu-bar search bg-white">
			<view class="action" @click="showModal">
				<text>{{countyName}}</text>
				<text class="cuIcon-triangledownfill"></text>
			</view>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="请输入关键词"
					confirm-type="search"></input>
			</view>
			<view class="action">
				<button @click="paySub()" class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>

		<!-- 	<view class="bg-white padding">
			<button @click="loc()" class="cu-btn bg-green shadow-blur round">获取地理位置{{lng}}==={{lat}}</button>
			<button @click="code()" class="cu-btn bg-green shadow-blur round">调用二维码</button>
			<button @click="pic()" class="cu-btn bg-green shadow-blur round">选择图片</button>
		</view> -->

		<scroll-view scroll-y class="page" :style="[{height:deviceH-50 + 'px'}]">
			<view v-for="item in 8">

				<view class="bg-white margin-sm radius padding-tb-sm padding-lr-xs">
					<view class="flex justify-between align-center">
						<view class=" radius">
							<image class="radius cu-avatar xl"
								src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2673254534,2331334266&fm=26&gp=0.jpg"
								mode="aspectFill"></image>
						</view>
						<view class="margin-lr-sm">
							<view class="">
								<text class="cu-tag bg-blue radius ">营业中</text>
								<text class="text-lg text-black margin-left-xs">车海洋凤凰酒店停车场自助洗车店{{lat}}{{lng}}</text>
							</view>
							<view class="margin-top-xs">
								<text class="cuIcon-favorfill text-orange"></text>
								<text class="cuIcon-favorfill text-orange"></text>
								<text class="margin-left-xs text-orange">2.0</text>
							</view>
						</view>
						<text class="cu-tag radius padding text-lg bg-blue ">导航</text>
					</view>
					<view class="margin-top-sm">
						<text class="cuIcon-location"></text>平南路口分离石桥{{networkType}}
						<text class="margin-left-sm cu-tag line-blue round">284km</text>
					</view>
				</view>


			</view>

			<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
				<view class="cu-dialog">
					<view class="text-xxl text-black bg-white flex justify-start padding text-bold">
						选择城市
					</view>
					<view class="grid col-3 bg-white padding-tb">
						<view class="" @click="citySelect(item.cityCode)" v-for="item in cityList">
							<view :class="citySelectId==item.cityCode?'line-blue':'line-black'"
								class=" cu-btn  margin-tb-sm text-lg">
								{{item.cityName}}
							</view>
						</view>
					</view>

					<view class="text-xxl text-black bg-white flex justify-start padding text-bold">
						选择区域
					</view>
					<view class="grid col-3 bg-white padding-tb">
						<view class="" @click="areaSelect(item.countyCode,item.countyName)" v-for="item in areaList">
							<view :class="areaSelectId==item.countyCode?'line-blue':'line-black'"
								class=" cu-btn  margin-tb-sm text-lg">
								{{item.countyName}}
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
	import wx from 'weixin-js-sdk';
	export default {
		data() {
			return {
				modalName: '',
				cityList: [],
				citySelectId: '350700',
				areaList: [],
				areaSelectId: '350701',
				countyName: '市辖区',
				deviceH: this.deviceH,
				deviceW: this.deviceW,
				CustomBar: this.CustomBar,
				networkType: '',
				lat: '',
				lng: ''
			};
		},
		mounted() {
			//通过config接口注入权限验证配置
			let _this = this;
			uni.request({
				url: 'http://weixin123.gz2vip.idcfengye.com/getSign',
				method: 'GET',
				success(res) {
					console.log(res.data)
			
					wx.config({
						debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						appId: res.data.appId, // 必填，公众号的唯一标识
						timestamp: res.data.timestamp, // 必填，生成签名的时间戳
						nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
						signature: res.data.signature, // 必填，签名
						jsApiList: ["scanQRCode", "getLocation", "chooseImage", "uploadImage",
							"downloadImage", "getNetworkType","openLocation"
						] // 必填，需要使用的JS接口列表
					});
			
			
				}
			})
			wx.ready(function() {
				//配置成功之后回调
				console.log("微信JS SDK配置成功！");
			});
			wx.error(function(res) {
				console.log("微信JS SDK配置错误！");
				// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			});

			// uni.getLocation({
			// 	type: 'gcj02',
			// 	altitude: true,
			// 	geocode: true,
			// 	success(res) {
			// 		_this.lat = res.latitude;
			// 		_this.lng = res.longitude;
			// 		console.log(res)
			// 	}
			// })

			




		},
		methods: {
			paySub() {
				wx.checkJsApi({
					jsApiList: ['chooseImage', 'getLocation', 'getNetworkType'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
					success: function(res) {
						console.log(res)
						// 以键值对的形式返回，可用的api值true，不可用为false
						// 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
					},
					fail: function(err) {
						console.log(err)
					}
				});

				let _this = this;
				wx.getNetworkType({
					success: function(res) {
						var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
						_this.networkType = networkType;
						console.log("网络状态" + networkType)
					},
					fail: function(err) {
						console.log(err)
					}
				});
				// var wx = require('weixin-js-sdk');


				wx.getLocation({
					type: 'gcj02',
					altitude:'true',
					isHighAccuracy:true,
					highAccuracyExpireTime:3000,
					
					success: function(res) {

						var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
						var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
						_this.lat = res.latitude;
						_this.lng = res.longitude;
						var speed = res.speed; // 速度，以米/每秒计
						var accuracy = res.accuracy; // 位置精度
					}
				});




				// // //   // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
				// });
				// this.axios('https://106.55.150.54:8099/pay/mobilePay').then(res =>{
				// 	console.log(res)
				// 	document.querySelector('body').innerHTML = res.data;
				// 	document.forms[0].submit(); //执行submit表单提交，让页面重定向，跳转到支付宝页面
				// 	console.log(res.data)
				// }).catch(err=>{
				// 	console.log(err)
				// })

				// uni.request({
				// 	url:'http://localhost:8099/pay/mobilePay',
				// 	method:'get',
				// 	success(res) {
				// 		console.log(res)
				// 	}
				// })
			},
			pic() {
				wx.chooseImage({
					count: 1, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function(res) {
						var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
					}
				});
			},
			loc() {
				let _this = this;

			},
			code() {
				wx.ready(function() {
					wx.scanQRCode({
						// 微信扫一扫接口
						desc: "scanQRCode desc",
						needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
						scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
						success: function(res) {
							const getCode = res.resultStr; // 当needResult 为 1 时，扫码返回的结果

						},
						fail: function(res) {
							Toast(res.errMsg);
						}
					});
				});
			},
			showModal() {
				let _this = this;
				this.modalName = 'bottomModal';
				uni.request({
					url: 'https://www.chinavagrant.cn/getProvince',
					method: 'GET',
					success(res) {
						_this.cityList = res.data.cities;
						console.log(res.data.cities)
					}
				})

				uni.request({
					url: 'https://www.chinavagrant.cn/getCityArea',
					method: 'GET',
					success(res) {
						console.log(res.data)
						_this.areaList = res.data.counties;
					},
					fail(err) {
						alert(err.message)
					}
				})
			},
			hideModal() {
				this.modalName = '';
			},
			//选择城市
			citySelect(cityCode) {
				this.citySelectId = cityCode;
				let _this = this;
				uni.request({
					url: 'http://mock-api.com/PKeZpPz0.mock/getCityArea',
					method: 'GET',
					success(res) {
						_this.areaList = res.data.counties;
					},
					fail(err) {
						alert(err.message)
					}
				})
			},
			areaSelect(countyCode, countyName) {
				this.countyName = countyName;
				this.areaSelectId = countyCode;
				this.modalName = '';
				uni.showToast({
					icon: 'none',
					title: '已为您提供' + countyName + '的服务',
					duration: 1000
				})
				setTimeout(function() {
					uni.hideToast()
				}, 1000)

			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
