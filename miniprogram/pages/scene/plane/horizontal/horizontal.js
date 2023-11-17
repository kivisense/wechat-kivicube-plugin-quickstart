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

  // 指示器放置，显示指示器
  indicatorVisible() {
    console.log(`indicatorVisible`);
  },

  // 指示器放置，隐藏指示器
  indicatorInvisible() {
    console.log(`indicatorInvisible`);
  },

  // 点击屏幕时放置的事件，点击定位, 放置
  touchLocate() {
    console.log(`touchLocate`);
  },
  async sceneStart() {
    console.log(`sceneStart`);
  },

  error() {
    wx.hideLoading();
  },
});
