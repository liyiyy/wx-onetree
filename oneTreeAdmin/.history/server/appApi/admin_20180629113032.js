const Router = require('koa-router')
const router = new Router()

router.post('/login', async(ctx) => {
  ctx.body = {
    data: ctx.response
  }
})

router.post('/addAdmin', async(ctx) => {
  console.log(ctx)
  ctx.body = {
    s: ctx
  }
})

module.exports = router
