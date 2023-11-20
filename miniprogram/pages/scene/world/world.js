const { clearSceneCache } = requirePlugin("kivicube");

Page({
  onLoad() {
    wx.showLoading({ title: "初始化中..." });
  },

  ready({ detail: { sceneInfo } }) {
    console.log("当前场景基础信息", sceneInfo);
    wx.showToast({ title: "场景加载中...", icon: "none" });
  },

  unsupport(e) {
    console.log('unsupport', e);
    wx.hideLoading();
  },

  cloudarStart(e) {
    console.log(`cloudarStart`, e);
  },

  cloudarEnd(e) {
    console.log(`cloudarEnd`, e);
  },

  sceneStart() {
    console.log(`sceneStart`);
    wx.hideLoading();
  },

  // 锚定到识别图
  anchored(e) {
    console.log(`anchored`, e);
  },

  // 持续锚定中
  anchoring(e) {
    console.log(`anchoring`, e);
  },

  error(e) {
    wx.hideLoading();
    const { detail } = e;
    if (detail && detail.isCameraAuthDenied) {
      // 如果是权限问题，则向用户申请权限。
      const page = this;
      wx.showModal({
        title: "提示",
        content: "请给予“摄像头”权限",
        success() {
          wx.openSetting({
            success({ authSetting: { "scope.camera": isGrantedCamera } }) {
              if (isGrantedCamera) {
                clearSceneCache();
                wx.redirectTo({ url: "/" + page.__route__ });
              } else {
                wx.showToast({ title: "获取“摄像头”权限失败！", icon: "none" });
              }
            },
          });
        },
      });
    }
    console.error(e);
  },
});
