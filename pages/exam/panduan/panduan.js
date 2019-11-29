// pages/exam/panduan/panduan.js
var datas = require("../../../data/mndl.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    activeColor: 'red',
    isRight: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.screenHeight - res.statusBarHeight)
        that.setData({
          height: 1334 - res.statusBarHeight - res.statusBarHeight,
          panduan: datas.dataList.panduan
        })
      },
    })
  },
  
  right: function(e) {
    console.log(e)
    console.log(this.data.panduan[e.currentTarget.dataset.index])
    var that = this
    if(this.data.panduan[e.currentTarget.dataset.index].ans == "正确") {
      console.log("true")
      this.setData({
        isRight: false,
        current: that.data.current + 1,
        activeColor: 'black'
      })
    } else {
      console.log("false")
      this.setData({
        isRight: true,
        activeColor: 'red'
      })
    }
  },

  error: function(e) {
    console.log(e)
    console.log(this.data.panduan[e.currentTarget.dataset.index])
    if (this.data.panduan[e.currentTarget.dataset.index].ans != "正确") {
      console.log("true")
      this.setData({
        isRight: false,
        current: that.data.current + 1,
        activeColor: 'black'
      })
    } else {
      console.log("false")
      this.setData({
        isRight: true,
        activeColor: 'red'
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})