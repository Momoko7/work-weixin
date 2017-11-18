/*
* 小程序配置文件
* */
//上线路径
// var urlBase = ""
//测试环境
var urlBase = "http://192.168.5.10:8096"
var urlApi = `${urlBase}/app/user`
var url = {
    //图片服务器域名
    imgUrl:'',
    //域
    urlBase:urlBase,
    //api
    urlApi:urlApi,
    //发送openID给后端
    postOpenid:`${urlApi}/postOpenid`,
    //热销商品查询
    getproductByhot:`${urlApi}/getproductByhot`,
    //获取商铺列表
    getshoplist:`${urlApi}/getshoplist`,
    //通过店铺id获取商品列表
    getproductByshopid:`${urlApi}/getproductByshopid`,
    //查询商品类别列表
    gettypeByshopid:`${urlApi}/gettypeByshopid`,
    //通过类别id查询商品
    getproductBytype:`${urlApi}/getproductBytype`,
    //通过id查询商品详情
    getProductByid:`${urlApi}/getProductByid`,

    //通过用户id查询订单
    getorderlistByUid:`${urlApi}/getorderlistByUid`,
    //添加订单
    postorderByuid:`${urlApi}/postorderByuid`,
    //修改订单
    updateOrderByid:`${urlApi}/updateOrderByid`,
    //取消订单
    deteleorderByid:`${urlApi}/deteleorderByid`,

    //用户添加地址
    userAddaddress:`${urlApi}/userAddaddress`,

    //通过用户id查询购物车列表
    getTrolleyByuserid:`${urlApi}/getTrolleyByuserid`,
    //添加商品到购物车
    addGWproduct:`${urlApi}/postGWCProductByUidUproductId`,
    //删除购物车商品
    deleteGWproduct:`${urlApi}/deleteGWproductByid`,
    //修改购物车商品数量?????????????????????
    updateGWCByUid:`${urlApi}/updateGWCByUid`,
}

module.exports = {
    url: url
}