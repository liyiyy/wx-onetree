const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init.js')

// 立即执行函数
;(async() => {
  await connect()
  initSchemas()
  const Admin = mongoose.model('Admin')
  const oneUser = new Admin({ username: 'jspang13', password: '123456' })

  oneUser.save().then(() => {
    console.log('插入成功')
  })
  const users = await User.findOne({}).exec()

  console.log('------------------')
  console.log(users)
  console.log('------------------')
})()

app.use(async(ctx) => {
  ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})
