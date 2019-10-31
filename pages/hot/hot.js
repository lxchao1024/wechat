// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModel: 1,
    count: 0,
    list:[
      {
        "title": 'title1',
        "name": "name1"
      },
      {
        "title": 'title2',
        "name": "name2"
      },
      {
        "title": 'title2',
        "name": "name2"
      },
      {
        "title": 'title2',
        "name": "name2"
      }
    ],
    intervalId: -1
  },

  onClick: function() {
    var animation = wx.createAnimation({
      duration: 4000,
      delay: 0,
      timingFunction: 'linear',
    })
    // animation.opacity(0).step() //透明度 默认是从1--0
    // animation.rotate(45).step() //旋转动画
    // animation.translate(10, 10).step() //位移动画
    // animation.scale(0.8).step()  //缩放动画
    animation.scale(0.5).opacity(0.3).step() //组合动画
    this.setData({
      anim: animation.export()
    })

    var that = this

    that.data.intervalId = setInterval(function() {
      if (that.data.count >= 10) {
        that.clear()
        return
      }
      that.setData({
        count: that.data.count+=1
      })
      console.log('call back ' + that.data.count)
    }, 1000)
  },

  clear: function() {
    clearInterval(this.data.intervalId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1 % 10000007)

    wx.getSavedFileList({
      success: res => {
        console.log(res.fileList)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})