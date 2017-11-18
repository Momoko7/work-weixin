//获取应用实例
const app = getApp()
//引入数据请求模块
import {url} from '../../../config/config.js'
import {requestPost} from '../../../utils/util.js'
import {requestGet} from '../../../utils/util.js'

// pages/goods/details/details.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        test:123,
        //轮播图地址
        swiperImgs: [],
        //商品详情
        goodsInfo:{},
        //商品参数
        goodsParam:[],
        //售后信息  暂替 后端还未提供
        serviceInfo:[{
            title:'退货无忧',
            content:'退货条件：在商品签收15天内，商品包装完好、外观完好、配件齐全、合格证/保修卡/说明书无要求，可提出退货申请。'
        },{
            title:'退货无忧',
            content:'退货条件：在商品签收15天内，商品包装完好、外观完好、配件齐全、合格证/保修卡/说明书无要求，可提出退货申请。'
        },{
            title:'退货无忧',
            content:'退货条件：在商品签收15天内，商品包装完好、外观完好、配件齐全、合格证/保修卡/说明书无要求，可提出退货申请。'
        },{
            title:'退货无忧',
            content:'退货条件：在商品签收15天内，商品包装完好、外观完好、配件齐全、合格证/保修卡/说明书无要求，可提出退货申请。'
        }],
        //配送地址
        address:app.globalData.userLocation,
        cnum:1
    },
    buildOrder:function () {
        console.log(this.data.goodsInfo)
    },
    //点击商品详情切换内容
    infoClick: function(e){
        var _this=this;
        var num = e.currentTarget.dataset.num
        _this.setData({
            cnum:num
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //获取屏幕可视高
        var _this = this
        wx.getSystemInfo({
            success: function(res) {
                _this.setData({
                    windowHeight:res.windowHeight+'px'
                })
            }
        })
        //请求数据
        requestGet({
            url:url.getProductByid,
            data:{
                id:options.id
            },
            success:function (res) {
                console.log(res.data)
                var swiperImgs = res.data.pdtMinImg.split(',')
                console.log(res.data.parameter)
                var goodsParam = JSON.parse(res.data.parameter)
                _this.setData({
                    //图片
                    swiperImgs:swiperImgs,
                    goodsInfo:res.data,
                    goodsParam:goodsParam
                })
            }
        })
    },
    /*加入购物车*/

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
        console.log(this.data.goodsInfo)
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})