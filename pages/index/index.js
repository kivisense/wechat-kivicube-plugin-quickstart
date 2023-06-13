Page({
  data: {
  },
  // 事件处理函数
  openScene() {
    wx.navigateTo({
      url: '../scene/index'
    })
  },
  openCollectScene() {
    wx.navigateTo({
      url: '../collection/index'
    })
  }
})
