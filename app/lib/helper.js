/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-07 19:52:03
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-07 20:18:09
 */
function success(msg,errorCode) {
  throw new global.errs.Success(msg,errorCode)
}

module.exports = { success }