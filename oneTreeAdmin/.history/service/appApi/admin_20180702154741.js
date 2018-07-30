const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
router.post('/login', async(ctx) => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body
})
router.post('/register', async(ctx) => {
  ctx.body = '用户注册接口'
})
module.exports = router
