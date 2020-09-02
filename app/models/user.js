/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-02 09:09:58
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-02 13:55:28
 */
const { sequelize } = require('../../core/db')

const { Sequelize, Model } = require('sequelize')

class User extends Model {

}

User.init({ // mysql 一种类型
  // 自动增加id编号 1 2 3
  id: { // 主键 关系型数据库
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  openid: {
    type: Sequelize.STRING(64),
    unique: true
  },
  // 不同小程序对应一个用户的openid不一样而unionID 唯一不变 
}, {
  sequelize,
  tableName: 'user'
})
