var path = require('path')
var express = require('express')
var session = require('express-session')
var flash = require('connect-flash')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('../build/webpack.prod.conf')
  : require('../build/webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

// 「module.parent.exports」を利用できるようにしておく
var app = module.exports = express()
app.set('view engine', 'ejs')  // templateエンジン
app.use(flash())  // passportの失敗時の原因を取得するのに利用
app.use(require('body-parser').urlencoded({ extended: true }))  // postパラメータの受付
// app.use(session({ secret: 'hoge', resave: false, saveUninitialized: false }))
var RedisStore = require('connect-redis')(session)
app.use(session({
  secret: 'hoge',
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({host:'localhost',port:6379})
}))

require('./database').connect()
require('../src/server-config/passport')
require('../src/server-config/fileupload')

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var server = require('./socketio')
module.exports = server.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
