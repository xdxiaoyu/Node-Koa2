/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-28 14:55:44
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-09 10:01:17
 */
const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManger = require('./core/init.js')
const catchError = require('./middlewares/exception')

// require('./app/models/user')


const app = new Koa()
app.use(parser())
app.use(catchError)
InitManger.initCore(app)



app.listen(3000)
// 客户端兼容性 老版本 classic 新版本 music
// v1 v2 v3 支付三个版本
// api携带版本号
// 1、 路径
// 2、查询参数
// 3、header