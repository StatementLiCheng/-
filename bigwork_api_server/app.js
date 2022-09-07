// 导入express模块
var express = require('express')

// 导入router模块
var router = require("./router")

// 创建express对象
var app = express()

//静态资源的设置
var path = require("path")
var staticPath = path.join(process.cwd(), 'views', 'static')
app.use('/static', express.static(staticPath))

// 设置解析post数据的参数
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// 设置请求头为允许跨域
// 前台跨域访问后台资源，进行的axios跨域设置
app.use('/api/*', function (req, res, next) {
    // 设置请求头为允许跨域
    res.header('Access-Control-Allow-Origin', '*')
    // 设置服务器支持的所有头信息字段
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
    )
    // 设置服务器支持的所有跨域请求的方法
    res.header('Access-Control-Allow-Methods', 'POST,GET')
    // next()方法表示进入下一个路由
    next()
})

// 加载使用router
app.use(router)

// 设置监听端口
app.listen(3000,()=>{
    console.log('服务启动成功！http://localhost:3000');
})

