const Router = require('koa-router')
const router = new Router()

router.post('/login', async(ctx) => {
  ctx.body = {
    data: ctx.response
  }
})

router.post('/addAdmin', async(ctx) => {
  ctx.body = {
    data: ctx.response
  }
})

module.exports = router
