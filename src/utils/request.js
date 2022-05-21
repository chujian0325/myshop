const request = (path, method = 'GET', data = {}, header = {}) => {
  let url = `https://www.zhengzhicheng.cn/api/public/v1/${path}`
  // 把异步请求放在Promise实例中处理
  let p = new Promise(function (resolve, reject) {
    mpvue.request({
      url,
      method,
      data,
      header,
      success: function (res) {
        resolve(res)
      }
    })
  })
  return p
}
export default request
