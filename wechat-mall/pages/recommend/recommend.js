// pages/sort/sort.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [],
    goodsList:[],
    currentId:0
  },

  // 导航切换监听
  navbarTap: function (e) {
    this.setData({
      currentId: e.currentTarget.dataset.id
    })
    this.getGoodsList(e.currentTarget.dataset.id)
  },
  // 详情页
  toGoodsDetails:function(e){
    wx.navigateTo({
      url: "/pages/goods/goods?id=" + e.currentTarget.dataset.id
    })
  },
  //获取navbar
  getTopNavBar:function(){
    var that = this;
    wx.request({
      url: app.apiRoutes.getCategory,
      header: app.apiHeader,
      success:function(res){
        var sortList=[]
        for (var i=0; i < res.data.data.length;i++){
          if(res.data.data[i].level==1){
            sortList.push(res.data.data[i])
          }
        }
        that.setData({
          navbar: sortList
        })
      }
    })
  },
  // 获取商品列表
  getGoodsList: function (cateId){
    var that = this;
    wx.request({
      url: app.apiRoutes.getGoodsList,
      header: app.apiHeader,
      data:{
        categoryId:cateId,
        recommendStatus:1
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    that.setData({
      currentId: options.id
    })
    that.getGoodsList(options.id)
    that.getTopNavBar()
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