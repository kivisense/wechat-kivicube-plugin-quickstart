Page({
  data: {
  },
  // 事件处理函数
  openSence() {
    wx.navigateTo({
      url: '../scene/index'
    })
  },
  openCollectScene() {
    wx.navigateTo({
      url: '../collectScene/index'
    })
  }
})
