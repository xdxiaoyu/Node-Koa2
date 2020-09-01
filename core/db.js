/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-01 15:24:30
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-01 19:39:15
 */
const Sequelice = require('sequelize')
const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/config').database

const sequelice = new Sequelice(dbName,user,password,{
  dialect:'mysql', // 指定数据类型
  host,
  port,
  logging: true, // 操作数据库显示原始SQL
  timezone: '+08:00',
  define: {

  }
})

module.exports = {
  sequelice
}