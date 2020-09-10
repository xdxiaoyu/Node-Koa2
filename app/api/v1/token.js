/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-08 16:00:35
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-10 18:50:48
 */
const Router = require('koa-router')
const { LoginType } = require('../../lib/enum')
const { User } = require('../../models/user')
const { generateToken } = require('../../../core/util')
const { Auth } = require('../../../middlewares/auth')

const router = new Router({
  prefix: '/v1/token'
})

router.post('/', async (ctx) => {
  const x = ctx.request.body
  // 业务逻辑
  // 1 在API接口编写
  // 2 Model 分层

  // 业务分层 Model， Service
  

  let token;
  switch (x.type) {
    case LoginType.USER_EMAIL:
      token = await emailLogin(x.account, x.secret)
      break;
    case LoginType.USER_MINT_PROGRAM:
      break;
    case LoginType.ADMIN_EMAIL:
      break;
    default:
      throw new global.errs.ParameterException('没有相应的处理函数')
  }
  ctx.body = {
    token
  }
})

async function emailLogin(account, secret) {
  const user = await User.verifyEmailPassword(account, secret)
  return token = generateToken(user.id, Auth.USER)
}

module.exports = router