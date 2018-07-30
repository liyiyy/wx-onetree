const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/list', async(ctx) => {
  console.log(ctx.request.body)
  ctx.body = { code: 200, message: 'success', status: 0, data: {
    name: 'admin', roles: 'admin'
  }}
})
