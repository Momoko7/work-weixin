//获取应用实例
const app = getApp()
//引入数据请求模块
import {url} from '../../config/config.js'
import {requestPost} from '../../utils/util.js'
import {requestGet} from '../../utils/util.js'


// pages/menu/market/market.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        height: '', //
        _num:1,     //头部选择器
        cnum:1,     //商店选择标志
        classshow:0,//分类展示标识
        location: app.globalData.userLocation,
        imgUrl:url.imgUrl,//图片
        /*获取的数据们*/
        //店铺列表
        shopList:[],
        goodsList:[],
        //类别列表
        type:[],
        classHeight:'',
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
    //展示分类
    classShow: function () {
        var _this = this
        requestGet({
            url:url.gettypeByshopid,
            data:{
                id:_this.data.cnum
            },
            success:function (res) {
                var lenght = res.data.length>=8?8:res.data.length
                var height = lenght*80 + 'rpx'
                _this.setData({
                    classHeight:height,
                    type:res.data,
                    classshow:!_this.data.classshow
                })
            }
        })
    },
    //展示类别
    typeClick:function (e) {
        var _this = this
        requestGet({
            url:url.getproductBytype,
            data:{
                id:e.target.id
            },
            success:function (res) {
                _this.setData({
                    goodsList:res.data,
                    classshow:0
                })
            }

        })
    },
    //搜索商品
    searchGoods: function(e){
        var name = e.detail.value;
        console.log('搜索商品:'+name)
    },
    // 点击头部导航
    titleClick: function(e){
        var _this = this
        var goodsList = _this.data.goodsList;
        if (e.target.dataset.num == 3){
            //排序
            //根据销量排序
            goodsList.sort(function (a,b) {
                return b.pdtSellNum - b.pdtSellNum
            })
        }
        if(e.target.dataset.num == 1){
            requestGet({
                url:url.getproductByshopid,
                data:{
                    id:_this.data.cnum
                },
                success:function (res) {
                    console.log(res.data)
                    goodsList=res.data
                    _this.setData({
                        goodsList:goodsList,
                    })
                }
            })
        }
        _this.setData({
            goodsList:goodsList,
            _num:e.target.dataset.num,
            classshow:0
        })
    },
    //添加至购物车
    addToCar: function(e){
        requestPost({
            url:url.addGWproduct,
            data:{
                productId:e.currentTarget.dataset.id,
                pdtNum:1,
            },
            success:function (res) {
                console.log(res)
                if (res.statusCode == 201){
                    wx.showToast({
                        title: '添加成功'
                    })
                }else {
                    wx.showLoading({
                        title: '添加失败',
                    })
                    setTimeout(function(){
                        wx.hideLoading()
                    },1000)
                }
            }
        })

        // wx.request({
        //     url: url.addGWproduct,
        //     data: {
        //         token:token,
        //         id:e.currentTarget.dataset.id,
        //         pdtNum:1,
        //         classshow:0
        //     },
        //     header: {
        //         "Content-Type": "application/x-www-form-urlencoded"   // 默认值
        //     },
        //     method:"POST",
        //     success: function(res) {
        //         console.log('cehngge');
        //     }
        // })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getStorage({
            key: 'token',
            success: res => {
                var token = res.data
            }
        });
        var _this = this
        //请求数据
        /*店铺列表*/
        requestGet({
            url:url.getshoplist,
            data:{
                token:12,
            },
            success:function (res) {
                _this.setData({
                    shopList:res.data,
                    cnum:res.data[0].id,
                })
            }
        })
        /*初始化商品展示*/
        requestGet({
            url:url.getproductByshopid,
            data:{
                id:_this.data.cnum
            },
            success:function (res) {
                _this.setData({
                    goodsList:res.data
                })
            }
        })
    },

    /*点击左侧店铺*/
    classClick: function(e){
        var _this = this
        requestGet({
            url:url.getproductByshopid,
            data:{
                token:12,
                id:e.target.dataset.cnum,
            },
            success:function (res) {
                _this.setData({
                    cnum:e.target.dataset.cnum,
                    goodsList:res.data,
                    classshow:0
                })
            }
        })
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

    },


})