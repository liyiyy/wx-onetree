const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/upload', async(ctx) => {
  const data = ctx.request.query
  // console.log(data)
  const Info = mongoose.model('Pic')
  var newInfo = new Info(data)
  await newInfo.save().then(async(result) => {
    // console.log(result)
    ctx.body = {
      code: 0,
      status: 0,
      message: '保存了',
      data: result
    }
  })
})

module.exports = router
