
const Koa = require('koa')
const Router = require('koa-router')
const router = new Router()
const app = new Koa()

// 引入connect
const { connect, initSchema } = require('./database/init.js')
const admin = require('./appApi/admin.js')
router.use('/admin', admin.routes())

;(async() => {
  await connect()
  initSchema()
})()

app.use(router.routes())
app.use(router.allowedMethods())

// app.use(async(ctx) => {
//   ctx.body = '<h1>hello Koa2</h1>'
// })

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})
