const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {
  ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(1122, () => {
  console.log('[Server] starting at port 1122')
})
