const Koa = require('koa')
const app = new Koa()
const { connect, initSchemas } = require('./database/init.js')

// 立即执行函数
;(async() => {
  await connect()
  initSchemas()
  const User = mongoose.model('User')
  const oneUser = new User({ userName: 'jspang', password: '123456' })
  oneUser.save().then(() => {
    console.log('插入成功')
  })
})()
app.use(async(ctx) => {
  ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(1122, () => {
  console.log('[Server] starting at port 1122')
})
