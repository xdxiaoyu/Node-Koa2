/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-09 14:44:53
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-10 18:44:18
 */
const basicAuth = require('basic-auth')
const jwt = require('jsonwebtoken')
class Auth {
  constructor(level) {
    this.level = level || 1
    Auth.USER = 8
    Auth.ADMIN = 16
    Auth.SUPER_ADMIN = 32
  }

  get m() {
    return async (ctx,next) => {
      const userToken = basicAuth(ctx.req)
      let errMsg = 'token不合法'
      if(!userToken || !userToken.name) {
        throw new global.errs.Forbbiden(errMsg)
      }
      try {
        var decode = jwt.verify(userToken.name, global.config.security.secertKey)
      } catch (error) {
        if(error.name == 'TokenExpiredError') {
          errMsg = 'token已过期'
        }
          throw new global.errs.Forbbiden(errMsg)
      }

      if(decode.scope < this.level) {
        errMsg = "权限不足"
        throw new global.errs.Forbbiden(errMsg)
      }

      // ctx.body = token
      ctx.auth = {
        uid: decode.uid,
        scope: decode.scope
      }
      await next()
    }
  }
}

module.exports = {
  Auth
}