/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-31 11:24:10
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-10 18:45:42
 */
const Router = require('koa-router')

const router = new Router({
  prefix:'/v1/classic'
})

const { Auth } = require('../../../middlewares/auth')
// const { HttpException, ParameterException } = require('../../../core/http-exception')


router.get('/latest', new Auth().m, async (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  ctx.body = ctx.auth.uid
  // AOP 面向切面编程
  // 监听错误
  // 输出提示一段有意义的信息
})

module.exports = router