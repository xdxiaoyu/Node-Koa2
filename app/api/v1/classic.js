/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-31 11:24:10
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-31 14:51:09
 */
const Router = require('koa-router')

const router = new Router


router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  ctx.body = { key: 'classic' }
})

module.exports = router