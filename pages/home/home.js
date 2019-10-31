// pages/home/home.js
var net = require("../../utils/netUtil.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasMoreData: true,
    isRefreshing: true,
    isLoadingMoreData: false,
    list:[],
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      hasMoreData: true,
      isRefreshing: true,
      isLoadingMoreData: false
    })
    this.data.page = 1
    that.getData()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    if (this.data.isRefreshing || this.data.isLoadingMoreData) {
      return
    }
    this.data.page = 1
    this.setData({
      hasMoreData: false,
      isRefreshing: true,
      isLoadingMoreData: false
    })

    var that = this
    that.getData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      isLoadingMoreData: true
    })
    this.data.page+=1
    var that = this
    that.getData()
  },

  getData:function() {
    var url = 'http://v.juhe.cn/joke/content/list.php'
    var params = {
      sort: "",
      page: this.data.page,
      pagesize: 15,
      time: "1418816972",
      key: "746dfdb4cd8445d30a8f915fd2b5f76b"
    }
    net.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed)
  },

  onStart: function() {
  },

  onSuccess: function(res) {
    var that = this
    that.setData({
      list: that.data.page == 1 ? res.result.data : that.data.list.concat(res.result.data),
      isRefreshing: false,
      isLoadingMoreData: false,
      hasMoreData: res.result.data.length > 0
    })
  },

  onFailed: function(msg) {
    if (msg) {
      wx.showToast({
        title: msg,
      })
    }
    this.setData({
      isRefreshing: false,
      isLoadingMoreData: false
    })
  }
})