// pages/goods/goods.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [],
  },
  toGoodsDetails:function(e){
    wx.navigateTo({
      url: "/pages/goodsDetail/goodsDetail?id=" + e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var categroyId = options.id;
    wx.request({
      url: app.apiRoutes.getGoodsList,
      header: app.apiHeader,
      data:{
        categoryId:categroyId
      },
      success:function(res){
        if(res.data.data){
          that.setData({
            goodsList : res.data.data
          })
        }else{
          that.setData({
            goodsList : []
          })
        }
      }
    })

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