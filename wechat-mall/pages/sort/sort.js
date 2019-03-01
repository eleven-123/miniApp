// pages/sort/sort.js

const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    currId:0,
    currCate:'',
    leftArray:[],
    rightArray:[],
    subCateList:[]
  },
  
  // 获取分类
  getCategory:function () {
    var that = this;
    wx.request({
      url: app.apiRoutes.getCategory,
      header: app.apiHeader,
      success:function(res){
        var leftList=[],
            subCateList=[];
        var data = res.data.data;
        for (var i=0; i < data.length; i++){data
          if(data[i].level==1){
            leftList.push(data[i]);
          }
          if(data[i].pid!=0){
            subCateList.push(data[i]);
          }
        }
        that.setData({
          currId : data[0].id,
          currCate : data[0].name,
          leftArray : leftList,
          subCateList : subCateList
        })
        that.getSubCategory(that.data.currId)
      }
    })
  },
  //获取子分类
  getSubCategory:function(id){
    var self = this;
    var rightList=[];
    var data = self.data.subCateList;
    for (var i=0; i < data.length; i++){
      if(data[i].pid == id){
        rightList.push(data[i]);
      }
    }
    self.setData({
      rightArray : rightList
    })
  },
  //切换分类 
  bindCategoryTab:function(e){
    var self = this;
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    self.setData({
      currId : id,
      currCate : name
    })
    self.getSubCategory(self.data.currId)
  },
  //前往商品列表
  toGoodList:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/goods/goods?id=" + id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    self.getCategory()
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