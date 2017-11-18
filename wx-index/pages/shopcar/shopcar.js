import { url } from '../../config/config.js'
import { requestPost } from '../../utils/util.js'
import { requestGet } from '../../utils/util.js'

// pages/shopcar/shopcar.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        windowHeight:'',
        allCharge:0,
        myShopCar:[]
    },
    //点击商品ok键
    goodsClick: function (e) {
        var _this = this;
        var allCharge = _this.data.allCharge;   //合计
        var gnum = e.currentTarget.dataset.gnum;//第gnum个商品
        var myShopCar = _this.data.myShopCar[gnum] //点击的商品对象
        var thisGoods = myShopCar.goodsInfo   //点击的商品详细信息对象
        //如果点击之前 该商品已被选择
        if(myShopCar.single){
            allCharge = allCharge - thisGoods.pdtMyPrice*myShopCar.goodsNum
        }else {
            allCharge = allCharge + thisGoods.pdtMyPrice*myShopCar.goodsNum
        }
        _this.data.myShopCar[gnum].single = !_this.data.myShopCar[gnum].single;
        _this.setData({
            myShopCar:_this.data.myShopCar,
            allCharge:allCharge
        })
    },
    //删除
    deleteGoods:function (e) {
        var pid = e.currentTarget.dataset.pid
        var gnum = e.currentTarget.dataset.gnum
        var _this = this
        var myShopCar = _this.data.myShopCar
        requestPost({
            url:url.deleteGWproduct,
            data:{
                id:pid
            },
            success:function (res) {
                console.log(res)
                if (res.statusCode == 201){
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success',
                        duration: 1000
                    })
                    myShopCar[gnum].show = 0;
                    _this.setData({
                        myShopCar:myShopCar
                    })
                }
            }
        })
    },
    //结算
    payClick: function (e) {
        console.log('先判断再结算....')
        wx.navigateTo({
          url: './orderpay/orderpay'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var _this = this
        wx.getSystemInfo({
            success: function(res) {
                _this.setData({
                    windowHeight:res.windowHeight+'px'
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
        console.log('12')
        var _this = this
        _this.setData({
            allCharge:0
        })
        //获取购车信息
        requestGet({
            url:url.getTrolleyByuserid,
            data:{},
            success:function (res) {
                var myShopCar = []
                var resData = res.data
                for(let i=0; i<resData.length; i++){
                    myShopCar.push({})
                    myShopCar[i].goodsNum = resData[i].pdtNum
                    myShopCar[i].single = 0
                    myShopCar[i].show = 1
                    myShopCar[i].id = resData[i].id
                    requestGet({
                        url:url.getProductByid,
                        data:{
                            id:resData[i].productId
                        },
                        success:function (res) {
                            myShopCar[i].goodsInfo = res.data
                            _this.setData({
                                myShopCar:myShopCar
                            })
                        },
                    })
                }
            }
        })
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