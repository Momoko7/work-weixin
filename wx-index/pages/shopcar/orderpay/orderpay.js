// pages/menu/food/food.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        windowHeight:'',
        outTime:7200,          //过期时间（自己设定）
        nowTime:0,               //现在的时间戳（JS获取）
        dHour:0,
        dMinute:0,
        /*请求的数据*/
        userInfo:{
            name:'张三',
            phone:'13902342345',
        },
        orderInfo:{
            goodsInfo:[{
                id:1,
                title:'美的抽油烟机',
                single:0,
                goodsUrl:'../../goods/details/details',
                img:'../../../image/orders/order-1.png',
                info:'美的抽油烟机 美观不生锈 吸油高效 精华厨房 完美无缺',
                kinds:'灰色',
                charge:1.00,
                num:1,
                postage:0.00
            },{
                id:2,
                title:'美的冰箱',
                single:0,
                goodsUrl:'../../goods/details/details',
                img:'../../../image/orders/order-1.png',
                info:'美的抽油烟机 美观不生锈 吸油高效 精华厨房 完美无缺',
                kinds:'灰色',
                charge:2.00,
                num:1,
                postage:0.00
            }],
            allCharge:100,
            orderTime:1510552900000, //订单生成时间戳（数据库）
        },
        address:'四川省 成都市 武侯区 桐梓林 凯莱丽景 A座 1208'


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        /*加载完成 计算订单关闭时间*/
        var nowTime = Date.parse(new Date());  //当前时间戳
        var dTime = this.data.outTime-(nowTime -this.data.orderInfo.orderTime)/1000; //时间差
        var dHour = parseInt(dTime/3600);      //时间差-小时
        var dMinute = parseInt((dTime%3600)/60)//时间差-分钟
        if (dTime==0){
            dTime=0
        }
        this.setData({
            dHour:dHour,
            dMinute:dMinute
        })
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