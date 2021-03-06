//获取应用实例
const app = getApp()

// pages/user/user.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        userInfo:{
            userInfo: {},
        },
        userOrder:{
            unpaynum:0,
            unsendnum:9,
            untakenum:5,
            uncommentnum:3
        },
        showLists: [
            {
                iconUrl: '../../image/user/ic-wdzh.png',
                title: '我的账户',
                url: './account/account'
            },
            {
                iconUrl: '../../image/user/ic-wdyh.png',
                title: '我的优惠',
                url: ''
            },
            {
                iconUrl: '../../image/user/ic-grxx.png',
                title: '个人信息',
                url: './userinfo/userinfo'
            },
            {
                iconUrl: '../../image/user/ic-sdfw.png',
                title: '顺带服务',
                url: ''
            },
            {
                iconUrl: '../../image/user/ic-swzl.png',
                title: '失物招领',
                url: ''
            },
            {
                iconUrl: '../../image/user/ic-zkzx.png',
                title: '自考中心',
                url: ''
            },
            {
                iconUrl: '../../image/user/ic-wdsc.png',
                title: '我的收藏',
                url: ''
            },
            {
                iconUrl: '../../image/user/ic-xtsz.png',
                title: '系统设置',
                url: ''
            }
        ]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
            })
        }
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
