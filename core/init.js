/*
 * @Descripttion:
 * @version:
 * @Author: dxiaoxing
 * @Date: 2020-08-31 13:59:07
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-01 13:59:51
 */
const requireDirectory = require("require-directory");
const Router = require("koa-router");

class InitManger {
  static initCore(app) {
    // 入口方法
    InitManger.app = app;
    InitManger.initLoadRouters();
    InitManger.loadHttpException()
    InitManger.loadConfig()
  }

  static loadConfig(path = '') {
    const configPath = path || process.cwd() + '/config/config.js'
    const config = require(configPath)
    global.config = config
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, { visit: whenLoadModule });
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManger.app.use(obj.routes());
      }
    }
  }

  // 全局引入一个模块
  static loadHttpException() {
    const errors = require('./http-exception')
    global.errs = errors
  }
}

module.exports = InitManger;
