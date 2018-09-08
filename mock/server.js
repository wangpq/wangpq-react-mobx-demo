const axios = require('axios')
// 通过body-parser 对象创建中间件，当接收到客户端请求时所有的中间件都会给req.body 添加属性
const bodyParser = require('body-parser')
const express = require('express')
const apiRoutes = express.Router()
const app = express()
app.use('/api', apiRoutes)
app.use(bodyParser.urlencoded({ extended: true }))

/* wangpq 新增接口 start*/
const product=require('./product.json') 

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 代理歌单列表
app.get('/api/getProductList', function (req, res) {
  res.json({
    data : product
  })
})

app.listen(9093, function () {
  console.log('node端口打开的是 9093')
})