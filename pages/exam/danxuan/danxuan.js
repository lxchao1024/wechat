// pages/exam/danxuan/danxuan.js
var datas = require("../../../data/mndl.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenHeight - res.statusBarHeight)
        that.setData({
          height: 1334 - res.statusBarHeight - res.statusBarHeight,
          danxuan: datas.dataList.danxuan
        })
      },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})