//index.js
//获取应用实例
const app = getApp()

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
          iconPath: '../../image/ic-chaoshi.png',
          menuTitle: '校园考证',
          url: '../menu/exam/exam'
        }, {
          iconPath: '../../image/ic-chaoshi.png',
          menuTitle: '校园超市',
          url: '../menu/market/market'
        }, {
          iconPath: '../../image/ic-chaoshi.png',
          menuTitle: '校园美食',
          url: '../menu/food/food'
        }, {
          iconPath: '../../image/ic-chaoshi.png',
          menuTitle: '校园达人',
          url: '../menu/master/master'
        }
      ],[
        {
          iconPath: '../../image/ic-chaoshi.png',
          menuTitle: '校园发布',
          url: '../menu/publish/publish'
        }, {
          iconPath: '../../image/ic-chaoshi.png',
          menuTitle: '校园顺带',
          url: '../menu/take/take'
        }, {
          iconPath: '../../image/ic-chaoshi.png',
          menuTitle: '校园娱乐',
          url: '../menu/entertain/entertain'
        }, {
          iconPath: '../../image/ic-chaoshi.png',
          menuTitle: '校园二手',
          url: '../menu/used/used'
        }
      ]
    ],
    //首页商品展示
    goodsList:[
      {
        title:'热卖品牌',
        iconUrl:'../../image/ic-s-hot.png',
        moreUrl:'../goods/list/list',
        goods:[
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
        ]
      },{
        title: '最新上架',
        iconUrl: '../../image/ic-s-new.png',
        moreUrl: '../goods/list/list',
        goods: [
          {
            goodsUrl: '../goods/details/details',
            imgUrl: '../image/goods.png',
            info: '富士S1600 富士S1700 点击详情',
            newCharge: '2000',
            oldCharge: '1800'
          }, {
            goodsUrl: '../goods/details/details',
            imgUrl: '../image/goods.png',
            info: '富士S1600 富士S1700 点击详情',
            newCharge: '2000',
            oldCharge: '1800'
          }
        ]
      }
    ]
  }
})
