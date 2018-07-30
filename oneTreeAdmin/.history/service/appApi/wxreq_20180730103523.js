const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/swiperimgslist', async(ctx) => {
  const Info = mongoose.model('Swiper')
  // const bid = req_query.username
  // var reg = new RegExp({ isforbid: '1' })
  // await Info.find({ isforbid: { $regex: '1' }}).exec().then(async(result) => {
  //   ctx.body = {
  //     code: 0,
  //     status: 0,
  //     message: 'success',
  //     data: result
  //   }
  // })
})

module.exports = router
