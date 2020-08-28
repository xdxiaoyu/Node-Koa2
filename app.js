const Koa = require('koa') // import from 实验特性，无法直接在node当中使用

// 应用程序对象 中间件
const app = new Koa()

// 发送HTTP KOA 接受HTTP 需要中间件(其实就是函数)

// 函数


// 注册
app.use((ctx,next) => {
  // 上下文
  console.log(1);
  next()
  console.log(2);
})

app.use((ctx,next) => {
  console.log(3);
  console.log(4);
})

app.listen(3000)