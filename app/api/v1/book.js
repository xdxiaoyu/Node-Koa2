/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-31 11:24:17
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-31 11:39:58
 */
const Router = require('koa-router')
const router = new Router
router.get('/v1/book/latest', (ctx, next) => {
  ctx.body = { key: 'book' }
})

module.exports = router