const { downloadSceneAsset, clearSceneCache } = requirePlugin("kivicube");

Page({
  onLoad() {
    /*
    如果需要提前下载好场景素材，则可自行调用downloadSceneAsset方法。
    downloadSceneAsset("9vR08tpLesfKVWs2XbbnNKSsX3JqpaAp", (progress) => {
      console.log("progress", progress);
    }).then(() => {
      // 使kivicube-scene组件attached进入页面节点树。比如wx:if为真
    });
  */
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
    wx.navigateTo({ url: `path/to/webview?url=${encodeURIComponent(url)}` });
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
