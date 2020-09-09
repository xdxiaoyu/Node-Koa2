/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-09 14:44:53
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-09 18:20:16
 */
const basicAuth = require('basic-auth')
class Auth {
  constructor() {

  }

  get m() {
    return async (ctx,next) => {
      const userToken = basicAuth(ctx.req)
      if(!userToken || !userToken.name) {
        
      }
      ctx.body = token
      // token检测
      // token 开发者 传递令牌
      // HTTP 规定 身份验证机制 HttpBasicAuth
    }
  }
}

module.exports = {
  Auth
}