/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-10 18:51:01
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-10 20:14:45
 */
const util = require('util')

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
    if(result.data.errcode !== 0) {
      throw new global.errs.AuthFailed('openid获取失败'+errcode)
    } 
  }
}