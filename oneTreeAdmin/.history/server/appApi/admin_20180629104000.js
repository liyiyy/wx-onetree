const Router = require('koa-router')
const router = new Router()

router.post('/addAdmin', async(ctx) => {
  console.log(ctx)
  ctx.body = {
    s: ctx
  }
})

module.exports = router
