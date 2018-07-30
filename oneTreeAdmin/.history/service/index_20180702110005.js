const Koa = require('koa')
const app = new Koa()

const { connect } = require('./database/init.js')

;async () =>{
  await connect()
}

app.use(async(ctx) => {
  ctx.body = '你好'
})

app.listen(2233, () => {
  console.log('成功')
})
