const app = getApp();

// pages/goods/details/details.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        //轮播图
        seiperImgs: [
            '../../../image/swiper-1.png',
            '../../../image/swiper-1.png',
            '../../../image/swiper-1.png',
            '../../../image/swiper-1.png',
        ],
        //商品详情
        goodsInfo:{
            info:'德清 欧式新款双贵妃布艺沙发组合',
            oldCharge:10,
            newCharge:20,
            sailedNum:10,
            goodsDetailImg: [
                '../../../image/goods/1.jpg',
                '../../../image/goods/2.jpg',
                '../../../image/goods/3.jpg',
            ],
            goodsParam: {
                '品牌':'德清',
                '型号':'110',
                '是否可定制':'否',
                '是否组装':'否',
                '材质':'人造板',
                '使用对象':'所有人群'
            }
        },
        //售后信息
        serviceInfo:[{
            imgUrl:'../../../image/goods/img-hh.png',
            title:'退货无忧',
            content:'退货条件：在商品签收15天内，商品包装完好、外观完好、配件齐全、合格证/保修卡/说明书无要求，可提出退货申请。'
        },{
            imgUrl:'../../../image/goods/img-tk.png',
            title:'退货无忧',
            content:'退货条件：在商品签收15天内，商品包装完好、外观完好、配件齐全、合格证/保修卡/说明书无要求，可提出退货申请。'
        },{
            imgUrl:'../../../image/goods/img-hh.png',
            title:'退货无忧',
            content:'退货条件：在商品签收15天内，商品包装完好、外观完好、配件齐全、合格证/保修卡/说明书无要求，可提出退货申请。'
        },{
            imgUrl:'../../../image/goods/img-tk.png',
            title:'退货无忧',
            content:'退货条件：在商品签收15天内，商品包装完好、外观完好、配件齐全、合格证/保修卡/说明书无要求，可提出退货申请。'
        }],
        //配送地址
        address:app.globalData.userLocation,
        cnum:1
    },

    //点击商品详情切换内容
    infoClick: function(e){
        var _this=this;
        var num = e.currentTarget.dataset.num
        console.log(e)
        _this.setData({
            cnum:num
        })
        console.log(this.data.cnum)
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
        console.log(this.data.goodsInfo.goodsParam)
        console.log(this.data.goodsInfo.goodsParam.key)
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