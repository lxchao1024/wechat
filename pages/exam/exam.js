var datas = require("../../data/mndl.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    degree:1800,
    degrees:[1, 2, 3, 4, 5, 6, 7]
  },

  onShow: function() {
    console.log(this.data.degrees)
    console.log(this.data.degrees.length)

    var that = this
    var interval = setInterval(function() {
      console.log(that.data.degrees.length)
      if (that.data.degrees.length > 0) {
        var tdata = that.data.degrees[0]
        var td = that.data.degrees.splice(0, 1)
        that.setData({
          degree: tdata
        })
      } else {
        clearInterval(interval)
      }
    }, 1000)
  },

  onOpinionClick: function() {
    wx.navigateTo({
      url: '/pages/exam/panduan/panduan',
    })
  },

  onSingleClick: function() {
    wx.navigateTo({
      url: '/pages/exam/danxuan/danxuan',
    })
  }
})