const { clearCollectionCache } = requirePlugin("kivicube");

Page({
  ready({ detail: { collectionInfo } }) {
    console.log("当前合辑基础信息", collectionInfo);
    wx.showToast({ title: "可开始扫描合辑中的识别图...", icon: "none" });
  },
  sceneReady({ detail: { sceneInfo } }) {
    console.log("当前打开的场景基础信息", sceneInfo);
  },
  sceneDestroy({ detail: { sceneId } }) {
    console.log("当前被关闭销毁的场景id", sceneId);
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
                clearCollectionCache();
                wx.redirectTo({ url: '/' + page.__route__ });
              } else {
                wx.showToast({ title: "获取“摄像头”权限失败！", icon: "none" });
              }
            }
          });
        }
      });
    }
    console.error(e);
  }
});