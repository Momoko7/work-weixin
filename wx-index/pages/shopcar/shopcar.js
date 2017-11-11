// pages/shopcar/shopcar.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        windowHeight:'',
        allCharge:0,
        myShopCar:[{
            shopName:'美的旗舰店',
            single:0,
            goodsInfo:[{
                id:1,
                title:'美的抽油烟机',
                single:0,
                goodsUrl:'../goods/details/details',
                img:'../../image/orders/order-1.png',
                info:'美的抽油烟机 美观不生锈 吸油高效 精华厨房 完美无缺',
                kinds:'灰色',
                charge:1.00,
                num:1,
                postage:0.00
            },{
                id:2,
                title:'美的冰箱',
                single:0,
                goodsUrl:'../goods/details/details',
                img:'../../image/orders/order-1.png',
                info:'美的抽油烟机 美观不生锈 吸油高效 精华厨房 完美无缺',
                kinds:'灰色',
                charge:2.00,
                num:1,
                postage:0.00
            }]
        }, {
            shopName: '国美旗舰店',
            single:0,
            goodsInfo: [{
                id: 33,
                title: '国美抽油烟机',
                single:0,
                goodsUrl: '../goods/details/details',
                img: '../../image/orders/order-1.png',
                info: '美的抽油烟机 美观不生锈 吸油高效 精华厨房 完美无缺',
                kinds: '灰色',
                charge: 3.00,
                num: 1,
                postage: 0.00
            }]
        }]
    },
    //点击商店ok键
    shopClick: function (e) {
        /*
        * 进来先判断商店里的商品是否已被全选
        * --是：遍历商品 将该商店里所有商品的总价从合计里减去
        * --否：不是全选，他会将没有选上的选上
        *       遍历商品 判断商品是否已被选
        *       --否 则加上该商品的价钱到总价
        * */
        var _this = this;
        var myShopCar = _this.data.myShopCar      //这个商店
        var snum = e.currentTarget.dataset.snum;  //商店索引
        var allCharge = _this.data.allCharge      //合计
        var gLength = myShopCar[snum].goodsInfo.length //商品数组长度
        /*判断商店全选否*/
        if (myShopCar[snum].single){
            /*如果已经被全选-->取消全选*/
            for (var i=0; i<gLength; i++){
                var gCharge = myShopCar[snum].goodsInfo[i].charge
                var gnum = myShopCar[snum].goodsInfo[i].num
                var postage = myShopCar[snum].goodsInfo[i].postage
                allCharge = allCharge - gCharge*gnum - postage
                myShopCar[snum].goodsInfo[i].single = 0;
            }
        }else {
            /*如果未被全选-->全选*/
            for (var i=0; i<gLength; i++){
                var single = myShopCar[snum].goodsInfo[i].single
                var gCharge = myShopCar[snum].goodsInfo[i].charge
                var gnum = myShopCar[snum].goodsInfo[i].num
                var postage = myShopCar[snum].goodsInfo[i].postage
                if (!single){
                    allCharge = allCharge + gCharge*gnum + postage
                }
                myShopCar[snum].goodsInfo[i].single = 1;
            }
        }
        myShopCar[snum].single = !myShopCar[snum].single
        _this.setData({
            myShopCar:myShopCar
        })
        _this.setData({
            allCharge:allCharge
        })
    },
    //点击商品ok键
    goodsClick: function (e) {
        var _this = this;
        var allCharge = _this.data.allCharge;
        var snum = e.currentTarget.dataset.snum;
        var gnum = e.currentTarget.dataset.gnum;
        var gLength = _this.data.myShopCar[snum].goodsInfo.length;
        //为了方便取数据
        var thisGoods = _this.data.myShopCar[snum].goodsInfo[gnum];
        if(_this.data.myShopCar[snum].goodsInfo[gnum].single){
            allCharge = allCharge - thisGoods.charge - thisGoods.postage
        }else {
            allCharge = allCharge + thisGoods.charge + thisGoods.postage
        }
        _this.data.myShopCar[snum].goodsInfo[gnum].single = !_this.data.myShopCar[snum].goodsInfo[gnum].single;
        _this.setData({
            myShopCar:_this.data.myShopCar
        })
        var sLength = 0
        //遍历购物车中同一商城的商品
        for(var i=0; i<gLength; i++){
            var goods = _this.data.myShopCar[snum].goodsInfo[i]
            if (goods.single){
                sLength++
            }else {
            }
        }
        if (sLength == gLength){
            _this.data.myShopCar[snum].single = 1
        }else {
            _this.data.myShopCar[snum].single =0
        }
        _this.setData({
            myShopCar:_this.data.myShopCar
        })
        _this.setData({
            allCharge:allCharge
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
        console.log('页面显示')
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