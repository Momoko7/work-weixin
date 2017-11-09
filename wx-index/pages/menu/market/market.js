//获取应用实例
const app = getApp()

// pages/menu/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    _num:1,
    cnum:1,
    classLists: [
      {
        num: 1,
        title: '美食广场1',
      },
      {
        num: 2,
        title: '美食广场2',
      },
      {
        num: 3,
        title: '美食广场3',
      },
      {
        num: 4,
        title: '美食广场4',
      },
      {
        num: 5,
        title: '美食广场5',
      },
    ],
    goodsList:[
      {
        name: '伊利纯牛奶 250ml',
        url: '../../goods/details/details',
        newCharge: '3.0',
        oldCharge: '4.0'
      }, {
        name: '伊利纯牛奶 500ml',
        url: '../../goods/details/details',
        newCharge: '5.0',
        oldCharge: '6.0'
      }, {
        name: '伊利纯牛奶 250ml',
        url: '../../goods/details/details',
        newCharge: '3.0',
        oldCharge: '4.0'
      }, {
        name: '伊利纯牛奶 250ml',
        url: '../../goods/details/details',
        newCharge: '3.0',
        oldCharge: '4.0'
      }, {
        name: '伊利纯牛奶 250ml',
        url: '../../goods/details/details',
        newCharge: '3.0',
        oldCharge: '4.0'
      }, {
        name: '伊利纯牛奶 250ml',
        url: '../../goods/details/details',
        newCharge: '3.0',
        oldCharge: '4.0'
      }, {
        name: '伊利纯牛奶 250ml',
        url: '../../goods/details/details',
        newCharge: '3.0',
        oldCharge: '4.0'
      }, {
        name: '伊利纯牛奶 250ml',
        url: '../../goods/details/details',
        newCharge: '3.0',
        oldCharge: '4.0'
      },
    ],
    location: app.globalData.userLocation
  },
  // 获取地址 + 存入缓存 
  csLocation:function(){
    var _this = this
    wx.chooseLocation({
      success: function(res) {
        wx:wx.setStorage({
          key: 'userLocationName',
          data: res.name,
          success: function(res) {
            console.log('存入位置信息成功')
          },
          fail: function(res) {
            console.log('存入位置信息失败')
          },
          complete: function(res) {},
        })
        app.globalData.userLocation.name = res.name;
        app.globalData.userLocation.address = res.address;
        _this.setData({
          location: {
            name: res.name,
            address: res.address
          }
        })
      },
      cancel: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //搜索商品
  searchGoods: function(e){
    var name = e.detail.value;
    console.log('搜索商品:'+name)
  },
  // 点击头部导航
  titleClick: function(e){
    this.setData({
      _num:e.target.dataset.num
    })
  },
  // 点击左侧分类
  classClick: function(e){
    console.log(e.target.dataset.cnum)
    this.setData({
      cnum:e.target.dataset.cnum
    })
  },
  addToCar: function(){
    console.log('添加商品')
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
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        var y = res.windowHeight;
        y = y+'px';
        _this.setData({height:y})
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(app)
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