const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/swiperimgslist', async(ctx) => {
  const Swiperlist = mongoose.model('Swiper')
  await Swiperlist.find({ isforbid: '1' }).exec().then(async(result) => {
    ctx.body = {
      code: 0,
      status: 0,
      message: 'success',
      data: result
    }
  })
})

module.exports = router
