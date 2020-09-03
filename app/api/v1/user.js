/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-02 13:57:42
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-03 18:59:58
 */
const Router = require('koa-router')

// const { RegisterValidator } = require('../../validators/validator')

const router = new Router({
  prefix: '/v1/user'
})


// 注册新增数据
router.post('/register', async (ctx) => {
  console.log(ctx);
  // 思维路径
  // 接受参数 LinValidator
  // email password password2 nickname
  // const v = new RegisterValidator().validate(ctx)
})

module.exports = router