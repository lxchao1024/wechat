// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        "title":"hell0",
        "image": "../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../images/vr.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    return {
      title: '离思五首·其四',
      desc: '曾经沧海难为水，除却巫山不是云',
    }
  },

  onClick: function(e) {
    wx.navigateTo({
      //绝对路径
      // url: '/pages/players/player-detail/player-detail',
      //相对路径  
      url: './player-detail/player-detail'
    })
  }
})