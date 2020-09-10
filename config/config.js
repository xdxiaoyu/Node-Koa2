/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-01 11:16:28
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-10 18:56:43
 */
module.exports ={
  environment: 'dev',
  database: {
    dbName: 'xiaoyu',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456'
  },
  security: {
    // 如果这个key丢失，别人可以破解你的jwt令牌
    secertKey: 'abcdefg', 
    expiresIn: 60*60*24*30
  },
  wx: {
    appId:'',
    appSecret: '',
    loginUrl: ''
  }
}