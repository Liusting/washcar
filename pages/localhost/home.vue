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
		<scroll-view scroll-y class="page"  :style="[{height:deviceH-50 + 'px'}]">
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
								<text class="text-lg text-black margin-left-xs">车海洋凤凰酒店停车场自助洗车店</text>
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
						<text class="cuIcon-location"></text>平南路口分离石桥
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
				deviceH:this.deviceH,
				deviceW:this.deviceW,
				CustomBar:this.CustomBar
			};
		},
		created() {
			console.log(wx)
			var ua = navigator.userAgent.toLowerCase();
			var useragent = navigator.userAgent;
			
			 if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
				 console.log('请在微信客户端打开')
				 uni.navigateTo({
				 	// url:'../index/error'
				 })
			  // window.location.href = "wxError.html";//若不是微信浏览器，跳转到温馨error页面
			 }
			
			var isWeixin = ua.indexOf('micromessenger') != -1;
			
		
			// console.log(this)
			// uni.getSystemInfoSync({
			// 	success(res){
			// 		console.log(res)
			// 	}
			// })
			// uni.request({
			// 	url:'http://106.55.150.54/getSign',
			// 	method:'GET',
			// 	success(res){
			// 		// console.log(res.data.appId)
			// 		wx.config({
			// 			debug: false, // true:调试时候弹窗
			// 			appId: res.data.appId, // 微信appid
			// 			timestamp: res.data.timestamp, // 时间戳
			// 			nonceStr: res.data.nonceStr, // 随机字符串
			// 			signature: res.data.signature, // 签名
			// 			jsApiList: [
			// 				// 所有要调用的 API 都要加到这个列表中
			// 				'getLocation','openLocation'
			// 			]  
			// 		})

			// 		wx.checkJsApi({
			// 		        jsApiList: ['checkJsApi', 'openLocation', 'getLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
			// 		        success: function (res) {
			// 					console.log(res)
			// 		            // 以键值对的形式返回，可用的api值true，不可用为false
			// 		            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
			// 		        }
			// 		    });


			// 		wx.ready(function(){
			// 					wx.getLocation({
			// 						type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
			// 						success: function (res) {
			// 							var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
			// 							var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
			// 							var speed = res.speed; // 速度，以米/每秒计
			// 							var accuracy = res.accuracy; // 位置精度
			// 							alert("纬度：" + latitude);
			// 							alert("经度：" + longitude);
			// 							alert("速度：" + speed);
			// 							alert("accuracy：" + accuracy);
			// 						}
			// 					});
			// 				});
			// 	}
			// })





		},
		methods: {
			paySub(){
				this.axios('https://106.55.150.54:8099/pay/mobilePay').then(res =>{
					console.log(res)
					document.querySelector('body').innerHTML = res.data;
					document.forms[0].submit(); //执行submit表单提交，让页面重定向，跳转到支付宝页面
					console.log(res.data)
				}).catch(err=>{
					console.log(err)
				})
				
				// uni.request({
				// 	url:'http://localhost:8099/pay/mobilePay',
				// 	method:'get',
				// 	success(res) {
				// 		console.log(res)
				// 	}
				// })
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
