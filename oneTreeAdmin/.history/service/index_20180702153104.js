const Koa = require('koa')
const app = new Koa()
// const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init.js')
const Router = require('koa-router')
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

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})
