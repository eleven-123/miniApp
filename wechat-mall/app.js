//app.js
import {siteConfig,apiRoutes} from 'config.js'

var apiHeader = {
  'Content-Type': 'application/json',
};
App({
  // 网站的配置文件
  siteConfig: siteConfig,
  // api全部路由
  apiRoutes:apiRoutes,
  // api的header
  apiHeader:apiHeader,

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
  },
  globalData: {
    userInfo: null,
  }
})