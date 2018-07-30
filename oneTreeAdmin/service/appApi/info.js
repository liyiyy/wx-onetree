const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

/*
轮播图接口：图片上传、新增、获取列表、删除
*/

// 获取轮播图的列表
router.get('/list', async(ctx) => {
  const Info = mongoose.model('Swiper')
  await Info.find().exec().then(async(result) => {
    ctx.body = {
      code: 0,
      status: 0,
      message: 'success',
      data: result
    }
  })
})

// 删除一条轮播图的数据
router.get('/del', async(ctx) => {
  const id = ctx.request.query.id
  const Swiper = mongoose.model('Swiper')
  await Swiper.findByIdAndRemove(id).exec().then(async(result) => {
    // console.log(result)
    ctx.body = {
      code: 0,
      status: 0,
      message: 'success',
      data: result
    }
  })
})

// 轮播图新增上传操作
router.post('/upload', async(ctx) => {
  const data = ctx.request.body
  const Info = mongoose.model('Pic')
  var newInfo = new Info(data)
  await newInfo.save().then(async(result) => {
    ctx.body = {
      code: 0,
      status: 0,
      message: 'success',
      data: result
    }
  })
})

router.get('/addswiper', async(ctx) => {
  const data = ctx.request.query
  // console.log(data)
  const Swiper = mongoose.model('Swiper')
  var newSwiper = new Swiper(data)
  await newSwiper.save().then(async(result) => {
    // console.log(result)
    ctx.body = {
      code: 0,
      status: 0,
      message: 'success',
      data: result
    }
  })
})

/* 通知接口：新增、获取列表、删除 */
router.get('/addInfo', async(ctx) => {
  const data = ctx.request.query
  const Info = mongoose.model('Info')
  var newInfo = new Info(data)
  await newInfo.save().then(async(result) => {
    ctx.body = {
      code: 0,
      status: 0,
      message: 'success',
      data: result
    }
  })
})

router.get('/infolist', async(ctx) => {
  const Info = mongoose.model('Info')
  await Info.find().exec().then(async(result) => {
    ctx.body = {
      code: 0,
      status: 0,
      message: 'success',
      data: result
    }
  })
})

router.get('/delOneInfo', async(ctx) => {
  const id = ctx.request.query.id
  const Swiper = mongoose.model('Info')
  await Swiper.findByIdAndRemove(id).exec().then(async(result) => {
    // console.log(result)
    ctx.body = {
      code: 0,
      status: 0,
      message: 'success',
      data: result
    }
  })
})

// Swiper forbid
router.get('/forbid', async(ctx) => {
  const id = ctx.request.query.id
  const forbid = ctx.request.query.forbid
  const num = forbid == 1 ? 0 : 1
  const Swiper = mongoose.model('Swiper')
  await Swiper.findByIdAndUpdate(id, { isforbid: num }).exec().then(async(result) => {
    ctx.body = {
      code: 0,
      status: 0,
      message: 'success',
      data: result
    }
  })
})

// Swiper forbid
router.get('/infoforbid', async(ctx) => {
  const id = ctx.request.query.id
  const forbid = ctx.request.query.forbid
  const num = forbid == 1 ? 0 : 1
  const Swiper = mongoose.model('Info')
  await Swiper.findByIdAndUpdate(id, { isforbid: num }).exec().then(async(result) => {
    ctx.body = {
      code: 0,
      status: 0,
      message: 'success',
      data: result
    }
  })
})

module.exports = router
