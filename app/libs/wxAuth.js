const url = require('url')

// import config
const config = require('../../config')
const sha1 = require('./util').sha1

function wechatAuth (req, res) {
  var query = url.parse(req.url, true).query
  var signature = query.signature
  var echostr = query.echostr
  var timestamp = query['timestamp']
  var nonce = query.nonce

  var reqArray = [nonce, timestamp, config.token]

  // 对数组进行字典排序
  reqArray.sort()
  var sortStr = reqArray.join('')
  var sha1Str = sha1(sortStr)

  if (signature === sha1Str) {
    res.end(echostr)
  } else {
    res.end('false')
    console.log('授权失败!')
  }
}

module.exports = wechatAuth
