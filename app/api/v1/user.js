/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-02 13:57:42
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-07 20:16:07
 */
const Router = require('koa-router')

// const { RegisterValidator } = require('../../validators/validator')
const { User } = require('../../models/user')
const { success } = require('../../lib/helper')

const router = new Router({
  prefix: '/v1/user'
})



// 注册新增数据
router.post('/register', async (ctx) => {
  const x = ctx.request.body
  console.log(ctx.request.body);
  
  const user = {
    email: ctx.request.body.email,
    password: ctx.request.body.password1,
    nickname: ctx.request.body.nickname
  }
  const r = await User.create(user)
  // 直接抛出错误提示客户端
  // throw new global.errs.Success()
  success()
})

module.exports = router