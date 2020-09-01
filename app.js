const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManger = require('./core/init.js')
const catchError = require('./middlewares/exception')


const app = new Koa()
app.use(parser())
app.use(catchError)
InitManger.initCore(app)



app.listen(3000)
console.log('服务器启动...');
// 客户端兼容性 老版本 classic 新版本 music
// v1 v2 v3 支付三个版本
// api携带版本号
// 1、 路径
// 2、查询参数
// 3、header