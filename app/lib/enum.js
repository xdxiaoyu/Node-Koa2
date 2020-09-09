/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-09 10:14:25
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-09 10:28:38
 */
function isThisType(val) {
  for(let key in this) {
    if(this[key] == val) {
      return true
    }
  }
  return false
}

const LoginType = {
  USER_MINT_PROGRAM:100,
  USER_EMAIL: 101,
  USER_MOBILE: 102,
  ADMIN_EMAIL: 200,
  isThisType
}

module.exports = {
  LoginType
}