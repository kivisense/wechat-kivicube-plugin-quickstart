Page({
  onLoad() {},

  async ready({ detail: view }) {
    console.log(`ready`);
    this.view = view;
  },
  async sceneStart() {
    console.log(`sceneStart`);
    wx.hideLoading();
  },

  error() {
    wx.hideLoading();
  },
});
