const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

//  index
//  wx-轮播图列表
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

//  season
// 季节，类型列表
router.get('/seasontype', async(ctx) => {

})
module.exports = router
