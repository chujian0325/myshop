const request = (url, method = 'GET', data = {}, header = {}) => {
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
