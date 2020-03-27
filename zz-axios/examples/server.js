const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
// 这俩中间件什么原理呢
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
// 哦，好像还是头一次见这么用 webpack 的，以往只是打包，这里是在服务端用上了。
// 有一点费解，噢，这个是服务端的 webpack-dev-server 吧。
// 我靠，要研究的东西好多啊，babel，webpakc，插件机制，loader 机制，涉及编译原理，设计模式。。
// 然后 node，react/vue，和一百个库我丢，扑街
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
// app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

registerSimpleRouter()

// registerBaseRouter()

// registerErrorRouter()

// registerExtendRouter()

// registerInterceptorRouter()

// registerConfigRouter()

app.use(router)

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})

function registerSimpleRouter () {
  router.get('/simple/get', function(req, res) {
    res.json({
      msg: `hello world`
    })
  })
}

function registerBaseRouter () {
  router.get('/base/get', function(req, res) {
    res.json(req.query)
  })

  router.post('/base/post', function(req, res) {
    res.json(req.body)
  })

  router.post('/base/buffer', function(req, res) {
    let msg = []
    req.on('data', (chunk) => {
      if (chunk) {
        msg.push(chunk)
      }
    })
    req.on('end', () => {
      let buf = Buffer.concat(msg)
      res.json(buf.toJSON())
    })
  })
}

function registerErrorRouter () {
  router.get('/error/get', function(req, res) {
    if (Math.random() > 0.5) {
      res.json({
        msg: `hello world`
      })
    } else {
      res.status(500)
      res.end()
    }
  })

  router.get('/error/timeout', function(req, res) {
    setTimeout(() => {
      res.json({
        msg: `hello world`
      })
    }, 3000)
  })
}

function registerExtendRouter () {
  router.get('/extend/get', function(req, res) {
    res.json({
      msg: 'hello world'
    })
  })

  router.options('/extend/options', function(req, res) {
    res.end()
  })

  router.delete('/extend/delete', function(req, res) {
    res.end()
  })

  router.head('/extend/head', function(req, res) {
    res.end()
  })

  router.post('/extend/post', function(req, res) {
    res.json(req.body)
  })

  router.put('/extend/put', function(req, res) {
    res.json(req.body)
  })

  router.patch('/extend/patch', function(req, res) {
    res.json(req.body)
  })

  router.get('/extend/user', function(req, res) {
    res.json({
      code: 0,
      message: 'ok',
      result: {
        name: 'jack',
        age: 18
      }
    })
  })
}

function registerInterceptorRouter() {
  router.get('/interceptor/get', function(req, res) {
    res.end('hello')
  })
}

function registerConfigRouter() {
  router.post('/config/post', function(req, res) {
    res.json(req.body)
  })
}

