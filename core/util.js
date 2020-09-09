/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-09 11:18:43
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-09 14:22:49
 */

const jwt = require('jsonwebtoken')


const generateToken = function (uid, scope) {
  const secertKey = global.config.security.secertKey
  const expiresIn = global.config.security.expiresIn
  // 生成令牌 接收三个参数
  // 第一个参数： Payload（载荷）jwt存放的数据
  // 第二个参数： secretOrPrivateKey 私有的钥匙，我们自己定义
  // 第三个参数： 可选的配置项
  const token = jwt.sign({
    uid,
    scope
  }, secertKey, {
    expiresIn
  })
  return token
}

module.exports = {
  generateToken
}