//index.js
//获取应用实例
const app = getApp()
import {url} from '../../config/config.js'
import {requestPost} from '../../utils/util.js'
import {requestGet} from '../../utils/util.js'

Page({
    data: {
        //轮播图设置
        seiperSet:{
            indicatorDots: true, //是否显示指示点
            autoplay: true,      //是否自动切换
            duration: 500,       //滑动动画时间
            circular: true,      //是否采用衔接华东
            dotsSeleteColor: '#fd790e',//选中的知识点颜色
            //图片地址
            imgUrls: [
                '../../image/swiper-1.png',
                '../../image/swiper-1.png',
                '../../image/swiper-1.png',
                '../../image/swiper-1.png',
            ],
        },
        //首页菜单数据
        menuLists:[
            [
                {
                    iconPath: '../../image/ic-shundai.png',
                    menuTitle: '校园顺带',
                    url: '../menu/take/take'
                }
                ,{
                iconPath: '../../image/ic-chaoshi.png',
                menuTitle: '校园超市',
                url: '../menu/market/market'
            },{
                //这个是跳转页面的信息
                iconPath: '../../image/ic-meishi.png',
                menuTitle: '校园美食',
                url: '../menu/food/food'
            }, {
                iconPath: '../../image/ic-daren.png',
                menuTitle: '校园达人',
                url: '../menu/master/master'
            }
            ], [{
                iconPath: '../../image/ic-fabu.png',
                menuTitle: '校园发布',
                url: '../menu/publish/publish'
            }, {
                    iconPath: '../../image/ic-yule.png',
                    menuTitle: '校园娱乐',
                    url: '../menu/entertain/entertain'
                }, {
                    iconPath: '../../image/ic-ershou.png',
                    menuTitle: '校园二手',
                    url: '../menu/used/used'
                }, {
                    iconPath: '../../image/ic-kaozheng.png',
                    menuTitle: '校园考证',
                    url: '../menu/exam/exam'
                }
            ]
        ],
        //首页商品展示
        hotGoods:[
            {
                goodsUrl:'../goods/details/details',
                imgUrl: '../image/goods.png',
                info:'富士S1600 富士S1700 点击详情',
                newCharge:'2000',
                oldCharge:'1800'
            },{
                goodsUrl: '../goods/details/details',
                imgUrl: '../image/goods.png',
                info: '富士S1600 富士S1700 点击详情',
                newCharge: '2000',
                oldCharge: '1800'
            }
        ],
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        requestGet({
            url:url.getproductByhot,
            data:{},
            success:function (res) {
                console.log(res.data)
            },
            fail:function (res) {
                console.log(res)
            }
        })
    },
})
