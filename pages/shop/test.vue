<template>
	<view class="">
		<!-- <cu-custom isBack="true" bgColor="bg-white">
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
		
		<view class="padding flex justify-center">
			<button @click="pay" class="cu-btn round bg-gradual-pink">马上支付</button>
		</view>
		<view class="bg-white padding margin" style="border: 1px solid pink;">
			{{info}}
		</view>
		<view class="bg-white padding margin" style="border: 1px solid yellow;">
			{{msg}}
		</view> -->
		<cu-custom isBack="true" bgColor="bg-white">
			<block slot="backText"></block>
		</cu-custom>
		<view class="margin-top" v-for="(item,index) in llkk" :key="item.id">
			<view class="margin-bottom-sm">{{item.color}}</view>
			<text v-for="(items,index) in item.list" :key="items.id">
				<text class="cu-tag bg-white margin-right-sm">{{items}}</text>
			</text>
		</view>


	</view>

</template>

<script>
	import wx from 'weixin-js-sdk';
	export default {
		data() {
			return {
				info: '',
				msg: '',
				List: [{
						"颜色": "红",
						"尺码": "大",
						"型号": "A",
						"skuId": "3158055"
					},
					{
						"颜色": "白",
						"尺码": "大",
						"型号": "A",
						"skuId": "3158054"
					},
					{
						"颜色": "白",
						"尺码": "中",
						"型号": "B",
						"skuId": "3133859"
					},
					{
						"颜色": "蓝",
						"尺码": "小",
						"型号": "C",
						"skuId": "3516833"
					}
				],
				llkk: [],
				keys: [],
			}
		},
		created() {
			this.getTextareaData();
		},

		methods: {
			powerset(arr) {
						    let ps = [[]];
						    for (let i = 0; i < arr.length; i++) {
						        for (let j = 0, len = ps.length; j < len; j++) {
						            ps.push(ps[j].concat(arr[i]));
						        }
						    }
			
						    return ps;
						},
			
						/**
						 * 初始化数据
						 * @return 
						 */
						initData() {
							this.result = {};
							this.keys = this.getAllKeys();
							for (let i = 0; i < this.keys.length; i ++) {
								this.highKeys[this.keys[i]] = false;
							}
			
							this.list = this.combineAttr(this.data, this.keys);
							this.initSeleted(this.skuId);
							this.buildResult(this.list.items)
							this.updateStatus(this.getSelectedItem());
							this.showResult();
						},
			
						/**
						 * 获取输入表单中的数据进行初始化
						 * @return
						 */
						getTextareaData() {
							let data = document.getElementById('values').value;
							let skuId = document.getElementById("skuId").value;
							
							try {
								this.data = JSON.parse(data);
								let isHas = false;
								for (let i = 0; i < this.data.length; i ++) {
									if (skuId == this.data[i][this.skuName]) {
										isHas = true;
										break
									}
								}
			
								this.skuId = isHas ? skuId : this.data[0][this.skuName];
								this.initData();
							} catch (e) {
								this.data = [];
							}
						},
			
						/**
						 * 正常属性点击
						 */
						handleNormalClick(key, value) {
							for (let i in this.list.result[key]) {
								if (i != value.name) {
									this.list.result[key][i].active = false;
								} else {
									this.list.result[key][i].active = true;
								}
							}
						},
			
						/**
						 * 无效属性点击
						 */
						handleDisableClick(key, value) {
							this.list.result[key][value.name]["disabled"] = false;
						    // 清空高亮行的已选属性状态（因为更新的时候默认会跳过已选状态）
						    for (let i in this.list.result) {
						    	if (i != key) {
						    		for (let x in this.list.result[i]) {
						    			this.list.result[i][x].active = false;
						    		}
						    	}
						    }
				
						    this.updateStatus(this.getSelectedItem());
						},
			
						/**
						 * 高亮行
						 */
						highAttributes: function() {
							for (let key in this.list.result) {
								this.highKeys[key] = true;
								for (let attr in this.list.result[key]) {
									if (this.list.result[key][attr].active === true) {
										this.highKeys[key] = false;
										break;
									}
								}
							}
						},
			
						/**
						 * 点击事件处理
						 * @param  key   点击的行
						 * @param  value 点击的按钮的数据
						 */
						handleActive: function(key, value) {
							if (value.active == true) {
								return false;
							}
			
				            this.handleNormalClick(key, value);
				            if (value.disabled === true) {
				                this.handleDisableClick(key, value);
				            }
			
				            this.updateStatus(this.getSelectedItem());
				            this.highAttributes();
				            this.showResult();
						},
			
						/**
						 * 计算属性
						 * @param  {[type]} data [description]
						 * @param  {[type]} keys [description]
						 * @return {[type]}      [description]
						 */
						combineAttr(data, keys) {
						    let allKeys = []
						    let result = {}
			
						    for (let i = 0; i < data.length; i++) {
						        let item = data[i]
						        let values = []
			
						        for (let j = 0; j < keys.length; j++) {
						            let key = keys[j]
						            if (!result[key]) {
						            	result[key] = {};
						            }
			
						            if (!result[key][item[key]]) {
						            	result[key][item[key]] = {"name": item[key], "active": false, "disabled": true};
						            }
			
						            values.push(item[key]);
						        }
			
						        allKeys.push({
						            path: values.join(this.spliter),
						            sku: item['skuId']
						        });
						    }
			
						    return {
						        result: result,
						        items: allKeys
						    }
						},
			
						/**
						 * 获取所有属性
						 * @return {[type]} [description]
						 */
						getAllKeys() {
							let arrKeys = [];
							for (let attribute in this.data[0]) {
								if (!this.data[0].hasOwnProperty(attribute)) {
									continue;
								} 
			
								if (attribute !== this.skuName) {
									arrKeys.push(attribute);
								}
							}
			
							return arrKeys;
						},
			
						getAttruites(arr) {
							let result = []
						    for (let i = 0; i < arr.length; i++) { 
						    	result.push(arr[i].path) 
						    }
			
						    return result
						},
			
						/**
						 * 生成所有子集是否可选、库存状态 map
						 */
						buildResult(items) {
						    let allKeys = this.getAttruites(items)
			
						    for (let i = 0; i < allKeys.length; i++) {
						        let curr = allKeys[i];
						        let sku = items[i].sku;
						        let values = curr.split(this.spliter);
						        let allSets = this.powerset(values);
			
						        // 每个组合的子集
						        for (let j = 0; j < allSets.length; j++) {
						            let set = allSets[j]
						            let key = set.join(this.spliter)
			
						            if (this.result[key]) {
						                this.result[key].skus.push(sku)
						            } else {
						                this.result[key] = {
						                    skus: [sku]
						                }
						            }
						        }
						    }
						},
			
						/**
						 * 获取选中的信息
						 * @return Array 
						 */
						getSelectedItem() {
							let result = [];
							for (let attr in this.list.result) {
								let attributeName = '';
								for (let attribute in this.list.result[attr]) {
									if (this.list.result[attr][attribute].active === true) {
										attributeName = attribute;
									}
								}
			
								result.push(attributeName);
							}
			
						    return result
						},
			
						/**
						 * 更新所有属性状态
						 */
						updateStatus(selected) {
						    for (let i = 0; i < this.keys.length; i++) {
						        let key = this.keys[i],
						         	data = this.list.result[key],
						        	hasActive = !!selected[i],
						        	copy = selected.slice();
			
						        for (let j in data) {
						            let item = data[j]["name"];
						            if (selected[i] == item) {
						            	continue
						            }
			
						            copy[i] = item
						            let curr = this.trimSpliter(copy.join(this.spliter), this.spliter);
						            this.list.result[key][j]["disabled"]  = this.result[curr] ? false : true;
						        }
						    }
						},
			
						trimSpliter(str, spliter) {
						    // ⊙abc⊙ => abc
						    // ⊙a⊙⊙b⊙c⊙ => a⊙b⊙c
						    let reLeft    = new RegExp('^' + spliter + '+', 'g');
						    let reRight   = new RegExp(spliter + '+$', 'g');
						    let reSpliter = new RegExp(spliter + '+', 'g');
						    return str.replace(reLeft, '')
						        .replace(reRight, '')
						        .replace(reSpliter, spliter)
						},
			
						/**
						 * 初始化选中
						 * @param  mixed|Int|String skuId 需要选中的skuId
						 * @return {[type]}       [description]
						 */
						initSeleted(skuId) {
						    for (let i in this.data) {
						    	if (this.data[i][this.skuName] == skuId) {
						    		for (let x in this.data[i]) {
						    			if (x !== this.skuName) {
						    				this.list.result[x][this.data[i][x]].active = true;
						    			}
						    		}
						    		break;
						    	}
						    }
						},
			
						/**
						 * 显示选中的信息
						 * @return 
						 */
						showResult() {
						    let result = this.getSelectedItem()
						    let s = []
						    for (let i = 0; i < result.length; i++) {
						        let item = result[i];
						        if (!!item) {
						            s.push(item)
						        }
						    }
			
						    if (s.length == this.keys.length) {
						        let curr = this.result[s.join(this.spliter)]
						        if (curr) {
						            s = s.concat(curr.skus)
						            this.skuId = curr.skus[0];
						        }
						        
						        this.message = s.join('\u3000-\u3000');
						    }
						},
			pay() {
				uni.request({
					url: 'http://weixin123.gz2vip.idcfengye.com/weixinh5/wxpay?openId=orvW-5SlhPME9yc8uKsQF9J-r7Vg',
					method: 'POST',
					success(res) {
						console.log(res)
						wx.chooseWXPay({
							timestamp: res.data.timeStamp,
							nonceStr: res.data.nonce_str,
							package: res.data.packages,
							signType: 'RSA',
							paySign: res.data.paySign,
							success: function(res) {
								console.log(res)
							}
						});
					}

				})

			},
			wsConfig() {
				//通过config接口注入权限验证配置
				let _this = this;
				uni.request({
					url: 'http://weixin123.gz2vip.idcfengye.com/weixinh5/getSign',
					method: 'GET',
					success(res) {
						_this.info = res.data;
						wx.config({
							debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
							appId: res.data.appId, // 必填，公众号的唯一标识
							timestamp: res.data.timestamp, // 必填，生成签名的时间戳
							nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
							signature: res.data.signature, // 必填，签名
							jsApiList: ["getLocation", "getNetworkType", "openLocation",
								"chooseWXPay"
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
