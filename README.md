# wechat

微信小程序记录API
准备工作：
	申请小程序开发账号
	下载开发工具
	微信登陆工具
	创建项目
		Debug环境配置不校验合法域名、web-view、TLS版本以及HTTPS证书(本地设置选项卡中)
		Release配置https访问域名(有次数限制)	
API篇
1、开启下拉刷新属性--在json文件中配置该属性
	"enablePullDownRefresh": true
	
2、不同页面之间的跳转方法
2.1 使用switchTab方法进行跳转
	wx.switchTab({
      url: '/pages/home/home',
    })

2.2 使用redirectTo方法进行跳转
	wx.redirectTo({
      url: '',
    })

2.3 使用navigateTo方法进行跳转
	wx.navigateTo({
      url: '',
    })
	
	使用navigateTo方法进行跳会带有返回按钮,对应的返回上个页面的方法
	
	wx.navigateBack({
	  delta: 1 //默认值，如果delta大于现有页面数，则返回到首页。
	})
	
2.4 使用reLaunch方法进行跳转
	wx.reLaunch({
		url: '',
		success: function() {},
		fail: function() {},
		complete: function() {}
	})

	注：关闭所有页面，打开到应用内的某个页面
	
3、更新页面状态
	this.setData({
		isRefreshing: false,
		...
	})
	
	注：this在有些方法中调用无效，可如下操作
	funName: function(event) {
		var that = this
		that.setData({
			...
		}
	}
	
4、调用Toast
	wx.showToast({
		title: '我是一个toast',
		/* success */
		icon:'none'
	})
	
5、剪贴板
	wx.setClipboardData({
	  data: 'data',
	  success (res) {
		wx.getClipboardData({
		  success (res) {
			console.log(res.data) // data
		  }
		})
	  }
	})
	
6、电量(异步、同步调用)
	<!-- level string 0-100、isCharging boolean是否正在充电 -->
	wx.getBatteryInfoSync()
	wx.getBatteryInfo()
	
7、支付
	wx.requestPayment({
	  timeStamp: '',
	  nonceStr: '',
	  package: '',
	  signType: 'MD5',
	  paySign: '',
	  success (res) { },
	  fail (res) { }
	})
	
8、定时器
	<!-- number 定时器编号 -->
    number = setInterval(function(){
		console.log('call back')
	}, 1000)
	
	<!-- 清除定时器 -->
	clearInterval(number)
	
9、事件定义
	事件是视图层到逻辑层的通讯方式
	事件可以将用户的行为反馈到逻辑层进行处理
	事件可以绑定在组件上，当达到出发事件，就回执行逻辑层中对应的事件处理函数
	事件对象可以携带额外的信息，如id、dataset、touches。
	
9.1 事件的使用方式
	在组件中绑定一个事件处理函数
	在js中定义该处理函数的具体实现
	<!-- wxml -->
	<view id="100" data-hi="hi" bindtap="onClick"> Click me </view>
	
	<!-- js -->
	onCLick:function(e) {
		console.log(e)
		//e.currentTarget.dataset.id
		//e.currentTarget.id
	}
	
9.2 事件分类
	<!-- bind -->
	冒泡事件：当组件上的事件被触发后，该事件回向父节点传递
	<!-- catch -->
	非冒泡事件
	
	bind事件绑定不会阻止冒泡事件，catch事件绑定可以阻止冒泡事件向上冒泡。
	
9.3 事件对象信息
	属性			类型		
	type			String		事件类型
	timeStamp		Integer		事件生成时的时间戳
	target			Object		触发事件的组件的一些属性值集合
	currentTarget	Object		当前组件的一些属性
	id				String		事件组件的id
	tagName			String		当前组件的类型
	dataset			Object		当前组件上的 data- 开头的自定义属性组成的集合
	
	注意：data- 开头的在js中会转换成驼峰命名；
	例如：data-user-name -> userName
	
样式篇	
1、引入其他wxml、wxss、js文件
1.1 wxml中引入其他的template	
	<import src="文件的路径" />

1.2 wxss中引入其他的样式文件
	@import "文件的路径";
	
1.3 js中引入其他的util文件
	var utils = require("文件的路径");
	
2、盒子模型
	.container {
		/* 设置为盒子模型 */
		display:flex;
		/* 盒子模型的主轴方向row(横向)、column(垂直)*/
		flex-direction:column;
		/* 主轴方向上的显示方式*/
		align-items:center;
		/* 垂直主轴方向上的显示方式*/
		justify-content:center;
		/* 这种的padding表示上下padding为200rpx，左右padding为0 */
		padding:200rpx 0;
	}
	
3、设置边框
	{
		/* 边框宽度、画笔样式、边框颜色 */
		border: 1px solid #405f80;
	}
	
4、margin、padding参数配置说明
4.1 四个参数的配置说明
	{
		/* 依次表示上边距、右边距、下边距、左边距的距离 */
		margin: 10rpx 20rpx 30rpx 40rpx;
		/* 如果四个边距相等的话、精简的写法表示 */
		margin: 10rpx;
	}	

4.2 三个参数的配置说明
	{
		/* 依次表示上边距、左右边距、下边距的距离 */
		margin: 10rpx 20rpx 30rpx;
	}
	
4.3 2个参数的配置说明
	{
		/* 依次表示上下边距、左右边距的距离 */
		margin: 10rpx 20rpx;
	}

4.4 1个参数的配置说明
	{
		/* 表示上下左右边的距离 */
		margin: 10rpx;
	}
	
5、文本居中显示
	.textStyle {
		/* 宽度、高度、居中 */
		width: 200rpx;
		height:60rpx;
		text-align:center;
		line-height:60rpx;
		/* 设置颜色 */
		color:white;
		/* 设置大小 */
		font-size:14px;
		/* 设置字体样式--加粗、倾斜(initial)、normal */
		font-weight:bolb;
		/* 设置字体 */
		font-family: YaHei;
		/* 设置字间距 */
		letter-spacing: 1px;
		/* 其他的常用标签、可以自己查看效果(设置内容超出后显示...) */
		overflow:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
6、使用图片标签image
	<!-- wxml文件注意一定要设置样式(宽和高)、图片地址可以本地资源和网络资源 -->
	<image class="user-header" src='url'/>
	
	<!-- 另外一种设置style -->
	<image style="width:100rpx;height:100rpx;" src='url'/>
	
	<!-- wxss文件中定义样式 -->
	.user-header {
		width:100rpx;
		height:100rpx;
	}
   
   使用icon
	<!-- 图标。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。 -->
	<!-- type(有效值)的类型有：success, success_no_circle, info, warn, waiting, cancel, download, search, clear -->
	<!-- color的值取rgb和css中可以引用的色值、如rgb(0, 255, 255) -->
	<icon size="40" type="type" color="{{red}}">

7、switch开关选择器
	<!-- wxml type默认值是：switch、可切换成checkbox复选框的样式-->
	<!-- wxml color默认值是：#04BE02、支持自定义switch模式下：更换的是选择器的背景色；checkbox模式下更换的是内部的指示器的颜色-->
	<switch type="checkbox" color="red" checked="{{switchChecked}}" bindchange="switchChange"/>
	
	<!-- js文件中使用 -->
	data: {
		/* 默认是否选中标签 */
		switchChecked:true
	},
	
	switchChange: function(e) {
		/* 切换状态的回调 */
		var isChecked = e.detail.value
		
		/* 更新页面状态 */
		this.setData({
			switchChecked: isChecked
		})
	}
	
8、全局样式与局部样式	
	定义在 app.wxss 中的样式为全局样式，作用于每一个页面。在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 app.wxss 中相同的选择器。
	
	尺寸单位
	rpx(responsive pixel): 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。
	设备			rpx换算px (屏幕宽度/750)	px换算rpx (750/屏幕宽度)
	iPhone5			1rpx = 0.42px				1px = 2.34rpx
	iPhone6			1rpx = 0.5px				1px = 2rpx
	iPhone6 Plus	1rpx = 0.552px				1px = 1.81rpx

9、图片filter的使用
   filter 属性定义了元素(通常是)的可视效果(例如：模糊与饱和度)。
   
   •none 默认值，没有效果；
   •blur() 高斯模糊 --- 值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。
   •brightness() 亮度
   •contrast() 对比度
   •drop-shadow() 阴影
   •grayscale() 灰度
   •hue-rotate() 色相旋转
   •invert() 反色
   •opacity() 透明度
   •saturate() 饱和度
   •sepia() 复古色
   •url() SVG滤镜
   •复合函数 多个滤镜组合使用
   
   提示:滤镜通常使用百分比 (如：75%), 当然也可以使用小数来表示 (如：0.75)。

10、样式优先级
	<!-- wxml 优先选用后面重复的定义的样式 -->
	<view class="list small"></view>
	
	<!-- wxss -->
	.list {
		width:720rpx;
		height:720rpx;
		padding: 15rpx 20rpx;
	}
	
	.small {
		width:350rpx;
		height:350rpx;
	}

11、wx:if VS hidden
11.1 wx:if 用于条件不大可能变化的情形
	wx:if 的条件值切换时，框架有局部渲染过程，它会确保条件块在切换时销毁或重新渲染；
	wx:if 也是惰性的，初始渲染条件为false，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。
	
11.2 hidden 用于频繁切换的情形
	组件始终会被渲染，只是控制显示与隐藏。
	
11.3 条件渲染的形式
	wx:if
	wx:elif
	wx:else
	
12、列表渲染
	wx:for 表示要循环的对象
	wx:key、wx:for-index 每次循环的索引，可自己定义，默认值index
	wx:for-item 每次循环的项，可自己定义，默认值item
	
	注意：当 wx:for 的值为字符串时，会将字符串解析成字符串数组。
		  花括号和引号之间如果有空格，将最终被解析成字符串
		  
13、template
	/* 导入template中定义的模板代码 */
	<import src="url" />
	/* 引入除template以外的代码 */
	<inclue src="url" />

13.1 定义
	/* 定义模板的名字 name、使用import方式导入显示该模板下的代码 */
	<template name="item">
		<view>{{id}}</view>
		...
	</template>
	
	<!-- include方式会显示这里的代码 -->
	<text>hello other text</text>

13.2 import 的作用域
	import 有作用域的概念，即只会import目标文件中定义的template，而不会 import 目标文件 import 的 template。也就是说 template 不能多重传递使用

14、wxss 样式选择器
	.price::before {
		content:'金额：',
		font-size:100rpx;
		color:black;
	}
	
	.price::after {
		content:'.00 元',
		font-size:100rpx;
		color:white;
	}
	
14.1 优先级：!import		无穷大
			style		1000
			#element	100
			.element	10
			elelment
	
14.2 高级选择器
	<view class='container'>
		<text />
		...
		<text class="second"/>
		<text />
		<view>
			<text />
			...
		</view>	
	</view>
	
	<!-- wxss 所有的text标签全部使用该样式 -->
	.container text {
		color:red;
	}
	
	<!-- wxss 一级结构下的所有text使用该样式 -->
	.container>text {
		color:red;
	}

	.second+text {
		
	}
	
	.second~text {
	
	}
	
	text::first-child {
	
	}
	
	text::last-child {
		
	}
	
	text::nth-child(position) {
	
	}
	<!-- 
		E[attr] 		选择匹配居右属性attr的E元素
		E[attr=val]		选择匹配居右属性attr的E元素,并且属性值为val，区分大小写
		E[attr^=val]	以val开头的任意字符串
		E[attr$=val]	以val结尾的任意字符串
		E[attr*=val]	包含val
	-->
	text[class] {
		color:red;
	}

	层次选择器
		后代、子、相邻兄弟，通用兄弟选择器
	
	伪类选择器
		带有type(先筛选再排序号)
		不带type(不用筛选直接排序号)
		
	属性选择器
	
15、slider
	min					最小值
	max					最大值
	step				步长，能被max、min整除的数
	value				当前值
	backgroundColor		背景色
	avtiveColor			选中的颜色
	show-value			是否显示进度值
	bindchange			完成一次拖动后触发的事件 e.detail.value
	bindchanging		拖动过程中触发的事件
	disabled			是否禁用
	block-color			滑块颜色






	
