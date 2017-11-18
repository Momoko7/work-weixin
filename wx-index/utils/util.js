const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

//获取缓存中的token值
var token = ''
wx.getStorage({
  key: 'token',
  success: res => {
    token = res.data
  }
});

function request(par) {
    par.data.token = token
    wx.request({
        url:par.url,
        data:par.data,
        method:par.method,
        success:par.success,
        fail:par.fail,
        header:par.header
    })
}
/*
* 功能：request get
* 参数列表：
* url(请求地址) data(发送数据) success(成功回调)
* 默认参数：请求方式（get）
* */
function requestGet(param) {
    let option = {
        url:param.url,
        data:param.data,
        success:param.success,
        fail:param.fail,
        error:param.error,
        complete:param.complete,
        method:'GET',
        header: {'content-type': 'application/json'}
    }
    request(option)
}

/*
* 功能：request post
* 参数列表：
* url(请求地址) data(发送数据) success(成功回调)
* 默认参数：请求方式（get）
* */
function requestPost(param) {
    let option = {
        url:param.url,
        data:param.data,
        header:param.header,
        success:param.success,
        fail:param.fail,
        error:param.error,
        complete:param.complete,
        method:'POST',
        header: {"content-type": "application/x-www-form-urlencoded"},
    }
    request(option)
}

module.exports = {
    formatTime: formatTime,
    requestGet:requestGet,
    requestPost:requestPost
}




