Page({
  onLoad() {
    wx.showLoading({ title: "初始化中...", mask: true });
  },

  async ready({ detail: view }) {
    this.view = view;
  },

  cloudarStart() {
    console.log(`cloudarStart`);
  },

  cloudarEnd() {
    console.log(`cloudarEnd`);
  },

  // 平面检测开始
  planeDetectStart() {
    wx.hideLoading();
    console.log(`planeDetectStart`);
  },

  // 平面检测结束
  planeDetectEnd() {
    console.log(`planeDetectEnd`);
  },

  // 自动放置，尝试定位场景, 可能触发多次
  tryLocateScene() {
    console.log(`tryLocateScene`);
  },

  async sceneStart() {
    console.log(`sceneStart`);
  },

  error({ detail }) {
    wx.hideLoading();
  },
});
