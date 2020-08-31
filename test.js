/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-31 09:12:24
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-31 10:23:25
 */
async function f1() {
  return 'hello'
}
// async 返回一个Promise对象  --异步的终极解决方案

console.log(f1());
/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-28 14:55:44
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-31 10:11:09
 */
const Koa = require('koa') // import from 实验特性，无法直接在node当中使用

// 应用程序对象 中间件
const app = new Koa()

// 发送HTTP KOA 接受HTTP 需要中间件(其实就是函数)

// 函数


// 注册
app.use(async(ctx,next) => {
  // 上下文
  console.log(1);
  await next()
  const r = ctx.r
  console.log(r);
  // const a = await next()
  // 求值关键字 表达式 不仅仅是Promise
  // a.then(res => {
  //   console.log(res);
  // })
  // console.log(a);
  console.log(2);
})

app.use(async(ctx,next) => {
  // console.log(3);
  const axios = require('axios')
  const res = await axios.get("http://www.baidu.com")
  ctx.r = res
  next()
  // console.log(4);
  // return 'hello xiaoyu'
})

// 保证中间件按洋葱模型执行的先决条件是，每一个next前面都有增加一个async
app.listen(3000)