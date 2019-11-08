// pages/music/music.js
var net = require("../../utils/netUtil.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasMoreData: false,
    isRefreshing: true,
    isLoadingMoreData: false,
    slider: [],
    radioList:[],
    toplist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isRefreshing: true
    })
    var that = this
    that.getData()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    if (this.data.isRefreshing || this.data.isLoadingMoreData) {
      return
    }
    this.setData({
      isRefreshing: true
    })
    var that = this
    that.getData()
  },

  getData: function() {
    var recommend = "https://music.niubishanshan.top/api/v2/music/recommend"
    var params = {}
    net.getRequest(recommend, params, this.onStart, this.onSuccess, this.onFailed)

    var top = "https://music.niubishanshan.top/api/v2/music/toplist"
    net.getRequest(top, params, this.onTopStart, this.onTopSuccess, this.onTopFailed)
    wx.request({
      url: recommend,
      success: function(res) {
        console.log(res.data.data)
      }
    })
  },

  onStart: function () {

  },

  onSuccess: function (res) {
    console.log(res.data.slider)
    this.setData({
      slider: res.data.slider,
      radioList: res.data.radioList,
      isRefreshing: false
    })
  },

  onFailed: function (msg) {
    wx.showToast({
      title: msg,
      icon: 'none'
    })
    this.setData({
      isRefreshing: false
    })
  },

  onTopStart: function () {

  },

  onTopSuccess: function (res) {
    console.log(res.data)
    this.setData({
      toplist: res.data
    })
  },

  onTopFailed: function (msg) {
    wx.showToast({
      title: msg,
      icon: 'none'
    })
    this.setData({
      isRefreshing: false
    })
  },

  onItemClick: function(e) {
    var id = e.currentTarget.dataset.id
    var title = e.currentTarget.dataset.title
    wx.navigateTo({
      url: '/pages/music/toplist/toplist?id=' + id + "&title=" + title,
    })
  }
})