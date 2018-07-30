const Koa = require('koa')
const app = new Koa()
const { connect, initSchemas } = require('./database/init.js')(async() => {
  await connect()
  initSchemas()
})()

app.use(async(ctx) => {
  // console.log('返回' + ctx)
  // console.log(ctx)
  ctx.body = ctx.response
})

app.listen(1122, () => {
  console.log('[Server] starting at port 1122')
})
