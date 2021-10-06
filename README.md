# 在uniapp H5项目中使用腾讯地图sdk示例

这里主要针对的是H5，小程序或app都有现成的sdk可以使用；
本人是用uniapp在做微信公众号的h5页面，其中需要把经纬度信息转化成文字描述的位置信息，在腾讯地图开发平台上申请了一个key，然后下载了一个微信小程序使用的微信小程序JavaScriptSDK v1.2
但是这个sdk是为小程序设计的，所以在vue的h5中使用会有跨域问题，所以结合vue-jsonp对这个sdk做了一下修改，可以直接放入h5中使用。

### 此方法不止在uniapp中可以使用，在所有H5项目中都可以

> 关于sdk怎么修改的我就不多说了，想了解的自己看源码，简单描述一句就是把sdk内使用的wx对象重写，替换了里面的request方法，使用vue-jsonp完成跨域
> 修改后的源码在 common目录下的 qqmap-wx-jssdk.js 中

## 运行示例代码请务必先替换示例代码中的sdk key
## 没有key的先在腾讯地图开发者后台申请一个，免费的不要钱：https://lbs.qq.com/dev/console/application/mine

