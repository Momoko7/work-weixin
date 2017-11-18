import { url } from './config/config.js'
import { requestPost } from './utils/util.js'
import { requestGet } from './utils/util.js'

//app.js
App({
  onLaunch: function () {
    var _this = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
        success: function (res) {
            if (res.code) {
                //获取openId
                wx.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session',
                    data: {
                        //小程序唯一标识
                        appid: 'wx4edf1039098a45cd',
                        //小程序的 app secret
                        secret: '4358f1030b19a7cf12a422f10ed48c39',
                        grant_type: 'authorization_code',
                        js_code: res.code
                    },
                    method: 'GET',
                    header: { 'content-type': 'application/json'},
                    success: function(openIdRes){
                        console.log("登录成功返回的openId：" + openIdRes.data.openid);
                        // weChatUserInfo.openId = openIdRes.data.openid;
                        // 判断openId是否获取成功
                        if (openIdRes.data.openid != null & openIdRes.data.openid != undefined) {
                            // 有一点需要注意 询问用户 是否授权 那提示 是这API发出的
                            var openid1 = openIdRes.data.openid
                            wx.getUserInfo({
                                success: function (data) {
                                    wx.request({
                                        url: url.postOpenid, //仅为示例，并非真实的接口地址
                                        data: {
                                            code:openid1,
                                        },
                                        header: {
                                            "Content-Type": "application/x-www-form-urlencoded"   // 默认值
                                        },
                                        method:"POST",
                                        success: function(res) {
                                            wx.setStorage({
                                              key:"token",
                                              data:res.data
                                            });
                                        }
                                    })

                                    // 自定义操作
                                    // 绑定数据，渲染页面
                                    that.setData({

                                    });
                                },
                                fail: function (failData) {
                                    console.info("用户拒绝授权");
                                }
                            });
                        }else {
                            console.info("获取用户openId失败");
                        }
                    },
                    fail: function(error) {
                        console.info("获取用户openId失败");
                        console.info(error);
                    }
                })
            }
        }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    }),
    //获取用户定位的缓存信息
    wx.getStorage({
      key: 'userLocationName',
      success: function(res) {
        _this.globalData.userLocation.name = res.data
      },
      fail: function(res) {
      },
      complete: function(res) {
      },
    })
  },
  globalData: {
    userInfo: null,
    userLocation: {
      name:'',
      address:''
    }
  }
})