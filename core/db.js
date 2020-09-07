/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-01 15:24:30
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-07 17:39:07
 */
const Sequelize = require('sequelize')
const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql', // 指定数据类型
  host,
  port,
  logging: true, // 操作数据库显示原始SQL
  timezone: '+08:00',
  define: {
    // create_time update_time delete_time
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updateAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true
  }
})

// true 强制同步-删除同名数据表后同步，谨慎使用，会导致数据丢失
sequelize.sync({
  force: false
})

module.exports = {
  sequelize
}