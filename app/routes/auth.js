const router = require('express').Router()
const getJsApiData = require('../libs/getJsApiData')
const config = require('../../config')

router.get('/auth', function (req, res) {
  var clientUrl = 'http://' + (config.hostname || req.hostname) + req.url
  getJsApiData(clientUrl).then(data => {
    res.render('base.html', {signature: data[0], timestamp: data[1], nonceStr: data[2], appId: config.appId})
  })
})

module.exports = router
