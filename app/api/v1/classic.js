/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-31 11:24:10
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-04 09:12:49
 */
const Router = require('koa-router')

const router = new Router

// const { HttpException, ParameterException } = require('../../../core/http-exception')


router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  if (false) {
    // 动态 面向对象方式 一个类
    const error = new global.errs.ParameterException()
    throw error
  }
  ctx.body = { key: 'classic' }
  // AOP 面向切面编程
  // 监听错误
  // 输出提示一段有意义的信息
})

module.exports = router