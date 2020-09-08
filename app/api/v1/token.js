/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-08 16:00:35
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-08 19:51:10
 */
const Router = require('koa-router')

const router = new Router({
  prefix: '/v1/token'
})

router.post('/', async (ctx) => {
  const x = ctx.request.body
  console.log(x);
})