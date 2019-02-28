// pages/sort/sort.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [],

    goodsList:[
    ]
  },

  // 导航切换监听
  navbarTap: function (e) {
    // console.log(e)
    this.setData({
      currentTab: e.currentTarget.id
    })
    // console.log(e.currentTarget.id)
    this.getGoodsList(e.currentTarget.id)
  },
  toGoodsDetails:function(e){
    // console.log(e)
    wx.navigateTo({
      url: "/pages/goods/goods?id=" + e.currentTarget.dataset.id
    })
  },
  getGoodsList: function (cateId){
    var that = this
    console.log(cateId)
    wx.request({
      url: app.apiRoutes.getCategory,
      header: app.apiHeader,
      success:function(res){
        var list=res.data.data;
        
        console.log(list)
        for(var i=0;i<=list.length;i++){
          if(list[i].pid == cateId){            
            console.log(list[i])
          }
        }
      }
    })
    // wx.request({
    //   url: app.apiRoutes.getGoodsList,
    //   header: app.apiHeader,
    //   success:function(res){
    //     console.log(res)
    //     that.setData({
    //       goodsList: res.data.data
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    // that.setData({
    //   currentTab: options.id
    // })
    that.getGoodsList(options.id)
    // wx.request({
    //   url: app.apiRoutes.getGoodsList,
    //   success: function (res) {
    //     // console.log(res)
    //     var sortList = []
    //     for (var i = 0; i < res.data.data.length; i++) {
    //       if (res.data.data[i].level == 1) {
    //         sortList.push(res.data.data[i])
    //       }
    //     }
    //     that.setData({
    //       navbar: sortList
    //     })
    //     // console.log(sortList)
    //   }
    // })
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})