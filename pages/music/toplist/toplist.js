// pages/music/music-list/toplist.js
var net = require("../../../utils/netUtil.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picAlbum:'/images/vr.png',
    songlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    console.log(options.title)
    var url = "https://music.niubishanshan.top/api/v2/music/songList/" + options.id
    var params = {}
    net.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed)
  },

  onStart: function() {

  },

  onSuccess: function(res) {
    console.log(res.data.totalSongNum)
    this.setData({
      picAlbum: res.data.topInfo.picAlbum,
      songlist: res.data.songList
    })
  },

  onFailed: function(msg) {

  },

  errorFunction: function() {
    this.setData({
      picAlbum: '/images/empty.jpeg'
    })
  },

  onItemClick: function(e) {
    console.log(e)
    var albumMid = e.currentTarget.dataset.id
    var singerMid = e.currentTarget.dataset.sid
    wx.navigateTo({
      url: '/pages/music/music-detail/player?albumMid=' + albumMid + "&singerMid=" + singerMid,
    })
  }
})