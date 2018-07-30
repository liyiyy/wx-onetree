const Koa = require('koa')
const app = new Koa()
// const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init.js')
const Router = require('koa-router')
const router = new Router()
const cors = require('koa2-cors')
app.use(cors())

// const serve = require('koa-static')
// app.use(serve(__dirname + '/files'))

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

const admin = require('./appApi/admin.js')
router.use('/admin', admin.routes())

const adminMg = require('./appApi/adminMg.js')
router.use('/adminMg', adminMg.routes())

const user = require('./appApi/user.js')
router.use('/user', user.routes())

const treeself = require('./appApi/treeself.js')
router.use('/treeself', treeself.routes())

const info = require('./appApi/info.js')
router.use('/info', info.routes())

const wx = require('./appApi/wxreq.js')
router.use('/wx', wx.routes())

app.use(router.routes())
app.use(router.allowedMethods())
// 立即执行函数
;(async() => {
  await connect()
  initSchemas()

  // 添加第一个用户
  // const Admin = mongoose.model('Admin')
  // const firstAdmin = new Admin({ username: 'admin', password: 'admin888' })

  // firstAdmin.save().then(() => {
  //   console.log('插入成功')
  // })
  // const users = await Admin.findOne({}).exec()

  // console.log('------------------')
  // console.log(users)
  // console.log('------------------')
})()

// app.use(async(ctx) => {
//   ctx.body = '<h1>hello Koa2</h1>'
// })

app.listen(1122, () => {
  console.log('[Server] starting at port 1122')
})
