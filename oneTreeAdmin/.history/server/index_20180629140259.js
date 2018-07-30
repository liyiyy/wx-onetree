
const Koa = require('koa')
const Router = require('koa-router')
const router = new Router()
const app = new Koa()
const cors = require('koa2-cors')
app.use(cors())

// 引入connect
const { connect, initSchema } = require('./database/init.js')

// 新增
const admin = require('./appApi/admin.js')
router.use('/admin', admin.routes())

const login = require('./appApi/login.js')
router.use('/login', login.routes())

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
