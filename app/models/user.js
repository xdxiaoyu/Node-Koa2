/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-02 09:09:58
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-11 10:36:30
 */
const bcrypt = require('bcryptjs')
const { Sequelize, Model } = require('sequelize')

const { sequelize } = require('../../core/db')


class User extends Model {
  static async verifyEmailPassword(email, plainPassword) {
    const user = await User.findOne({
      where:{
        email
      }
    })
    if(!user) {
      throw new  global.errs.NotFound('账号不存在') 
    }

    // 和原始密码对比
    const correct = bcrypt.compareSync(plainPassword, user.password)
    if(!correct) {
      throw new global.errs.AuthFailed('密码不正确')
    }
    return user
  }

  static async getUserByOpenid(openid) {
    const user = User.findOne({
      where:{
        openid
      }
    })
    return user
  }

  static async registerByOpenid(openid) {
    return await User.create({
      openid
    })
  }
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
      // 生成盐
      const salt = bcrypt.genSaltSync(10) // 位数， 成本
      // 生成hash密码
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