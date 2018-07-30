const Router = require('koa-router')
const router = new Router()
router.get('/login', async(ctx) => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body
})
router.get('/register', async(ctx) => {
  ctx.body = '用户注册接口'
})
module.exports = router
