// pages/user/orders/orders.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        cnum:1,
        /*订单数据*/
        unpayOrder:[{
            id:1,
            title:'美的抽油烟机',
            goodsUrl:'../../goods/details/details',
            single:0,
            img:'../../../image/orders/order-1.png',
            info:'美的抽油烟机 美观不生锈 吸油高效 精华厨房 完美无缺',
            kinds:'灰色',
            charge:4000.00,
            num:1,
            postage:8.00
        },{
            id:2,
            title:'美的抽油烟机',
            goodsUrl:'../../goods/details/details',
            single:0,
            img:'../../../image/orders/order-1.png',
            info:'美的抽油烟机 美观不生锈 吸油高效 精华厨房 完美无缺',
            kinds:'灰色',
            charge:4000.00,
            num:1,
            postage:8.00
        },{
            id:3,
            title:'美的抽油烟机',
            goodsUrl:'../../goods/details/details',
            single:0,
            img:'../../../image/orders/order-1.png',
            info:'美的抽油烟机 美观不生锈 吸油高效 精华厨房 完美无缺',
            kinds:'灰色',
            charge:4000.00,
            num:1,
            postage:8.00
        }]

    },
    //切换分类
    titleClick: function (e) {
        var num = e.currentTarget.dataset.num;
        this.setData({
            cnum:num
        })
    },
    //*待付款*/
    //订单选择
    orderChoose: function (e) {
        var index = e.currentTarget.dataset.index;
        this.data.unpayOrder[index].single = !this.data.unpayOrder[index].single;
        this.setData({
            unpayOrder:this.data.unpayOrder
        })
    },
    cancelOrder: function(){
        console.log('订单取消')
    },
    payOrder: function(){
        console.log('订单支付')
    },
    /*待发货*/
    remindSend: function(){
        console.log('提醒发货')
    },
    /*待收货*/
    confirmReceipt: function () {
        console.log('确认收货')
    },
    viewLogistics:function () {
        console.log('查看物流')
    },
    /*待评论*/
    goodsEvaluate:function () {
        console.log('商品评价')
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            cnum:options.cnum
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