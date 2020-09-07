/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-02 09:09:58
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-07 17:39:57
 */
const bcrypt = require('bcryptjs')
const { Sequelize, Model } = require('sequelize')

const { sequelize } = require('../../core/db')


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
  email: {
    type: Sequelize.STRING(128),
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    set(val) {
      const salt = bcrypt.genSaltSync(10) // 位数， 成本
      const psw = bcrypt.hashSync(val,salt)
      this.setDataValue('password',psw)
    }
  },
  openid: {
    type: Sequelize.STRING(64),
    unique: true
  },
  // 不同小程序对应一个用户的openid不一样而unionID 唯一不变 
}, {
  sequelize,
  tableName: 'user'
})

module.exports ={
  User
}