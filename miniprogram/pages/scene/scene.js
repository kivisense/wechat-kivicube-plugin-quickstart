const { clearSceneCache } = requirePlugin("kivicube");

Page({
  data: {
    backStyle: "",
    showAR: false,
    sceneId: "GX80ScfiNs6NuiIthFxOHLJP0p53nvU8",
  },
  onLoad() {
    this.setCustomBackButton();
  },
  onReady() {
    this.setData({ showAR: true });
  },
  ready({ detail: { sceneInfo } }) {
    console.log("当前场景基础信息", sceneInfo);
    wx.showToast({ title: "场景加载中...", icon: "none" });
  },
  downloadStart() {},
  downloadProgress() {},
  downloadEnd() {},
  loadStart() {},
  loadEnd() {},
  sceneStart() {
    wx.showToast({ title: "可开始体验场景", icon: "none" });
  },
  openUrl({ detail: url }) {
    wx.showToast({ title: "跳转到自定义 webview页面", icon: "none" });
    // wx.navigateTo({ url: `path/to/webview?url=${encodeURIComponent(url)}` });
  },
  photo({ detail: photoPath }) {
    wx.saveImageToPhotosAlbum({
      filePath: photoPath,
      success() {
        console.log("保存照片成功");
      },
      fail(e) {
        console.error("保存照片失败", e);
      },
    });
  },
  // 自定义返回按钮样式
  setCustomBackButton() {
    const { top, height } = wx.getMenuButtonBoundingClientRect();
    const scale = 1; // 控制返回图标大小
    const backHeight = height * scale;

    this.setData({
      backStyle: `top: ${
        top + (height - backHeight) / 2
      }px; height: ${backHeight}px`,
    });
  },
  back() {
    wx.navigateBack();
  },
  error(e) {
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
