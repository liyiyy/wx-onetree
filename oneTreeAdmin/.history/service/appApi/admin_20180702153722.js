const Router = require('koa-router')
const router = new Router()
router.get('/login', async(ctx) => {
  ctx.body = '这是用户操作首页'
})
router.get('/register', async(ctx) => {
  ctx.body = '用户注册接口'
})
module.exports = router
