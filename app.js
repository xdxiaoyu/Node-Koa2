const Koa = require('koa') // import from 实验特性，无法直接在node当中使用

// 应用程序对象 中间件
const app = new Koa()

// 发送HTTP KOA 接受HTTP 需要中间件(其实就是函数)

// 函数


// 注册
app.use(async(ctx,next) => {
  // 上下文
  console.log(1);
  const a = await next()
  // 求值关键字 表达式 不仅仅是Promise
  // a.then(res => {
  //   console.log(res);
  // })
  // console.log(a);
  console.log(2);
})

app.use((ctx,next) => {
  // console.log(3);
  const axios = require('axios')
  const start = Date.now()
  const res = axios.get("http://7yue.pro")
  const end = Date.now()
  console.log(end-start);
  // console.log(4);
  // return 'hello xiaoyu'
})

app.listen(3000)