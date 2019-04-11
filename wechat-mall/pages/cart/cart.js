// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAllchecked:true,  //全选状态
    isEditStatus:false, //编辑状态
    cart:[]
  },

  //全选、非全选
  allSelect:function(e){
    var that = this;
    var cart=that.data.cart;
    var checked=!that.data.isAllchecked;
    cart.map((item,index)=>{
      item.isChecked=checked
    })
    that.setData({
      isAllchecked: checked,
      cart:cart
    })
    that.getTotal()
  },
  //勾选事件
  switchSelect:function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var cart=that.data.cart;
    cart.map((item,index)=>{
      if(item.id==id){
        item.isChecked=!item.isChecked
      }
    })
    that.setData({
      cart:cart
    })
    that.isAllChecked()
    that.getTotal()
  },
  // 判断是否全选
  isAllChecked:function(){
    var that = this;
    var cart=that.data.cart;
    var len = cart.length;
    var lenCount=0;
    cart.map((item,index)=>{
      item.isChecked?lenCount++:lenCount
    })
    var checked=len==lenCount?true:false;
    that.setData({
      isAllchecked: checked,
    })
  },
  // 总计
  getTotal:function () {
    var that = this;
    var cart=that.data.cart;
    var buyList=[];
    var total=0,count=0;
    cart.map((item,index)=>{
      item.isChecked?buyList.push(item):buyList;
    })
    buyList.map((item,index)=>{
      total+=item.num*item.price
      count+=item.num
    })
    that.setData({
      totalSum:total.toFixed(2),
      totalCount:count
    })
  },

  // 商品数量-减
  goodsReduce:function(e){
    var id=e.currentTarget.dataset.id;
    var cart = this.data.cart;
    cart.map((item,index)=>{
      if(item.id===id){
        item.num-=1;
      }
    })
    this.setData({
      cart:cart
    })
    wx.setStorageSync('cart',cart)
    this.getTotal()
  },
  // 商品数量-加
  goodsAdd:function(e){
    var id=e.currentTarget.dataset.id;
    var cart = this.data.cart;
    cart.map((item,index)=>{
      if(item.id===id){
        item.num+=1;
      }
    })
    this.setData({
      cart:cart
    })
    wx.setStorageSync('cart',cart)
    this.getTotal()
  },
  // 编辑
  editCart:function(){
    var cart = this.data.cart;
    cart.map((item,index)=>{
      item.isChecked=false
    })
    this.setData({
      cart:cart,
      isEditStatus:true,
    })
    this.isAllChecked()
  },
  // 完成编辑
  editComplete:function(){
    this.setData({
      isEditStatus:false,  
    })
    var cart = this.data.cart;
    cart.map((item,index)=>{
      item.isChecked=true
    })
    this.setData({
      cart:cart
    })    
    wx.setStorageSync('cart',cart)
    this.isAllChecked()
    this.getTotal()
  },
  // 删除商品
  deleteCart:function(){    
    var cart = this.data.cart;
    var newCart=[];
    cart.map((item,index)=>{
      if(!item.isChecked){
        newCart.push(item)
      }
    })
    this.setData({
      cart:newCart
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    var cart = wx.getStorageSync('cart') || [];
    console.log(cart)
    this.setData({
      cart:cart
    })
    this.isAllChecked()
    this.getTotal()
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