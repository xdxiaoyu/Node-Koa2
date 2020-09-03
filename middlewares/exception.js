/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-01 09:15:15
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-03 19:04:53
 */
const { HttpException } = require('../core/http-exception')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    // 成产环境
    // 开发环境
    const isHttpException = error instanceof HttpException
    const isDev = global.config.environment === 'dev'
    if(isDev && !isHttpException) {
      throw error
    }
    // error 堆栈调用信息
    // error 简化 清晰明了的信息 给前端
    // HTTP Status Code

    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} + ${ctx.path}`,
      }
      ctx.status = error.code
    } else {
      ctx.body = {
        msg: 'we made a mistake 0.0',
        error_code: 999,
        request: `${ctx.method} + ${ctx.path}`,
      }
      ctx.status = 500
    }
    // message
    // error_code 详细，开发者自己定义
    // request_url 当前请求url

    // 已知型错误，已知
    // 出处理错误，明确
    // try catch 处理错误 明确

    // 未知型错误 程序潜在错误 无意识 根本不知道她出错了
    // 连接数据库 账号 密码 输入错了
  }
}

module.exports = catchError