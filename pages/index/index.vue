<template>
	<view class="content">
		<view >
			<input class="uni-input" placeholder="输入纬度" v-model="lat" />
			<input class="uni-input" placeholder="输入经度" v-model="lon" />
			<button @click="reverseGeocoder" style="width: 750rpx;">转化</button>
			<view>位置：{{remark}}</view>
		</view>
	</view>
</template>

<script>
	import QQMapWX from '@/common/qqmap-wx-jssdk.js'
	
	export default {
		data() {
			return {
				lat: '28.16749316994883',
				lon: '112.96023184371947',
				qqMap: new QQMapWX({key: '你申请的KEY',vm: this}),
				remark: undefined
			}
		},
		methods: {
			// 示例 经纬度转换位置描述
			reverseGeocoder(){
				let _this = this
				this.qqMap.reverseGeocoder({
				  location: {
				    latitude: _this.lat,
				    longitude: _this.lon
				  },
				  success: (res) => {
				    console.log(res)
					this.remark = res.result.address
				  },
				  fail: (res) => {
					  console.error(res)
				  }
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
