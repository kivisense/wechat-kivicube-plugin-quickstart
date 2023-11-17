Page({
  onLoad() {
    wx.showLoading({ title: "初始化中...", mask: true });
  },

  async ready({ detail: view }) {
    this.view = view;
    wx.hideLoading();
  },
  async sceneStart() {
    console.log(`sceneStart`);
  },
  error() {
    wx.hideLoading();
  },
});
