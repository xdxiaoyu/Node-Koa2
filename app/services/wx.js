/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-10 18:51:01
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-11 11:08:20
 */
const util = require('util')
const axios = require('axios')
const { User }  = require('../models/user')
const { generateToken } = require('../../core/util')
const { Auth } = require('../../middlewares/auth')


class WXManager {
  static async codeToToKen() {
    // 唯一标识
    // code
    // appid appsecret
    const url = util.format(
      global.config.wx.loginUrl,
      global.config.wx.appId,
      global.config.wx.appSecret,
      code)

    const result = await axios.get(url)
    if(result.status !== 200) {
      throw new global.errs.AuthFailed('openid获取失败')
    }
    if(result.data.errcode) {
      throw new global.errs.AuthFailed('openid获取失败'+errcode)
    }

    let user = await User.getUserByOpenid(result.data.openid)
    if(!user) {
      user = await User.registerByOpenid(result.data.openid)
    }
    return generateToken(user.id, Auth.USER)
  }
}
module.exports = {
  WXManager
}