// pages/posts/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        "title": "不客气的讲我是一个标题哈...(Joke Joke)",
        "image": "../../images/avatar/1.png",
        "date": "2019-10-21 11:25",
        "imgSrc":"../../images/empty.jpeg",
        "collection":"100",
        "reading": "123",
        "id": "1",
        "content": "wx:key 如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 中的输入内容， 的选中状态），需要使用 wx: key 来指定列表中项目的唯一的标识符。wx: key 的值以两种形式提供字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。保留关键字 * this 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字"
      },
      {
        "title": "不客气的讲我是一个标题哈...(点一下我哇)",
        "image": "../../images/avatar/1.png",
        "date": "2019-10-21 11:25",
        "imgSrc": "../../images/empty.jpeg",
        "collection": "100",
        "reading": "123",
        "id":"2",
        "content": "wx:key 如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 中的输入内容， 的选中状态），需要使用 wx: key 来指定列表中项目的唯一的标识符。wx: key 的值以两种形式提供字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。保留关键字 * this 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字"
      }
    ]
  },

  onLoad: function() {
    wx.showLoading({
      title: 'Loading',
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 800)
  },

  onClick: function(e) {
    console.log("llslsl " + e.currentTarget.dataset.cid)
    switch(e.currentTarget.dataset.cid) {
      case 0:
      wx.navigateTo({
        url: '/pages/home/home',
      })
      break
      case 1:
        wx.navigateTo({
          url: '/pages/players/player',
        })
      break
    }
  }
})