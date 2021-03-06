
const Koa = require('koa')
const app = new Koa()

// 引入connect
const { connect, initSchema } = require('./database/init.js')

// 立即执行函数
;(async() => {
  await connect()
})()

app.use(async(ctx) => {
  ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})
