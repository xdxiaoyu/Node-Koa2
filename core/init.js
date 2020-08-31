/*
 * @Descripttion:
 * @version:
 * @Author: dxiaoxing
 * @Date: 2020-08-31 13:59:07
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-31 14:31:18
 */
const requireDirectory = require("require-directory");
const Router = require("koa-router");

class InitManger {
  static initCore(app) {
    // 入口方法
    InitManger.app = app;
    InitManger.initLoadRouters();
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
}

module.exports = InitManger;
