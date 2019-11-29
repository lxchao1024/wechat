// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    degree: 1800,
    anim:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userHeader: '../../images/avatar/1.png'
    })
  },

  onReady: function() {
    var anima = wx.createAnimation({
      duration: 1800,
      delay: 0,
      timingFunction: 'ease'
    })

    anima.rotate(this.data.degree).step()
    this.setData({
      anim: anima.export()
    })

    setTimeout(function() {
      wx.showToast({
        title: '动画结束了',
        icon: 'none'
      })
    }, 1800)
  },

  onClick: function (e) {
    var title = ''
    var that = this
    switch (e.target.dataset.cid) {
      case 'contribution':
        title = '贡献榜'
        wx.navigateTo({
          url: '../list/netlist',
        })
        break
      case 'wallet':
        title = '我的钱包'
        break
      case 'level':
        title = '我的等级'
        break
      case 'play':
        title = '我的直播'
        wx.navigateTo({
          url: '/pages/zp/zp',
        })
        break
      case 'game':
        title = '游戏战绩'
        wx.navigateTo({
          url: '/pages/game/game',
        })
        break
      case 'snatch':
        title = '我的夺宝'
        wx.navigateTo({
          url: '/pages/music/music',
        })
        break
      case 'settings':
        title = '设置'
        wx.navigateTo({
          url: '/pages/game1/game1',
        })
        break
      case 'header':
        title = '头像'
        wx.chooseImage({
          count: 1,
          sourceType: ['album', 'camera'],
          sizeType: ['orginal', 'compressed'],
          success: function (res) {
            console.log('path == ' + res.tempFilePaths)
            console.log('size == ' + res.tempFiles)
            that.setData({
              userHeader: res.tempFilePaths
            })
          },
        })
        break
      case 'attention':
        title = '关注'
        break
      case 'fans':
        title = '粉丝'
        break
    }
    wx.showToast({
      title: '点击了' + title,
    })
  },
})