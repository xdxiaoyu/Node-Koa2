/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-09-02 13:57:42
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-04 09:16:19
 */
const Router = require('koa-router')

// const { RegisterValidator } = require('../../validators/validator')

const router = new Router({
  prefix: '/v1/user'
})


// 注册新增数据
router.post('/register', async (ctx) => {
  const x = ctx.request.body
  console.log(ctx.request.body);
  // 思维路径
  // 接受参数 LinValidator
  // email password password2 nickname
  // const v = new RegisterValidator().validate(ctx)
})

module.exports = router