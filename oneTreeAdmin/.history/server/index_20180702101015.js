const Koa = require('koa')
const app = new Koa()

// const mongoose = require('mongoose')

const Router = require('koa-router')
const router = new Router()

const admin = require('./appApi/admin.js')
router.use('/admin', admin.routes())

const login = require('./appApi/login.js')
router.use('/login', login.routes())

// const upload = require('./appApi/upload.js')
// router.use('/upload', upload.routes())

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

const cors = require('koa2-cors')
app.use(cors())

const { connect, initSchemas } = require('./database/init.js')

app.use(router.routes())
app.use(router.allowedMethods());
// //立即执行函数
(async() => {
  await connect()
  initSchemas()
})()

// app.use(async(ctx) => {
//   console.log('返回' + ctx)
//   console.log(ctx)
//   ctx.body = ctx.response
// })

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})
