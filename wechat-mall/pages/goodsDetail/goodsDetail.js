// pages/goods/goods.js
var WxParse = require('../../wxParse/wxParse.js');

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //商品信息
    basicInfo:{},
    pics:[],
    content:{},
    goodsNum: 1, //商品数量
    
    // 轮播设置
    indicatorDots: true,
    indicatorColor: "#b8f3ee",
    indicatorAactiveColor: "#36B9AF",
    autoplay: true,
    interval: 5000,
    duration: 300,
    
    showDialog:false,
  },
  //预览图片
  previewImage:function(e){
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.goodsImgUrls // 需要预览的图片http链接列表  
    })
  },
  // 弹框 -显示
  toggleDialog: function(e){
    var that = this;
    that.setData({
      showDialog:true
    })
  },
  // 弹框 -隐藏
  closeDialog: function(e){
    var that = this;
    that.setData({
      showDialog: false
    })
  },

  //选择数量
  goodAdd:function(e){
    var that = this;
    var goodCount = that.data.goodsNum + 1;
    that.setData({//商品数量+1
      goodsNum: goodCount
    })
  },
  goodReduce: function (data) {
    var that = this;
    var goodCount = that.data.goodsNum - 1;
    that.setData({//商品数量-1
      goodsNum: goodCount
    })
  },

  /**
 * 加入购物车
 */
  addCart: function (data) {
    var that = this;
    var thatData = that.data;
    var goods_id = thatData.goods.goodsId; //good_id  商品id
    var goods_name = thatData.goods.goodsName; //good_name 商品名称
    var goods_price = thatData.goods.goodsPrice; //goods_price  价格
    var goods_num = thatData.goodsNum; //goods_num  商品数量
    
    var obj={
      id:goods_id,
      name:goods_name,
      price:goods_price,
      num:goods_num
    }
    console.log(obj);
    wx.setStorage(obj)

    that.setData({
      showDialog: false
    })
    wx.showToast({
      title: '添加成功！',
      duration: 2000,
    })
  },
  //立即购买
  saveOrder: function (data) {
    var goods_id = thatData.good.goodsId; //good_id  商品id
    var goods_name = thatData.good.goodsName; //good_name 商品名称
    var goods_price = thatData.goods.goodsPrice; //goods_price  价格
    var goods_num = thatData.goodsNum; //goods_num  商品数量

    console.log(goods_id, goods_name, goods_price, goods_num);

    var that = this;
    var thatData = that.data;

    that.setData({
      showDialog: false
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var goodsId = options.id;
    wx.request({
      url: app.apiRoutes.getGoodsDetail,
      header: app.apiHeader,
      data:{
        id:goodsId
      },
      success:function(res){
        var data = res.data.data;
        console.log(data)
        WxParse.wxParse('content', 'html', data.content, that,5);
        that.setData({
          basicInfo:data.basicInfo,
          pics:data.pics,
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