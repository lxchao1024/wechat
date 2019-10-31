// pages/players/player-detail/player-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        "title": "hell0",
        "image": "../../../images/empty1.png"
      },
      {
        "title": "hell0",
        "image": "../../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../../images/vr.png"
      },
      {
        "title": "hell0",
        "image": "../../../images/empty.jpeg"
      }
    ],
    chatList:[
      {
        "content": "good1"
      }, {
        "content": "good2good2"
      }, {
        "content": "good3good3good3"
      }, {
        "content": "good4good4good4good4"
      }, {
        "content": "good5good5good5good5good5"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let height = clientHeight * ratio;
        console.log("height == " + height)
        that.setData({
          height: height
        });
      }
    });

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