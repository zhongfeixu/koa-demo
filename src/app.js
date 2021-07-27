const Koa = require('koa');
const fs = require('fs')
const path = require('path')
const serve = require('koa-static');
const app = new Koa();
const Router = require("./routers/index")

app.use(serve(path.join(__dirname, './asset'),  // 开放的文件夹 __dirname为当前运行文件的目录  目前看来 只能开放文件夹 无法开放单独一个文件
  {
    index: false,       // 默认为true  访问的文件为index.html  可以修改为别的文件名或者false
    hidden: false,      // 是否同意传输隐藏文件
    defer: true,       // 如果为true，则在返回next()之后进行服务，从而允许后续中间件先进行响应
  }
))
app.use(Router.routes(), Router.allowedMethods());
app.listen(3000);