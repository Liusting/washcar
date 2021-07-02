<template>
	<view>
		
		<cu-custom bgColor="bg-blue" isBack="true">
		  <view slot="backText">意见反馈</view>
		</cu-custom>
		<view class="cu-form-group align-start ">
		  <text class="title"><text class="text-red">*</text>意见类型</text>
		</view>
			<view class="cu-form-group align-start margin-top">
				<view class="title"><text class="text-red">*</text>具体意见</view>
				<textarea maxlength="100"  placeholder="请输入具体意见"></textarea>
			</view>
		  	<view class="cu-bar bg-white margin-top">
				<view class="action">
					<view class="title"><text class="text-red">*</text>图片上传</view>
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="item in imgList" :key="index" @click="viewImage(imgList[index])">
						<image src="item[index]" mode='aspectFill'></image>
						<view class="cu-tag bg-red" @click="DelImg(index)">
							<text class="cuIcon-close"></text>
						</view>
					</view>
					<view class="solids" @click="ChooseImage" v-show="imgList.length<4">
						<text class="cuIcon-cameraadd"></text>
					</view>
				</view>
			</view>
		
		  <view class="padding flex flex-direction">
		    <button class="cu-btn bg-blue margin-tb-sm lg">提交</button>
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 index: null,
				    imgList: [],
			}
		},
		methods: {
			ChooseImage() {
			    uni.chooseImage({
			      count: 4, //默认9
			      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			      sourceType: ['album'], //从相册选择
			      success: (res) => {
			        if (this.imgList.length != 0) {
			         
			            imgList: this.imgList.concat(res.tempFilePaths)
			         
			        } else {
						this.imgList = res.tempFilePaths
			          
			        }
			      }
			    });
			  },
			  viewImage(e) {
			    wx.previewImage({
			      urls: this.data.imgList,
			      current: e.currentTarget.dataset.url
			    });
			  },
			  DelImg(e) {
			    wx.showModal({
			      title: '召唤师',
			      content: '确定要删除这段回忆吗？',
			      cancelText: '再看看',
			      confirmText: '再见',
			      success: res => {
			        if (res.confirm) {
			          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
			          this.setData({
			            imgList: this.data.imgList
			          })
			        }
			      }
			    })
			  },
		}
	}
</script>

<style>

</style>
