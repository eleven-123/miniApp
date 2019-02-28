//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    indicatorColor:"#b8f3ee",
    indicatorAactiveColor:"#36B9AF",
    autoplay: true,
    interval: 5000,
    duration: 300,
    
    sortArray:[]
  },

  catchTapSort:function(e){
    wx.navigateTo({
      url: "/pages/recommend/recommend?id="+e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.apiRoutes.getBanner,
      header: app.apiHeader,
      success:function(res){
        that.setData({
          imgUrls: res.data.data
        })
      }
    })
    wx.request({
      url: app.apiRoutes.getCategory,
      header: app.apiHeader,
      success:function(res){
        var sortList=[]
        for (var i=0; i < res.data.data.length;i++){
          if(res.data.data[i].level==1){
            if(sortList.length<5){
              sortList.push(res.data.data[i])
            }else{
              break
            }
          }
        }
        that.setData({
          sortArray: sortList
        })
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
