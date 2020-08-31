const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManger = require('./core/init.js')


const app = new Koa()
app.use(parser())
InitManger.initCore(app)



app.listen(3000)

// 客户端兼容性 老版本 classic 新版本 music
// v1 v2 v3 支付三个版本
// api携带版本号
// 1、 路径
// 2、查询参数
// 3、header