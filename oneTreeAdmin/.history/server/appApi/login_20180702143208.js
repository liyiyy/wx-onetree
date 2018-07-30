const Router = require('koa-router')
const mongoose = require('mongoose')
const router = new Router()

router.post('/login', async(ctx) => {

})

router.get('/info', async(ctx) => {
  ctx.body = {
    data: ctx.response
  }
})
router.post('/logout', async(ctx) => {
  ctx.body = {
    data: ctx.response
  }
})

module.exports = router
