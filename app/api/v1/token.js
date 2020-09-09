/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-08 16:00:35
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-09 14:32:14
 */
const Router = require('koa-router')
const { LoginType } = require('../../lib/enum')
const { User } = require('../../models/user')
const { generateToken } = require('../../../core/util')

const router = new Router({
  prefix: '/v1/token'
})

router.post('/', async (ctx) => {
  const x = ctx.request.body
  console.log(x);
  let token;
  switch (x.type) {
    case LoginType.USER_EMAIL:
      token = await emailLogin(x.account,x.secret)
      break;
    case LoginType.USER_MINT_PROGRAM:
      break;
      
    default:
      throw new global.errs.ParameterException('没有相应的处理函数')
  }
  ctx.body = {
    token
  }
})

async function emailLogin(account,secret) {
  const user = await User.verifyEmailPassword(account,secret)
  return token =  generateToken(user.id, 2)
}

module.exports = router